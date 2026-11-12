// Firebase Configuration and Authentication
// Fitness Tracker - Cloud Sync

// Firebase Config
const firebaseConfig = {
    apiKey: "AIzaSyCSQNjr4XGA5U_S2D4-QAAXw3bInBWJi_Y",
    authDomain: "fitness-tracker-jomy.firebaseapp.com",
    projectId: "fitness-tracker-jomy",
    storageBucket: "fitness-tracker-jomy.firebasestorage.app",
    messagingSenderId: "801596635034",
    appId: "1:801596635034:web:5b753600b3289ffad5ec23",
    measurementId: "G-MJ3W4TP5KK"
};

// Initialize Firebase with error handling
try {
    firebase.initializeApp(firebaseConfig);
} catch (error) {
    console.error('Firebase init error:', error);
}

// Initialize services
const auth = firebase.auth();
const db = firebase.firestore();

// Enable offline persistence with Safari-safe handling
try {
    db.enablePersistence({ synchronizeTabs: true })
        .catch((err) => {
            if (err.code === 'failed-precondition') {
                console.log('Persistence failed: Multiple tabs open');
            } else if (err.code === 'unimplemented') {
                console.log('Persistence not available in this browser');
            }
        });
} catch (e) {
    console.log('Persistence setup skipped');
}

// Handle redirect result for Safari/mobile/PWA (must be called early)
auth.getRedirectResult().then((result) => {
    // Clear pending flag and reset loading state
    sessionStorage.removeItem('firebase_auth_pending');
    setSignInLoading(false);
    
    if (result && result.user) {
        console.log('Redirect sign-in successful:', result.user.displayName || result.user.email);
        showToast('Signed in successfully! ☁️');
    } else if (sessionStorage.getItem('firebase_auth_pending')) {
        // We were expecting a redirect but didn't get a user
        console.log('Redirect returned but no user');
    }
}).catch((error) => {
    sessionStorage.removeItem('firebase_auth_pending');
    setSignInLoading(false);
    
    // Handle specific errors
    if (error.code === 'auth/web-storage-unsupported') {
        console.error('Web storage not supported - enable cookies');
        showToast('Please enable cookies and try again', 'error');
    } else if (error.code === 'auth/operation-not-supported-in-this-environment') {
        console.error('Auth not supported in this environment');
        showToast('Please open in browser instead of PWA for first login', 'error');
    } else if (error.code !== 'auth/no-auth-event') {
        console.log('Redirect error:', error.code, error.message);
    }
});

// Current user state
let currentUser = null;
let isOnline = navigator.onLine;

// Listen for online/offline status
window.addEventListener('online', () => {
    isOnline = true;
    updateConnectionStatus();
    syncDataToCloud();
});

window.addEventListener('offline', () => {
    isOnline = false;
    updateConnectionStatus();
});

// Update connection status UI
function updateConnectionStatus() {
    const statusEl = document.getElementById('connection-status');
    if (statusEl) {
        if (isOnline) {
            statusEl.innerHTML = '<span class="status-dot online"></span> Online';
            statusEl.className = 'connection-status online';
        } else {
            statusEl.innerHTML = '<span class="status-dot offline"></span> Offline';
            statusEl.className = 'connection-status offline';
        }
    }
}

// Auth state observer
auth.onAuthStateChanged(async (user) => {
    currentUser = user;
    
    if (user) {
        console.log('User signed in:', user.displayName || user.uid);
        // Hide login screen, show app
        hideLoginScreen();
        updateUserUI();
        // Load data from cloud
        await loadDataFromCloud();
        // Re-render the app
        if (typeof renderContent === 'function') {
            renderContent();
            updateHeaderStats();
        }
    } else {
        console.log('User not signed in');
        // Show login screen, hide app
        showLoginScreen();
    }
});

