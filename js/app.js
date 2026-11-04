// App State
let currentDay = 'day1';
let currentWeek = 'week1';
let workoutData = {};
let selectedDate = new Date(); // For date picker
let expandedSets = {}; // Track which exercise sets are expanded

// Goal labels for badges
const goalLabels = {
    'belly-fat': '🔥 Belly Fat',
    'chest-fat': '💪 Chest Fat',
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
    return selectedDate.toISOString().split('T')[0];
}

// Get selected date key for display
function getSelectedDateDisplay() {
    const options = { weekday: 'short', month: 'short', day: 'numeric' };
    return selectedDate.toLocaleDateString('en-US', options);
}

// Change selected date
function changeDate(days) {
    selectedDate.setDate(selectedDate.getDate() + days);
    renderContent();
}

// Set specific date
function setDate(dateString) {
    selectedDate = new Date(dateString);
    renderContent();
}

// Check if selected date is today
function isToday() {
    const today = new Date();
    return selectedDate.toISOString().split('T')[0] === today.toISOString().split('T')[0];
}

// Parse sets string to get number of sets (e.g., "4 x 10-12" returns 4)
function getSetCount(setsString) {
    const match = setsString.match(/^(\d+)/);
    return match ? parseInt(match[1]) : 3; // Default to 3 sets
}

// Check if exercise is time-based (like Plank, Hold, etc.)
function isTimeBased(setsString) {
    return setsString.toLowerCase().includes('s') || 
           setsString.toLowerCase().includes('sec') || 
           setsString.toLowerCase().includes('min');
}

// Parse time from sets string (e.g., "3 x 45s" returns 45)
function getTargetTime(setsString) {
    const match = setsString.match(/(\d+)\s*s/i);
    return match ? parseInt(match[1]) : 30;
}

