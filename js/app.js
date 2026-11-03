// App State
let currentDay = 'day1';
let currentWeek = 'week1';
let workoutData = {};

// Goal labels for badges
const goalLabels = {
    'belly-fat': '🔥 Belly Fat',
    'chest-fat': '💪 Chest',
    'lower-back': '🩹 Lower Back',
    'posture': '🧍 Posture',
    'neck-hump': '🦒 Neck Hump',
    'bat-speed': '🏏 Bat Speed'
};

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
    loadData();
    renderNavigation();
    renderContent();
    updateHeaderStats();
    highlightToday();
    
    // Add touch feedback
    document.addEventListener('touchstart', () => {}, { passive: true });
});

// Load data from localStorage
function loadData() {
    const saved = localStorage.getItem('fitnessTrackerData');
    if (saved) {
        workoutData = JSON.parse(saved);
    }
}

// Save data to localStorage
function saveData() {
    localStorage.setItem('fitnessTrackerData', JSON.stringify(workoutData));
    updateHeaderStats();
}

// Get today's key
function getTodayKey() {
    const today = new Date();
    return today.toISOString().split('T')[0];
}

// Highlight today's tab
function highlightToday() {
    const dayOfWeek = new Date().getDay();
    const dayMap = { 1: 'day1', 2: 'day2', 3: 'day3', 4: 'day4', 5: 'day5', 6: 'day6', 0: 'day7' };
    const todayDay = dayMap[dayOfWeek];
    
    const tab = document.querySelector(`.nav-tab[data-day="${todayDay}"]`);
    if (tab) {
        const dot = document.createElement('span');
        dot.className = 'today-dot';
        tab.style.position = 'relative';
        tab.appendChild(dot);
    }
}

// Render Navigation
function renderNavigation() {
    const navContainer = document.getElementById('nav-tabs');
    const days = [
        { id: 'warmup', label: 'Warm', icon: '🔥' },
        { id: 'day1', label: 'Day 1', icon: '💪' },
        { id: 'day2', label: 'Day 2', icon: '🏋️' },
        { id: 'day3', label: 'Day 3', icon: '🦵' },
        { id: 'day4', label: 'Day 4', icon: '🎯' },
        { id: 'day5', label: 'Day 5', icon: '🦿' },
        { id: 'day6', label: 'Day 6', icon: '⚡' },
        { id: 'day7', label: 'Rest', icon: '😴' },
        { id: 'diet', label: 'Diet', icon: '🍽️' },
        { id: 'progress', label: 'Stats', icon: '📊' }
    ];
    
    navContainer.innerHTML = days.map(day => `
        <button class="nav-tab ${day.id === currentDay ? 'active' : ''}" 
                data-day="${day.id}" onclick="switchDay('${day.id}')">
            <span class="icon">${day.icon}</span>
            <span>${day.label}</span>
        </button>
    `).join('');
}

// Switch Day
function switchDay(day) {
    currentDay = day;
    document.querySelectorAll('.nav-tab').forEach(tab => {
        tab.classList.remove('active');
        if (tab.dataset.day === day) tab.classList.add('active');
    });
    renderContent();
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Switch Week
function switchWeek(week) {
    currentWeek = week;
    document.querySelectorAll('.week-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.week === week) btn.classList.add('active');
    });
    renderContent();
}

// Update Header Stats
function updateHeaderStats() {
    const stats = calculateStats();
    const container = document.getElementById('header-stats');
    if (container) {
        container.innerHTML = `
            <div class="stat-item">
                <div class="stat-value">${stats.totalWorkouts}</div>
                <div class="stat-label">Workouts</div>
            </div>
            <div class="stat-item">
                <div class="stat-value">${stats.totalExercises}</div>
                <div class="stat-label">Exercises</div>
            </div>
            <div class="stat-item">
                <div class="stat-value">${stats.currentStreak}🔥</div>
                <div class="stat-label">Streak</div>
            </div>
        `;
    }
}

// Render Content
function renderContent() {
    const container = document.getElementById('content');
    
    if (currentDay === 'warmup') {
        renderWarmup(container);
    } else if (currentDay === 'day7') {
        renderRestDay(container);
    } else if (currentDay === 'diet') {
        renderDiet(container);
    } else if (currentDay === 'progress') {
        renderProgress(container);
    } else {
        renderWorkoutDay(container);
    }
}

