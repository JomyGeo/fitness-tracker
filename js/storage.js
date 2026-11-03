// Storage Module - Handles all localStorage operations

const Storage = {
    // Keys
    KEYS: {
        USER_PROFILE: 'fitpro_user_profile',
        SETTINGS: 'fitpro_settings',
        CUSTOM_WORKOUTS: 'fitpro_custom_workouts',
        WORKOUT_HISTORY: 'fitpro_workout_history',
        FAVORITES: 'fitpro_favorites',
        PERSONAL_RECORDS: 'fitpro_personal_records',
        CUSTOM_EXERCISES: 'fitpro_custom_exercises'
    },

    // ==================== USER PROFILE ====================
    getProfile() {
        const profile = localStorage.getItem(this.KEYS.USER_PROFILE);
        if (profile) {
            return JSON.parse(profile);
        }
        // Default profile
        return {
            name: 'User',
            joinDate: new Date().toISOString(),
            avatar: null
        };
    },

    saveProfile(profile) {
        localStorage.setItem(this.KEYS.USER_PROFILE, JSON.stringify(profile));
    },

    // ==================== SETTINGS ====================
    getSettings() {
        const settings = localStorage.getItem(this.KEYS.SETTINGS);
        if (settings) {
            return JSON.parse(settings);
        }
        // Default settings
        return {
            weightUnit: 'kg',
            defaultRestTime: 60,
            vibration: true,
            sound: true,
            theme: 'dark'
        };
    },

    saveSettings(settings) {
        localStorage.setItem(this.KEYS.SETTINGS, JSON.stringify(settings));
    },

    getSetting(key) {
        const settings = this.getSettings();
        return settings[key];
    },

    setSetting(key, value) {
        const settings = this.getSettings();
        settings[key] = value;
        this.saveSettings(settings);
    },

    // ==================== CUSTOM WORKOUTS ====================
    getCustomWorkouts() {
        const workouts = localStorage.getItem(this.KEYS.CUSTOM_WORKOUTS);
        return workouts ? JSON.parse(workouts) : [];
    },

    saveCustomWorkout(workout) {
        const workouts = this.getCustomWorkouts();
        const existingIndex = workouts.findIndex(w => w.id === workout.id);
        
        if (existingIndex >= 0) {
            workouts[existingIndex] = workout;
        } else {
            workout.id = 'custom-' + Date.now();
            workout.createdAt = new Date().toISOString();
            workouts.push(workout);
        }
        
        localStorage.setItem(this.KEYS.CUSTOM_WORKOUTS, JSON.stringify(workouts));
        return workout;
    },

    deleteCustomWorkout(workoutId) {
        const workouts = this.getCustomWorkouts();
        const filtered = workouts.filter(w => w.id !== workoutId);
        localStorage.setItem(this.KEYS.CUSTOM_WORKOUTS, JSON.stringify(filtered));
    },

    // ==================== WORKOUT HISTORY ====================
    getWorkoutHistory() {
        const history = localStorage.getItem(this.KEYS.WORKOUT_HISTORY);
        return history ? JSON.parse(history) : [];
    },

    saveWorkoutSession(session) {
        const history = this.getWorkoutHistory();
        session.id = 'session-' + Date.now();
        session.completedAt = new Date().toISOString();
        history.unshift(session); // Add to beginning
        
        // Keep only last 365 days of history
        const oneYearAgo = new Date();
        oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
        const filtered = history.filter(h => new Date(h.completedAt) > oneYearAgo);
        
        localStorage.setItem(this.KEYS.WORKOUT_HISTORY, JSON.stringify(filtered));
        return session;
    },

    getWorkoutsByDate(date) {
        const history = this.getWorkoutHistory();
        const targetDate = new Date(date).toDateString();
        return history.filter(h => new Date(h.completedAt).toDateString() === targetDate);
    },

    getWorkoutsByMonth(year, month) {
        const history = this.getWorkoutHistory();
        return history.filter(h => {
            const d = new Date(h.completedAt);
            return d.getFullYear() === year && d.getMonth() === month;
        });
    },

    getRecentWorkouts(limit = 5) {
        const history = this.getWorkoutHistory();
        return history.slice(0, limit);
    },

    // ==================== STATISTICS ====================
    getStats() {
        const history = this.getWorkoutHistory();
        const today = new Date();
        
        // Total workouts
        const totalWorkouts = history.length;
        
        // Total volume (all time)
        let totalVolume = 0;
        history.forEach(session => {
            if (session.exercises) {
                session.exercises.forEach(ex => {
                    if (ex.sets) {
                        ex.sets.forEach(set => {
                            if (set.completed && set.weight && set.reps) {
                                totalVolume += set.weight * set.reps;
                            }
                        });
                    }
                });
            }
        });
        
        // Calculate streak
        let streak = 0;
        const checkDate = new Date(today);
        checkDate.setHours(0, 0, 0, 0);
        
        // Check if worked out today
        const todayWorkouts = this.getWorkoutsByDate(today);
        if (todayWorkouts.length === 0) {
            checkDate.setDate(checkDate.getDate() - 1);
        }
        
        while (true) {
            const dayWorkouts = this.getWorkoutsByDate(checkDate);
            if (dayWorkouts.length > 0) {
                streak++;
                checkDate.setDate(checkDate.getDate() - 1);
            } else {
                break;
            }
        }
        
        return {
            totalWorkouts,
            totalVolume: Math.round(totalVolume),
            streak
        };
    },

    getWeeklyVolume(weeks = 8) {
        const history = this.getWorkoutHistory();
        const weeklyData = [];
        
        for (let i = weeks - 1; i >= 0; i--) {
            const weekStart = new Date();
            weekStart.setDate(weekStart.getDate() - (i * 7) - weekStart.getDay());
            weekStart.setHours(0, 0, 0, 0);
            
            const weekEnd = new Date(weekStart);
            weekEnd.setDate(weekEnd.getDate() + 7);
            
            let volume = 0;
            history.forEach(session => {
                const sessionDate = new Date(session.completedAt);
                if (sessionDate >= weekStart && sessionDate < weekEnd) {
                    if (session.exercises) {
                        session.exercises.forEach(ex => {
                            if (ex.sets) {
                                ex.sets.forEach(set => {
                                    if (set.completed && set.weight && set.reps) {
                                        volume += set.weight * set.reps;
                                    }
                                });
                            }
                        });
                    }
                }
            });
            
            weeklyData.push({
                label: `Week ${weeks - i}`,
                volume: Math.round(volume)
            });
        }
        
        return weeklyData;
    },

    getExerciseHistory(exerciseId) {
        const history = this.getWorkoutHistory();
        const exerciseData = [];
        
        history.forEach(session => {
            if (session.exercises) {
                session.exercises.forEach(ex => {
                    if (ex.exerciseId === exerciseId && ex.sets) {
                        // Find best set (highest weight)
                        let bestSet = null;
                        ex.sets.forEach(set => {
                            if (set.completed && set.weight) {
                                if (!bestSet || set.weight > bestSet.weight) {
                                    bestSet = set;
                                }
                            }
                        });
                        
                        if (bestSet) {
                            exerciseData.push({
                                date: session.completedAt,
                                weight: bestSet.weight,
                                reps: bestSet.reps
                            });
                        }
                    }
                });
            }
        });
        
        return exerciseData.reverse(); // Oldest first
    },

    // ==================== PERSONAL RECORDS ====================
    getPersonalRecords() {
        const prs = localStorage.getItem(this.KEYS.PERSONAL_RECORDS);
        return prs ? JSON.parse(prs) : {};
    },

    updatePersonalRecord(exerciseId, weight, reps, date) {
        const prs = this.getPersonalRecords();
        const estimated1RM = this.calculate1RM(weight, reps);
        
        if (!prs[exerciseId] || estimated1RM > prs[exerciseId].estimated1RM) {
            const wasNewPR = !!prs[exerciseId];
            prs[exerciseId] = {
                weight,
                reps,
                estimated1RM,
                date: date || new Date().toISOString()
            };
            localStorage.setItem(this.KEYS.PERSONAL_RECORDS, JSON.stringify(prs));
            return { isNew: true, wasBroken: wasNewPR, pr: prs[exerciseId] };
        }
        
        return { isNew: false };
    },

    calculate1RM(weight, reps) {
        if (reps === 1) return weight;
        // Brzycki formula
        return Math.round(weight * (36 / (37 - reps)));
    },

    // ==================== FAVORITES ====================
    getFavorites() {
        const favorites = localStorage.getItem(this.KEYS.FAVORITES);
        return favorites ? JSON.parse(favorites) : [];
    },

    toggleFavorite(exerciseId) {
        const favorites = this.getFavorites();
        const index = favorites.indexOf(exerciseId);
        
        if (index >= 0) {
            favorites.splice(index, 1);
        } else {
            favorites.push(exerciseId);
        }
        
        localStorage.setItem(this.KEYS.FAVORITES, JSON.stringify(favorites));
        return index < 0; // Returns true if added, false if removed
    },

    isFavorite(exerciseId) {
        return this.getFavorites().includes(exerciseId);
    },

    // ==================== DATA EXPORT/IMPORT ====================
    exportAllData() {
        const data = {
            version: '2.0.0',
            exportDate: new Date().toISOString(),
            profile: this.getProfile(),
            settings: this.getSettings(),
            customWorkouts: this.getCustomWorkouts(),
            workoutHistory: this.getWorkoutHistory(),
            favorites: this.getFavorites(),
            personalRecords: this.getPersonalRecords()
        };
        return JSON.stringify(data, null, 2);
    },

    importData(jsonString) {
        try {
            const data = JSON.parse(jsonString);
            
            if (data.profile) {
                localStorage.setItem(this.KEYS.USER_PROFILE, JSON.stringify(data.profile));
            }
            if (data.settings) {
                localStorage.setItem(this.KEYS.SETTINGS, JSON.stringify(data.settings));
            }
            if (data.customWorkouts) {
                localStorage.setItem(this.KEYS.CUSTOM_WORKOUTS, JSON.stringify(data.customWorkouts));
            }
            if (data.workoutHistory) {
                localStorage.setItem(this.KEYS.WORKOUT_HISTORY, JSON.stringify(data.workoutHistory));
            }
            if (data.favorites) {
                localStorage.setItem(this.KEYS.FAVORITES, JSON.stringify(data.favorites));
            }
            if (data.personalRecords) {
                localStorage.setItem(this.KEYS.PERSONAL_RECORDS, JSON.stringify(data.personalRecords));
            }
            
            return true;
        } catch (e) {
            console.error('Import failed:', e);
            return false;
        }
    },

    clearAllData() {
        Object.values(this.KEYS).forEach(key => {
            localStorage.removeItem(key);
        });
    }
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Storage;
}
