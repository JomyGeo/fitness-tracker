// Comprehensive Exercise Database - 100+ exercises
// Each exercise includes: name, muscle group, equipment, instructions, tips, gif URL

const EXERCISES_DB = [
    // ==================== CHEST ====================
    {
        id: 'bench-press',
        name: 'Barbell Bench Press',
        muscle: 'chest',
        secondaryMuscles: ['triceps', 'shoulders'],
        equipment: 'barbell',
        difficulty: 'intermediate',
        instructions: [
            'Lie flat on a bench with feet firmly on the floor',
            'Grip the bar slightly wider than shoulder-width',
            'Unrack the bar and lower it to mid-chest',
            'Press the bar back up until arms are fully extended',
            'Keep your back slightly arched and shoulders pinched'
        ],
        tips: 'Keep wrists straight and elbows at 45-degree angle to protect shoulders.',
        gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Bench-Press.gif',
        youtubeId: 'rT7DgCr-3pg'
    },
    {
        id: 'incline-bench-press',
        name: 'Incline Bench Press',
        muscle: 'chest',
        secondaryMuscles: ['triceps', 'shoulders'],
        equipment: 'barbell',
        difficulty: 'intermediate',
        instructions: [
            'Set bench to 30-45 degree incline',
            'Lie back and grip bar slightly wider than shoulders',
            'Unrack and lower bar to upper chest',
            'Press up until arms are extended',
            'Control the weight throughout the movement'
        ],
        tips: 'Targets upper chest. Don\'t set incline too high or it becomes a shoulder exercise.',
        gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Incline-Barbell-Bench-Press.gif',
        youtubeId: 'SrqOu55lrYU'
    },
    {
        id: 'dumbbell-flyes',
        name: 'Dumbbell Flyes',
        muscle: 'chest',
        secondaryMuscles: ['shoulders'],
        equipment: 'dumbbell',
        difficulty: 'beginner',
        instructions: [
            'Lie on flat bench holding dumbbells above chest',
            'With slight bend in elbows, lower arms out to sides',
            'Feel the stretch in your chest at the bottom',
            'Bring dumbbells back together in an arc motion',
            'Squeeze chest at the top'
        ],
        tips: 'Use lighter weight and focus on the stretch. Don\'t go too deep to avoid shoulder injury.',
        gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Fly.gif',
        youtubeId: 'eozdVDA78K0'
    },
    {
        id: 'push-ups',
        name: 'Push-Ups',
        muscle: 'chest',
        secondaryMuscles: ['triceps', 'shoulders', 'core'],
        equipment: 'bodyweight',
        difficulty: 'beginner',
        instructions: [
            'Start in plank position with hands shoulder-width apart',
            'Keep body in straight line from head to heels',
            'Lower chest to the ground by bending elbows',
            'Push back up until arms are fully extended',
            'Keep core tight throughout'
        ],
        tips: 'For easier version, do on knees. For harder, elevate feet or do diamond push-ups.',
        gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Push-Up.gif',
        youtubeId: 'IODxDxX7oi4'
    },
    {
        id: 'cable-crossover',
        name: 'Cable Crossover',
        muscle: 'chest',
        secondaryMuscles: ['shoulders'],
        equipment: 'cable',
        difficulty: 'intermediate',
        instructions: [
            'Stand between cable machines with pulleys set high',
            'Grab handles and step forward into split stance',
            'With slight bend in elbows, bring handles down and together',
            'Squeeze chest at the bottom of the movement',
            'Slowly return to starting position'
        ],
        tips: 'Keep constant tension on the cables. Great for chest definition.',
        gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Cable-Crossover.gif',
        youtubeId: 'taI4XduLpTk'
    },
    {
        id: 'dumbbell-press',
        name: 'Dumbbell Bench Press',
        muscle: 'chest',
        secondaryMuscles: ['triceps', 'shoulders'],
        equipment: 'dumbbell',
        difficulty: 'beginner',
        instructions: [
            'Lie on flat bench with dumbbell in each hand',
            'Hold dumbbells at chest level, palms facing forward',
            'Press dumbbells up until arms are extended',
            'Lower back down with control',
            'Keep feet flat on floor'
        ],
        tips: 'Allows greater range of motion than barbell. Good for fixing muscle imbalances.',
        gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Press.gif',
        youtubeId: 'VmB1G1K7v94'
    },
    {
        id: 'decline-bench-press',
        name: 'Decline Bench Press',
        muscle: 'chest',
        secondaryMuscles: ['triceps'],
        equipment: 'barbell',
        difficulty: 'intermediate',
        instructions: [
            'Lie on decline bench with feet secured',
            'Grip bar slightly wider than shoulder-width',
            'Unrack and lower bar to lower chest',
            'Press up until arms are fully extended',
            'Keep shoulders back and down'
        ],
        tips: 'Targets lower chest. Use a spotter for safety.',
        gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Decline-Barbell-Bench-Press.gif',
        youtubeId: 'LfyQBUKR8SE'
    },
    {
        id: 'chest-dips',
        name: 'Chest Dips',
        muscle: 'chest',
        secondaryMuscles: ['triceps', 'shoulders'],
        equipment: 'bodyweight',
        difficulty: 'intermediate',
        instructions: [
            'Grip parallel bars and lift yourself up',
            'Lean forward slightly to target chest',
            'Lower body by bending elbows to 90 degrees',
            'Push back up to starting position',
            'Keep elbows slightly flared out'
        ],
        tips: 'Lean forward more for chest focus, stay upright for triceps focus.',
        gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Chest-Dip.gif',
        youtubeId: 'wjUmnZH528Y'
    },

    // ==================== BACK ====================
    {
        id: 'lat-pulldown',
        name: 'Lat Pulldown',
        muscle: 'back',
        secondaryMuscles: ['biceps', 'shoulders'],
        equipment: 'cable',
        difficulty: 'beginner',
        instructions: [
            'Sit at lat pulldown machine with thighs secured',
            'Grip bar wider than shoulder-width',
            'Pull bar down to upper chest',
            'Squeeze shoulder blades together at bottom',
            'Slowly return to starting position'
        ],
        tips: 'Don\'t lean back excessively. Focus on pulling with your back, not arms.',
        gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Lat-Pulldown.gif',
        youtubeId: 'CAwf7n6Luuc'
    },
    {
        id: 'pull-ups',
        name: 'Pull-Ups',
        muscle: 'back',
        secondaryMuscles: ['biceps', 'shoulders'],
        equipment: 'bodyweight',
        difficulty: 'intermediate',
        instructions: [
            'Hang from pull-up bar with overhand grip',
            'Grip slightly wider than shoulder-width',
            'Pull yourself up until chin is over bar',
            'Lower with control to full hang',
            'Keep core engaged throughout'
        ],
        tips: 'If you can\'t do full pull-ups, use assisted machine or resistance bands.',
        gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Pull-up.gif',
        youtubeId: 'eGo4IYlbE5g'
    },
    {
        id: 'barbell-row',
        name: 'Barbell Row',
        muscle: 'back',
        secondaryMuscles: ['biceps', 'core'],
        equipment: 'barbell',
        difficulty: 'intermediate',
        instructions: [
            'Stand with feet shoulder-width, knees slightly bent',
            'Hinge at hips, keeping back flat',
            'Grip bar slightly wider than shoulder-width',
            'Pull bar to lower chest/upper abdomen',
            'Lower with control and repeat'
        ],
        tips: 'Keep back flat, don\'t round. Pull elbows back, not up.',
        gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Bent-Over-Row.gif',
        youtubeId: 'FWJR5Ve8bnQ'
    },
    {
        id: 'dumbbell-row',
        name: 'Single-Arm Dumbbell Row',
        muscle: 'back',
        secondaryMuscles: ['biceps'],
        equipment: 'dumbbell',
        difficulty: 'beginner',
        instructions: [
            'Place one knee and hand on bench',
            'Hold dumbbell in other hand, arm hanging down',
            'Pull dumbbell to hip, elbow close to body',
            'Squeeze shoulder blade at top',
            'Lower with control and repeat'
        ],
        tips: 'Keep back flat and parallel to floor. Don\'t rotate torso.',
        gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Row.gif',
        youtubeId: 'roCP6wCXPqo'
    },
    {
        id: 'seated-cable-row',
        name: 'Seated Cable Row',
        muscle: 'back',
        secondaryMuscles: ['biceps'],
        equipment: 'cable',
        difficulty: 'beginner',
        instructions: [
            'Sit at cable row machine with feet on platform',
            'Grab handle with both hands',
            'Keep back straight, pull handle to abdomen',
            'Squeeze shoulder blades together',
            'Extend arms back to start with control'
        ],
        tips: 'Don\'t lean too far forward or back. Keep movement controlled.',
        gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Seated-Cable-Row.gif',
        youtubeId: 'GZbfZ033f74'
    },
    {
        id: 'deadlift',
        name: 'Conventional Deadlift',
        muscle: 'back',
        secondaryMuscles: ['glutes', 'hamstrings', 'core'],
        equipment: 'barbell',
        difficulty: 'advanced',
        instructions: [
            'Stand with feet hip-width, bar over mid-foot',
            'Hinge at hips and grip bar just outside knees',
            'Keep back flat, chest up, core braced',
            'Drive through heels, extending hips and knees',
            'Stand tall, then reverse the movement'
        ],
        tips: 'This is a hip hinge, not a squat. Keep bar close to body throughout.',
        gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Deadlift.gif',
        youtubeId: 'op9kVnSso6Q'
    },
    {
        id: 't-bar-row',
        name: 'T-Bar Row',
        muscle: 'back',
        secondaryMuscles: ['biceps', 'core'],
        equipment: 'barbell',
        difficulty: 'intermediate',
        instructions: [
            'Straddle T-bar or landmine setup',
            'Bend at hips with back flat',
            'Grip handles and pull to chest',
            'Squeeze back muscles at top',
            'Lower with control'
        ],
        tips: 'Great for building back thickness. Keep core tight.',
        gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/T-Bar-Row.gif',
        youtubeId: 'j3Igk5nyZE4'
    },
    {
        id: 'face-pulls',
        name: 'Face Pulls',
        muscle: 'back',
        secondaryMuscles: ['shoulders'],
        equipment: 'cable',
        difficulty: 'beginner',
        instructions: [
            'Set cable at upper chest height with rope attachment',
            'Grip rope with thumbs pointing back',
            'Pull rope to face, separating hands',
            'Squeeze rear delts and upper back',
            'Return with control'
        ],
        tips: 'Excellent for posture and shoulder health. Do these regularly.',
        gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Face-Pull.gif',
        youtubeId: 'rep-qVOkqgk'
    },
    {
        id: 'chin-ups',
        name: 'Chin-Ups',
        muscle: 'back',
        secondaryMuscles: ['biceps'],
        equipment: 'bodyweight',
        difficulty: 'intermediate',
        instructions: [
            'Hang from bar with underhand (supinated) grip',
            'Grip shoulder-width apart',
            'Pull yourself up until chin clears bar',
            'Lower with control to full extension',
            'Keep core engaged'
        ],
        tips: 'Easier than pull-ups due to bicep involvement. Great for beginners.',
        gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Chin-Up.gif',
        youtubeId: 'brhRXlOhsAM'
    },

    // ==================== SHOULDERS ====================
    {
        id: 'overhead-press',
        name: 'Barbell Overhead Press',
        muscle: 'shoulders',
        secondaryMuscles: ['triceps', 'core'],
        equipment: 'barbell',
        difficulty: 'intermediate',
        instructions: [
            'Stand with feet shoulder-width apart',
            'Hold bar at shoulder level, grip just outside shoulders',
            'Press bar overhead until arms are fully extended',
            'Lower bar back to shoulders with control',
            'Keep core tight and don\'t lean back'
        ],
        tips: 'Keep the bar path straight. Tuck chin to let bar pass your face.',
        gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Overhead-Press.gif',
        youtubeId: '2yjwXTZQDDI'
    },
    {
        id: 'dumbbell-shoulder-press',
        name: 'Dumbbell Shoulder Press',
        muscle: 'shoulders',
        secondaryMuscles: ['triceps'],
        equipment: 'dumbbell',
        difficulty: 'beginner',
        instructions: [
            'Sit on bench with back support',
            'Hold dumbbells at shoulder height, palms forward',
            'Press dumbbells overhead until arms are extended',
            'Lower with control to shoulder level',
            'Keep core engaged throughout'
        ],
        tips: 'Don\'t lock out elbows completely at the top. Control the weight.',
        gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Shoulder-Press.gif',
        youtubeId: 'qEwKCR5JCog'
    },
    {
        id: 'lateral-raises',
        name: 'Lateral Raises',
        muscle: 'shoulders',
        secondaryMuscles: [],
        equipment: 'dumbbell',
        difficulty: 'beginner',
        instructions: [
            'Stand with dumbbells at sides',
            'Raise arms out to sides until parallel to floor',
            'Keep slight bend in elbows',
            'Lower with control',
            'Don\'t swing or use momentum'
        ],
        tips: 'Use lighter weight for better form. Lead with elbows, not hands.',
        gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Lateral-Raise.gif',
        youtubeId: '3VcKaXpzqRo'
    },
    {
        id: 'front-raises',
        name: 'Front Raises',
        muscle: 'shoulders',
        secondaryMuscles: ['chest'],
        equipment: 'dumbbell',
        difficulty: 'beginner',
        instructions: [
            'Stand with dumbbells in front of thighs',
            'Raise one or both arms in front to shoulder height',
            'Keep arms straight with slight elbow bend',
            'Lower with control',
            'Alternate arms or do both together'
        ],
        tips: 'Don\'t go above shoulder height. Control the negative.',
        gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Front-Raise.gif',
        youtubeId: '-t7fuZ0KhDA'
    },
    {
        id: 'rear-delt-flyes',
        name: 'Rear Delt Flyes',
        muscle: 'shoulders',
        secondaryMuscles: ['back'],
        equipment: 'dumbbell',
        difficulty: 'beginner',
        instructions: [
            'Bend at hips until torso is nearly parallel to floor',
            'Hold dumbbells hanging below chest',
            'Raise arms out to sides, squeezing rear delts',
            'Lower with control',
            'Keep slight bend in elbows throughout'
        ],
        tips: 'Focus on squeezing shoulder blades together. Use light weight.',
        gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Rear-Lateral-Raise.gif',
        youtubeId: 'EA7u4Q_8HQ0'
    },
    {
        id: 'arnold-press',
        name: 'Arnold Press',
        muscle: 'shoulders',
        secondaryMuscles: ['triceps'],
        equipment: 'dumbbell',
        difficulty: 'intermediate',
        instructions: [
            'Start with dumbbells in front, palms facing you',
            'Press up while rotating palms to face forward',
            'At top, palms should face forward',
            'Reverse the motion on the way down',
            'Keep movement controlled throughout'
        ],
        tips: 'Named after Arnold Schwarzenegger. Great for all three delt heads.',
        gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Arnold-Press.gif',
        youtubeId: '6Z15_WdXmVw'
    },
    {
        id: 'upright-row',
        name: 'Upright Row',
        muscle: 'shoulders',
        secondaryMuscles: ['traps', 'biceps'],
        equipment: 'barbell',
        difficulty: 'intermediate',
        instructions: [
            'Stand holding bar with narrow grip',
            'Pull bar straight up to chin level',
            'Keep elbows higher than hands',
            'Lower with control',
            'Keep bar close to body'
        ],
        tips: 'Can cause shoulder impingement. Use wider grip if uncomfortable.',
        gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Upright-Row.gif',
        youtubeId: 'amCU-ziHITM'
    },
    {
        id: 'shrugs',
        name: 'Dumbbell Shrugs',
        muscle: 'shoulders',
        secondaryMuscles: ['traps'],
        equipment: 'dumbbell',
        difficulty: 'beginner',
        instructions: [
            'Stand with dumbbells at sides',
            'Shrug shoulders straight up toward ears',
            'Hold at top briefly',
            'Lower with control',
            'Don\'t roll shoulders'
        ],
        tips: 'Pure up and down motion. No need to roll shoulders.',
        gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Shrug.gif',
        youtubeId: 'cJRVVxmytaM'
    },

    // ==================== ARMS (BICEPS) ====================
    {
        id: 'barbell-curl',
        name: 'Barbell Curl',
        muscle: 'biceps',
        secondaryMuscles: ['forearms'],
        equipment: 'barbell',
        difficulty: 'beginner',
        instructions: [
            'Stand with feet shoulder-width, holding barbell',
            'Keep elbows close to sides',
            'Curl bar up by flexing biceps',
            'Squeeze at top, then lower with control',
            'Don\'t swing or use momentum'
        ],
        tips: 'Keep upper arms stationary. Don\'t lean back to lift more weight.',
        gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Curl.gif',
        youtubeId: 'kwG2ipFRgfo'
    },
    {
        id: 'dumbbell-curl',
        name: 'Dumbbell Bicep Curl',
        muscle: 'biceps',
        secondaryMuscles: ['forearms'],
        equipment: 'dumbbell',
        difficulty: 'beginner',
        instructions: [
            'Stand with dumbbells at sides, palms forward',
            'Curl weights up while keeping upper arms still',
            'Squeeze biceps at the top',
            'Lower with control',
            'Can alternate arms or do both together'
        ],
        tips: 'Supinate (rotate) wrists as you curl for full bicep contraction.',
        gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Curl.gif',
        youtubeId: 'ykJmrZ5v0Oo'
    },
    {
        id: 'hammer-curl',
        name: 'Hammer Curls',
        muscle: 'biceps',
        secondaryMuscles: ['forearms', 'brachialis'],
        equipment: 'dumbbell',
        difficulty: 'beginner',
        instructions: [
            'Stand with dumbbells at sides, palms facing each other',
            'Curl weights up keeping neutral grip throughout',
            'Squeeze at top',
            'Lower with control',
            'Keep elbows stationary'
        ],
        tips: 'Great for forearm and brachialis development. Builds arm thickness.',
        gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Hammer-Curl.gif',
        youtubeId: 'zC3nLlEvin4'
    },
    {
        id: 'preacher-curl',
        name: 'Preacher Curl',
        muscle: 'biceps',
        secondaryMuscles: [],
        equipment: 'barbell',
        difficulty: 'intermediate',
        instructions: [
            'Sit at preacher bench with arms over pad',
            'Hold barbell or EZ-bar with underhand grip',
            'Curl weight up, keeping upper arms on pad',
            'Squeeze at top, then lower with control',
            'Don\'t fully extend at bottom to keep tension'
        ],
        tips: 'Isolates biceps by preventing cheating. Great for peak.',
        gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Preacher-Curl.gif',
        youtubeId: 'fIWP-FRFNU0'
    },
    {
        id: 'concentration-curl',
        name: 'Concentration Curl',
        muscle: 'biceps',
        secondaryMuscles: [],
        equipment: 'dumbbell',
        difficulty: 'beginner',
        instructions: [
            'Sit on bench with legs spread',
            'Rest elbow on inner thigh',
            'Curl dumbbell up toward shoulder',
            'Squeeze at top, then lower slowly',
            'Keep upper arm completely still'
        ],
        tips: 'Best exercise for bicep peak according to EMG studies.',
        gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Concentration-Curl.gif',
        youtubeId: '0AUGkch3tzc'
    },
    {
        id: 'cable-curl',
        name: 'Cable Bicep Curl',
        muscle: 'biceps',
        secondaryMuscles: ['forearms'],
        equipment: 'cable',
        difficulty: 'beginner',
        instructions: [
            'Stand facing low cable with bar attachment',
            'Grip bar with underhand grip',
            'Curl bar up keeping elbows at sides',
            'Squeeze at top, lower with control',
            'Maintain constant tension'
        ],
        tips: 'Cable provides constant tension throughout the movement.',
        gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Cable-Curl.gif',
        youtubeId: 'NFzTWp2qpiE'
    },

    // ==================== ARMS (TRICEPS) ====================
    {
        id: 'tricep-pushdown',
        name: 'Tricep Pushdown',
        muscle: 'triceps',
        secondaryMuscles: [],
        equipment: 'cable',
        difficulty: 'beginner',
        instructions: [
            'Stand at cable machine with bar or rope attachment',
            'Keep elbows pinned at sides',
            'Push handle down until arms are fully extended',
            'Squeeze triceps at bottom',
            'Return with control, don\'t let weight pull you'
        ],
        tips: 'Keep upper arms completely still. Only forearms should move.',
        gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Pushdown.gif',
        youtubeId: '2-LAMcpzODU'
    },
    {
        id: 'skull-crushers',
        name: 'Skull Crushers',
        muscle: 'triceps',
        secondaryMuscles: [],
        equipment: 'barbell',
        difficulty: 'intermediate',
        instructions: [
            'Lie on bench holding EZ-bar above chest',
            'Keep upper arms vertical',
            'Lower bar toward forehead by bending elbows',
            'Extend arms back to start',
            'Keep elbows pointing up, not flaring out'
        ],
        tips: 'Go behind head slightly for greater stretch. Use EZ-bar for wrist comfort.',
        gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Skull-Crusher.gif',
        youtubeId: 'd_KZxkY_0cM'
    },
    {
        id: 'overhead-tricep-extension',
        name: 'Overhead Tricep Extension',
        muscle: 'triceps',
        secondaryMuscles: [],
        equipment: 'dumbbell',
        difficulty: 'beginner',
        instructions: [
            'Hold dumbbell overhead with both hands',
            'Keep upper arms close to ears',
            'Lower dumbbell behind head by bending elbows',
            'Extend arms back up',
            'Keep core tight, don\'t arch back'
        ],
        tips: 'Great for the long head of the triceps. Can do seated or standing.',
        gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Triceps-Extension.gif',
        youtubeId: '_gsUck-7M74'
    },
    {
        id: 'tricep-dips',
        name: 'Tricep Dips',
        muscle: 'triceps',
        secondaryMuscles: ['chest', 'shoulders'],
        equipment: 'bodyweight',
        difficulty: 'intermediate',
        instructions: [
            'Grip parallel bars and lift yourself up',
            'Keep body upright (not leaning forward)',
            'Lower by bending elbows to 90 degrees',
            'Push back up to start',
            'Keep elbows close to body'
        ],
        tips: 'Stay upright for triceps focus. Lean forward for more chest.',
        gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Triceps-Dip.gif',
        youtubeId: '6kALZikXxLc'
    },
    {
        id: 'close-grip-bench',
        name: 'Close-Grip Bench Press',
        muscle: 'triceps',
        secondaryMuscles: ['chest', 'shoulders'],
        equipment: 'barbell',
        difficulty: 'intermediate',
        instructions: [
            'Lie on bench and grip bar shoulder-width or narrower',
            'Unrack and lower bar to lower chest',
            'Keep elbows close to body',
            'Press back up to start',
            'Don\'t go too narrow to avoid wrist strain'
        ],
        tips: 'Great compound movement for triceps mass. Shoulder-width grip is fine.',
        gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Close-Grip-Bench-Press.gif',
        youtubeId: 'nEF0bv2FW94'
    },
    {
        id: 'tricep-kickback',
        name: 'Tricep Kickback',
        muscle: 'triceps',
        secondaryMuscles: [],
        equipment: 'dumbbell',
        difficulty: 'beginner',
        instructions: [
            'Bend at hips with flat back, one hand on bench',
            'Hold dumbbell with upper arm parallel to floor',
            'Extend arm back until straight',
            'Squeeze tricep at top',
            'Lower with control'
        ],
        tips: 'Use light weight and focus on squeezing. Don\'t swing.',
        gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Kickback.gif',
        youtubeId: '6SS6K3lAwZ8'
    },
    {
        id: 'diamond-pushups',
        name: 'Diamond Push-Ups',
        muscle: 'triceps',
        secondaryMuscles: ['chest', 'shoulders'],
        equipment: 'bodyweight',
        difficulty: 'intermediate',
        instructions: [
            'Get in push-up position',
            'Place hands together forming diamond shape',
            'Lower chest toward hands',
            'Push back up',
            'Keep elbows close to body'
        ],
        tips: 'One of the best bodyweight tricep exercises according to research.',
        gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Diamond-Push-up.gif',
        youtubeId: 'J0DnG1_S92I'
    },

    // ==================== LEGS (QUADS) ====================
    {
        id: 'barbell-squat',
        name: 'Barbell Back Squat',
        muscle: 'quads',
        secondaryMuscles: ['glutes', 'hamstrings', 'core'],
        equipment: 'barbell',
        difficulty: 'intermediate',
        instructions: [
            'Position bar on upper back (high bar) or rear delts (low bar)',
            'Stand with feet shoulder-width or slightly wider',
            'Brace core and squat down by bending knees and hips',
            'Go to parallel or below if mobility allows',
            'Drive through whole foot to stand'
        ],
        tips: 'Keep knees tracking over toes. Don\'t let knees cave inward.',
        gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/BARBELL-SQUAT.gif',
        youtubeId: 'bEv6CCg2BC8'
    },
    {
        id: 'leg-press',
        name: 'Leg Press',
        muscle: 'quads',
        secondaryMuscles: ['glutes', 'hamstrings'],
        equipment: 'machine',
        difficulty: 'beginner',
        instructions: [
            'Sit in leg press with back flat against pad',
            'Place feet shoulder-width on platform',
            'Release safety and lower weight by bending knees',
            'Don\'t let lower back round at bottom',
            'Press back up without locking knees'
        ],
        tips: 'Higher foot placement = more glutes/hams. Lower = more quads.',
        gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Leg-Press.gif',
        youtubeId: 'IZxyjW7MPJQ'
    },
    {
        id: 'lunges',
        name: 'Walking Lunges',
        muscle: 'quads',
        secondaryMuscles: ['glutes', 'hamstrings'],
        equipment: 'bodyweight',
        difficulty: 'beginner',
        instructions: [
            'Stand tall with feet together',
            'Step forward into lunge, both knees at 90 degrees',
            'Push off front foot to bring back leg forward',
            'Continue walking forward alternating legs',
            'Keep torso upright throughout'
        ],
        tips: 'Take big steps to emphasize glutes, shorter steps for quads.',
        gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Walking-Lunge.gif',
        youtubeId: 'L8fvypPrzzs'
    },
    {
        id: 'leg-extension',
        name: 'Leg Extension',
        muscle: 'quads',
        secondaryMuscles: [],
        equipment: 'machine',
        difficulty: 'beginner',
        instructions: [
            'Sit in machine with back against pad',
            'Hook ankles under pad',
            'Extend legs until straight',
            'Squeeze quads at top',
            'Lower with control'
        ],
        tips: 'Don\'t go too heavy. Focus on squeeze at top.',
        gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/LEG-EXTENSION.gif',
        youtubeId: 'YyvSfVjQeL0'
    },
    {
        id: 'front-squat',
        name: 'Front Squat',
        muscle: 'quads',
        secondaryMuscles: ['glutes', 'core'],
        equipment: 'barbell',
        difficulty: 'advanced',
        instructions: [
            'Rest bar on front delts with elbows high',
            'Can use clean grip or crossed arms',
            'Squat down keeping torso very upright',
            'Go to parallel or below',
            'Drive up through whole foot'
        ],
        tips: 'More quad-dominant than back squat. Requires good mobility.',
        gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/FRONT-SQUAT.gif',
        youtubeId: 'm4ytaCJZpl0'
    },
    {
        id: 'goblet-squat',
        name: 'Goblet Squat',
        muscle: 'quads',
        secondaryMuscles: ['glutes', 'core'],
        equipment: 'dumbbell',
        difficulty: 'beginner',
        instructions: [
            'Hold dumbbell vertically at chest',
            'Stand with feet slightly wider than shoulders',
            'Squat down between your legs',
            'Keep chest up and back straight',
            'Push back up to standing'
        ],
        tips: 'Great for learning squat form. The weight acts as counterbalance.',
        gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Goblet-Squat.gif',
        youtubeId: 'MeIiIdhvXT4'
    },
    {
        id: 'bulgarian-split-squat',
        name: 'Bulgarian Split Squat',
        muscle: 'quads',
        secondaryMuscles: ['glutes', 'hamstrings'],
        equipment: 'dumbbell',
        difficulty: 'intermediate',
        instructions: [
            'Stand facing away from bench',
            'Place back foot on bench behind you',
            'Lower into lunge until front thigh is parallel',
            'Push through front foot to stand',
            'Keep torso upright'
        ],
        tips: 'One of the best single-leg exercises. Great for fixing imbalances.',
        gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Bulgarian-Split-Squat.gif',
        youtubeId: '2C-uNgKwPLE'
    },

    // ==================== LEGS (HAMSTRINGS/GLUTES) ====================
    {
        id: 'romanian-deadlift',
        name: 'Romanian Deadlift',
        muscle: 'hamstrings',
        secondaryMuscles: ['glutes', 'back'],
        equipment: 'barbell',
        difficulty: 'intermediate',
        instructions: [
            'Stand holding bar at hip level',
            'Push hips back while keeping legs nearly straight',
            'Lower bar along legs until hamstring stretch',
            'Keep back flat throughout',
            'Drive hips forward to return to start'
        ],
        tips: 'Think about pushing hips back, not bending forward. Slight knee bend is fine.',
        gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Romanian-Deadlift.gif',
        youtubeId: 'JCXUYuzwNrM'
    },
    {
        id: 'leg-curl',
        name: 'Lying Leg Curl',
        muscle: 'hamstrings',
        secondaryMuscles: [],
        equipment: 'machine',
        difficulty: 'beginner',
        instructions: [
            'Lie face down on leg curl machine',
            'Hook ankles under pad',
            'Curl legs up toward glutes',
            'Squeeze hamstrings at top',
            'Lower with control'
        ],
        tips: 'Don\'t lift hips off pad. Control the negative.',
        gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Leg-Curl.gif',
        youtubeId: '1Tq3QdYUuHs'
    },
    {
        id: 'hip-thrust',
        name: 'Barbell Hip Thrust',
        muscle: 'glutes',
        secondaryMuscles: ['hamstrings'],
        equipment: 'barbell',
        difficulty: 'intermediate',
        instructions: [
            'Sit on floor with upper back against bench',
            'Roll barbell over hips (use pad for comfort)',
            'Drive through heels to lift hips',
            'Squeeze glutes hard at top',
            'Lower with control'
        ],
        tips: 'The best glute exercise according to research. Keep chin tucked.',
        gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Hip-Thrust.gif',
        youtubeId: 'SEdqd1n0cvg'
    },
    {
        id: 'glute-bridge',
        name: 'Glute Bridge',
        muscle: 'glutes',
        secondaryMuscles: ['hamstrings', 'core'],
        equipment: 'bodyweight',
        difficulty: 'beginner',
        instructions: [
            'Lie on back with knees bent, feet flat on floor',
            'Drive through heels to lift hips',
            'Squeeze glutes at top',
            'Hold briefly, then lower',
            'Keep core engaged'
        ],
        tips: 'Great warmup exercise. Can add weight or bands for progression.',
        gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Glute-Bridge.gif',
        youtubeId: 'OUgsJ8-Vi0E'
    },
    {
        id: 'good-morning',
        name: 'Good Morning',
        muscle: 'hamstrings',
        secondaryMuscles: ['glutes', 'back'],
        equipment: 'barbell',
        difficulty: 'intermediate',
        instructions: [
            'Place bar on upper back like a squat',
            'Stand with feet shoulder-width',
            'Push hips back, lowering torso toward floor',
            'Keep back flat, slight knee bend',
            'Return to standing by driving hips forward'
        ],
        tips: 'Start light. Great for hamstring and back strength.',
        gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Good-Morning.gif',
        youtubeId: 'YA-h3n9L4YU'
    },
    {
        id: 'step-ups',
        name: 'Step-Ups',
        muscle: 'glutes',
        secondaryMuscles: ['quads', 'hamstrings'],
        equipment: 'dumbbell',
        difficulty: 'beginner',
        instructions: [
            'Stand facing a box or bench',
            'Step up with one foot, driving through heel',
            'Bring other foot up to stand on box',
            'Step back down with control',
            'Alternate legs or complete one side first'
        ],
        tips: 'Use higher box for more glute activation. Don\'t push off back foot.',
        gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Step-up.gif',
        youtubeId: 'WCFCdxzFBa4'
    },
    {
        id: 'sumo-deadlift',
        name: 'Sumo Deadlift',
        muscle: 'glutes',
        secondaryMuscles: ['quads', 'hamstrings', 'back'],
        equipment: 'barbell',
        difficulty: 'advanced',
        instructions: [
            'Take wide stance with toes pointed out',
            'Grip bar inside your knees',
            'Keep chest up, back flat',
            'Drive through heels to stand',
            'Lock out hips at top'
        ],
        tips: 'More quad and hip focused than conventional deadlift. Requires hip mobility.',
        gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Sumo-Deadlift.gif',
        youtubeId: 'pfJk6lulXPE'
    },

    // ==================== LEGS (CALVES) ====================
    {
        id: 'standing-calf-raise',
        name: 'Standing Calf Raise',
        muscle: 'calves',
        secondaryMuscles: [],
        equipment: 'machine',
        difficulty: 'beginner',
        instructions: [
            'Stand on calf raise machine with shoulders under pads',
            'Balls of feet on platform, heels hanging off',
            'Rise up on toes as high as possible',
            'Squeeze calves at top',
            'Lower heels below platform for stretch'
        ],
        tips: 'Full range of motion is key. Don\'t bounce at the bottom.',
        gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Standing-Calf-Raise.gif',
        youtubeId: 'gwLzBJYoWlI'
    },
    {
        id: 'seated-calf-raise',
        name: 'Seated Calf Raise',
        muscle: 'calves',
        secondaryMuscles: [],
        equipment: 'machine',
        difficulty: 'beginner',
        instructions: [
            'Sit at seated calf raise machine',
            'Place balls of feet on platform',
            'Lower heels for stretch',
            'Push up onto toes',
            'Squeeze at top and hold briefly'
        ],
        tips: 'Targets the soleus muscle. Both seated and standing are important for complete calf development.',
        gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Seated-Calf-Raise.gif',
        youtubeId: 'JbyjNymZOt0'
    },

    // ==================== CORE ====================
    {
        id: 'plank',
        name: 'Plank',
        muscle: 'core',
        secondaryMuscles: ['shoulders'],
        equipment: 'bodyweight',
        difficulty: 'beginner',
        instructions: [
            'Get in push-up position on forearms',
            'Keep body in straight line from head to heels',
            'Engage core by pulling belly button to spine',
            'Don\'t let hips sag or pike up',
            'Hold for desired time'
        ],
        tips: 'Squeeze glutes and quads to help maintain position. Breathe normally.',
        gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Plank.gif',
        youtubeId: 'ASdvN_XEl_c'
    },
    {
        id: 'crunches',
        name: 'Crunches',
        muscle: 'core',
        secondaryMuscles: [],
        equipment: 'bodyweight',
        difficulty: 'beginner',
        instructions: [
            'Lie on back with knees bent, feet flat',
            'Place hands behind head or across chest',
            'Curl shoulders off floor toward knees',
            'Don\'t pull on neck',
            'Lower with control'
        ],
        tips: 'Focus on curling ribcage toward pelvis. Don\'t do full sit-ups.',
        gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Crunch.gif',
        youtubeId: 'Xyd_fa5zoEU'
    },
    {
        id: 'russian-twist',
        name: 'Russian Twist',
        muscle: 'core',
        secondaryMuscles: [],
        equipment: 'bodyweight',
        difficulty: 'intermediate',
        instructions: [
            'Sit on floor with knees bent',
            'Lean back slightly, keeping back straight',
            'Hold weight or clasp hands together',
            'Rotate torso side to side',
            'Keep hips stable, only rotate upper body'
        ],
        tips: 'For more challenge, lift feet off floor. Use medicine ball or dumbbell.',
        gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Russian-Twist.gif',
        youtubeId: 'wkD8rjkodUI'
    },
    {
        id: 'leg-raises',
        name: 'Lying Leg Raises',
        muscle: 'core',
        secondaryMuscles: ['hip flexors'],
        equipment: 'bodyweight',
        difficulty: 'intermediate',
        instructions: [
            'Lie flat on back with legs extended',
            'Place hands under lower back for support',
            'Keeping legs straight, raise them to vertical',
            'Lower slowly without touching floor',
            'Keep lower back pressed down'
        ],
        tips: 'If lower back arches, don\'t lower legs as far. Bend knees to make easier.',
        gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Lying-Leg-Raise.gif',
        youtubeId: 'JB2oyawG9KI'
    },
    {
        id: 'hanging-leg-raises',
        name: 'Hanging Leg Raises',
        muscle: 'core',
        secondaryMuscles: ['hip flexors', 'grip'],
        equipment: 'bodyweight',
        difficulty: 'advanced',
        instructions: [
            'Hang from pull-up bar',
            'Keep legs straight (or bent for easier version)',
            'Raise legs until parallel to floor or higher',
            'Lower with control',
            'Don\'t swing or use momentum'
        ],
        tips: 'One of the best ab exercises. Raise legs higher for more difficulty.',
        gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Hanging-Leg-Raise.gif',
        youtubeId: 'hdng3Nm1x_E'
    },
    {
        id: 'bicycle-crunch',
        name: 'Bicycle Crunch',
        muscle: 'core',
        secondaryMuscles: [],
        equipment: 'bodyweight',
        difficulty: 'beginner',
        instructions: [
            'Lie on back with hands behind head',
            'Lift shoulders and legs off floor',
            'Bring right elbow to left knee while extending right leg',
            'Switch sides in pedaling motion',
            'Keep lower back pressed to floor'
        ],
        tips: 'Go slow and controlled. Don\'t pull on neck.',
        gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Bicycle-Crunch.gif',
        youtubeId: '9FGilxCbdz8'
    },
    {
        id: 'mountain-climbers',
        name: 'Mountain Climbers',
        muscle: 'core',
        secondaryMuscles: ['shoulders', 'quads'],
        equipment: 'bodyweight',
        difficulty: 'intermediate',
        instructions: [
            'Start in push-up position',
            'Drive one knee toward chest',
            'Quickly switch legs in running motion',
            'Keep hips low and core tight',
            'Move as fast as you can with good form'
        ],
        tips: 'Great for cardio and core. Can go slow for more core focus.',
        gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Mountain-Climber.gif',
        youtubeId: 'nmwgirgXLYM'
    },
    {
        id: 'dead-bug',
        name: 'Dead Bug',
        muscle: 'core',
        secondaryMuscles: [],
        equipment: 'bodyweight',
        difficulty: 'beginner',
        instructions: [
            'Lie on back with arms pointing up',
            'Raise legs with knees bent at 90 degrees',
            'Lower opposite arm and leg toward floor',
            'Return to start and switch sides',
            'Keep lower back pressed to floor throughout'
        ],
        tips: 'Excellent for learning core bracing. Great for lower back pain.',
        gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Dead-Bug.gif',
        youtubeId: 'I5xbsA71v1A'
    },
    {
        id: 'bird-dog',
        name: 'Bird Dog',
        muscle: 'core',
        secondaryMuscles: ['glutes', 'back'],
        equipment: 'bodyweight',
        difficulty: 'beginner',
        instructions: [
            'Start on hands and knees',
            'Extend right arm forward and left leg back',
            'Hold briefly, keeping hips level',
            'Return to start and switch sides',
            'Keep core braced throughout'
        ],
        tips: 'Great for core stability and lower back health. Don\'t rotate hips.',
        gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Bird-Dog.gif',
        youtubeId: 'wiFNA3sqjCA'
    },
    {
        id: 'ab-wheel-rollout',
        name: 'Ab Wheel Rollout',
        muscle: 'core',
        secondaryMuscles: ['shoulders', 'back'],
        equipment: 'other',
        difficulty: 'advanced',
        instructions: [
            'Kneel on floor holding ab wheel',
            'Roll wheel forward, extending body',
            'Go as far as you can while maintaining form',
            'Use core to pull wheel back',
            'Keep back flat, don\'t let hips sag'
        ],
        tips: 'Start with partial range of motion. Very challenging exercise.',
        gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Ab-Wheel-Rollout.gif',
        youtubeId: 'rqiTPdK1c_I'
    },

    // ==================== FULL BODY / COMPOUND ====================
    {
        id: 'burpees',
        name: 'Burpees',
        muscle: 'full-body',
        secondaryMuscles: ['chest', 'legs', 'core'],
        equipment: 'bodyweight',
        difficulty: 'intermediate',
        instructions: [
            'Stand with feet shoulder-width apart',
            'Squat down and place hands on floor',
            'Jump feet back into plank position',
            'Do a push-up (optional)',
            'Jump feet forward and explosively jump up'
        ],
        tips: 'Great for conditioning. Step back instead of jumping for lower impact.',
        gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Burpee.gif',
        youtubeId: 'dZgVxmf6jkA'
    },
    {
        id: 'kettlebell-swing',
        name: 'Kettlebell Swing',
        muscle: 'full-body',
        secondaryMuscles: ['glutes', 'hamstrings', 'core', 'shoulders'],
        equipment: 'kettlebell',
        difficulty: 'intermediate',
        instructions: [
            'Stand with feet wider than shoulder-width',
            'Hold kettlebell with both hands',
            'Hinge at hips, swinging KB between legs',
            'Explosively drive hips forward to swing KB up',
            'Let KB swing back down and repeat'
        ],
        tips: 'Power comes from hip drive, not arms. Great for conditioning.',
        gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/04/Kettlebell-Swing.gif',
        youtubeId: 'YSxHifyI6s8'
    },
    {
        id: 'clean-and-press',
        name: 'Clean and Press',
        muscle: 'full-body',
        secondaryMuscles: ['shoulders', 'legs', 'back'],
        equipment: 'barbell',
        difficulty: 'advanced',
        instructions: [
            'Stand with bar over mid-foot',
            'Clean bar to shoulders in one explosive motion',
            'Press bar overhead',
            'Lower bar back to shoulders, then to floor',
            'Reset and repeat'
        ],
        tips: 'Complex movement requiring practice. Start light.',
        gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Clean-and-Press.gif',
        youtubeId: 'mPsxlNjv7Aw'
    },
    {
        id: 'thrusters',
        name: 'Thrusters',
        muscle: 'full-body',
        secondaryMuscles: ['quads', 'shoulders', 'core'],
        equipment: 'barbell',
        difficulty: 'intermediate',
        instructions: [
            'Hold bar in front rack position',
            'Squat down to full depth',
            'Explosively stand and press bar overhead',
            'Lower bar back to front rack',
            'Immediately go into next squat'
        ],
        tips: 'Very demanding exercise. Great for conditioning and strength.',
        gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Thruster.gif',
        youtubeId: 'L219ltL15zk'
    },
    {
        id: 'farmers-walk',
        name: 'Farmers Walk',
        muscle: 'full-body',
        secondaryMuscles: ['grip', 'core', 'traps'],
        equipment: 'dumbbell',
        difficulty: 'beginner',
        instructions: [
            'Pick up heavy dumbbells or kettlebells',
            'Stand tall with shoulders back',
            'Walk forward with controlled steps',
            'Keep core braced and don\'t lean',
            'Walk for distance or time'
        ],
        tips: 'Simple but effective. Great for grip and overall strength.',
        gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Farmers-Walk.gif',
        youtubeId: 'Fkzk_RqlYig'
    }
];