// Render Warm-up
function renderWarmup(container) {
    const warmup = exerciseData.warmup;
    
    container.innerHTML = `
        <div class="section active">
            <div class="section-header">
                <div class="section-icon" style="background: linear-gradient(135deg, #FF9500, #FF3B30);">🔥</div>
                <div>
                    <h2 class="section-title">Warm-up</h2>
                    <p class="section-subtitle">8-10 minutes • Do before every workout</p>
                </div>
            </div>
            
            ${warmup.map((ex, i) => `
                <div class="warmup-card">
                    <div class="warmup-number">${i + 1}</div>
                    <div class="warmup-info">
                        <div class="warmup-name">${ex.name}</div>
                        <div class="warmup-duration">${ex.duration}</div>
                        ${ex.goal ? `<span class="goal-badge ${ex.goal}" style="margin-top: 6px; font-size: 10px;">${goalLabels[ex.goal]}</span>` : ''}
                    </div>
                    <button class="warmup-btn" onclick="openVideo('${ex.name}', '${ex.video}', ${JSON.stringify(ex.muscles).replace(/"/g, '&quot;')}, '${ex.gif || ''}')">▶</button>
                </div>
            `).join('')}
            
            <div class="note-box">
                <span class="icon">⚠️</span>
                <span>Chin tucks help fix neck hump - do them EVERY day!</span>
            </div>
        </div>
    `;
}

