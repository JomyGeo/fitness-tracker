// Main Application Module

const App = {
    // State
    currentScreen: 'home',
    currentExercise: null,
    currentWorkout: null,
    activeWorkout: null,
    workoutTimer: null,
    restTimer: null,
    restTimeRemaining: 0,
    currentMonth: new Date(),
    selectedDate: new Date(),
    charts: {},
    currentExerciseIndex: 0,
    weightUnit: 'kg',
    defaultRestTime: 60,
    vibrationEnabled: true,
    soundEnabled: true,

    // ==================== INITIALIZATION ====================
    init() {
        console.log('FitPro App Initializing...');
        this.loadSettings();
        this.initNavigation();
        this.initTabs();
        this.initExerciseLibrary();
        this.initWorkoutsScreen();
        this.initCalendar();
        this.initSettings();
        this.updateHomeScreen();
        this.updateTodayDate();
        console.log('FitPro App Ready!');
    },

    loadSettings() {
        const settings = Storage.getSettings();
        this.weightUnit = settings.weightUnit || 'kg';
        this.defaultRestTime = settings.defaultRestTime || 60;
        this.vibrationEnabled = settings.vibration !== false;
        this.soundEnabled = settings.sound !== false;
    },

    // ==================== NAVIGATION ====================
    initNavigation() {
        document.querySelectorAll('#bottom-nav .nav-item').forEach(btn => {
            btn.addEventListener('click', () => this.showScreen(btn.dataset.screen));
        });
        document.getElementById('header-back-btn').addEventListener('click', () => this.goBack());
    },

    showScreen(screenId, options = {}) {
        document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
        const screen = document.getElementById(`screen-${screenId}`);
        if (screen) {
            screen.classList.add('active');
            this.currentScreen = screenId;
        }
        document.querySelectorAll('#bottom-nav .nav-item').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.screen === screenId);
        });
        this.updateHeader(screenId, options);
        const hideNav = ['active-workout', 'workout-builder', 'exercise-detail', 'workout-summary', 'calculator'].includes(screenId);
        document.getElementById('bottom-nav').style.display = hideNav ? 'none' : 'flex';
        if (screenId === 'progress') this.updateProgressCharts();
    },

    updateHeader(screenId, options = {}) {
        const titles = {
            'home': 'FitPro', 'workouts': 'Workouts', 'exercises': 'Exercise Library',
            'history': 'History', 'progress': 'Progress', 'settings': 'Settings',
            'calculator': '1RM Calculator', 'workout-builder': options.title || 'New Workout',
            'active-workout': options.title || 'Workout', 'exercise-detail': options.title || 'Exercise',
            'workout-summary': 'Summary'
        };
        document.getElementById('header-title').textContent = titles[screenId] || 'FitPro';
        const showBack = ['calculator', 'workout-builder', 'active-workout', 'exercise-detail', 'workout-summary'].includes(screenId);
        document.getElementById('header-back-btn').classList.toggle('hidden', !showBack);
        const actionBtn = document.getElementById('header-action-btn');
        actionBtn.classList.toggle('hidden', screenId !== 'workouts');
        if (screenId === 'workouts') actionBtn.onclick = () => this.createNewWorkout();
    },

    goBack() {
        if (this.currentScreen === 'active-workout') this.confirmEndWorkout();
        else if (this.currentScreen === 'workout-builder') this.confirmDiscardWorkout();
        else this.showScreen('home');
    },

    goHome() {
        this.showScreen('home');
        this.updateHomeScreen();
    },

    // ==================== TABS ====================
    initTabs() {
        document.querySelectorAll('.tabs').forEach(tabContainer => {
            tabContainer.querySelectorAll('.tab').forEach(tab => {
                tab.addEventListener('click', () => {
                    const tabId = tab.dataset.tab;
                    tabContainer.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
                    tab.classList.add('active');
                    const parent = tabContainer.parentElement;
                    parent.querySelectorAll('.tab-content').forEach(tc => tc.classList.remove('active'));
                    const content = parent.querySelector(`#tab-${tabId}`);
                    if (content) content.classList.add('active');
                });
            });
        });
    },

    // ==================== HOME SCREEN ====================
    updateHomeScreen() {
        const stats = Storage.getStats();
        document.getElementById('stat-streak').textContent = stats.streak;
        document.getElementById('stat-workouts').textContent = stats.totalWorkouts;
        document.getElementById('stat-volume').textContent = this.formatVolume(stats.totalVolume);
        this.updateRecentWorkouts();
        this.updateTodayWorkout();
    },

    updateTodayDate() {
        const options = { weekday: 'long', month: 'long', day: 'numeric' };
        document.getElementById('today-date').textContent = new Date().toLocaleDateString('en-US', options);
    },

    updateRecentWorkouts() {
        const container = document.getElementById('recent-workouts');
        const recent = Storage.getRecentWorkouts(5);
        if (recent.length === 0) {
            container.innerHTML = '<div class="empty-state small"><p>No recent workouts</p></div>';
            return;
        }
        container.innerHTML = recent.map(session => {
            const timeAgo = this.getTimeAgo(new Date(session.completedAt));
            return `<div class="recent-item"><div class="recent-icon">🏋️</div><div class="recent-info"><span class="recent-name">${session.workoutName || 'Workout'}</span><span class="recent-meta">${session.exercises?.length || 0} exercises • ${this.formatDuration(session.duration)}</span></div><span class="recent-time">${timeAgo}</span></div>`;
        }).join('');
    },

    updateTodayWorkout() {
        const container = document.getElementById('today-workout');
        const dayOfWeek = new Date().getDay();
        const dayWorkouts = { 0: null, 1: 'day1-chest-triceps', 2: 'day2-back-biceps', 3: 'day3-legs-glutes', 4: 'day4-shoulders-traps', 5: 'day5-legs-hamstrings', 6: 'day6-arms-core' };
        const workoutId = dayWorkouts[dayOfWeek];
        if (!workoutId) {
            container.innerHTML = '<div class="rest-day-card"><div class="rest-icon">😴</div><h3>Rest Day</h3><p>Recovery is important!</p></div>';
            return;
        }
        const workout = PRESET_WORKOUTS.find(w => w.id === workoutId);
        if (workout) {
            container.innerHTML = `<div class="scheduled-workout" onclick="App.startWorkout('${workout.id}')"><div class="workout-header-info"><h3>${workout.name}</h3><p>${workout.description}</p></div><div class="workout-meta"><span>🕐 ${workout.duration}</span><span>💪 ${workout.exercises.length} exercises</span></div><button class="btn-primary">Start Workout</button></div>`;
        }
    },

    startQuickWorkout() {
        this.currentWorkout = { id: 'quick-' + Date.now(), name: 'Quick Workout', exercises: [] };
        this.showScreen('workout-builder');
        this.renderWorkoutBuilder();
    },

    // ==================== EXERCISE LIBRARY ====================
    initExerciseLibrary() {
        const muscleFilters = document.getElementById('muscle-filters');
        muscleFilters.innerHTML = MUSCLE_GROUPS.map(m => `<button class="filter-pill ${m.id === 'all' ? 'active' : ''}" data-filter="muscle" data-value="${m.id}">${m.icon} ${m.name}</button>`).join('');
        const equipFilters = document.getElementById('equipment-filters');
        equipFilters.innerHTML = EQUIPMENT_TYPES.map(e => `<button class="filter-pill ${e.id === 'all' ? 'active' : ''}" data-filter="equipment" data-value="${e.id}">${e.icon} ${e.name}</button>`).join('');
        document.querySelectorAll('.filter-pill').forEach(pill => {
            pill.addEventListener('click', () => {
                pill.parentElement.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
                pill.classList.add('active');
                this.filterExercises();
            });
        });
        const searchInput = document.getElementById('exercise-search');
        const clearBtn = document.getElementById('clear-search');
        searchInput.addEventListener('input', () => {
            clearBtn.classList.toggle('hidden', !searchInput.value);
            this.filterExercises();
        });
        clearBtn.addEventListener('click', () => {
            searchInput.value = '';
            clearBtn.classList.add('hidden');
            this.filterExercises();
        });
        this.renderExerciseList(EXERCISES_DB);
    },

    filterExercises() {
        const searchTerm = document.getElementById('exercise-search').value.toLowerCase();
        const muscleFilter = document.querySelector('.filter-pill[data-filter="muscle"].active')?.dataset.value || 'all';
        const equipFilter = document.querySelector('.filter-pill[data-filter="equipment"].active')?.dataset.value || 'all';
        let filtered = EXERCISES_DB.filter(ex => {
            const matchesSearch = !searchTerm || ex.name.toLowerCase().includes(searchTerm) || ex.muscle.toLowerCase().includes(searchTerm);
            const matchesMuscle = muscleFilter === 'all' || ex.muscle === muscleFilter;
            const matchesEquip = equipFilter === 'all' || ex.equipment === equipFilter;
            return matchesSearch && matchesMuscle && matchesEquip;
        });
        this.renderExerciseList(filtered);
    },

    renderExerciseList(exercises) {
        const container = document.getElementById('exercise-list');
        document.getElementById('exercise-count').textContent = `${exercises.length} exercises`;
        if (exercises.length === 0) {
            container.innerHTML = '<div class="empty-state"><div class="empty-icon">🔍</div><p>No exercises found</p></div>';
            return;
        }
        container.innerHTML = exercises.map(ex => {
            const isFav = Storage.isFavorite(ex.id);
            const muscleInfo = MUSCLE_GROUPS.find(m => m.id === ex.muscle);
            return `<div class="exercise-card" onclick="App.showExerciseDetail('${ex.id}')"><div class="exercise-gif"><img src="${ex.gifUrl}" alt="${ex.name}" loading="lazy" onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2280%22>🏋️</text></svg>'"></div><div class="exercise-info"><h4>${ex.name}</h4><div class="exercise-tags"><span class="tag muscle">${muscleInfo?.icon || '💪'} ${this.capitalize(ex.muscle)}</span><span class="tag equipment">${this.capitalize(ex.equipment)}</span></div></div><button class="fav-btn ${isFav ? 'active' : ''}" onclick="event.stopPropagation(); App.toggleFavorite('${ex.id}', this)">${isFav ? '❤️' : '🤍'}</button></div>`;
        }).join('');
    },

    showExerciseDetail(exerciseId) {
        const exercise = EXERCISES_DB.find(ex => ex.id === exerciseId);
        if (!exercise) return;
        this.currentExercise = exercise;
        const muscleInfo = MUSCLE_GROUPS.find(m => m.id === exercise.muscle);
        const isFav = Storage.isFavorite(exercise.id);
        const content = document.getElementById('exercise-detail-content');
        content.innerHTML = `
            <div class="detail-gif"><img src="${exercise.gifUrl}" alt="${exercise.name}" onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2280%22>🏋️</text></svg>'"></div>
            <div class="detail-header"><h2>${exercise.name}</h2><button class="fav-btn large ${isFav ? 'active' : ''}" onclick="App.toggleFavorite('${exercise.id}', this)">${isFav ? '❤️' : '🤍'}</button></div>
            <div class="detail-tags"><span class="tag muscle">${muscleInfo?.icon || '💪'} ${this.capitalize(exercise.muscle)}</span><span class="tag equipment">${this.capitalize(exercise.equipment)}</span><span class="tag difficulty">${this.capitalize(exercise.difficulty)}</span></div>
            ${exercise.secondaryMuscles?.length ? `<div class="detail-section"><h4>Secondary Muscles</h4><p>${exercise.secondaryMuscles.map(m => this.capitalize(m)).join(', ')}</p></div>` : ''}
            <div class="detail-section"><h4>Instructions</h4><ol class="instructions-list">${exercise.instructions.map(inst => `<li>${inst}</li>`).join('')}</ol></div>
            ${exercise.tips ? `<div class="detail-section tips"><h4>💡 Pro Tips</h4><p>${exercise.tips}</p></div>` : ''}
            <a href="https://www.youtube.com/watch?v=${exercise.youtubeId}" target="_blank" class="youtube-btn"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>Watch on YouTube</a>
            <button class="btn-primary full-width mt-20" onclick="App.addExerciseToWorkout('${exercise.id}')">Add to Workout</button>`;
        this.showScreen('exercise-detail', { title: exercise.name });
    },

    toggleFavorite(exerciseId, btn) {
        const isNowFav = Storage.toggleFavorite(exerciseId);
        btn.innerHTML = isNowFav ? '❤️' : '🤍';
        btn.classList.toggle('active', isNowFav);
        this.showToast(isNowFav ? 'Added to favorites' : 'Removed from favorites');
    },

    // ==================== WORKOUTS SCREEN ====================
    initWorkoutsScreen() {
        this.renderPresetWorkouts();
        this.renderCustomWorkouts();
    },

    renderPresetWorkouts() {
        const container = document.getElementById('preset-workouts-list');
        const categories = {};
        PRESET_WORKOUTS.forEach(workout => {
            if (!categories[workout.category]) categories[workout.category] = [];
            categories[workout.category].push(workout);
        });
        let html = '';
        WORKOUT_CATEGORIES.filter(c => c.id !== 'all').forEach(category => {
            const workouts = categories[category.id] || [];
            if (workouts.length === 0) return;
            html += `<div class="workout-category"><h3>${category.name}</h3><div class="workout-cards">${workouts.map(w => this.renderWorkoutCard(w)).join('')}</div></div>`;
        });
        container.innerHTML = html;
    },

    renderCustomWorkouts() {
        const container = document.getElementById('my-workouts-list');
        const workouts = Storage.getCustomWorkouts();
        if (workouts.length === 0) {
            container.innerHTML = '<div class="empty-state"><div class="empty-icon">🏋️</div><p>No custom workouts yet</p><button class="btn-primary" onclick="App.createNewWorkout()">Create Workout</button></div>';
            return;
        }
        container.innerHTML = `<div class="workout-cards">${workouts.map(w => this.renderWorkoutCard(w, true)).join('')}</div>`;
    },

    renderWorkoutCard(workout, isCustom = false) {
        const muscleIcons = workout.targetMuscles?.map(m => MUSCLE_GROUPS.find(mg => mg.id === m)?.icon || '💪').join(' ') || '💪';
        return `<div class="workout-card" onclick="App.startWorkout('${workout.id}', ${isCustom})"><div class="workout-card-header"><span class="workout-muscles">${muscleIcons}</span>${isCustom ? '<span class="custom-badge">Custom</span>' : ''}</div><h4>${workout.name}</h4><p class="workout-desc">${workout.description || ''}</p><div class="workout-card-meta"><span>🕐 ${workout.duration || '~45 min'}</span><span>💪 ${workout.exercises?.length || 0} exercises</span></div></div>`;
    },

    createNewWorkout() {
        this.currentWorkout = { id: null, name: '', description: '', exercises: [] };
        document.getElementById('workout-name').value = '';
        this.showScreen('workout-builder', { title: 'New Workout' });
        this.renderWorkoutBuilder();
    },

    // ==================== WORKOUT BUILDER ====================
    renderWorkoutBuilder() {
        const container = document.getElementById('builder-exercises');
        if (!this.currentWorkout || this.currentWorkout.exercises.length === 0) {
            container.innerHTML = '<div class="empty-state"><div class="empty-icon">➕</div><p>No exercises added</p><button class="btn-secondary" onclick="App.openExercisePicker()">Add Exercise</button></div>';
            const existingBtn = document.getElementById('save-workout-btn');
            if (existingBtn) existingBtn.remove();
            return;
        }
        container.innerHTML = this.currentWorkout.exercises.map((ex, index) => {
            const exercise = EXERCISES_DB.find(e => e.id === ex.exerciseId);
            if (!exercise) return '';
            return `<div class="builder-exercise" data-index="${index}"><div class="builder-exercise-header"><div class="drag-handle">⋮⋮</div><img src="${exercise.gifUrl}" alt="${exercise.name}" class="builder-thumb" onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2280%22>🏋️</text></svg>'"><div class="builder-exercise-info"><h4>${exercise.name}</h4><span>${ex.sets} sets × ${ex.reps} reps</span></div><button class="remove-btn" onclick="App.removeExerciseFromBuilder(${index})">×</button></div><div class="builder-exercise-config"><div class="config-group"><label>Sets</label><input type="number" value="${ex.sets}" min="1" max="10" onchange="App.updateBuilderExercise(${index}, 'sets', this.value)"></div><div class="config-group"><label>Reps</label><input type="text" value="${ex.reps}" onchange="App.updateBuilderExercise(${index}, 'reps', this.value)"></div><div class="config-group"><label>Rest</label><select onchange="App.updateBuilderExercise(${index}, 'rest', this.value)"><option value="30" ${ex.rest == 30 ? 'selected' : ''}>30s</option><option value="60" ${ex.rest == 60 ? 'selected' : ''}>60s</option><option value="90" ${ex.rest == 90 ? 'selected' : ''}>90s</option><option value="120" ${ex.rest == 120 ? 'selected' : ''}>2m</option><option value="180" ${ex.rest == 180 ? 'selected' : ''}>3m</option></select></div></div></div>`;
        }).join('');
        if (!document.getElementById('save-workout-btn')) {
            const btn = document.createElement('button');
            btn.id = 'save-workout-btn';
            btn.className = 'btn-primary full-width mt-20';
            btn.textContent = 'Start Workout';
            btn.onclick = () => this.startBuiltWorkout();
            container.after(btn);
        }
    },

    openExercisePicker() {
        const modal = document.getElementById('exercise-picker-modal');
        const muscleSelect = document.getElementById('picker-muscle-filter');
        muscleSelect.innerHTML = MUSCLE_GROUPS.map(m => `<option value="${m.id}">${m.name}</option>`).join('');
        const equipSelect = document.getElementById('picker-equipment-filter');
        equipSelect.innerHTML = EQUIPMENT_TYPES.map(e => `<option value="${e.id}">${e.name}</option>`).join('');
        document.getElementById('picker-search').value = '';
        document.getElementById('picker-search').oninput = () => this.filterPickerExercises();
        muscleSelect.onchange = () => this.filterPickerExercises();
        equipSelect.onchange = () => this.filterPickerExercises();
        this.renderPickerExercises(EXERCISES_DB);
        modal.classList.add('active');
    },

    filterPickerExercises() {
        const search = document.getElementById('picker-search').value.toLowerCase();
        const muscle = document.getElementById('picker-muscle-filter').value;
        const equip = document.getElementById('picker-equipment-filter').value;
        const filtered = EXERCISES_DB.filter(ex => {
            const matchSearch = !search || ex.name.toLowerCase().includes(search);
            const matchMuscle = muscle === 'all' || ex.muscle === muscle;
            const matchEquip = equip === 'all' || ex.equipment === equip;
            return matchSearch && matchMuscle && matchEquip;
        });
        this.renderPickerExercises(filtered);
    },

    renderPickerExercises(exercises) {
        const container = document.getElementById('picker-exercise-list');
        container.innerHTML = exercises.map(ex => `<div class="picker-item" onclick="App.selectExerciseFromPicker('${ex.id}')"><img src="${ex.gifUrl}" alt="${ex.name}" class="picker-thumb" onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2280%22>🏋️</text></svg>'"><div class="picker-info"><h4>${ex.name}</h4><span>${this.capitalize(ex.muscle)} • ${this.capitalize(ex.equipment)}</span></div><div class="picker-add">+</div></div>`).join('');
    },

    selectExerciseFromPicker(exerciseId) {
        if (!this.currentWorkout) this.currentWorkout = { exercises: [] };
        this.currentWorkout.exercises.push({ exerciseId, sets: 3, reps: '10-12', rest: 60 });
        this.closeModal('exercise-picker-modal');
        this.renderWorkoutBuilder();
        this.showToast('Exercise added');
    },

    removeExerciseFromBuilder(index) {
        this.currentWorkout.exercises.splice(index, 1);
        this.renderWorkoutBuilder();
    },

    updateBuilderExercise(index, field, value) {
        if (field === 'sets' || field === 'rest') value = parseInt(value);
        this.currentWorkout.exercises[index][field] = value;
    },

    addExerciseToWorkout(exerciseId) {
        if (!this.currentWorkout) this.currentWorkout = { exercises: [] };
        this.currentWorkout.exercises.push({ exerciseId, sets: 3, reps: '10-12', rest: 60 });
        this.showToast('Added to workout');
        this.showScreen('workout-builder');
        this.renderWorkoutBuilder();
    },

    startBuiltWorkout() {
        if (!this.currentWorkout || this.currentWorkout.exercises.length === 0) {
            this.showToast('Add some exercises first');
            return;
        }
        this.currentWorkout.name = document.getElementById('workout-name').value || 'Custom Workout';
        this.beginActiveWorkout(this.currentWorkout);
    },

    confirmDiscardWorkout() {
        if (this.currentWorkout && this.currentWorkout.exercises.length > 0) {
            this.showConfirm('Discard Workout?', 'Your workout will not be saved.', () => {
                this.currentWorkout = null;
                this.showScreen('workouts');
            });
        } else {
            this.showScreen('workouts');
        }
    },

    // ==================== ACTIVE WORKOUT ====================
    startWorkout(workoutId, isCustom = false) {
        const workouts = isCustom ? Storage.getCustomWorkouts() : PRESET_WORKOUTS;
        const workout = workouts.find(w => w.id === workoutId);
        if (workout) this.beginActiveWorkout(workout);
    },

    beginActiveWorkout(workout) {
        this.activeWorkout = {
            workoutId: workout.id,
            workoutName: workout.name,
            startTime: Date.now(),
            exercises: workout.exercises.map(ex => ({
                ...ex,
                sets: Array(parseInt(ex.sets) || 3).fill(null).map(() => ({ weight: '', reps: '', completed: false }))
            }))
        };
        this.currentExerciseIndex = 0;
        this.showScreen('active-workout', { title: workout.name });
        this.renderActiveWorkout();
        this.startWorkoutTimer();
    },

    renderActiveWorkout() {
        const exercise = this.activeWorkout.exercises[this.currentExerciseIndex];
        const exerciseData = EXERCISES_DB.find(e => e.id === exercise.exerciseId);
        document.getElementById('exercise-progress').textContent = `${this.currentExerciseIndex + 1}/${this.activeWorkout.exercises.length}`;
        const container = document.getElementById('current-exercise-container');
        container.innerHTML = `<div class="current-exercise-gif"><img src="${exerciseData?.gifUrl || ''}" alt="${exerciseData?.name || ''}" onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2280%22>🏋️</text></svg>'"></div><h3 class="current-exercise-name">${exerciseData?.name || 'Unknown'}</h3><p class="current-exercise-target">${exercise.reps} reps × ${exercise.sets.length} sets</p>`;
        this.renderSets();
        document.getElementById('prev-exercise-btn').disabled = this.currentExerciseIndex === 0;
        const nextBtn = document.getElementById('next-exercise-btn');
        nextBtn.textContent = this.currentExerciseIndex === this.activeWorkout.exercises.length - 1 ? 'Finish' : 'Next';
        nextBtn.onclick = () => {
            if (this.currentExerciseIndex === this.activeWorkout.exercises.length - 1) this.finishWorkout();
            else this.nextExercise();
        };
        document.getElementById('prev-exercise-btn').onclick = () => this.prevExercise();
    },

    renderSets() {
        const exercise = this.activeWorkout.exercises[this.currentExerciseIndex];
        const container = document.getElementById('set-list');
        container.innerHTML = exercise.sets.map((set, index) => `<div class="set-row ${set.completed ? 'completed' : ''}"><span class="set-number">${index + 1}</span><div class="set-inputs"><div class="set-input-group"><input type="number" placeholder="0" value="${set.weight}" onchange="App.updateSet(${index}, 'weight', this.value)" ${set.completed ? 'disabled' : ''}><span>${this.weightUnit}</span></div><span class="set-x">×</span><div class="set-input-group"><input type="number" placeholder="0" value="${set.reps}" onchange="App.updateSet(${index}, 'reps', this.value)" ${set.completed ? 'disabled' : ''}><span>reps</span></div></div><button class="set-complete-btn ${set.completed ? 'done' : ''}" onclick="App.toggleSetComplete(${index})">${set.completed ? '✓' : '○'}</button></div>`).join('');
        document.getElementById('add-set-btn').onclick = () => this.addSet();
    },

    updateSet(setIndex, field, value) {
        this.activeWorkout.exercises[this.currentExerciseIndex].sets[setIndex][field] = value ? parseFloat(value) : '';
    },

    toggleSetComplete(setIndex) {
        const exercise = this.activeWorkout.exercises[this.currentExerciseIndex];
        const set = exercise.sets[setIndex];
        if (!set.completed && (!set.weight || !set.reps)) {
            this.showToast('Enter weight and reps first');
            return;
        }
        set.completed = !set.completed;
        this.renderSets();
        if (set.completed) {
            const prResult = Storage.updatePersonalRecord(exercise.exerciseId, set.weight, set.reps);
            if (prResult.isNew) this.showToast('🎉 New Personal Record!');
            this.startRestTimer(exercise.rest || this.defaultRestTime);
        }
    },

    addSet() {
        this.activeWorkout.exercises[this.currentExerciseIndex].sets.push({ weight: '', reps: '', completed: false });
        this.renderSets();
    },

    nextExercise() {
        if (this.currentExerciseIndex < this.activeWorkout.exercises.length - 1) {
            this.currentExerciseIndex++;
            this.renderActiveWorkout();
            this.stopRestTimer();
        }
    },

    prevExercise() {
        if (this.currentExerciseIndex > 0) {
            this.currentExerciseIndex--;
            this.renderActiveWorkout();
            this.stopRestTimer();
        }
    },

    // ==================== TIMERS ====================
    startWorkoutTimer() {
        const display = document.getElementById('workout-duration');
        this.workoutTimer = setInterval(() => {
            const elapsed = Date.now() - this.activeWorkout.startTime;
            display.textContent = this.formatDuration(Math.floor(elapsed / 1000));
        }, 1000);
    },

    stopWorkoutTimer() {
        if (this.workoutTimer) { clearInterval(this.workoutTimer); this.workoutTimer = null; }
    },

    startRestTimer(seconds) {
        this.restTimeRemaining = seconds;
        const container = document.getElementById('rest-timer-container');
        const timeDisplay = document.getElementById('rest-time');
        const progressCircle = document.getElementById('rest-progress-circle');
        container.classList.remove('hidden');
        const circumference = 2 * Math.PI * 45;
        progressCircle.style.strokeDasharray = circumference;
        const updateTimer = () => {
            timeDisplay.textContent = this.restTimeRemaining;
            progressCircle.style.strokeDashoffset = circumference * (1 - this.restTimeRemaining / seconds);
        };
        updateTimer();
        this.restTimer = setInterval(() => {
            this.restTimeRemaining--;
            updateTimer();
            if (this.restTimeRemaining <= 0) { this.stopRestTimer(); this.notifyRestComplete(); }
        }, 1000);
    },

    stopRestTimer() {
        if (this.restTimer) { clearInterval(this.restTimer); this.restTimer = null; }
        document.getElementById('rest-timer-container').classList.add('hidden');
    },

    adjustRestTime(delta) {
        this.restTimeRemaining = Math.max(0, this.restTimeRemaining + delta);
        document.getElementById('rest-time').textContent = this.restTimeRemaining;
    },

    skipRest() { this.stopRestTimer(); },

    notifyRestComplete() {
        if (this.vibrationEnabled && navigator.vibrate) navigator.vibrate([200, 100, 200]);
        this.showToast('Rest complete! 💪');
    },

    // ==================== FINISH WORKOUT ====================
    confirmEndWorkout() {
        this.showConfirm('End Workout?', 'Your progress will be saved.', () => this.finishWorkout());
    },

    finishWorkout() {
        this.stopWorkoutTimer();
        this.stopRestTimer();
        const duration = Math.floor((Date.now() - this.activeWorkout.startTime) / 1000);
        let totalVolume = 0, totalSets = 0;
        this.activeWorkout.exercises.forEach(ex => {
            ex.sets.forEach(set => {
                if (set.completed && set.weight && set.reps) { totalVolume += set.weight * set.reps; totalSets++; }
            });
        });
        const session = Storage.saveWorkoutSession({
            workoutId: this.activeWorkout.workoutId,
            workoutName: this.activeWorkout.workoutName,
            duration, totalVolume, totalSets,
            exercises: this.activeWorkout.exercises
        });
        this.showWorkoutSummary(session);
    },

    showWorkoutSummary(session) {
        document.getElementById('summary-duration').textContent = this.formatDuration(session.duration);
        document.getElementById('summary-volume').textContent = `${this.formatVolume(session.totalVolume)} ${this.weightUnit}`;
        document.getElementById('summary-sets').textContent = session.totalSets;
        const exerciseList = document.getElementById('summary-exercises');
        exerciseList.innerHTML = session.exercises.map(ex => {
            const exerciseData = EXERCISES_DB.find(e => e.id === ex.exerciseId);
            return `<div class="summary-exercise"><span>${exerciseData?.name || 'Unknown'}</span><span>${ex.sets.filter(s => s.completed).length} sets</span></div>`;
        }).join('');
        this.showScreen('workout-summary');
        this.activeWorkout = null;
    },

    // ==================== CALENDAR ====================
    initCalendar() {
        document.getElementById('prev-month').addEventListener('click', () => {
            this.currentMonth.setMonth(this.currentMonth.getMonth() - 1);
            this.renderCalendar();
        });
        document.getElementById('next-month').addEventListener('click', () => {
            this.currentMonth.setMonth(this.currentMonth.getMonth() + 1);
            this.renderCalendar();
        });
        this.renderCalendar();
    },

    renderCalendar() {
        const year = this.currentMonth.getFullYear();
        const month = this.currentMonth.getMonth();
        document.getElementById('calendar-title').textContent = new Date(year, month).toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
        const firstDay = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const workouts = Storage.getWorkoutsByMonth(year, month);
        const workoutDays = new Set(workouts.map(w => new Date(w.completedAt).getDate()));
        const grid = document.getElementById('calendar-grid');
        let html = '';
        for (let i = 0; i < firstDay; i++) html += '<div class="calendar-day empty"></div>';
        const today = new Date();
        for (let day = 1; day <= daysInMonth; day++) {
            const isToday = year === today.getFullYear() && month === today.getMonth() && day === today.getDate();
            const hasWorkout = workoutDays.has(day);
            const isSelected = year === this.selectedDate.getFullYear() && month === this.selectedDate.getMonth() && day === this.selectedDate.getDate();
            html += `<div class="calendar-day ${isToday ? 'today' : ''} ${hasWorkout ? 'has-workout' : ''} ${isSelected ? 'selected' : ''}" onclick="App.selectDate(${year}, ${month}, ${day})"><span>${day}</span>${hasWorkout ? '<div class="workout-dot"></div>' : ''}</div>`;
        }
        grid.innerHTML = html;
        this.updateMonthlyStats(year, month, workouts);
        this.updateSelectedDateWorkouts();
    },

    selectDate(year, month, day) {
        this.selectedDate = new Date(year, month, day);
        this.renderCalendar();
    },

    updateSelectedDateWorkouts() {
        const container = document.getElementById('day-workouts');
        const titleEl = document.getElementById('selected-date-title');
        const today = new Date();
        const isToday = this.selectedDate.toDateString() === today.toDateString();
        titleEl.textContent = isToday ? 'Today' : this.selectedDate.toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' });
        const workouts = Storage.getWorkoutsByDate(this.selectedDate);
        if (workouts.length === 0) {
            container.innerHTML = '<div class="empty-state small"><p>No workouts on this day</p></div>';
            return;
        }
        container.innerHTML = workouts.map(w => `<div class="day-workout-item"><div class="day-workout-icon">🏋️</div><div class="day-workout-info"><span class="day-workout-name">${w.workoutName || 'Workout'}</span><span class="day-workout-meta">${this.formatDuration(w.duration)} • ${w.totalSets || 0} sets</span></div></div>`).join('');
    },

    updateMonthlyStats(year, month, workouts) {
        document.getElementById('monthly-workouts').textContent = workouts.length;
        let totalVolume = 0, totalExercises = 0;
        workouts.forEach(w => {
            totalVolume += w.totalVolume || 0;
            totalExercises += w.exercises?.length || 0;
        });
        document.getElementById('monthly-volume').textContent = this.formatVolume(totalVolume);
        document.getElementById('monthly-exercises').textContent = totalExercises;
    },

    // ==================== PROGRESS CHARTS ====================
    updateProgressCharts() {
        this.renderVolumeChart();
        this.populateStrengthSelect();
    },

    renderVolumeChart() {
        const ctx = document.getElementById('volume-chart');
        if (!ctx) return;
        const data = Storage.getWeeklyVolume(8);
        if (this.charts.volume) this.charts.volume.destroy();
        this.charts.volume = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: data.map(d => d.label),
                datasets: [{ label: 'Volume (kg)', data: data.map(d => d.volume), backgroundColor: 'rgba(0, 122, 255, 0.8)', borderRadius: 8 }]
            },
            options: {
                responsive: true, maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                scales: { y: { beginAtZero: true, grid: { color: 'rgba(255,255,255,0.1)' }, ticks: { color: '#888' } }, x: { grid: { display: false }, ticks: { color: '#888' } } }
            }
        });
    },

    populateStrengthSelect() {
        const select = document.getElementById('strength-exercise-select');
        const history = Storage.getWorkoutHistory();
        const exerciseIds = new Set();
        history.forEach(session => session.exercises?.forEach(ex => exerciseIds.add(ex.exerciseId)));
        select.innerHTML = '<option value="">Choose an exercise...</option>' + Array.from(exerciseIds).map(id => {
            const ex = EXERCISES_DB.find(e => e.id === id);
            return ex ? `<option value="${id}">${ex.name}</option>` : '';
        }).join('');
        select.onchange = () => this.renderStrengthChart(select.value);
    },

    renderStrengthChart(exerciseId) {
        const ctx = document.getElementById('strength-chart');
        if (!ctx || !exerciseId) return;
        const data = Storage.getExerciseHistory(exerciseId);
        if (this.charts.strength) this.charts.strength.destroy();
        this.charts.strength = new Chart(ctx, {
            type: 'line',
            data: {
                labels: data.map(d => new Date(d.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })),
                datasets: [{ label: 'Weight (kg)', data: data.map(d => d.weight), borderColor: '#007AFF', backgroundColor: 'rgba(0,122,255,0.1)', fill: true, tension: 0.3 }]
            },
            options: {
                responsive: true, maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                scales: { y: { beginAtZero: false, grid: { color: 'rgba(255,255,255,0.1)' }, ticks: { color: '#888' } }, x: { grid: { display: false }, ticks: { color: '#888' } } }
            }
        });
    },

    // ==================== SETTINGS ====================
    initSettings() {
        const settings = Storage.getSettings();
        const profile = Storage.getProfile();
        document.getElementById('profile-name').value = profile.name;
        document.getElementById('profile-avatar').textContent = profile.name.substring(0, 2).toUpperCase();
        document.getElementById('member-since').textContent = new Date(profile.joinDate).getFullYear();
        document.querySelectorAll('.toggle-btn[data-unit]').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.unit === settings.weightUnit);
            btn.onclick = () => {
                document.querySelectorAll('.toggle-btn[data-unit]').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                Storage.setSetting('weightUnit', btn.dataset.unit);
                this.weightUnit = btn.dataset.unit;
                document.getElementById('calc-unit').textContent = btn.dataset.unit;
            };
        });
        document.getElementById('default-rest-time').value = settings.defaultRestTime;
        document.getElementById('default-rest-time').onchange = (e) => {
            Storage.setSetting('defaultRestTime', parseInt(e.target.value));
            this.defaultRestTime = parseInt(e.target.value);
        };
        document.getElementById('vibration-toggle').checked = settings.vibration !== false;
        document.getElementById('vibration-toggle').onchange = (e) => {
            Storage.setSetting('vibration', e.target.checked);
            this.vibrationEnabled = e.target.checked;
        };
        document.getElementById('sound-toggle').checked = settings.sound !== false;
        document.getElementById('sound-toggle').onchange = (e) => {
            Storage.setSetting('sound', e.target.checked);
            this.soundEnabled = e.target.checked;
        };
        document.getElementById('profile-name').onchange = (e) => {
            const profile = Storage.getProfile();
            profile.name = e.target.value;
            Storage.saveProfile(profile);
            document.getElementById('profile-avatar').textContent = profile.name.substring(0, 2).toUpperCase();
        };
    },

    exportData() {
        const data = Storage.exportAllData();
        const blob = new Blob([data], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `fitpro-backup-${new Date().toISOString().split('T')[0]}.json`;
        a.click();
        URL.revokeObjectURL(url);
        this.showToast('Data exported successfully');
    },

    importData() {
        const input = document.getElementById('import-file-input');
        input.onchange = (e) => {
            const file = e.target.files[0];
            if (!file) return;
            const reader = new FileReader();
            reader.onload = (event) => {
                if (Storage.importData(event.target.result)) {
                    this.showToast('Data imported successfully');
                    this.loadSettings();
                    this.initSettings();
                    this.updateHomeScreen();
                } else {
                    this.showToast('Import failed - invalid file');
                }
            };
            reader.readAsText(file);
        };
        input.click();
    },

    clearAllData() {
        this.showConfirm('Clear All Data?', 'This will delete all your workout history, settings, and custom workouts. This cannot be undone.', () => {
            Storage.clearAllData();
            this.showToast('All data cleared');
            location.reload();
        });
    },

    // ==================== 1RM CALCULATOR ====================
    calculate1RM() {
        const weight = parseFloat(document.getElementById('calc-weight').value);
        const reps = parseInt(document.getElementById('calc-reps').value);
        if (!weight || !reps || reps < 1) {
            this.showToast('Enter valid weight and reps');
            return;
        }
        const oneRM = Storage.calculate1RM(weight, reps);
        document.getElementById('result-1rm').textContent = `${oneRM} ${this.weightUnit}`;
        const grid = document.getElementById('rep-max-grid');
        grid.innerHTML = [1, 2, 3, 5, 8, 10, 12, 15].map(r => {
            const max = r === 1 ? oneRM : Math.round(oneRM * (37 - r) / 36);
            return `<div class="rep-max-item"><span class="rep-max-reps">${r}RM</span><span class="rep-max-weight">${max} ${this.weightUnit}</span></div>`;
        }).join('');
        document.getElementById('calc-result').classList.remove('hidden');
    },

    // ==================== MODALS & TOASTS ====================
    closeModal(modalId) {
        document.getElementById(modalId).classList.remove('active');
    },

    showConfirm(title, message, onConfirm) {
        document.getElementById('confirm-title').textContent = title;
        document.getElementById('confirm-message').textContent = message;
        document.getElementById('confirm-btn').onclick = () => {
            this.closeModal('confirm-modal');
            onConfirm();
        };
        document.getElementById('confirm-modal').classList.add('active');
    },

    showToast(message) {
        const toast = document.getElementById('toast');
        document.getElementById('toast-message').textContent = message;
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 3000);
    },

    // ==================== UTILITIES ====================
    capitalize(str) { return str ? str.charAt(0).toUpperCase() + str.slice(1) : ''; },
    formatVolume(vol) { return vol >= 1000 ? `${(vol / 1000).toFixed(1)}k` : vol.toString(); },
    formatDuration(seconds) {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    },
    getTimeAgo(date) {
        const diff = Date.now() - date.getTime();
        const mins = Math.floor(diff / 60000);
        if (mins < 60) return `${mins}m ago`;
        const hours = Math.floor(mins / 60);
        if (hours < 24) return `${hours}h ago`;
        const days = Math.floor(hours / 24);
        return `${days}d ago`;
    }
};

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => App.init());