// Muscle groups for filtering
const MUSCLE_GROUPS = [
    { id: 'all', name: 'All Muscles', icon: '💪' },
    { id: 'chest', name: 'Chest', icon: '🫁' },
    { id: 'back', name: 'Back', icon: '🔙' },
    { id: 'shoulders', name: 'Shoulders', icon: '🎯' },
    { id: 'biceps', name: 'Biceps', icon: '💪' },
    { id: 'triceps', name: 'Triceps', icon: '🦾' },
    { id: 'quads', name: 'Quads', icon: '🦵' },
    { id: 'hamstrings', name: 'Hamstrings', icon: '🦿' },
    { id: 'glutes', name: 'Glutes', icon: '🍑' },
    { id: 'calves', name: 'Calves', icon: '🦶' },
    { id: 'core', name: 'Core', icon: '🎯' },
    { id: 'full-body', name: 'Full Body', icon: '🏋️' }
];

// Equipment types for filtering
const EQUIPMENT_TYPES = [
    { id: 'all', name: 'All Equipment', icon: '🏋️' },
    { id: 'barbell', name: 'Barbell', icon: '🏋️' },
    { id: 'dumbbell', name: 'Dumbbell', icon: '🏋️' },
    { id: 'cable', name: 'Cable', icon: '🔗' },
    { id: 'machine', name: 'Machine', icon: '⚙️' },
    { id: 'bodyweight', name: 'Bodyweight', icon: '🤸' },
    { id: 'kettlebell', name: 'Kettlebell', icon: '🔔' },
    { id: 'other', name: 'Other', icon: '📦' }
];

// Difficulty levels
const DIFFICULTY_LEVELS = [
    { id: 'all', name: 'All Levels' },
    { id: 'beginner', name: 'Beginner' },
    { id: 'intermediate', name: 'Intermediate' },
    { id: 'advanced', name: 'Advanced' }
];

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { EXERCISES_DB, MUSCLE_GROUPS, EQUIPMENT_TYPES, DIFFICULTY_LEVELS };
}