// Render Workout Day
function renderWorkoutDay(container) {
    const dayData = exerciseData[currentDay];
    const exercises = dayData[currentWeek];
    const cooldown = dayData.cooldown;
    const todayKey = getTodayKey();
    const dayProgress = workoutData[todayKey]?.[currentDay] || {};
    
    const completedCount = Object.values(dayProgress).filter(ex => ex?.completed).length;
    const totalCount = exercises.length;
    const progressPercent = Math.round((completedCount / totalCount) * 100);
    const circumference = 2 * Math.PI * 42;
    const dashOffset = circumference - (progressPercent / 100) * circumference;
    
    // Day icons and colors
    const dayStyles = {
        day1: { icon: '💪', color: '#FF3B30', gradient: 'linear-gradient(135deg, #FF3B30, #FF2D55)' },
        day2: { icon: '🏋️', color: '#007AFF', gradient: 'linear-gradient(135deg, #007AFF, #5AC8FA)' },
        day3: { icon: '🦵', color: '#34C759', gradient: 'linear-gradient(135deg, #34C759, #30D158)' },
        day4: { icon: '🎯', color: '#FF9500', gradient: 'linear-gradient(135deg, #FF9500, #FFCC00)' },
        day5: { icon: '🦿', color: '#AF52DE', gradient: 'linear-gradient(135deg, #AF52DE, #BF5AF2)' },
        day6: { icon: '⚡', color: '#5AC8FA', gradient: 'linear-gradient(135deg, #5AC8FA, #007AFF)' }
    };
    
    const style = dayStyles[currentDay];
    
    container.innerHTML = `
        <div class="section active">
            <div class="section-header">
                <div class="section-icon" style="background: ${style.gradient};">${style.icon}</div>
                <div>
                    <h2 class="section-title">${dayData.name}</h2>
                    <p class="section-subtitle">${dayData.focus}</p>
                </div>
            </div>
            
            <div class="week-toggle">
                <button class="week-btn ${currentWeek === 'week1' ? 'active' : ''}" data-week="week1" onclick="switchWeek('week1')">Week 1 & 3</button>
                <button class="week-btn ${currentWeek === 'week2' ? 'active' : ''}" data-week="week2" onclick="switchWeek('week2')">Week 2 & 4</button>
            </div>
            
            <div class="progress-ring-container">
                <div class="progress-ring">
                    <svg width="100" height="100">
                        <defs>
                            <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stop-color="${style.color}" />
                                <stop offset="100%" stop-color="#5AC8FA" />
                            </linearGradient>
                        </defs>
                        <circle class="progress-ring-bg" cx="50" cy="50" r="42"></circle>
                        <circle class="progress-ring-fill" cx="50" cy="50" r="42" 
                                stroke-dasharray="${circumference}" 
                                stroke-dashoffset="${dashOffset}"></circle>
                    </svg>
                    <div class="progress-ring-text">
                        <div class="progress-percent">${progressPercent}%</div>
                        <div class="progress-label">Done</div>
                    </div>
                </div>
                <div class="progress-info">
                    <h3>${completedCount}/${totalCount} Exercises</h3>
                    <p>Keep pushing! You're doing great.</p>
                </div>
            </div>
            
            ${exercises.map((ex, index) => {
                const exKey = `${currentWeek}_${index}`;
                const exData = dayProgress[exKey] || {};
                const isCompleted = exData.completed;
                
                return `
                <div class="exercise-card ${isCompleted ? 'completed' : ''}" id="exercise-${exKey}">
                    <span class="exercise-number">${index + 1}</span>
                    <h3 class="exercise-name">${ex.name}</h3>
                    
                    <div class="exercise-meta">
                        <div class="meta-item">
                            <span class="icon">🔄</span>
                            <span>${ex.sets}</span>
                        </div>
                        <div class="meta-item">
                            <span class="icon">⏱️</span>
                            <span>Rest: ${ex.rest}</span>
                        </div>
                    </div>
                    
                    ${ex.goal ? `<div class="goal-badge ${ex.goal}">${goalLabels[ex.goal]}</div>` : ''}
                    
                    <div class="muscle-tags">
                        ${ex.muscles.primary.map(m => `<span class="muscle-tag primary">${m}</span>`).join('')}
                        ${ex.muscles.secondary.map(m => `<span class="muscle-tag secondary">${m}</span>`).join('')}
                    </div>
                    
                    <p class="exercise-why">💡 ${ex.why}</p>
                    
                    <button class="video-btn" onclick="openVideo('${ex.name}', '${ex.video}', ${JSON.stringify(ex.muscles).replace(/"/g, '&quot;')}, '${ex.gif || ''}')">
                        <span class="icon">▶️</span>
                        Watch Demo
                    </button>
                    
                    <div class="tracking-section">
                        <div class="tracking-grid">
                            <div class="tracking-input">
                                <label>Sets</label>
                                <input type="number" inputmode="numeric" value="${exData.sets || ''}" 
                                       onchange="updateExercise('${exKey}', 'sets', this.value)" min="0" max="10">
                            </div>
                            <div class="tracking-input">
                                <label>Reps</label>
                                <input type="number" inputmode="numeric" value="${exData.reps || ''}" 
                                       onchange="updateExercise('${exKey}', 'reps', this.value)" min="0" max="50">
                            </div>
                            <div class="tracking-input">
                                <label>Weight</label>
                                <input type="number" inputmode="decimal" value="${exData.weight || ''}" 
                                       onchange="updateExercise('${exKey}', 'weight', this.value)" min="0" max="500" placeholder="kg">
                            </div>
                        </div>
                        <button class="complete-btn ${isCompleted ? 'completed' : ''}" onclick="toggleComplete('${exKey}')">
                            ${isCompleted ? '✓ Completed' : 'Mark as Done'}
                        </button>
                    </div>
                </div>
                `;
            }).join('')}
            
            <h3 class="subsection-title"><span class="icon">🧘</span> Cool-down (5-6 mins)</h3>
            
            ${cooldown.map((ex, i) => `
                <div class="warmup-card">
                    <div class="warmup-number">${i + 1}</div>
                    <div class="warmup-info">
                        <div class="warmup-name">${ex.name}</div>
                        <div class="warmup-duration">${ex.duration}</div>
                        ${ex.goal ? `<span class="goal-badge ${ex.goal}" style="margin-top: 6px; font-size: 10px;">${goalLabels[ex.goal]}</span>` : ''}
                    </div>
                    <button class="warmup-btn" onclick="openVideo('${ex.name}', '${ex.video}', ${JSON.stringify(ex.muscles).replace(/"/g, '&quot;')}, '${ex.gif || ''}')">▶</button>
                </div>
            `).join('')}
        </div>
    `;
}