// Update user UI
function updateUserUI() {
    const userSection = document.getElementById('user-section');
    const loginBtn = document.getElementById('login-btn');
    const userInfo = document.getElementById('user-info');
    
    if (!userSection) return;
    
    if (currentUser) {
        // User is signed in
        loginBtn.style.display = 'none';
        userInfo.style.display = 'flex';
        
        const photoURL = currentUser.photoURL || 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="50" fill="%23007AFF"/><text x="50" y="60" text-anchor="middle" fill="white" font-size="40">' + (currentUser.displayName?.[0] || '?') + '</text></svg>';
        const displayName = currentUser.displayName || 'Guest User';
        
        userInfo.innerHTML = `
            <img src="${photoURL}" alt="Profile" class="user-avatar" onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><circle cx=%2250%22 cy=%2250%22 r=%2250%22 fill=%22%23007AFF%22/><text x=%2250%22 y=%2260%22 text-anchor=%22middle%22 fill=%22white%22 font-size=%2240%22>?</text></svg>'">
            <div class="user-details">
                <span class="user-name">${displayName}</span>
                <span class="user-status">☁️ Synced</span>
            </div>
            <button class="logout-btn" onclick="signOutUser()" title="Sign Out">
                <span>↪</span>
            </button>
        `;
    } else {
        // User is signed out
        loginBtn.style.display = 'flex';
        userInfo.style.display = 'none';
        userInfo.innerHTML = '';
    }
    
    updateConnectionStatus();
}

// Check if running as installed PWA (standalone mode)
function isRunningAsPWA() {
    return (window.matchMedia('(display-mode: standalone)').matches) ||
           (window.navigator.standalone === true) || // iOS Safari
           document.referrer.includes('android-app://');
}

// Show/hide loading state on sign-in button
function setSignInLoading(loading) {
    const btn = document.getElementById('google-signin-btn');
    const text = document.getElementById('signin-text');
    if (btn && text) {
        if (loading) {
            btn.disabled = true;
            btn.style.opacity = '0.7';
            text.textContent = 'Signing in...';
        } else {
            btn.disabled = false;
            btn.style.opacity = '1';
            text.textContent = 'Sign in with Google';
        }
    }
}

// Sign in with Google
async function signInWithGoogle() {
    try {
        setSignInLoading(true);
        
        const provider = new firebase.auth.GoogleAuthProvider();
        provider.setCustomParameters({ prompt: 'select_account' });
        
        // Check environment
        const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
        const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
        const isPWA = isRunningAsPWA();
        
        console.log('Auth environment:', { isSafari, isIOS, isPWA });
        
        // For PWA standalone mode: Show modal with options
        // Google OAuth redirects don't work properly in standalone PWA mode
        if (isPWA) {
            console.log('PWA detected - showing login options modal');
            setSignInLoading(false);
            showPWALoginModal();
            return;
        }
        
        // Safari/iOS in browser (not PWA) - use redirect
        if (isSafari || isIOS) {
            console.log('Using redirect sign-in (Safari/iOS browser)');
            sessionStorage.setItem('firebase_auth_pending', 'true');
            await auth.signInWithRedirect(provider);
            return;
        }
        
        // Desktop browsers - try popup first
        try {
            console.log('Using popup sign-in (Desktop)');
            const result = await auth.signInWithPopup(provider);
            setSignInLoading(false);
            if (result.user) {
                showToast('Signed in successfully! ☁️');
            }
        } catch (popupError) {
            console.log('Popup failed:', popupError.code);
            if (popupError.code === 'auth/popup-blocked' || 
                popupError.code === 'auth/popup-closed-by-user' ||
                popupError.code === 'auth/cancelled-popup-request') {
                // Fall back to redirect
                console.log('Falling back to redirect');
                sessionStorage.setItem('firebase_auth_pending', 'true');
                await auth.signInWithRedirect(provider);
            } else {
                throw popupError;
            }
        }
    } catch (error) {
        console.error('Sign in error:', error);
        setSignInLoading(false);
        sessionStorage.removeItem('firebase_auth_pending');
        if (error.code !== 'auth/redirect-cancelled-by-user') {
            showToast('Sign in failed. Try again.', 'error');
        }
    }
}

