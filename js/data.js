// Exercise Data with YouTube Videos, GIFs and Muscle Info
// Using reliable GIF sources that work on all devices

const exerciseData = {
    warmup: [
        { name: "Jumping Jacks", duration: "60 sec", why: "Raises heart rate, warms entire body", video: "iSSAk4XCsRA", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Jumping-Jack.gif", muscles: ["Full Body"] },
        { name: "Arm Circles", duration: "30s each way", why: "WEAK SHOULDERS - loosens shoulder joints", video: "140RTsLGFyY", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/06/Arm-Circles.gif", muscles: ["Shoulders"] },
        { name: "Band Pull-Aparts", duration: "15 reps", why: "WEAK SHOULDERS - activates rear delts, stabilizers", video: "JObYtU7Y7ag", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Resistance-Band-Pull-Apart.gif", muscles: ["Rear Delts", "Upper Back"] },
        { name: "Shoulder Dislocates", duration: "10 reps", why: "WEAK SHOULDERS - full range mobility", video: "02HdChcpyBs", gif: "https://fitnessprogramer.com/wp-content/uploads/2022/02/Band-Shoulder-Dislocate.gif", muscles: ["Shoulders", "Chest"] },
        { name: "Leg Swings", duration: "10 each leg", why: "TIGHT HAMSTRINGS - dynamic stretch", video: "Of8TL8X6SHU", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/06/Front-Back-Leg-Swings.gif", muscles: ["Hip Flexors", "Hamstrings"] },
        { name: "Toe Touch Walk", duration: "10 each leg", why: "TIGHT HAMSTRINGS - warms hamstrings dynamically", video: "gN9Q8VPlow4", gif: "https://fitnessprogramer.com/wp-content/uploads/2022/02/Toe-Touch-Walk.gif", muscles: ["Hamstrings", "Calves"] },
        { name: "Hip Circles", duration: "10 each way", why: "Mobilizes hip joints, prevents injury", video: "QxCNkVT70JM", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/06/Hip-Circles.gif", muscles: ["Hips"] },
        { name: "Bodyweight Squats", duration: "10 reps", why: "Activates legs, prepares for leg day", video: "aclHkVaku9U", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Squat.gif", muscles: ["Quads", "Glutes"] },
        { name: "Walkouts", duration: "5 reps", why: "Warms core, shoulders, hamstrings", video: "ancMYBD4Pgg", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/06/Inchworm.gif", muscles: ["Core", "Shoulders", "Hamstrings"] },
        { name: "Cat-Cow Stretch", duration: "10 reps", why: "LOWER BACK - Mobilizes spine", video: "kqnua4rHVVA", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/06/Cat-Cow-Stretch.gif", muscles: ["Spine", "Core"], goal: "lower-back" },
        { name: "Chin Tucks", duration: "10 reps", why: "NECK HUMP - Daily fix, never skip", video: "wQylqaCl8Zo", gif: "https://fitnessprogramer.com/wp-content/uploads/2022/02/Chin-Tuck.gif", muscles: ["Neck", "Upper Back"], goal: "neck-hump", bodyweight: true }
    ],
    
    // Daily Lower Back Strengthening - Do these EVERY workout day (light versions)
    // These are separate from the main workout - do at the END of each session
    lowerBackDaily: [
        { name: "Cat-Cow Stretch", sets: "2 x 10", rest: "30s", why: "DAILY - Spinal mobility, do slowly", video: "kqnua4rHVVA", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/06/Cat-Cow-Stretch.gif", muscles: { primary: ["Spine", "Core"], secondary: [] }, goal: "lower-back", bodyweight: true },
        { name: "Dead Bug", sets: "2 x 8 each", rest: "30s", why: "DAILY - Core + back stability, gentle", video: "I5xbsA71v4c", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dead-Bug.gif", muscles: { primary: ["Core"], secondary: ["Hip Flexors"] }, goal: "lower-back", bodyweight: true },
        { name: "Bird Dog", sets: "2 x 8 each", rest: "30s", why: "DAILY - Core stability, balance", video: "wiFNA3sqjCA", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Bird-Dog.gif", muscles: { primary: ["Core", "Lower Back"], secondary: ["Glutes"] }, goal: "lower-back", bodyweight: true },
        { name: "Glute Bridge", sets: "2 x 12", rest: "30s", why: "DAILY - Glute activation protects back", video: "OUgsJ8-Vi0E", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Glute-Bridge.gif", muscles: { primary: ["Glutes"], secondary: ["Hamstrings"] }, goal: "lower-back", bodyweight: true },
        { name: "Child's Pose", sets: "1 x 45s", rest: "-", why: "DAILY - Spine decompression, relaxation", video: "2MJGg-dUKh0", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/06/Childs-Pose.gif", muscles: { primary: ["Lower Back"], secondary: ["Lats"] }, goal: "lower-back", bodyweight: true }
    ],
    
    // Available gym equipment for reference
    gymEquipment: {
        kettlebell: true,
        medicineBall: true,
        stabilityBall: true,  // Big plastic ball
        resistanceBands: true,
        dumbbells: true,
        barbells: true,
        cables: true,
        machines: true
    },
    
    // Equipment-based exercise alternatives (Kettlebell, Medicine Ball, Stability Ball)
    equipmentExercises: {
        kettlebell: [
            { name: "Kettlebell Swing", sets: "3 x 15", rest: "60s", why: "LOWER BACK + Glutes - hip hinge power", video: "YSxHifyI6s8", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Kettlebell-Swing.gif", muscles: { primary: ["Glutes", "Hamstrings"], secondary: ["Core", "Lower Back"] }, goal: "lower-back" },
            { name: "Goblet Squat (Kettlebell)", sets: "3 x 12", rest: "60s", why: "Front-loaded squat - easier on back", video: "MeIiIdhvXT4", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Goblet-Squat.gif", muscles: { primary: ["Quads", "Glutes"], secondary: ["Core"] } },
            { name: "Kettlebell Deadlift", sets: "3 x 12", rest: "60s", why: "LOWER BACK - safe deadlift variation", video: "sVpB5xdGCvQ", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/04/Kettlebell-Deadlift.gif", muscles: { primary: ["Hamstrings", "Glutes"], secondary: ["Lower Back"] }, goal: "lower-back" },
            { name: "Kettlebell Turkish Get-up", sets: "2 x 3 each", rest: "60s", why: "CORE + LOWER BACK - full body stability", video: "0bWRPC49-KI", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Kettlebell-Turkish-Get-Up.gif", muscles: { primary: ["Core", "Shoulders"], secondary: ["Glutes", "Lower Back"] }, goal: "lower-back" },
            { name: "Kettlebell Halo", sets: "2 x 10 each way", rest: "45s", why: "Shoulder mobility + core stability", video: "MxhCmFP0YWU", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/04/Kettlebell-Halo.gif", muscles: { primary: ["Shoulders"], secondary: ["Core"] } }
        ],
        medicineBall: [
            { name: "Med Ball Rotational Throw", sets: "3 x 8 each", rest: "60s", why: "BAT SPEED - explosive hip rotation", video: "Cf_2gRh1FZU", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/09/Medicine-Ball-Rotational-Throw.gif", muscles: { primary: ["Obliques", "Core"], secondary: ["Hips"] }, goal: "bat-speed" },
            { name: "Med Ball Slam", sets: "3 x 10", rest: "60s", why: "Power + core - stress relief!", video: "5xIubW3D5KU", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/04/Medicine-Ball-Slam.gif", muscles: { primary: ["Core", "Lats"], secondary: ["Shoulders"] } },
            { name: "Med Ball Russian Twist", sets: "3 x 20 total", rest: "45s", why: "BAT SPEED - weighted rotation", video: "wkD8rjkodUI", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Russian-Twist.gif", muscles: { primary: ["Obliques"], secondary: ["Core"] }, goal: "bat-speed" },
            { name: "Med Ball Chest Pass", sets: "3 x 10", rest: "45s", why: "Explosive chest power", video: "xPjpuf3bQpM", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/09/Medicine-Ball-Chest-Pass.gif", muscles: { primary: ["Chest"], secondary: ["Triceps", "Shoulders"] } },
            { name: "Med Ball Woodchop", sets: "3 x 10 each", rest: "45s", why: "BAT SPEED - rotational power", video: "IKWPZ4mCmf4", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/04/Medicine-Ball-Wood-Chop.gif", muscles: { primary: ["Obliques", "Core"], secondary: ["Shoulders"] }, goal: "bat-speed" }
        ],
        stabilityBall: [
            { name: "Stability Ball Back Extension", sets: "3 x 12", rest: "45s", why: "LOWER BACK - gentle strengthening", video: "ph3pddpKzzw", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Exercise-Ball-Back-Extension.gif", muscles: { primary: ["Lower Back"], secondary: ["Glutes"] }, goal: "lower-back", bodyweight: true },
            { name: "Stability Ball Crunch", sets: "3 x 15", rest: "45s", why: "Core - full range of motion", video: "CbJRl5hkua4", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Exercise-Ball-Crunch.gif", muscles: { primary: ["Core"], secondary: [] }, goal: "belly-fat", bodyweight: true },
            { name: "Stability Ball Hamstring Curl", sets: "3 x 12", rest: "45s", why: "Hamstrings + glutes - no machine needed", video: "HnlaOp3Djwo", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Exercise-Ball-Leg-Curl.gif", muscles: { primary: ["Hamstrings"], secondary: ["Glutes"] }, bodyweight: true },
            { name: "Stability Ball Plank", sets: "3 x 30s", rest: "45s", why: "CORE - unstable surface = harder", video: "E_Gm6VQvxHI", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Exercise-Ball-Plank.gif", muscles: { primary: ["Core"], secondary: ["Shoulders"] }, goal: "belly-fat", bodyweight: true },
            { name: "Stability Ball Pike", sets: "3 x 10", rest: "45s", why: "Advanced core - hip flexors too", video: "FWiKa-CPMXY", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/06/Stability-Ball-Pike.gif", muscles: { primary: ["Core"], secondary: ["Hip Flexors", "Shoulders"] }, bodyweight: true },
            { name: "Stability Ball Hip Thrust", sets: "3 x 15", rest: "45s", why: "LOWER BACK - glutes on unstable surface", video: "H7lphNq71VE", gif: "https://fitnessprogramer.com/wp-content/uploads/2022/02/Stability-Ball-Hip-Thrust.gif", muscles: { primary: ["Glutes"], secondary: ["Hamstrings"] }, goal: "lower-back", bodyweight: true }
        ]
    },
    
    day1: {
        name: "Chest + Triceps",
        focus: "Man boobs reduction - build muscle, burn chest fat",
        week1: [
            { name: "Incline DB Press", sets: "4 x 10-12", rest: "90s", why: "MAN BOOBS KILLER - targets upper chest to lift & tighten sagging area", video: "8iPEnn-ltC8", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Incline-Dumbbell-Press.gif", muscles: { primary: ["Upper Chest"], secondary: ["Front Delts", "Triceps"] }, goal: "chest-fat" },
            { name: "Flat Bench Press", sets: "4 x 10", rest: "90s", why: "MAN BOOBS - builds overall chest muscle to replace fat", video: "rT7DgCr-3pg", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Bench-Press.gif", muscles: { primary: ["Chest"], secondary: ["Front Delts", "Triceps"] }, goal: "chest-fat" },
            { name: "Cable Flyes", sets: "3 x 12-15", rest: "60s", why: "MAN BOOBS - squeezes chest, defines shape & burns fat", video: "Iwe6AmxVf7o", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Cable-Crossover.gif", muscles: { primary: ["Chest"], secondary: [] }, goal: "chest-fat" },
            { name: "Tricep Pushdowns", sets: "3 x 12", rest: "60s", why: "Tricep mass - arm definition", video: "2-LAMcpzODU", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Pushdown.gif", muscles: { primary: ["Triceps"], secondary: [] } },
            { name: "Overhead Tricep Extension", sets: "3 x 12", rest: "60s", why: "Long head tricep - arm shape", video: "YbX7Wd8jQ-Q", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Triceps-Extension.gif", muscles: { primary: ["Triceps (Long Head)"], secondary: [] } },
            { name: "Dead Bugs", sets: "3 x 10 each", rest: "45s", why: "CORE + LOWER BACK stability", video: "I5xbsA71v4c", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dead-Bug.gif", muscles: { primary: ["Core"], secondary: ["Hip Flexors"] , bodyweight: true}, goal: "lower-back", bodyweight: true },
            { name: "Plank", sets: "3 x 45s", rest: "45s", why: "CORE - overall stability", video: "ASdvN_XEl_c", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Plank.gif", muscles: { primary: ["Core"], secondary: ["Shoulders"] , bodyweight: true}, goal: "belly-fat", bodyweight: true }
        ],
        week2: [
            { name: "Incline DB Press", sets: "4 x 10-12", rest: "90s", why: "MAN BOOBS KILLER - lifts upper chest, tightens saggy area", video: "8iPEnn-ltC8", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Incline-Dumbbell-Press.gif", muscles: { primary: ["Upper Chest"], secondary: ["Front Delts", "Triceps"] }, goal: "chest-fat" },
            { name: "Dumbbell Bench Press", sets: "4 x 10", rest: "90s", why: "MAN BOOBS - better stretch than barbell, more muscle activation", video: "VmB1G1K7v94", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Press.gif", muscles: { primary: ["Chest"], secondary: ["Front Delts", "Triceps"] }, goal: "chest-fat" },
            { name: "Pec Deck Machine", sets: "3 x 12-15", rest: "60s", why: "MAN BOOBS - isolates chest with maximum squeeze", video: "xUm0BiZCWlQ", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Pec-Deck-Fly.gif", muscles: { primary: ["Chest"], secondary: [] }, goal: "chest-fat" },
            { name: "Dips", sets: "3 x 10-12", rest: "60s", why: "MAN BOOBS - hits lower chest, creates chest line definition", video: "2z8JmcrW-As", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Chest-Dip.gif", muscles: { primary: ["Lower Chest", "Triceps"], secondary: ["Front Delts"] , bodyweight: true}, goal: "chest-fat" },
            { name: "Skull Crushers", sets: "3 x 12", rest: "60s", why: "Tricep mass - different angle", video: "d_KZxkY_0cM", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Skull-Crusher.gif", muscles: { primary: ["Triceps"], secondary: [] } },
            { name: "Dead Bugs", sets: "3 x 10 each", rest: "45s", why: "CORE + LOWER BACK stability", video: "I5xbsA71v4c", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dead-Bug.gif", muscles: { primary: ["Core"], secondary: ["Hip Flexors"] , bodyweight: true}, goal: "lower-back", bodyweight: true },
            { name: "Side Plank", sets: "3 x 30s each", rest: "45s", why: "Obliques - waist definition", video: "K2VljzCC16g", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Side-Plank.gif", muscles: { primary: ["Obliques"], secondary: ["Core"] , bodyweight: true}, goal: "belly-fat", bodyweight: true }
        ],
        cooldown: [
            { name: "Chest Doorway Stretch", duration: "30s each arm", why: "Releases tight chest, improves posture", video: "WTjkS3b8pFA", muscles: ["Chest"], goal: "posture" },
            { name: "Tricep Stretch", duration: "30s each arm", why: "Releases worked triceps", video: "4aosnF1FPkA", muscles: ["Triceps"] },
            { name: "Shoulder Stretch", duration: "30s each", why: "Releases pressing muscles", video: "Yf1LYAC4otc", muscles: ["Shoulders"] },
            { name: "Thread the Needle", duration: "30s each side", why: "THORACIC ROTATION - opens upper back after pressing", video: "gF062PEKJyc", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/06/Thread-the-Needle-Stretch.gif", muscles: ["Thoracic Spine", "Shoulders"] },
            { name: "Cat-Cow Stretch", duration: "10 reps", why: "LOWER BACK - spinal mobility after pressing", video: "kqnua4rHVVA", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/06/Cat-Cow-Stretch.gif", muscles: ["Spine", "Core"], goal: "lower-back" },
            { name: "Dead Bug", duration: "8 reps each side", why: "LOWER BACK - core stability, protects spine", video: "I5xbsA71v4c", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dead-Bug.gif", muscles: ["Core", "Lower Back"], goal: "lower-back" },
            { name: "Chin Tucks", duration: "15 reps", why: "NECK HUMP FIX - never skip", video: "wQylqaCl8Zo", muscles: ["Neck"], goal: "neck-hump", bodyweight: true }
        ]
    },
    
    day2: {
        name: "Back + Biceps + Posture",
        focus: "Posture correction, neck hump, bat grip",
        week1: [
            { name: "Lat Pulldown", sets: "4 x 10-12", rest: "90s", why: "Builds wide back - V-taper shape", video: "CAwf7n6Luuc", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Lat-Pulldown.gif", muscles: { primary: ["Lats"], secondary: ["Biceps", "Rear Delts"] } },
            { name: "Seated Cable Row", sets: "4 x 10-12", rest: "90s", why: "Back thickness + POSTURE", video: "GZbfZ033f74", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Seated-Cable-Row.gif", muscles: { primary: ["Mid Back", "Lats"], secondary: ["Biceps"] }, goal: "posture" },
            { name: "Face Pulls", sets: "4 x 15-20", rest: "60s", why: "POSTURE + NECK HUMP - key exercise", video: "rep-qVOkqgk", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Face-Pull.gif", muscles: { primary: ["Rear Delts", "Traps"], secondary: ["Rotator Cuff"] }, goal: "neck-hump" },
            { name: "Barbell Curls", sets: "3 x 10-12", rest: "60s", why: "Bicep mass - arm size", video: "kwG2ipFRgfo", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Curl.gif", muscles: { primary: ["Biceps"], secondary: ["Forearms"] } },
            { name: "Hammer Curls", sets: "3 x 12", rest: "60s", why: "Forearm + BAT GRIP strength", video: "zC3nLlEvin4", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Hammer-Curl.gif", muscles: { primary: ["Biceps", "Brachialis"], secondary: ["Forearms"] }, goal: "bat-speed" },
            { name: "Band Pull-Aparts", sets: "3 x 20", rest: "45s", why: "POSTURE - rear delt activation", video: "JObYtU7Y7ag", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Resistance-Band-Pull-Apart.gif", muscles: { primary: ["Rear Delts"], secondary: ["Traps"] , bodyweight: true}, goal: "posture" },
            { name: "Wrist Curls", sets: "3 x 15", rest: "45s", why: "BAT SPEED - wrist snap power", video: "7ac_qmBYdMs", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Wrist-Curl.gif", muscles: { primary: ["Forearms"], secondary: [] }, goal: "bat-speed" }
        ],
        week2: [
            { name: "Pull-ups/Assisted", sets: "4 x 8-12", rest: "90s", why: "Best back builder - bodyweight", video: "eGo4IYlbE5g", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Pull-up.gif", muscles: { primary: ["Lats"], secondary: ["Biceps", "Core"] } },
            { name: "Single Arm DB Row", sets: "4 x 10 each", rest: "60s", why: "Unilateral - fixes imbalances", video: "pYcpY20QaE8", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Row.gif", muscles: { primary: ["Lats", "Mid Back"], secondary: ["Biceps"] } },
            { name: "Face Pulls", sets: "4 x 15-20", rest: "60s", why: "POSTURE + NECK HUMP - key exercise", video: "rep-qVOkqgk", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Face-Pull.gif", muscles: { primary: ["Rear Delts", "Traps"], secondary: ["Rotator Cuff"] }, goal: "neck-hump" },
            { name: "Incline DB Curls", sets: "3 x 10-12", rest: "60s", why: "Full bicep stretch - peak", video: "soxrZlIl35U", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Incline-Dumbbell-Curl.gif", muscles: { primary: ["Biceps"], secondary: [] } },
            { name: "Reverse Curls", sets: "3 x 12", rest: "60s", why: "Forearm + BAT GRIP strength", video: "nRgxYX2Ve9w", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Reverse-Curl.gif", muscles: { primary: ["Brachioradialis", "Forearms"], secondary: ["Biceps"] }, goal: "bat-speed" },
            { name: "Prone Y-T-W", sets: "3 x 8 each", rest: "45s", why: "NECK HUMP - mid/lower trap strength", video: "1hLiTHlBIoA", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/06/Prone-I-Y-T-Raise.gif", muscles: { primary: ["Mid Traps", "Lower Traps"], secondary: ["Rear Delts"] , bodyweight: true}, goal: "neck-hump" },
            { name: "Reverse Wrist Curls", sets: "3 x 15", rest: "45s", why: "BAT SPEED - forearm balance", video: "FW0p0vJHkRY", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Reverse-Wrist-Curl.gif", muscles: { primary: ["Forearm Extensors"], secondary: [] }, goal: "bat-speed" }
        ],
        cooldown: [
            { name: "Lat Stretch", duration: "30s each side", why: "Releases lats from pulling", video: "pYPkPx2wE1I", muscles: ["Lats"] },
            { name: "Bicep Wall Stretch", duration: "30s each arm", why: "Releases worked biceps", video: "3uHV4Cb5Tck", muscles: ["Biceps"] },
            { name: "Thread the Needle", duration: "30s each side", why: "THORACIC MOBILITY - opens mid-back after rows", video: "gF062PEKJyc", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/06/Thread-the-Needle-Stretch.gif", muscles: ["Thoracic Spine", "Lats"] },
            { name: "Child's Pose", duration: "45s", why: "LOWER BACK relief + lat stretch", video: "2MJGg-dUKh0", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/06/Childs-Pose.gif", muscles: ["Lower Back", "Lats"], goal: "lower-back" },
            { name: "Cat-Cow Stretch", duration: "10 reps", why: "LOWER BACK - spinal mobility", video: "kqnua4rHVVA", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/06/Cat-Cow-Stretch.gif", muscles: ["Spine", "Core"], goal: "lower-back" },
            { name: "Chin Tucks", duration: "15 reps", why: "NECK HUMP FIX - never skip", video: "wQylqaCl8Zo", muscles: ["Neck"], goal: "neck-hump", bodyweight: true }
        ]
    },
    
    day3: {
        name: "Legs (Quads Focus)",
        focus: "Building leg strength progressively - adapting to squats & lunges",
        week1: [
            { name: "Goblet Squat", sets: "4 x 12", rest: "90s", why: "BEGINNER FRIENDLY - kettlebell, easier on back, learn squat form", video: "MeIiIdhvXT4", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Goblet-Squat.gif", muscles: { primary: ["Quads", "Glutes"], secondary: ["Core"] } },
            { name: "Leg Press", sets: "4 x 12", rest: "90s", why: "Quad focus - machine guided, safe for back", video: "IZxyjW7MPJQ", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Leg-Press.gif", muscles: { primary: ["Quads"], secondary: ["Glutes"] } },
            { name: "Reverse Lunges (Bodyweight)", sets: "3 x 8 each", rest: "60s", why: "EASIER than walking - no weight, build balance first", video: "xrPteyQLGAo", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Rear-Lunge.gif", muscles: { primary: ["Quads", "Glutes"], secondary: ["Hamstrings"] }, bodyweight: true },
            { name: "Leg Extensions", sets: "3 x 12-15", rest: "60s", why: "Quad isolation - definition", video: "YyvSfVjQeL0", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/LEG-EXTENSION.gif", muscles: { primary: ["Quads"], secondary: [] } },
            { name: "Leg Curl", sets: "3 x 12", rest: "60s", why: "Hamstring balance for knee health", video: "1Tq3QdYUuHs", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Leg-Curl.gif", muscles: { primary: ["Hamstrings"], secondary: [] } },
            { name: "Calf Raises", sets: "4 x 15-20", rest: "45s", why: "Calf development", video: "gwLzBJYoWlI", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Standing-Calf-Raise.gif", muscles: { primary: ["Calves"], secondary: [] } }
        ],
        week2: [
            { name: "Barbell Squats (Light)", sets: "4 x 10", rest: "90s", why: "PROGRESSION - start light, focus on form, adapt gradually", video: "ultWZbUMPL8", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/BARBELL-SQUAT.gif", muscles: { primary: ["Quads", "Glutes"], secondary: ["Hamstrings", "Core"] }, goal: "belly-fat" },
            { name: "Hack Squat", sets: "4 x 12", rest: "90s", why: "Machine guided - builds confidence for free squats", video: "0tn5K9NlCfo", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Hack-Squat.gif", muscles: { primary: ["Quads"], secondary: ["Glutes"] } },
            { name: "Walking Lunges (Light DB)", sets: "3 x 8 each", rest: "60s", why: "PROGRESSION - add light dumbbells, build lunge strength", video: "L8fvypPrzzs", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Walking-Lunge.gif", muscles: { primary: ["Quads", "Glutes"], secondary: ["Hamstrings"] } },
            { name: "Sissy Squats", sets: "3 x 10", rest: "60s", why: "Quad stretch - builds knee strength", video: "o97gfM16T-w", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/06/Sissy-Squat.gif", muscles: { primary: ["Quads"], secondary: [] }, bodyweight: true },
            { name: "Leg Curl", sets: "3 x 12", rest: "60s", why: "Hamstring balance for knee health", video: "1Tq3QdYUuHs", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Leg-Curl.gif", muscles: { primary: ["Hamstrings"], secondary: [] } },
            { name: "Seated Calf Raise", sets: "4 x 15-20", rest: "45s", why: "Soleus focus - lower calf", video: "JbyjNymZOt0", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Seated-Calf-Raise.gif", muscles: { primary: ["Soleus"], secondary: [] } }
        ],
        cooldown: [
            { name: "Quad Stretch", duration: "30s each leg", why: "Releases tight quads from squats", video: "3hRO1YkJN_U", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/06/Standing-Quadriceps-Stretch.gif", muscles: ["Quads"] },
            { name: "Standing Hamstring Stretch", duration: "45s each leg", why: "TIGHT HAMSTRINGS - longer hold for flexibility", video: "FDwpEdxZ4H4", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Standing-Hamstring-Stretch.gif", muscles: ["Hamstrings"] },
            { name: "Pigeon Pose", duration: "45s each side", why: "DEEP HIP OPENER - releases glutes after squats/lunges", video: "c1iwMP0Bknk", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/06/Pigeon-Pose.gif", muscles: ["Glutes", "Hip Flexors"], goal: "lower-back" },
            { name: "Hip Flexor Stretch", duration: "30s each", why: "TIGHT HIP FLEXORS - releases after squats, helps lower back", video: "YQmpO9VT2X4", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Hip-Flexor-Stretch.gif", muscles: ["Hip Flexors"], goal: "lower-back" },
            { name: "90/90 Hip Stretch", duration: "30s each side", why: "HIP MOBILITY - internal and external rotation", video: "8x5jpqXcLSA", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/06/90-90-Hip-Stretch.gif", muscles: ["Hip Rotators", "Glutes"] },
            { name: "Bird Dog", duration: "8 reps each side", why: "LOWER BACK - gentle core stability after heavy legs", video: "wiFNA3sqjCA", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Bird-Dog.gif", muscles: ["Core", "Lower Back"], goal: "lower-back" },
            { name: "Chin Tucks", duration: "15 reps", why: "NECK HUMP FIX - never skip", video: "wQylqaCl8Zo", gif: "https://fitnessprogramer.com/wp-content/uploads/2022/02/Chin-Tuck.gif", muscles: ["Neck"], goal: "neck-hump", bodyweight: true }
        ]
    },
    
    day4: {
        name: "Shoulders + Rotational Power",
        focus: "BAT SPEED exercises, posture",
        week1: [
            { name: "Overhead Press", sets: "4 x 10", rest: "90s", why: "Main shoulder builder - strength", video: "2yjwXTZQDDI", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Overhead-Press.gif", muscles: { primary: ["Front Delts", "Side Delts"], secondary: ["Triceps", "Core"] } },
            { name: "Lateral Raises", sets: "4 x 12-15", rest: "60s", why: "Side delts - shoulder width", video: "3VcKaXpzqRo", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Lateral-Raise.gif", muscles: { primary: ["Side Delts"], secondary: [] } },
            { name: "Rear Delt Flyes", sets: "3 x 15", rest: "60s", why: "POSTURE - balances front delts", video: "EA7u4Q_8HQ0", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Rear-Lateral-Raise.gif", muscles: { primary: ["Rear Delts"], secondary: ["Traps"] }, goal: "posture" },
            { name: "Face Pulls", sets: "3 x 15", rest: "60s", why: "POSTURE + NECK HUMP fix", video: "rep-qVOkqgk", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Face-Pull.gif", muscles: { primary: ["Rear Delts", "Traps"], secondary: ["Rotator Cuff"] }, goal: "neck-hump" },
            { name: "Cable Woodchops", sets: "3 x 12 each", rest: "60s", why: "BAT SPEED - hip rotation power", video: "pAplQXk3dkU", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Cable-wood-chop.gif", muscles: { primary: ["Obliques", "Core"], secondary: ["Shoulders"] }, goal: "bat-speed" },
            { name: "Pallof Press", sets: "3 x 10 each", rest: "45s", why: "CORE - anti-rotation stability", video: "AH_QZLm_0-s", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Pallof-Press.gif", muscles: { primary: ["Core"], secondary: ["Obliques"] , bodyweight: true} },
            { name: "Shrugs", sets: "3 x 12-15", rest: "60s", why: "Upper trap development", video: "cJRVVxmytaM", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Shrug.gif", muscles: { primary: ["Upper Traps"], secondary: [] } }
        ],
        week2: [
            { name: "Arnold Press", sets: "4 x 10-12", rest: "90s", why: "All delt heads - rotation movement", video: "6Z15_WdXmVw", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Arnold-Press.gif", muscles: { primary: ["Front Delts", "Side Delts"], secondary: ["Triceps"] } },
            { name: "Cable Lateral Raise", sets: "4 x 12-15", rest: "60s", why: "Constant tension - better pump", video: "PPrzBWZDOhA", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Cable-Lateral-Raise.gif", muscles: { primary: ["Side Delts"], secondary: [] } },
            { name: "Reverse Pec Deck", sets: "3 x 15", rest: "60s", why: "POSTURE - rear delt isolation", video: "5YK4bgzXDp0", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Rear-Delt-Fly-Machine.gif", muscles: { primary: ["Rear Delts"], secondary: [] }, goal: "posture" },
            { name: "Band Pull-Aparts", sets: "3 x 20", rest: "45s", why: "POSTURE + NECK HUMP fix", video: "JObYtU7Y7ag", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Resistance-Band-Pull-Apart.gif", muscles: { primary: ["Rear Delts"], secondary: ["Traps"] , bodyweight: true}, goal: "neck-hump" },
            { name: "Med Ball Rotational Throw", sets: "3 x 8 each", rest: "60s", why: "BAT SPEED - explosive hip power", video: "Cf_2gRh1FZU", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/09/Medicine-Ball-Rotational-Throw.gif", muscles: { primary: ["Obliques", "Core"], secondary: ["Hips"] }, goal: "bat-speed" },
            { name: "Russian Twists", sets: "3 x 20 total", rest: "45s", why: "CORE - rotational strength", video: "wkD8rjkodUI", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Russian-Twist.gif", muscles: { primary: ["Obliques"], secondary: ["Core"] }, goal: "bat-speed" },
            { name: "Front Raises", sets: "3 x 12", rest: "60s", why: "Front delt - shoulder roundness", video: "-t7fuZ0KhDA", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Front-Raise.gif", muscles: { primary: ["Front Delts"], secondary: [] } }
        ],
        cooldown: [
            { name: "Shoulder Cross-Body Stretch", duration: "30s each", why: "Releases worked delts", video: "Yf1LYAC4otc", muscles: ["Shoulders"] },
            { name: "Chest Doorway Stretch", duration: "30s each", why: "Opens chest - POSTURE", video: "WTjkS3b8pFA", muscles: ["Chest"], goal: "posture" },
            { name: "Torso Twist Stretch", duration: "30s each", why: "Releases rotational muscles after woodchops", video: "cSZAmTvvnuw", muscles: ["Obliques", "Lower Back"] },
            { name: "Figure-4 Stretch", duration: "30s each side", why: "HIP MOBILITY - glute and piriformis release", video: "2NcKpQu3_GM", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/06/Lying-Figure-4-Stretch.gif", muscles: ["Glutes", "Piriformis"], goal: "lower-back" },
            { name: "Child's Pose", duration: "45s", why: "LOWER BACK relief + full body relaxation", video: "2MJGg-dUKh0", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/06/Childs-Pose.gif", muscles: ["Lower Back", "Lats"], goal: "lower-back" },
            { name: "Dead Bug", duration: "8 reps each side", why: "LOWER BACK + CORE - stabilizes after rotation work", video: "I5xbsA71v4c", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dead-Bug.gif", muscles: ["Core", "Lower Back"], goal: "lower-back" },
            { name: "Chin Tucks", duration: "15 reps", why: "NECK HUMP FIX - never skip", video: "wQylqaCl8Zo", muscles: ["Neck"], goal: "neck-hump", bodyweight: true }
        ]
    },
    
    day5: {
        name: "Legs (Hamstrings/Glutes)",
        focus: "Glute strength protects back",
        week1: [
            { name: "Romanian Deadlift", sets: "4 x 10-12", rest: "90s", why: "Hamstrings + LOWER BACK strength", video: "7j-2w4-P14I", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Romanian-Deadlift.gif", muscles: { primary: ["Hamstrings", "Glutes"], secondary: ["Lower Back"] }, goal: "lower-back" },
            { name: "Hip Thrusts", sets: "4 x 12", rest: "90s", why: "Best glute exercise - protects back", video: "SEdqd1n0cvg", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Hip-Thrust.gif", muscles: { primary: ["Glutes"], secondary: ["Hamstrings"] }, goal: "lower-back" },
            { name: "Lying Leg Curls", sets: "3 x 12", rest: "60s", why: "Hamstring isolation", video: "1Tq3QdYUuHs", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Leg-Curl.gif", muscles: { primary: ["Hamstrings"], secondary: [] } },
            { name: "Bulgarian Split Squat", sets: "3 x 10 each", rest: "60s", why: "Single leg - fixes imbalances", video: "2C-uNgKwPLE", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Bulgarian-Split-Squat.gif", muscles: { primary: ["Quads", "Glutes"], secondary: ["Hamstrings"] , bodyweight: true} },
            { name: "Calf Raises", sets: "3 x 15-20", rest: "45s", why: "Calf development", video: "gwLzBJYoWlI", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Standing-Calf-Raise.gif", muscles: { primary: ["Calves"], secondary: [] } },
            { name: "Superman Hold", sets: "3 x 10", rest: "45s", why: "LOWER BACK - spinal erector strength", video: "cc6UVRS7PW4", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Superman.gif", muscles: { primary: ["Lower Back"], secondary: ["Glutes"] }, goal: "lower-back" },
            { name: "Glute Kickbacks", sets: "3 x 12 each", rest: "45s", why: "Glute isolation - shape", video: "uaBz9RwK1XE", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Cable-Glute-Kickback.gif", muscles: { primary: ["Glutes"], secondary: [] } }
        ],
        week2: [
            { name: "Stiff Leg Deadlift", sets: "4 x 10-12", rest: "90s", why: "More hamstring focus than RDL", video: "1uDiW5--rAE", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Stiff-Leg-Deadlift.gif", muscles: { primary: ["Hamstrings"], secondary: ["Lower Back", "Glutes"] } },
            { name: "Cable Pull-Through", sets: "4 x 12", rest: "60s", why: "Glute + hamstring - hip hinge", video: "ArPaAX_f4UQ", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Cable-Pull-Through.gif", muscles: { primary: ["Glutes", "Hamstrings"], secondary: [] } },
            { name: "Seated Leg Curls", sets: "3 x 12", rest: "60s", why: "Different angle for hamstrings", video: "ELOCsoDSmrg", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/08/Seated-Leg-Curl.gif", muscles: { primary: ["Hamstrings"], secondary: [] } },
            { name: "Step-ups", sets: "3 x 10 each", rest: "60s", why: "Functional - glute activation", video: "dQqApCGd5Ss", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Step-up.gif", muscles: { primary: ["Glutes", "Quads"], secondary: [] , bodyweight: true} },
            { name: "Donkey Calf Raise", sets: "3 x 15-20", rest: "45s", why: "Full calf stretch - development", video: "e0s2xKEMwac", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/06/Donkey-Calf-Raise.gif", muscles: { primary: ["Calves"], secondary: [] } },
            { name: "Reverse Hyper", sets: "3 x 12", rest: "45s", why: "LOWER BACK - decompression", video: "ZeRsNzFcn-Q", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/06/Reverse-Hyperextension.gif", muscles: { primary: ["Lower Back", "Glutes"], secondary: [] }, goal: "lower-back" },
            { name: "Single Leg RDL", sets: "3 x 10 each", rest: "60s", why: "Balance + hamstring stretch", video: "cR6Y-XLVMtA", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/05/Single-Leg-Romanian-Deadlift.gif", muscles: { primary: ["Hamstrings", "Glutes"], secondary: ["Core"] } }
        ],
        cooldown: [
            { name: "Standing Hamstring Stretch", duration: "45s each leg", why: "TIGHT HAMSTRINGS - longer hold after hamstring work", video: "FDwpEdxZ4H4", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Standing-Hamstring-Stretch.gif", muscles: ["Hamstrings"] },
            { name: "Pigeon Pose", duration: "45s each side", why: "DEEP GLUTE RELEASE - essential after hip thrusts/RDL", video: "c1iwMP0Bknk", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/06/Pigeon-Pose.gif", muscles: ["Glutes", "Hip Flexors"] },
            { name: "Hip Flexor Stretch", duration: "30s each", why: "TIGHT HIP FLEXORS - releases after hip hinge movements", video: "YQmpO9VT2X4", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Hip-Flexor-Stretch.gif", muscles: ["Hip Flexors"], goal: "lower-back" },
            { name: "Frog Stretch", duration: "45s", why: "DEEP HIP OPENER - inner thigh and groin mobility", video: "3YMK26o9LLU", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/06/Frog-Stretch.gif", muscles: ["Adductors", "Hip Flexors"] },
            { name: "Glute Bridge Hold", duration: "2 x 20s hold", why: "LOWER BACK - gentle glute activation", video: "OUgsJ8-Vi0E", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Glute-Bridge.gif", muscles: ["Glutes", "Lower Back"], goal: "lower-back" },
            { name: "Chin Tucks", duration: "15 reps", why: "NECK HUMP FIX - never skip", video: "wQylqaCl8Zo", gif: "https://fitnessprogramer.com/wp-content/uploads/2022/02/Chin-Tuck.gif", muscles: ["Neck"], goal: "neck-hump", bodyweight: true }
        ]
    },
    
    day6: {
        name: "Upper Body + Power + Neck Hump",
        focus: "Full posture/neck hump focus",
        week1: [
            { name: "Push-ups", sets: "3 x max", rest: "60s", why: "Chest/tricep - bodyweight strength", video: "IODxDxX7oi4", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Push-Up.gif", muscles: { primary: ["Chest", "Triceps"], secondary: ["Front Delts", "Core"] , bodyweight: true} },
            { name: "DB Row", sets: "3 x 10 each", rest: "60s", why: "Back thickness - posture", video: "pYcpY20QaE8", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Row.gif", muscles: { primary: ["Lats", "Mid Back"], secondary: ["Biceps"] }, goal: "posture" },
            { name: "Face Pulls", sets: "4 x 20", rest: "60s", why: "POSTURE + NECK HUMP - key exercise", video: "rep-qVOkqgk", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Face-Pull.gif", muscles: { primary: ["Rear Delts", "Traps"], secondary: ["Rotator Cuff"] }, goal: "neck-hump" },
            { name: "Farmers Walk", sets: "3 x 40m", rest: "60s", why: "BAT SPEED - grip + core stability", video: "Fkzk_RqlYig", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Farmers-Walk.gif", muscles: { primary: ["Forearms", "Traps"], secondary: ["Core"] }, goal: "bat-speed" },
            { name: "Prone Y-T-W", sets: "3 x 10 each", rest: "45s", why: "NECK HUMP - mid/lower trap strength", video: "1hLiTHlBIoA", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/06/Prone-I-Y-T-Raise.gif", muscles: { primary: ["Mid Traps", "Lower Traps"], secondary: ["Rear Delts"] , bodyweight: true}, goal: "neck-hump" },
            { name: "Chin Tucks", sets: "3 x 15", rest: "30s", why: "NECK HUMP - pull chin back", video: "wQylqaCl8Zo", gif: "https://fitnessprogramer.com/wp-content/uploads/2022/02/Chin-Tuck.gif", muscles: { primary: ["Deep Neck Flexors"], secondary: [] , bodyweight: true}, goal: "neck-hump" },
            { name: "Thoracic Extension", sets: "3 x 10", rest: "30s", why: "NECK HUMP - upper back mobility", video: "LT_dFRnmdGs", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/06/Thoracic-Extension.gif", muscles: { primary: ["Thoracic Spine"], secondary: [] , bodyweight: true}, goal: "neck-hump" },
            { name: "Dead Hang", sets: "3 x 30s", rest: "30s", why: "Spine decompression - POSTURE", video: "HoE-C85ZlCE", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dead-Hang.gif", muscles: { primary: ["Lats", "Shoulders"], secondary: ["Forearms"] , bodyweight: true}, goal: "posture" }
        ],
        week2: [
            { name: "Incline Push-ups", sets: "3 x 15", rest: "60s", why: "Easier variation - builds up", video: "cfns5VDVVvk", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/06/Incline-Push-Up.gif", muscles: { primary: ["Chest", "Triceps"], secondary: ["Front Delts"] , bodyweight: true} },
            { name: "Inverted Row", sets: "3 x 10-12", rest: "60s", why: "Back + posture - bodyweight", video: "hXTc1mDnZCw", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Inverted-Row.gif", muscles: { primary: ["Mid Back", "Lats"], secondary: ["Biceps"] }, goal: "posture" },
            { name: "Band Pull-Aparts", sets: "4 x 25", rest: "45s", why: "POSTURE - rear delt endurance", video: "JObYtU7Y7ag", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Resistance-Band-Pull-Apart.gif", muscles: { primary: ["Rear Delts"], secondary: ["Traps"] , bodyweight: true}, goal: "posture" },
            { name: "Plate Pinch Hold", sets: "3 x 30s", rest: "60s", why: "BAT SPEED - finger grip strength", video: "VzXxJkTRoMQ", gif: "https://fitnessprogramer.com/wp-content/uploads/2022/02/Plate-Pinch.gif", muscles: { primary: ["Forearms", "Fingers"], secondary: [] }, goal: "bat-speed" },
            { name: "Wall Angels", sets: "3 x 15", rest: "45s", why: "NECK HUMP + POSTURE - mobility", video: "M_ooIhKYs7c", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/06/Wall-Slides.gif", muscles: { primary: ["Shoulders", "Upper Back"], secondary: [] }, goal: "neck-hump" },
            { name: "Chin Tucks", sets: "3 x 15", rest: "30s", why: "NECK HUMP - pull chin back", video: "wQylqaCl8Zo", gif: "https://fitnessprogramer.com/wp-content/uploads/2022/02/Chin-Tuck.gif", muscles: { primary: ["Deep Neck Flexors"], secondary: [] , bodyweight: true}, goal: "neck-hump" },
            { name: "Scapular Squeezes", sets: "3 x 15", rest: "30s", why: "POSTURE - shoulder blade control", video: "aV0QsghN2CU", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/06/Scapular-Retraction.gif", muscles: { primary: ["Rhomboids", "Mid Traps"], secondary: [] }, goal: "posture" },
            { name: "Neck Stretches", sets: "3 x 30s each", rest: "-", why: "NECK HUMP - releases tight muscles", video: "wQylqaCl8Zo", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/06/Neck-Side-Stretch.gif", muscles: { primary: ["Neck"], secondary: [] }, goal: "neck-hump" }
        ],
        cooldown: [
            { name: "Chest Doorway Stretch", duration: "30s each", why: "Opens chest - POSTURE fix", video: "WTjkS3b8pFA", muscles: ["Chest"], goal: "posture" },
            { name: "Lat Stretch", duration: "30s each", why: "Releases back from rows", video: "pYPkPx2wE1I", muscles: ["Lats"] },
            { name: "Thread the Needle", duration: "30s each side", why: "THORACIC MOBILITY - opens mid-back for posture", video: "gF062PEKJyc", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/06/Thread-the-Needle-Stretch.gif", muscles: ["Thoracic Spine", "Shoulders"] },
            { name: "Figure-4 Stretch", duration: "30s each side", why: "HIP MAINTENANCE - keeps hips mobile on upper day", video: "2NcKpQu3_GM", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/06/Lying-Figure-4-Stretch.gif", muscles: ["Glutes", "Piriformis"], goal: "lower-back" },
            { name: "Cat-Cow Stretch", duration: "10 reps", why: "LOWER BACK - spinal mobility", video: "kqnua4rHVVA", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/06/Cat-Cow-Stretch.gif", muscles: ["Spine", "Core"], goal: "lower-back" },
            { name: "Bird Dog", duration: "8 reps each side", why: "LOWER BACK - core stability", video: "wiFNA3sqjCA", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Bird-Dog.gif", muscles: ["Core", "Lower Back"], goal: "lower-back" },
            { name: "Neck Stretches", duration: "60s total", why: "NECK HUMP - releases all sides", video: "wQylqaCl8Zo", muscles: ["Neck"], goal: "neck-hump" },
            { name: "Wall Angels", duration: "10 reps", why: "POSTURE - shoulder mobility", video: "M_ooIhKYs7c", muscles: ["Shoulders"], goal: "posture" },
            { name: "Chin Tucks", duration: "15 reps", why: "NECK HUMP FIX - never skip", video: "wQylqaCl8Zo", muscles: ["Neck"], goal: "neck-hump", bodyweight: true }
        ]
    },
    
    day7: {
        name: "Complete Rest",
        focus: "Recovery, muscle growth",
        tips: [
            "Sleep 7-8 hours - muscles grow during sleep",
            "Stay hydrated - minimum 2-3 liters water",
            "Eat enough protein - 1.6-2g per kg bodyweight",
            "Light stretching OK - nothing intense",
            "Walk is fine - no running/cardio",
            "Do chin tucks - 2-3 sets throughout day"
        ]
    },
    
    diet: {
        title: "Simple Diet Guidelines",
        meals: [
            {
                name: "Breakfast (7-8 AM)",
                options: [
                    "4 whole eggs + 2 toast + 1 fruit",
                    "Oats with milk + banana + nuts",
                    "Dosa/Idli + sambar + chutney + 1 egg"
                ]
            },
            {
                name: "Mid-Morning (10-11 AM)",
                options: [
                    "Greek yogurt + berries",
                    "Handful of nuts (almonds/walnuts)",
                    "Protein shake"
                ]
            },
            {
                name: "Lunch (1-2 PM)",
                options: [
                    "Rice + dal + chicken/fish + vegetables",
                    "Roti + sabzi + paneer/chicken",
                    "Large salad + grilled chicken + rice"
                ]
            },
            {
                name: "Pre-Workout (4-5 PM)",
                options: [
                    "Banana + peanut butter",
                    "Toast + jam",
                    "Small portion of rice/roti"
                ]
            },
            {
                name: "Post-Workout (within 1 hour)",
                options: [
                    "Protein shake + banana",
                    "Chicken breast + rice",
                    "Eggs + toast"
                ]
            },
            {
                name: "Dinner (8-9 PM)",
                options: [
                    "Grilled fish/chicken + vegetables + small rice",
                    "Roti + dal + paneer",
                    "Soup + grilled protein + salad"
                ]
            }
        ],
        rules: [
            "Protein with every meal",
            "Vegetables with lunch and dinner",
            "Limit fried foods to once a week",
            "Drink water before meals",
            "No eating 2 hours before sleep",
            "Weekend cheat meal is OK"
        ]
    }
};

// Goals reference for filtering
const fitnessGoals = {
    'belly-fat': { name: 'Belly Fat Loss', icon: '🔥', color: '#FF6B6B' },
    'chest-fat': { name: 'Chest Fat / Man Boobs', icon: '💪', color: '#4ECDC4' },
    'lower-back': { name: 'Lower Back Pain', icon: '🩹', color: '#45B7D1' },
    'posture': { name: 'Posture Fix', icon: '🧍', color: '#96CEB4' },
    'neck-hump': { name: 'Neck Hump Fix', icon: '🦒', color: '#FFEAA7' },
    'bat-speed': { name: 'Cricket Bat Speed', icon: '🏏', color: '#DDA0DD' }
};


// Diet Data for the Diet page
const dietData = {
    breakfast: {
        time: "7:00 - 8:00 AM",
        options: [
            { name: "4 whole eggs + 2 toast + 1 fruit", protein: "28g" },
            { name: "Oats with milk + banana + almonds", protein: "15g" },
            { name: "Dosa/Idli + sambar + chutney + 2 eggs", protein: "20g" },
            { name: "Greek yogurt + berries + granola", protein: "18g" }
        ]
    },
    midMorning: {
        time: "10:00 - 11:00 AM",
        options: [
            { name: "Handful of almonds (10-12)", protein: "6g" },
            { name: "Greek yogurt + honey", protein: "12g" },
            { name: "Protein shake with water", protein: "25g" },
            { name: "Boiled eggs (2)", protein: "12g" }
        ]
    },
    lunch: {
        time: "1:00 - 2:00 PM",
        options: [
            { name: "Rice + dal + chicken (150g) + veggies", protein: "35g" },
            { name: "Roti (2) + paneer curry + salad", protein: "25g" },
            { name: "Grilled chicken salad + rice", protein: "40g" },
            { name: "Fish curry + rice + vegetables", protein: "30g" }
        ]
    },
    preWorkout: {
        time: "30-45 min before gym",
        options: [
            { name: "Banana + peanut butter (1 tbsp)", protein: "5g" },
            { name: "Toast + jam + coffee", protein: "3g" },
            { name: "Apple + handful of nuts", protein: "4g" },
            { name: "Small bowl of oats", protein: "6g" }
        ]
    },
    postWorkout: {
        time: "Within 1 hour after gym",
        options: [
            { name: "Whey protein shake + banana", protein: "30g" },
            { name: "Chicken breast (150g) + rice", protein: "35g" },
            { name: "4 eggs + 2 toast", protein: "28g" },
            { name: "Paneer bhurji + roti", protein: "22g" }
        ]
    },
    dinner: {
        time: "8:00 - 9:00 PM",
        options: [
            { name: "Grilled fish/chicken + vegetables", protein: "35g" },
            { name: "Roti (2) + dal + paneer", protein: "25g" },
            { name: "Egg curry + rice (small)", protein: "20g" },
            { name: "Soup + grilled chicken + salad", protein: "30g" }
        ]
    }
};
