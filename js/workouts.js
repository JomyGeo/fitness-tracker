// Preset Workout Plans
// Based on the user's custom 6-day plan + additional common splits

const PRESET_WORKOUTS = [
    // ==================== USER'S CUSTOM 6-DAY PLAN ====================
    {
        id: 'day1-chest-triceps',
        name: 'Day 1: Chest & Triceps',
        description: 'Build upper body pressing strength with chest and triceps focus',
        category: 'custom',
        duration: '45-60 min',
        difficulty: 'intermediate',
        targetMuscles: ['chest', 'triceps'],
        exercises: [
            { exerciseId: 'bench-press', sets: 4, reps: '8-10', rest: 90 },
            { exerciseId: 'incline-bench-press', sets: 3, reps: '10-12', rest: 90 },
            { exerciseId: 'dumbbell-flyes', sets: 3, reps: '12-15', rest: 60 },
            { exerciseId: 'cable-crossover', sets: 3, reps: '12-15', rest: 60 },
            { exerciseId: 'tricep-pushdown', sets: 3, reps: '12-15', rest: 60 },
            { exerciseId: 'skull-crushers', sets: 3, reps: '10-12', rest: 60 },
            { exerciseId: 'overhead-tricep-extension', sets: 3, reps: '12-15', rest: 60 }
        ]
    },
    {
        id: 'day2-back-biceps',
        name: 'Day 2: Back & Biceps',
        description: 'Develop a strong, wide back with bicep work',
        category: 'custom',
        duration: '45-60 min',
        difficulty: 'intermediate',
        targetMuscles: ['back', 'biceps'],
        exercises: [
            { exerciseId: 'lat-pulldown', sets: 4, reps: '10-12', rest: 90 },
            { exerciseId: 'barbell-row', sets: 4, reps: '8-10', rest: 90 },
            { exerciseId: 'seated-cable-row', sets: 3, reps: '10-12', rest: 60 },
            { exerciseId: 'face-pulls', sets: 3, reps: '15-20', rest: 60 },
            { exerciseId: 'barbell-curl', sets: 3, reps: '10-12', rest: 60 },
            { exerciseId: 'hammer-curl', sets: 3, reps: '12-15', rest: 60 },
            { exerciseId: 'concentration-curl', sets: 2, reps: '12-15', rest: 60 }
        ]
    },
    {
        id: 'day3-legs-glutes',
        name: 'Day 3: Legs & Glutes',
        description: 'Lower body strength with emphasis on glutes and quads',
        category: 'custom',
        duration: '50-65 min',
        difficulty: 'intermediate',
        targetMuscles: ['quads', 'hamstrings', 'glutes'],
        exercises: [
            { exerciseId: 'barbell-squat', sets: 4, reps: '8-10', rest: 120 },
            { exerciseId: 'leg-press', sets: 4, reps: '10-12', rest: 90 },
            { exerciseId: 'romanian-deadlift', sets: 3, reps: '10-12', rest: 90 },
            { exerciseId: 'leg-curl', sets: 3, reps: '12-15', rest: 60 },
            { exerciseId: 'leg-extension', sets: 3, reps: '12-15', rest: 60 },
            { exerciseId: 'hip-thrust', sets: 3, reps: '12-15', rest: 60 },
            { exerciseId: 'standing-calf-raise', sets: 4, reps: '15-20', rest: 45 }
        ]
    },
    {
        id: 'day4-shoulders-traps',
        name: 'Day 4: Shoulders & Traps',
        description: 'Build boulder shoulders and improve posture',
        category: 'custom',
        duration: '40-50 min',
        difficulty: 'intermediate',
        targetMuscles: ['shoulders'],
        exercises: [
            { exerciseId: 'overhead-press', sets: 4, reps: '8-10', rest: 90 },
            { exerciseId: 'dumbbell-shoulder-press', sets: 3, reps: '10-12', rest: 90 },
            { exerciseId: 'lateral-raises', sets: 4, reps: '12-15', rest: 60 },
            { exerciseId: 'front-raises', sets: 3, reps: '12-15', rest: 60 },
            { exerciseId: 'rear-delt-flyes', sets: 4, reps: '15-20', rest: 60 },
            { exerciseId: 'shrugs', sets: 4, reps: '12-15', rest: 60 },
            { exerciseId: 'face-pulls', sets: 3, reps: '15-20', rest: 60 }
        ]
    },
    {
        id: 'day5-legs-hamstrings',
        name: 'Day 5: Legs (Hamstring Focus)',
        description: 'Second leg day focusing on posterior chain',
        category: 'custom',
        duration: '45-55 min',
        difficulty: 'intermediate',
        targetMuscles: ['hamstrings', 'glutes', 'quads'],
        exercises: [
            { exerciseId: 'romanian-deadlift', sets: 4, reps: '8-10', rest: 90 },
            { exerciseId: 'bulgarian-split-squat', sets: 3, reps: '10-12 each', rest: 90 },
            { exerciseId: 'leg-curl', sets: 4, reps: '10-12', rest: 60 },
            { exerciseId: 'hip-thrust', sets: 4, reps: '10-12', rest: 90 },
            { exerciseId: 'good-morning', sets: 3, reps: '12-15', rest: 60 },
            { exerciseId: 'glute-bridge', sets: 3, reps: '15-20', rest: 45 },
            { exerciseId: 'seated-calf-raise', sets: 4, reps: '15-20', rest: 45 }
        ]
    },
    {
        id: 'day6-arms-core',
        name: 'Day 6: Arms & Core',
        description: 'Arm pump day with core strengthening',
        category: 'custom',
        duration: '40-50 min',
        difficulty: 'intermediate',
        targetMuscles: ['biceps', 'triceps', 'core'],
        exercises: [
            { exerciseId: 'barbell-curl', sets: 4, reps: '10-12', rest: 60 },
            { exerciseId: 'close-grip-bench', sets: 4, reps: '8-10', rest: 90 },
            { exerciseId: 'hammer-curl', sets: 3, reps: '12-15', rest: 60 },
            { exerciseId: 'tricep-pushdown', sets: 3, reps: '12-15', rest: 60 },
            { exerciseId: 'preacher-curl', sets: 3, reps: '10-12', rest: 60 },
            { exerciseId: 'tricep-kickback', sets: 3, reps: '12-15', rest: 60 },
            { exerciseId: 'plank', sets: 3, reps: '45-60 sec', rest: 45 },
            { exerciseId: 'hanging-leg-raises', sets: 3, reps: '12-15', rest: 60 },
            { exerciseId: 'russian-twist', sets: 3, reps: '20 total', rest: 45 }
        ]
    },

    // ==================== CLASSIC SPLITS ====================
    {
        id: 'ppl-push',
        name: 'Push Day (PPL)',
        description: 'Classic Push/Pull/Legs split - Push day',
        category: 'ppl',
        duration: '60-75 min',
        difficulty: 'intermediate',
        targetMuscles: ['chest', 'shoulders', 'triceps'],
        exercises: [
            { exerciseId: 'bench-press', sets: 4, reps: '6-8', rest: 120 },
            { exerciseId: 'overhead-press', sets: 4, reps: '8-10', rest: 90 },
            { exerciseId: 'incline-bench-press', sets: 3, reps: '8-10', rest: 90 },
            { exerciseId: 'lateral-raises', sets: 4, reps: '12-15', rest: 60 },
            { exerciseId: 'dumbbell-flyes', sets: 3, reps: '12-15', rest: 60 },
            { exerciseId: 'tricep-pushdown', sets: 3, reps: '12-15', rest: 60 },
            { exerciseId: 'overhead-tricep-extension', sets: 3, reps: '12-15', rest: 60 }
        ]
    },
    {
        id: 'ppl-pull',
        name: 'Pull Day (PPL)',
        description: 'Classic Push/Pull/Legs split - Pull day',
        category: 'ppl',
        duration: '60-75 min',
        difficulty: 'intermediate',
        targetMuscles: ['back', 'biceps'],
        exercises: [
            { exerciseId: 'deadlift', sets: 4, reps: '5-6', rest: 180 },
            { exerciseId: 'pull-ups', sets: 4, reps: '6-10', rest: 90 },
            { exerciseId: 'barbell-row', sets: 4, reps: '8-10', rest: 90 },
            { exerciseId: 'face-pulls', sets: 4, reps: '15-20', rest: 60 },
            { exerciseId: 'dumbbell-row', sets: 3, reps: '10-12', rest: 60 },
            { exerciseId: 'barbell-curl', sets: 3, reps: '10-12', rest: 60 },
            { exerciseId: 'hammer-curl', sets: 3, reps: '12-15', rest: 60 }
        ]
    },
    {
        id: 'ppl-legs',
        name: 'Leg Day (PPL)',
        description: 'Classic Push/Pull/Legs split - Leg day',
        category: 'ppl',
        duration: '60-75 min',
        difficulty: 'intermediate',
        targetMuscles: ['quads', 'hamstrings', 'glutes', 'calves'],
        exercises: [
            { exerciseId: 'barbell-squat', sets: 4, reps: '6-8', rest: 180 },
            { exerciseId: 'romanian-deadlift', sets: 4, reps: '8-10', rest: 90 },
            { exerciseId: 'leg-press', sets: 3, reps: '10-12', rest: 90 },
            { exerciseId: 'leg-curl', sets: 3, reps: '12-15', rest: 60 },
            { exerciseId: 'leg-extension', sets: 3, reps: '12-15', rest: 60 },
            { exerciseId: 'standing-calf-raise', sets: 4, reps: '12-15', rest: 60 },
            { exerciseId: 'seated-calf-raise', sets: 3, reps: '15-20', rest: 45 }
        ]
    },

    // ==================== FULL BODY WORKOUTS ====================
    {
        id: 'full-body-a',
        name: 'Full Body A',
        description: 'Compound-focused full body workout',
        category: 'fullbody',
        duration: '50-60 min',
        difficulty: 'beginner',
        targetMuscles: ['full-body'],
        exercises: [
            { exerciseId: 'barbell-squat', sets: 3, reps: '8-10', rest: 120 },
            { exerciseId: 'bench-press', sets: 3, reps: '8-10', rest: 90 },
            { exerciseId: 'barbell-row', sets: 3, reps: '8-10', rest: 90 },
            { exerciseId: 'overhead-press', sets: 3, reps: '8-10', rest: 90 },
            { exerciseId: 'romanian-deadlift', sets: 3, reps: '10-12', rest: 90 },
            { exerciseId: 'plank', sets: 3, reps: '30-45 sec', rest: 45 }
        ]
    },
    {
        id: 'full-body-b',
        name: 'Full Body B',
        description: 'Variation of full body workout',
        category: 'fullbody',
        duration: '50-60 min',
        difficulty: 'beginner',
        targetMuscles: ['full-body'],
        exercises: [
            { exerciseId: 'deadlift', sets: 3, reps: '6-8', rest: 180 },
            { exerciseId: 'dumbbell-press', sets: 3, reps: '10-12', rest: 90 },
            { exerciseId: 'lat-pulldown', sets: 3, reps: '10-12', rest: 90 },
            { exerciseId: 'lunges', sets: 3, reps: '10 each', rest: 90 },
            { exerciseId: 'dumbbell-shoulder-press', sets: 3, reps: '10-12', rest: 90 },
            { exerciseId: 'bicycle-crunch', sets: 3, reps: '20', rest: 45 }
        ]
    },

    // ==================== UPPER/LOWER SPLIT ====================
    {
        id: 'upper-body',
        name: 'Upper Body',
        description: 'Complete upper body workout',
        category: 'upperlower',
        duration: '55-65 min',
        difficulty: 'intermediate',
        targetMuscles: ['chest', 'back', 'shoulders', 'biceps', 'triceps'],
        exercises: [
            { exerciseId: 'bench-press', sets: 4, reps: '8-10', rest: 90 },
            { exerciseId: 'barbell-row', sets: 4, reps: '8-10', rest: 90 },
            { exerciseId: 'overhead-press', sets: 3, reps: '10-12', rest: 90 },
            { exerciseId: 'lat-pulldown', sets: 3, reps: '10-12', rest: 60 },
            { exerciseId: 'dumbbell-flyes', sets: 3, reps: '12-15', rest: 60 },
            { exerciseId: 'face-pulls', sets: 3, reps: '15-20', rest: 60 },
            { exerciseId: 'barbell-curl', sets: 3, reps: '10-12', rest: 60 },
            { exerciseId: 'tricep-pushdown', sets: 3, reps: '12-15', rest: 60 }
        ]
    },
    {
        id: 'lower-body',
        name: 'Lower Body',
        description: 'Complete lower body workout',
        category: 'upperlower',
        duration: '50-60 min',
        difficulty: 'intermediate',
        targetMuscles: ['quads', 'hamstrings', 'glutes', 'calves'],
        exercises: [
            { exerciseId: 'barbell-squat', sets: 4, reps: '6-8', rest: 180 },
            { exerciseId: 'romanian-deadlift', sets: 4, reps: '8-10', rest: 90 },
            { exerciseId: 'leg-press', sets: 3, reps: '10-12', rest: 90 },
            { exerciseId: 'leg-curl', sets: 3, reps: '12-15', rest: 60 },
            { exerciseId: 'hip-thrust', sets: 3, reps: '12-15', rest: 90 },
            { exerciseId: 'standing-calf-raise', sets: 4, reps: '12-15', rest: 60 },
            { exerciseId: 'plank', sets: 3, reps: '45 sec', rest: 45 }
        ]
    },

    // ==================== HOME WORKOUTS ====================
    {
        id: 'home-full-body',
        name: 'Home Full Body',
        description: 'No equipment needed - full body workout',
        category: 'home',
        duration: '30-40 min',
        difficulty: 'beginner',
        targetMuscles: ['full-body'],
        exercises: [
            { exerciseId: 'push-ups', sets: 4, reps: '10-15', rest: 60 },
            { exerciseId: 'lunges', sets: 3, reps: '12 each', rest: 60 },
            { exerciseId: 'glute-bridge', sets: 3, reps: '15-20', rest: 45 },
            { exerciseId: 'plank', sets: 3, reps: '30-45 sec', rest: 45 },
            { exerciseId: 'mountain-climbers', sets: 3, reps: '20', rest: 45 },
            { exerciseId: 'bicycle-crunch', sets: 3, reps: '20', rest: 45 },
            { exerciseId: 'burpees', sets: 3, reps: '10', rest: 60 }
        ]
    },
    {
        id: 'home-upper',
        name: 'Home Upper Body',
        description: 'Bodyweight upper body workout',
        category: 'home',
        duration: '25-35 min',
        difficulty: 'beginner',
        targetMuscles: ['chest', 'back', 'shoulders', 'triceps'],
        exercises: [
            { exerciseId: 'push-ups', sets: 4, reps: '12-15', rest: 60 },
            { exerciseId: 'diamond-pushups', sets: 3, reps: '8-12', rest: 60 },
            { exerciseId: 'tricep-dips', sets: 3, reps: '10-15', rest: 60 },
            { exerciseId: 'plank', sets: 3, reps: '45 sec', rest: 45 },
            { exerciseId: 'bird-dog', sets: 3, reps: '10 each', rest: 45 },
            { exerciseId: 'mountain-climbers', sets: 3, reps: '20', rest: 45 }
        ]
    },
    {
        id: 'home-lower',
        name: 'Home Lower Body',
        description: 'Bodyweight leg workout',
        category: 'home',
        duration: '25-35 min',
        difficulty: 'beginner',
        targetMuscles: ['quads', 'hamstrings', 'glutes'],
        exercises: [
            { exerciseId: 'goblet-squat', sets: 4, reps: '15-20', rest: 60, note: 'Use water bottle or bag' },
            { exerciseId: 'lunges', sets: 3, reps: '12 each', rest: 60 },
            { exerciseId: 'glute-bridge', sets: 4, reps: '15-20', rest: 45 },
            { exerciseId: 'step-ups', sets: 3, reps: '12 each', rest: 60 },
            { exerciseId: 'bird-dog', sets: 3, reps: '10 each', rest: 45 },
            { exerciseId: 'dead-bug', sets: 3, reps: '10 each', rest: 45 }
        ]
    },

    // ==================== QUICK WORKOUTS ====================
    {
        id: 'quick-chest',
        name: 'Quick Chest Pump',
        description: '20-minute chest blaster',
        category: 'quick',
        duration: '20 min',
        difficulty: 'beginner',
        targetMuscles: ['chest'],
        exercises: [
            { exerciseId: 'push-ups', sets: 3, reps: 'Max', rest: 60 },
            { exerciseId: 'dumbbell-press', sets: 3, reps: '12-15', rest: 60 },
            { exerciseId: 'dumbbell-flyes', sets: 3, reps: '12-15', rest: 60 },
            { exerciseId: 'push-ups', sets: 2, reps: 'Failure', rest: 45 }
        ]
    },
    {
        id: 'quick-arms',
        name: 'Quick Arm Pump',
        description: '20-minute arm workout',
        category: 'quick',
        duration: '20 min',
        difficulty: 'beginner',
        targetMuscles: ['biceps', 'triceps'],
        exercises: [
            { exerciseId: 'dumbbell-curl', sets: 3, reps: '12-15', rest: 45 },
            { exerciseId: 'tricep-pushdown', sets: 3, reps: '12-15', rest: 45 },
            { exerciseId: 'hammer-curl', sets: 3, reps: '12-15', rest: 45 },
            { exerciseId: 'tricep-kickback', sets: 3, reps: '12-15', rest: 45 }
        ]
    },
    {
        id: 'quick-abs',
        name: 'Core Crusher',
        description: '15-minute ab workout',
        category: 'quick',
        duration: '15 min',
        difficulty: 'intermediate',
        targetMuscles: ['core'],
        exercises: [
            { exerciseId: 'plank', sets: 3, reps: '45 sec', rest: 30 },
            { exerciseId: 'bicycle-crunch', sets: 3, reps: '20', rest: 30 },
            { exerciseId: 'leg-raises', sets: 3, reps: '15', rest: 30 },
            { exerciseId: 'russian-twist', sets: 3, reps: '20', rest: 30 },
            { exerciseId: 'mountain-climbers', sets: 3, reps: '20', rest: 30 },
            { exerciseId: 'dead-bug', sets: 3, reps: '10 each', rest: 30 }
        ]
    }
];

// Workout categories for filtering
const WORKOUT_CATEGORIES = [
    { id: 'all', name: 'All Workouts' },
    { id: 'custom', name: "Jomy's 6-Day Split" },
    { id: 'ppl', name: 'Push/Pull/Legs' },
    { id: 'fullbody', name: 'Full Body' },
    { id: 'upperlower', name: 'Upper/Lower' },
    { id: 'home', name: 'Home Workouts' },
    { id: 'quick', name: 'Quick Workouts' }
];

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { PRESET_WORKOUTS, WORKOUT_CATEGORIES };
}