// Show PWA login options modal
function showPWALoginModal() {
    // Create modal overlay
    const modalOverlay = document.createElement('div');
    modalOverlay.className = 'pwa-login-modal-overlay';
    modalOverlay.innerHTML = `
        <div class="pwa-login-modal">
            <div class="pwa-login-header">
                <span style="font-size: 32px;">📱</span>
                <h3>App Login</h3>
            </div>
            <div class="pwa-login-body">
                <p class="pwa-login-note">
                    Google sign-in doesn't work directly in installed apps. 
                    Choose an option below:
                </p>
                
                <button class="pwa-login-btn guest" onclick="closePWAModal(); signInAnonymously();">
                    <span class="btn-icon">👤</span>
                    <div class="btn-text">
                        <strong>Continue as Guest</strong>
                        <small>Data syncs to cloud, works instantly</small>
                    </div>
                </button>
                
                <div class="pwa-login-divider">
                    <span>or for Google account</span>
                </div>
                
                <button class="pwa-login-btn browser" onclick="openInBrowser();">
                    <span class="btn-icon">🌐</span>
                    <div class="btn-text">
                        <strong>Open in Browser</strong>
                        <small>Login there, then reopen this app</small>
                    </div>
                </button>
                
                <p class="pwa-login-hint">
                    💡 After logging in via browser, your login will automatically 
                    sync to this app next time you open it.
                </p>
            </div>
            <button class="pwa-login-close" onclick="closePWAModal();">Cancel</button>
        </div>
    `;
    
    document.body.appendChild(modalOverlay);
    
    // Animate in
    requestAnimationFrame(() => {
        modalOverlay.classList.add('active');
    });
}

// Close PWA login modal
function closePWAModal() {
    const modal = document.querySelector('.pwa-login-modal-overlay');
    if (modal) {
        modal.classList.remove('active');
        setTimeout(() => modal.remove(), 300);
    }
}

// Open app in browser for login
function openInBrowser() {
    closePWAModal();
    
    // Copy URL to clipboard for easy access
    const url = 'https://jomygeo.github.io/fitness-tracker/';
    
    // Try to open in browser - different methods for different platforms
    // Using location.href with a special URL scheme to force browser
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    
    if (isIOS) {
        // iOS: Show instructions since we can't force Safari
        showToast('Opening in Safari...', 'info');
        // This opens in Safari on iOS
        window.location.href = url;
    } else {
        // Android: intent URL to open in Chrome/browser
        const intentUrl = `intent://${url.replace('https://', '')}#Intent;scheme=https;action=android.intent.action.VIEW;end`;
        
        // Try intent first, fall back to regular URL
        try {
            window.location.href = intentUrl;
        } catch (e) {
            window.location.href = url;
        }
    }
}

// Sign in anonymously (guest mode)
async function signInAnonymously() {
    try {
        await auth.signInAnonymously();
        showToast('Signed in as Guest ☁️');
    } catch (error) {
        console.error('Anonymous sign in error:', error);
        showToast('Guest sign in failed', 'error');
    }
}

// Sign out
async function signOutUser() {
    if (confirm('Sign out? You can sign back in anytime.')) {
        try {
            await auth.signOut();
            showToast('Signed out');
        } catch (error) {
            console.error('Sign out error:', error);
        }
    }
}

// Show login screen (mandatory)
function showLoginScreen() {
    const loginScreen = document.getElementById('login-screen');
    const appContainer = document.querySelector('.container');
    const navContainer = document.querySelector('.nav-container');
    
    if (loginScreen) loginScreen.style.display = 'flex';
    if (appContainer) appContainer.style.display = 'none';
    if (navContainer) navContainer.style.display = 'none';
}

// Hide login screen, show app
function hideLoginScreen() {
    const loginScreen = document.getElementById('login-screen');
    const appContainer = document.querySelector('.container');
    const navContainer = document.querySelector('.nav-container');
    
    if (loginScreen) loginScreen.style.display = 'none';
    if (appContainer) appContainer.style.display = 'block';
    if (navContainer) navContainer.style.display = 'block';
}

// Load data from Firestore
async function loadDataFromCloud() {
    if (!currentUser) return;
    
    try {
        const docRef = db.collection('users').doc(currentUser.uid);
        const doc = await docRef.get();
        
        if (doc.exists) {
            const cloudData = doc.data().workoutData || {};
            
            // Cloud is the source of truth - use cloud data directly
            // This ensures clearing from one device clears everywhere
            workoutData = cloudData;
            
            // Save cloud data to local storage
            localStorage.setItem('fitnessTrackerData', JSON.stringify(workoutData));
            
            console.log('Data loaded from cloud:', Object.keys(workoutData).length, 'dates');
        } else {
            // No cloud data exists yet - check local and upload if exists
            const localData = JSON.parse(localStorage.getItem('fitnessTrackerData') || '{}');
            if (Object.keys(localData).length > 0) {
                workoutData = localData;
                await syncDataToCloud();
            } else {
                workoutData = {};
            }
        }
    } catch (error) {
        console.error('Error loading from cloud:', error);
        // Fall back to local data only on error
        loadData();
    }
}