// Toggle sets expansion
function toggleSetsExpand(exKey) {
    expandedSets[exKey] = !expandedSets[exKey];
    renderContent();
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
        { id: 'plan', label: 'Plan', icon: '📋' },
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
    } else if (currentDay === 'plan') {
        renderPlan(container);
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
            
            <!-- Date Picker -->
            <div class="date-picker">
                <button class="date-nav-btn" onclick="changeDate(-1)">◀</button>
                <div class="date-display" onclick="openDatePicker()">
                    <span class="date-icon">📅</span>
                    <span class="date-text">${getSelectedDateDisplay()}</span>
                    ${isToday() ? '<span class="today-badge">Today</span>' : ''}
                </div>
                <button class="date-nav-btn" onclick="changeDate(1)">▶</button>
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
                const setCount = getSetCount(ex.sets);
                const setsData = exData.sets_data || [];
                const isExpanded = expandedSets[exKey] !== false; // Default expanded
                const isTimeExercise = isTimeBased(ex.sets);
                const targetTime = getTargetTime(ex.sets);
                
                // Count completed sets
                const completedSets = setsData.filter(s => s?.done).length;
                
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
                        <div class="sets-header" onclick="toggleSetsExpand('${exKey}')">
                            <span class="sets-title">📝 Track Each Set ${completedSets > 0 ? `(${completedSets}/${setCount})` : ''}</span>
                            <span class="expand-icon">${isExpanded ? '▼' : '▶'}</span>
                        </div>
                        
                        <div class="sets-tracking ${isExpanded ? '' : 'collapsed'}">
                            ${Array.from({length: setCount}, (_, setIndex) => {
                                const setData = setsData[setIndex] || {};
                                const prevSetData = setsData[setIndex - 1] || {};
                                // Show set if: it's the first set, OR previous set is done
                                const isVisible = setIndex === 0 || prevSetData.done;
                                
                                // Completely hide locked sets
                                if (!isVisible) {
                                    return '';
                                }
                                
                                return `
                                <div class="set-row ${setData.done ? 'set-done' : 'set-active'}">
                                    <div class="set-label">Set ${setIndex + 1}</div>
                                    <div class="set-inputs">
                                        ${isTimeExercise ? `
                                        <div class="set-input-group time-group">
                                            <label>Time</label>
                                            <div class="time-inputs">
                                                <input type="number" inputmode="numeric" 
                                                       value="${setData.minutes || ''}" 
                                                       onchange="updateSetData('${exKey}', ${setIndex}, 'minutes', this.value)"
                                                       placeholder="0" min="0" max="60" class="time-input">
                                                <span class="time-sep">m</span>
                                                <input type="number" inputmode="numeric" 
                                                       value="${setData.seconds || ''}" 
                                                       onchange="updateSetData('${exKey}', ${setIndex}, 'seconds', this.value)"
                                                       placeholder="${targetTime}" min="0" max="59" class="time-input">
                                                <span class="time-sep">s</span>
                                            </div>
                                        </div>
                                        ` : `
                                        <div class="set-input-group">
                                            <label>Reps</label>
                                            <input type="number" inputmode="numeric" 
                                                   value="${setData.reps || ''}" 
                                                   onchange="updateSetData('${exKey}', ${setIndex}, 'reps', this.value)"
                                                   placeholder="10" min="0" max="100">
                                        </div>
                                        <div class="set-input-group">
                                            <label>kg</label>
                                            <input type="number" inputmode="decimal" 
                                                   value="${setData.weight || ''}" 
                                                   onchange="updateSetData('${exKey}', ${setIndex}, 'weight', this.value)"
                                                   placeholder="20" min="0" max="500" step="0.5">
                                        </div>
                                        `}
                                        <button class="set-done-btn ${setData.done ? 'done' : ''}" 
                                                onclick="toggleSetDone('${exKey}', ${setIndex})">
                                            ${setData.done ? '✓' : '○'}
                                        </button>
                                    </div>
                                </div>
                                `;
                            }).join('')}
                            ${completedSets < setCount ? `<div class="sets-remaining">${setCount - completedSets} set${setCount - completedSets > 1 ? 's' : ''} remaining</div>` : ''}
                        </div>
                        <button class="complete-btn ${isCompleted ? 'completed' : ''}" onclick="toggleComplete('${exKey}')">
                            ${isCompleted ? '✓ Completed' : 'Mark as Done'}
                        </button>
                        ${isCompleted ? `<button class="clear-exercise-btn" onclick="clearCurrentExercise('${exKey}')">🗑️ Clear</button>` : ''}
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

// Render Complete Workout Plan
function renderPlan(container) {
    const dayStyles = {
        day1: { icon: '💪', color: '#FF3B30', gradient: 'linear-gradient(135deg, #FF3B30, #FF2D55)', name: 'Day 1' },
        day2: { icon: '🏋️', color: '#007AFF', gradient: 'linear-gradient(135deg, #007AFF, #5AC8FA)', name: 'Day 2' },
        day3: { icon: '🦵', color: '#34C759', gradient: 'linear-gradient(135deg, #34C759, #30D158)', name: 'Day 3' },
        day4: { icon: '🎯', color: '#FF9500', gradient: 'linear-gradient(135deg, #FF9500, #FFCC00)', name: 'Day 4' },
        day5: { icon: '🦿', color: '#AF52DE', gradient: 'linear-gradient(135deg, #AF52DE, #BF5AF2)', name: 'Day 5' },
        day6: { icon: '⚡', color: '#5AC8FA', gradient: 'linear-gradient(135deg, #5AC8FA, #007AFF)', name: 'Day 6' }
    };
    
    // State for which week to show in plan view
    if (typeof window.planWeek === 'undefined') {
        window.planWeek = 'week1';
    }
    
    container.innerHTML = `
        <div class="section active">
            <div class="section-header">
                <div class="section-icon" style="background: linear-gradient(135deg, #FF9500, #FFCC00);">📋</div>
                <div>
                    <h2 class="section-title">Complete Workout Plan</h2>
                    <p class="section-subtitle">Your 6-day training program</p>
                </div>
            </div>
            
            <div class="week-toggle" style="margin-bottom: 20px;">
                <button class="week-btn ${window.planWeek === 'week1' ? 'active' : ''}" onclick="switchPlanWeek('week1')">Week 1 & 3</button>
                <button class="week-btn ${window.planWeek === 'week2' ? 'active' : ''}" onclick="switchPlanWeek('week2')">Week 2 & 4</button>
            </div>
            
            <!-- Warm-up Section -->
            <div class="plan-day-card">
                <div class="plan-day-header" style="background: linear-gradient(135deg, #FF9500, #FF3B30);">
                    <span class="plan-day-icon">🔥</span>
                    <div class="plan-day-info">
                        <h3>Warm-up</h3>
                        <p>Do before every workout • 8-10 mins</p>
                    </div>
                </div>
                <div class="plan-exercises">
                    ${exerciseData.warmup.map(ex => `
                        <div class="plan-exercise-row">
                            <span class="plan-exercise-name">${ex.name}</span>
                            <span class="plan-exercise-detail">${ex.duration}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <!-- Day 1-6 -->
            ${['day1', 'day2', 'day3', 'day4', 'day5', 'day6'].map(dayKey => {
                const day = exerciseData[dayKey];
                const style = dayStyles[dayKey];
                const exercises = day[window.planWeek];
                
                return `
                <div class="plan-day-card">
                    <div class="plan-day-header" style="background: ${style.gradient};">
                        <span class="plan-day-icon">${style.icon}</span>
                        <div class="plan-day-info">
                            <h3>${style.name}: ${day.name}</h3>
                            <p>${day.focus}</p>
                        </div>
                        <button class="plan-go-btn" onclick="switchDay('${dayKey}')">Go →</button>
                    </div>
                    <div class="plan-exercises">
                        ${exercises.map((ex, i) => `
                            <div class="plan-exercise-row">
                                <span class="plan-exercise-num">${i + 1}</span>
                                <div class="plan-exercise-info">
                                    <span class="plan-exercise-name">${ex.name}</span>
                                    ${ex.goal ? `<span class="plan-goal-badge ${ex.goal}">${goalLabels[ex.goal]}</span>` : ''}
                                </div>
                                <span class="plan-exercise-detail">${ex.sets}</span>
                            </div>
                        `).join('')}
                        <div class="plan-cooldown-label">+ Cool-down (${day.cooldown.length} stretches)</div>
                    </div>
                </div>
                `;
            }).join('')}
            
            <!-- Rest Day -->
            <div class="plan-day-card">
                <div class="plan-day-header" style="background: linear-gradient(135deg, #8E8E93, #636366);">
                    <span class="plan-day-icon">😴</span>
                    <div class="plan-day-info">
                        <h3>Day 7: Rest Day</h3>
                        <p>${exerciseData.day7.focus}</p>
                    </div>
                </div>
                <div class="plan-exercises">
                    ${exerciseData.day7.tips.slice(0, 4).map(tip => `
                        <div class="plan-exercise-row">
                            <span class="plan-tip-icon">✓</span>
                            <span class="plan-exercise-name" style="font-size: 13px;">${tip}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <!-- Goals Summary -->
            <div class="plan-goals-section">
                <h3 class="plan-goals-title">🎯 Your Training Goals</h3>
                <div class="plan-goals-grid">
                    ${Object.entries(goalLabels).map(([key, label]) => `
                        <div class="plan-goal-item">
                            <span class="plan-goal-badge ${key}">${label}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
}

// Switch week in plan view
function switchPlanWeek(week) {
    window.planWeek = week;
    renderContent();
}

// Render Progress with Calendar
function renderProgress(container) {
    const stats = calculateStats();
    const history = getWorkoutHistory();
    const focusData = calculateFocusAreas();
    const calendarData = generateCalendarData();
    
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
            
            <!-- Workout Calendar -->
            <div class="calendar-section">
                <div class="calendar-header">
                    <button class="calendar-nav" onclick="changeCalendarMonth(-1)">◀</button>
                    <span class="calendar-month">${calendarData.monthName} ${calendarData.year}</span>
                    <button class="calendar-nav" onclick="changeCalendarMonth(1)">▶</button>
                </div>
                <div class="calendar-weekdays">
                    <span>Sun</span><span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span>
                </div>
                <div class="calendar-days">
                    ${calendarData.days.map(day => {
                        if (!day.date) return '<span class="calendar-day empty"></span>';
                        const hasWorkout = day.hasWorkout;
                        const isToday = day.isToday;
                        return `
                            <span class="calendar-day ${hasWorkout ? 'worked' : ''} ${isToday ? 'today' : ''}" 
                                  onclick="openDayDetail('${day.dateKey}')" 
                                  title="${hasWorkout ? 'Click to see workout' : ''}">
                                ${day.date}
                                ${hasWorkout ? '<span class="workout-dot"></span>' : ''}
                            </span>
                        `;
                    }).join('')}
                </div>
            </div>
            
            <!-- Focus Areas -->
            <div class="focus-section">
                <h3 class="focus-header">🎯 Your Focus Areas (Last 30 Days)</h3>
                <div class="focus-bars">
                    ${Object.entries(focusData).map(([goal, count]) => {
                        const maxCount = Math.max(...Object.values(focusData), 1);
                        const percentage = (count / maxCount) * 100;
                        return `
                            <div class="focus-bar-row">
                                <span class="focus-label">${goalLabels[goal] || goal}</span>
                                <div class="focus-bar-container">
                                    <div class="focus-bar" style="width: ${percentage}%"></div>
                                </div>
                                <span class="focus-count">${count}</span>
                            </div>
                        `;
                    }).join('')}
                    ${Object.keys(focusData).length === 0 ? '<p style="color: var(--text-secondary); text-align: center; padding: 20px;">No workout data yet</p>' : ''}
                </div>
            </div>
            
            <!-- Recent History -->
            <div class="history-section">
                <div class="history-header">Recent Activity</div>
                ${history.length > 0 ? history.map(item => `
                    <div class="history-item" onclick="openDayDetail('${item.date}')">
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
            
            <button class="clear-btn" onclick="clearAllData()">🗑️ Clear All Data (All Devices)</button>
        </div>
    `;
}

// Calendar state
let calendarMonth = new Date().getMonth();
let calendarYear = new Date().getFullYear();

// Change calendar month
function changeCalendarMonth(delta) {
    calendarMonth += delta;
    if (calendarMonth > 11) {
        calendarMonth = 0;
        calendarYear++;
    } else if (calendarMonth < 0) {
        calendarMonth = 11;
        calendarYear--;
    }
    renderContent();
}

// Generate calendar data
function generateCalendarData() {
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
                       'July', 'August', 'September', 'October', 'November', 'December'];
    
    const firstDay = new Date(calendarYear, calendarMonth, 1).getDay();
    const daysInMonth = new Date(calendarYear, calendarMonth + 1, 0).getDate();
    const today = new Date();
    
    const days = [];
    
    // Empty slots for days before the 1st
    for (let i = 0; i < firstDay; i++) {
        days.push({ date: null });
    }
    
    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
        const dateKey = `${calendarYear}-${String(calendarMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        const hasWorkout = workoutData[dateKey] && Object.keys(workoutData[dateKey]).some(key => {
            if (key.startsWith('day')) {
                return Object.values(workoutData[dateKey][key]).some(ex => ex?.completed);
            }
            return false;
        });
        const isToday = today.getDate() === day && today.getMonth() === calendarMonth && today.getFullYear() === calendarYear;
        
        days.push({ date: day, dateKey, hasWorkout, isToday });
    }
    
    return {
        monthName: monthNames[calendarMonth],
        year: calendarYear,
        days
    };
}

// Open day detail modal
function openDayDetail(dateKey) {
    const dayData = workoutData[dateKey];
    if (!dayData) {
        // No data for this day
        return;
    }
    
    const modal = document.getElementById('video-modal');
    const date = new Date(dateKey + 'T12:00:00');
    const options = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' };
    const dateDisplay = date.toLocaleDateString('en-US', options);
    
    let workoutDetails = '';
    
    Object.entries(dayData).forEach(([dayKey, exercises]) => {
        if (dayKey.startsWith('day') && exerciseData[dayKey]) {
            const dayName = exerciseData[dayKey].name;
            const completedExercises = Object.entries(exercises).filter(([_, ex]) => ex?.completed);
            
            if (completedExercises.length > 0) {
                workoutDetails += `
                    <div class="day-detail-section">
                        <h4 class="day-detail-title">${dayName}</h4>
                        <div class="day-detail-exercises">
                            ${completedExercises.map(([exKey, exData]) => {
                                const weekIndex = exKey.split('_')[0];
                                const exerciseIndex = parseInt(exKey.split('_')[1]);
                                const exercise = exerciseData[dayKey][weekIndex]?.[exerciseIndex];
                                const exerciseName = exercise?.name || 'Exercise';
                                
                                // Get sets summary
                                let setsSummary = '';
                                if (exData.sets_data && exData.sets_data.length > 0) {
                                    const completedSets = exData.sets_data.filter(s => s?.done);
                                    if (completedSets.length > 0) {
                                        setsSummary = completedSets.map((s, i) => {
                                            if (s.minutes || s.seconds) {
                                                return `${s.minutes || 0}m ${s.seconds || 0}s`;
                                            } else if (s.reps || s.weight) {
                                                return `${s.reps || '-'}×${s.weight || '-'}kg`;
                                            }
                                            return '';
                                        }).filter(s => s).join(', ');
                                    }
                                }
                                
                                return `
                                    <div class="detail-exercise-row">
                                        <span class="detail-exercise-name">✓ ${exerciseName}</span>
                                        ${setsSummary ? `<span class="detail-exercise-sets">${setsSummary}</span>` : ''}
                                    </div>
                                `;
                            }).join('')}
                        </div>
                    </div>
                `;
            }
        }
    });
    
    if (!workoutDetails) {
        workoutDetails = '<p style="text-align: center; color: var(--text-secondary); padding: 20px;">No completed exercises on this day</p>';
    }
    
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-handle"></div>
            <div class="modal-header">
                <h3 class="modal-title">📅 ${dateDisplay}</h3>
                <button class="modal-close" onclick="closeVideo()">✕</button>
            </div>
            <div class="modal-body">
                ${workoutDetails}
                
                <button class="clear-date-btn" onclick="clearDateData('${dateKey}')">
                    🗑️ Delete This Day's Data
                </button>
            </div>
        </div>
    `;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Calculate focus areas from workout data
function calculateFocusAreas() {
    const focusCount = {};
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    
    Object.entries(workoutData).forEach(([dateKey, dayData]) => {
        const date = new Date(dateKey);
        if (date < thirtyDaysAgo) return;
        
        Object.entries(dayData).forEach(([dayKey, exercises]) => {
            if (dayKey.startsWith('day') && exerciseData[dayKey]) {
                Object.entries(exercises).forEach(([exKey, exData]) => {
                    if (exData?.completed) {
                        const weekIndex = exKey.split('_')[0];
                        const exerciseIndex = parseInt(exKey.split('_')[1]);
                        const exercise = exerciseData[dayKey][weekIndex]?.[exerciseIndex];
                        
                        if (exercise?.goal) {
                            focusCount[exercise.goal] = (focusCount[exercise.goal] || 0) + 1;
                        }
                    }
                });
            }
        });
    });
    
    return focusCount;
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

// Update Set Data (for per-set tracking)
function updateSetData(exKey, setIndex, field, value) {
    const todayKey = getTodayKey();
    
    if (!workoutData[todayKey]) workoutData[todayKey] = {};
    if (!workoutData[todayKey][currentDay]) workoutData[todayKey][currentDay] = {};
    if (!workoutData[todayKey][currentDay][exKey]) workoutData[todayKey][currentDay][exKey] = {};
    if (!workoutData[todayKey][currentDay][exKey].sets_data) workoutData[todayKey][currentDay][exKey].sets_data = [];
    
    // Ensure array has enough slots
    while (workoutData[todayKey][currentDay][exKey].sets_data.length <= setIndex) {
        workoutData[todayKey][currentDay][exKey].sets_data.push({});
    }
    
    workoutData[todayKey][currentDay][exKey].sets_data[setIndex][field] = value;
    saveData();
}

// Toggle Set Done
function toggleSetDone(exKey, setIndex) {
    const todayKey = getTodayKey();
    
    if (!workoutData[todayKey]) workoutData[todayKey] = {};
    if (!workoutData[todayKey][currentDay]) workoutData[todayKey][currentDay] = {};
    if (!workoutData[todayKey][currentDay][exKey]) workoutData[todayKey][currentDay][exKey] = {};
    if (!workoutData[todayKey][currentDay][exKey].sets_data) workoutData[todayKey][currentDay][exKey].sets_data = [];
    
    // Ensure array has enough slots
    while (workoutData[todayKey][currentDay][exKey].sets_data.length <= setIndex) {
        workoutData[todayKey][currentDay][exKey].sets_data.push({});
    }
    
    workoutData[todayKey][currentDay][exKey].sets_data[setIndex].done = 
        !workoutData[todayKey][currentDay][exKey].sets_data[setIndex].done;
    
    // Haptic feedback
    if (navigator.vibrate && workoutData[todayKey][currentDay][exKey].sets_data[setIndex].done) {
        navigator.vibrate(10);
    }
    
    saveData();
    renderContent();
}

// Open Date Picker Modal
function openDatePicker() {
    const modal = document.getElementById('video-modal');
    const currentDateStr = selectedDate.toISOString().split('T')[0];
    
    modal.innerHTML = `
        <div class="modal-content" style="max-width: 340px;">
            <div class="modal-handle"></div>
            <div class="modal-header">
                <h3 class="modal-title">📅 Select Date</h3>
                <button class="modal-close" onclick="closeVideo()">✕</button>
            </div>
            <div class="modal-body" style="padding: 20px;">
                <input type="date" id="date-picker-input" value="${currentDateStr}" 
                       style="width: 100%; padding: 16px; font-size: 18px; border-radius: 12px; 
                              border: 2px solid var(--border); background: var(--bg-tertiary); 
                              color: var(--text-primary);">
                
                <div style="display: flex; gap: 12px; margin-top: 20px;">
                    <button onclick="setDateFromPicker()" 
                            style="flex: 1; padding: 14px; background: linear-gradient(135deg, #007AFF, #5AC8FA); 
                                   color: white; border: none; border-radius: 12px; font-size: 16px; font-weight: 600;">
                        Select Date
                    </button>
                </div>
                
                <div style="display: flex; gap: 8px; margin-top: 16px; flex-wrap: wrap; justify-content: center;">
                    <button onclick="setQuickDate(-1)" class="quick-date-btn">Yesterday</button>
                    <button onclick="setQuickDate(0)" class="quick-date-btn">Today</button>
                    <button onclick="setQuickDate(1)" class="quick-date-btn">Tomorrow</button>
                </div>
            </div>
        </div>
    `;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Set date from picker input
function setDateFromPicker() {
    const input = document.getElementById('date-picker-input');
    if (input && input.value) {
        selectedDate = new Date(input.value + 'T12:00:00');
        closeVideo();
        renderContent();
    }
}

// Set quick date (offset from today)
function setQuickDate(offset) {
    selectedDate = new Date();
    selectedDate.setDate(selectedDate.getDate() + offset);
    closeVideo();
    renderContent();
}

// Toggle Complete - now works even with partial sets
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
    updateHeaderStats();
    
    // Show feedback
    if (typeof showToast === 'function') {
        showToast(isCompleted ? 'Exercise completed! 💪' : 'Exercise unmarked');
    }
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
async function clearAllData() {
    if (confirm('Clear all workout data from ALL devices? This cannot be undone.')) {
        // Clear local storage
        localStorage.removeItem('fitnessTrackerData');
        workoutData = {};
        
        // Clear from Firebase cloud (if signed in)
        if (typeof clearCloudData === 'function') {
            await clearCloudData();
        }
        
        renderContent();
        updateHeaderStats();
        
        // Show confirmation
        if (typeof showToast === 'function') {
            showToast('All data cleared from all devices ✓');
        }
    }
}

// Clear data for a specific date
async function clearDateData(dateKey) {
    const date = new Date(dateKey + 'T12:00:00');
    const options = { month: 'short', day: 'numeric', year: 'numeric' };
    const dateDisplay = date.toLocaleDateString('en-US', options);
    
    if (confirm(`Delete all workout data for ${dateDisplay}? This will sync across all devices.`)) {
        // Remove from local data
        delete workoutData[dateKey];
        
        // Save to local storage
        localStorage.setItem('fitnessTrackerData', JSON.stringify(workoutData));
        
        // Sync to cloud (will update with removed date)
        if (typeof syncDataToCloud === 'function') {
            await syncDataToCloud();
        }
        
        // Close modal and refresh
        closeVideo();
        renderContent();
        updateHeaderStats();
        
        // Show confirmation
        if (typeof showToast === 'function') {
            showToast(`Data for ${dateDisplay} deleted ✓`);
        }
    }
}

// Clear a specific exercise
async function clearExercise(dateKey, dayKey, exKey) {
    if (confirm('Clear this exercise data?')) {
        // Remove exercise from data
        if (workoutData[dateKey] && workoutData[dateKey][dayKey]) {
            delete workoutData[dateKey][dayKey][exKey];
            
            // Clean up empty day
            if (Object.keys(workoutData[dateKey][dayKey]).length === 0) {
                delete workoutData[dateKey][dayKey];
            }
            
            // Clean up empty date
            if (Object.keys(workoutData[dateKey]).length === 0) {
                delete workoutData[dateKey];
            }
        }
        
        // Save and sync
        localStorage.setItem('fitnessTrackerData', JSON.stringify(workoutData));
        
        if (typeof syncDataToCloud === 'function') {
            await syncDataToCloud();
        }
        
        renderContent();
        updateHeaderStats();
        
        if (typeof showToast === 'function') {
            showToast('Exercise cleared ✓');
        }
    }
}

// Clear exercise for current view (uses current date and day)
async function clearCurrentExercise(exKey) {
    const todayKey = getTodayKey();
    await clearExercise(todayKey, currentDay, exKey);
}