// Render Rest Day
function renderRestDay(container) {
    const restData = exerciseData.day7;
    
    container.innerHTML = `
        <div class="section active">
            <div class="rest-content">
                <div class="rest-icon">😴</div>
                <h2 class="rest-title">Rest Day</h2>
                <p class="rest-subtitle">${restData.focus}</p>
                
                <div class="rest-tips">
                    ${restData.tips.map(tip => `
                        <div class="rest-tip">
                            <span class="icon">✅</span>
                            <span>${tip}</span>
                        </div>
                    `).join('')}
                </div>
                
                <div style="margin-top: 24px; background: linear-gradient(135deg, rgba(175, 82, 222, 0.2), rgba(191, 90, 242, 0.1)); border: 1px solid rgba(175, 82, 222, 0.3); border-radius: 20px; padding: 20px; text-align: left;">
                    <h4 style="color: #BF5AF2; margin-bottom: 12px;">⚠️ Don't Forget!</h4>
                    <p style="font-size: 14px; color: var(--text-secondary); margin-bottom: 16px;">Do Chin Tucks (3x15) morning AND night - even on rest day!</p>
                    <button class="video-btn" style="background: linear-gradient(135deg, #AF52DE, #BF5AF2);" onclick="openVideo('Chin Tucks', 'wQylqaCl8Zo', ['Neck', 'Upper Back'])">
                        <span class="icon">▶️</span>
                        Watch Chin Tucks
                    </button>
                </div>
            </div>
        </div>
    `;
}