// Merge workout data (cloud priority, but keep local-only dates)
function mergeWorkoutData(localData, cloudData) {
    const merged = { ...localData };
    
    // Cloud data overwrites for same dates
    Object.keys(cloudData).forEach(date => {
        merged[date] = cloudData[date];
    });
    
    return merged;
}

// Sync data to Firestore
async function syncDataToCloud() {
    if (!currentUser || !isOnline) return;
    
    try {
        const docRef = db.collection('users').doc(currentUser.uid);
        await docRef.set({
            workoutData: workoutData,
            lastUpdated: firebase.firestore.FieldValue.serverTimestamp(),
            userInfo: {
                displayName: currentUser.displayName,
                email: currentUser.email,
                photoURL: currentUser.photoURL
            }
        }, { merge: true });
        
        console.log('Data synced to cloud');
    } catch (error) {
        console.error('Error syncing to cloud:', error);
    }
}

// Override saveData to also sync to cloud
const originalSaveData = typeof saveData === 'function' ? saveData : null;

function saveDataWithSync() {
    // Save to localStorage immediately
    localStorage.setItem('fitnessTrackerData', JSON.stringify(workoutData));
    updateHeaderStats();
    
    // Sync to cloud immediately (no delay)
    if (currentUser) {
        syncDataToCloud();
    }
}

// Show toast notification
function showToast(message, type = 'success') {
    // Remove existing toast
    const existingToast = document.querySelector('.toast');
    if (existingToast) existingToast.remove();
    
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;
    document.body.appendChild(toast);
    
    // Animate in
    setTimeout(() => toast.classList.add('show'), 10);
    
    // Remove after 3 seconds
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// Show login modal
function showLoginModal() {
    const modal = document.getElementById('video-modal');
    
    modal.innerHTML = `
        <div class="modal-content" style="max-width: 340px;">
            <div class="modal-handle"></div>
            <div class="modal-header">
                <h3 class="modal-title">☁️ Sign In</h3>
                <button class="modal-close" onclick="closeVideo()">✕</button>
            </div>
            <div class="modal-body" style="padding: 24px; text-align: center;">
                <div style="font-size: 48px; margin-bottom: 16px;">🏋️</div>
                <h3 style="margin-bottom: 8px;">Sync Your Workouts</h3>
                <p style="color: var(--text-secondary); font-size: 14px; margin-bottom: 24px;">
                    Sign in to backup your data and access it from any device
                </p>
                
                <button onclick="signInWithGoogle(); closeVideo();" class="google-signin-btn">
                    <svg width="18" height="18" viewBox="0 0 18 18" style="margin-right: 10px;">
                        <path fill="#4285F4" d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.874 2.684-6.615z"/>
                        <path fill="#34A853" d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332C2.438 15.983 5.482 18 9 18z"/>
                        <path fill="#FBBC05" d="M3.964 10.71c-.18-.54-.282-1.117-.282-1.71s.102-1.17.282-1.71V4.958H.957C.347 6.173 0 7.548 0 9s.348 2.827.957 4.042l3.007-2.332z"/>
                        <path fill="#EA4335" d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0 5.482 0 2.438 2.017.957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z"/>
                    </svg>
                    Sign in with Google
                </button>
                
                <div style="margin: 20px 0; color: var(--text-tertiary); font-size: 12px;">or</div>
                
                <button onclick="signInAnonymously(); closeVideo();" class="guest-signin-btn">
                    Continue as Guest
                </button>
                
                <p style="color: var(--text-tertiary); font-size: 11px; margin-top: 20px;">
                    Guest data syncs to cloud but can't be recovered if you sign out
                </p>
            </div>
        </div>
    `;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Replace saveData function
window.saveData = saveDataWithSync;

// Clear data from Firebase cloud
async function clearCloudData() {
    if (!currentUser) return;
    
    try {
        const docRef = db.collection('users').doc(currentUser.uid);
        await docRef.update({
            workoutData: {},
            lastCleared: firebase.firestore.FieldValue.serverTimestamp()
        });
        console.log('Cloud data cleared');
    } catch (error) {
        console.error('Error clearing cloud data:', error);
        // If document doesn't exist yet, that's fine
        if (error.code !== 'not-found') {
            throw error;
        }
    }
}

// Make clearCloudData available globally
window.clearCloudData = clearCloudData;