// Render Diet
function renderDiet(container) {
    const mealIcons = {
        breakfast: { icon: '🌅', color: 'linear-gradient(135deg, #FF9500, #FFCC00)' },
        midMorning: { icon: '☀️', color: 'linear-gradient(135deg, #FFCC00, #FF9500)' },
        lunch: { icon: '🍽️', color: 'linear-gradient(135deg, #34C759, #30D158)' },
        preWorkout: { icon: '⚡', color: 'linear-gradient(135deg, #007AFF, #5AC8FA)' },
        postWorkout: { icon: '💪', color: 'linear-gradient(135deg, #FF3B30, #FF2D55)' },
        dinner: { icon: '🌙', color: 'linear-gradient(135deg, #AF52DE, #5856D6)' }
    };
    
    const mealNames = {
        breakfast: 'Breakfast',
        midMorning: 'Mid-Morning',
        lunch: 'Lunch',
        preWorkout: 'Pre-Workout',
        postWorkout: 'Post-Workout',
        dinner: 'Dinner'
    };
    
    container.innerHTML = `
        <div class="section active">
            <div class="section-header">
                <div class="section-icon" style="background: linear-gradient(135deg, #34C759, #30D158);">🍽️</div>
                <div>
                    <h2 class="section-title">Diet Plan</h2>
                    <p class="section-subtitle">Your daily nutrition guide</p>
                </div>
            </div>
            
            <div class="stats-grid" style="margin-bottom: 24px;">
                <div class="stat-card">
                    <div class="stat-card-value blue">300-500</div>
                    <div class="stat-card-label">Calorie Deficit</div>
                </div>
                <div class="stat-card">
                    <div class="stat-card-value green">1.6-2g/kg</div>
                    <div class="stat-card-label">Protein Target</div>
                </div>
                <div class="stat-card">
                    <div class="stat-card-value orange">3-4L</div>
                    <div class="stat-card-label">Water Daily</div>
                </div>
                <div class="stat-card">
                    <div class="stat-card-value blue">7-8hr</div>
                    <div class="stat-card-label">Sleep</div>
                </div>
            </div>
            
            ${Object.entries(dietData).map(([key, meal]) => `
                <div class="meal-card">
                    <div class="meal-header">
                        <div class="meal-icon" style="background: ${mealIcons[key].color};">${mealIcons[key].icon}</div>
                        <div>
                            <div class="meal-time">${meal.time}</div>
                            <div class="meal-title">${mealNames[key]}</div>
                        </div>
                    </div>
                    <ul class="meal-options">
                        ${meal.options.map(opt => `
                            <li class="meal-option">
                                <span>${opt.name}</span>
                                ${opt.protein !== '-' ? `<span class="protein-badge">${opt.protein}</span>` : ''}
                            </li>
                        `).join('')}
                    </ul>
                </div>
            `).join('')}
            
            <div style="margin-top: 24px; background: rgba(255, 214, 10, 0.1); border: 1px solid rgba(255, 214, 10, 0.3); border-radius: 20px; padding: 20px;">
                <h4 style="color: #FFD60A; margin-bottom: 16px;">🥜 Daily Seeds & Nuts</h4>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
                    <div style="background: var(--bg-tertiary); padding: 12px; border-radius: 12px;">
                        <div style="font-weight: 600; margin-bottom: 4px;">Pumpkin Seeds</div>
                        <div style="font-size: 12px; color: var(--text-secondary);">1 tbsp • Morning</div>
                    </div>
                    <div style="background: var(--bg-tertiary); padding: 12px; border-radius: 12px;">
                        <div style="font-weight: 600; margin-bottom: 4px;">Flaxseeds</div>
                        <div style="font-size: 12px; color: var(--text-secondary);">1 tbsp • Morning</div>
                    </div>
                    <div style="background: var(--bg-tertiary); padding: 12px; border-radius: 12px;">
                        <div style="font-weight: 600; margin-bottom: 4px;">Almonds</div>
                        <div style="font-size: 12px; color: var(--text-secondary);">8-10 • Breakfast</div>
                    </div>
                    <div style="background: var(--bg-tertiary); padding: 12px; border-radius: 12px;">
                        <div style="font-weight: 600; margin-bottom: 4px;">Walnuts</div>
                        <div style="font-size: 12px; color: var(--text-secondary);">4-5 halves • Mid-morning</div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Render Progress
function renderProgress(container) {
    const stats = calculateStats();
    const history = getWorkoutHistory();
    
    container.innerHTML = `
        <div class="section active">
            <div class="section-header">
                <div class="section-icon" style="background: linear-gradient(135deg, #007AFF, #5AC8FA);">📊</div>
                <div>
                    <h2 class="section-title">Your Progress</h2>
                    <p class="section-subtitle">Track your fitness journey</p>
                </div>
            </div>
            
            <div class="stats-grid">
                <div class="stat-card">
                    <div class="stat-card-value blue">${stats.totalWorkouts}</div>
                    <div class="stat-card-label">Total Workouts</div>
                </div>
                <div class="stat-card">
                    <div class="stat-card-value green">${stats.totalExercises}</div>
                    <div class="stat-card-label">Exercises Done</div>
                </div>
                <div class="stat-card" style="grid-column: span 2;">
                    <div class="stat-card-value orange">${stats.currentStreak} 🔥</div>
                    <div class="stat-card-label">Day Streak</div>
                </div>
            </div>
            
            <div class="history-section">
                <div class="history-header">Recent Activity</div>
                ${history.length > 0 ? history.map(item => `
                    <div class="history-item">
                        <div>
                            <div class="history-date">${formatDate(item.date)}</div>
                            <div class="history-day">${item.day}</div>
                        </div>
                        <div class="history-count">${item.exerciseCount} exercises</div>
                    </div>
                `).join('') : `
                    <div class="empty-state">
                        <div class="icon">🏋️</div>
                        <p>No workouts recorded yet.<br>Start your first workout!</p>
                    </div>
                `}
            </div>
            
            <button class="clear-btn" onclick="clearAllData()">🗑️ Clear All Data</button>
        </div>
    `;
}

// Update Exercise
function updateExercise(exKey, field, value) {
    const todayKey = getTodayKey();
    
    if (!workoutData[todayKey]) workoutData[todayKey] = {};
    if (!workoutData[todayKey][currentDay]) workoutData[todayKey][currentDay] = {};
    if (!workoutData[todayKey][currentDay][exKey]) workoutData[todayKey][currentDay][exKey] = {};
    
    workoutData[todayKey][currentDay][exKey][field] = value;
    saveData();
}

// Toggle Complete
function toggleComplete(exKey) {
    const todayKey = getTodayKey();
    
    if (!workoutData[todayKey]) workoutData[todayKey] = {};
    if (!workoutData[todayKey][currentDay]) workoutData[todayKey][currentDay] = {};
    if (!workoutData[todayKey][currentDay][exKey]) workoutData[todayKey][currentDay][exKey] = {};
    
    const isCompleted = !workoutData[todayKey][currentDay][exKey].completed;
    workoutData[todayKey][currentDay][exKey].completed = isCompleted;
    
    // Haptic feedback simulation
    if (navigator.vibrate && isCompleted) {
        navigator.vibrate(10);
    }
    
    saveData();
    renderContent();
}

// Open Video Modal
function openVideo(name, videoId, muscles, gifUrl) {
    const modal = document.getElementById('video-modal');
    const musclesData = typeof muscles === 'string' ? JSON.parse(muscles.replace(/&quot;/g, '"')) : muscles;
    
    let muscleList = '';
    if (Array.isArray(musclesData)) {
        muscleList = musclesData.map(m => `<span class="muscle-tag primary">${m}</span>`).join('');
    } else if (musclesData.primary) {
        muscleList = musclesData.primary.map(m => `<span class="muscle-tag primary">${m}</span>`).join('') +
                     musclesData.secondary.map(m => `<span class="muscle-tag secondary">${m}</span>`).join('');
    }
    
    // Use exercise name to generate a search-friendly gif URL from a reliable source
    const exerciseSlug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');
    const gifSearchUrl = `https://www.musclewiki.com/exercises/${exerciseSlug}`;
    
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-handle"></div>
            <div class="modal-header">
                <h3 class="modal-title">${name}</h3>
                <button class="modal-close" onclick="closeVideo()">✕</button>
            </div>
            <div class="modal-body">
                ${gifUrl ? `
                <div class="gif-section">
                    <div class="gif-container">
                        <img src="${gifUrl}" alt="${name} animation" 
                             onerror="this.parentElement.innerHTML='<div class=\\'gif-placeholder\\'><span>🏋️</span><p>Animation</p></div>'">
                    </div>
                </div>
                ` : `
                <div class="gif-section">
                    <div class="gif-container">
                        <div class="gif-placeholder">
                            <span>🏋️</span>
                            <p>${name}</p>
                        </div>
                    </div>
                </div>
                `}
                
                <a href="https://www.youtube.com/watch?v=${videoId}" target="_blank" class="youtube-btn">
                    <span class="yt-icon">▶</span>
                    Watch Full Video on YouTube
                </a>
                
                <div class="muscle-info">
                    <h4>💪 Muscles Worked</h4>
                    <div class="muscle-tags" style="margin-top: 10px;">
                        ${muscleList}
                    </div>
                    <div style="margin-top: 12px; font-size: 12px; color: var(--text-secondary);">
                        <span class="muscle-tag primary" style="font-size: 10px;">Primary</span> Main target
                        <span class="muscle-tag secondary" style="font-size: 10px; margin-left: 8px;">Secondary</span> Supporting
                    </div>
                </div>
            </div>
        </div>
    `;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close Video
function closeVideo() {
    const modal = document.getElementById('video-modal');
    modal.classList.remove('active');
    modal.innerHTML = '';
    document.body.style.overflow = '';
}

// Close on outside click
document.addEventListener('click', (e) => {
    if (e.target.id === 'video-modal') closeVideo();
});

// Close on escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeVideo();
});

// Calculate Stats
function calculateStats() {
    let totalWorkouts = 0;
    let totalExercises = 0;
    let currentStreak = 0;
    
    Object.keys(workoutData).forEach(date => {
        let hasWorkout = false;
        Object.values(workoutData[date]).forEach(day => {
            if (typeof day === 'object') {
                const completed = Object.values(day).filter(ex => ex?.completed).length;
                if (completed > 0) {
                    hasWorkout = true;
                    totalExercises += completed;
                }
            }
        });
        if (hasWorkout) totalWorkouts++;
    });
    
    // Calculate streak
    const today = new Date();
    for (let i = 0; i < 365; i++) {
        const checkDate = new Date(today);
        checkDate.setDate(checkDate.getDate() - i);
        const dateKey = checkDate.toISOString().split('T')[0];
        
        if (workoutData[dateKey]) {
            let hasWorkout = false;
            Object.values(workoutData[dateKey]).forEach(day => {
                if (typeof day === 'object') {
                    const completed = Object.values(day).filter(ex => ex?.completed).length;
                    if (completed > 0) hasWorkout = true;
                }
            });
            if (hasWorkout) currentStreak++;
            else if (i > 0) break;
        } else if (i > 0) break;
    }
    
    return { totalWorkouts, totalExercises, currentStreak };
}

// Get Workout History
function getWorkoutHistory() {
    const history = [];
    const dates = Object.keys(workoutData).sort().reverse().slice(0, 10);
    
    dates.forEach(date => {
        Object.entries(workoutData[date]).forEach(([dayKey, exercises]) => {
            if (typeof exercises === 'object' && dayKey.startsWith('day')) {
                const completed = Object.values(exercises).filter(ex => ex?.completed).length;
                if (completed > 0) {
                    const dayName = exerciseData[dayKey]?.name || `Day ${dayKey.replace('day', '')}`;
                    history.push({ date, day: dayName, exerciseCount: completed });
                }
            }
        });
    });
    
    return history.slice(0, 10);
}

// Format Date
function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { weekday: 'short', month: 'short', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

// Clear All Data
function clearAllData() {
    if (confirm('Clear all workout data? This cannot be undone.')) {
        localStorage.removeItem('fitnessTrackerData');
        workoutData = {};
        renderContent();
        updateHeaderStats();
    }
}
