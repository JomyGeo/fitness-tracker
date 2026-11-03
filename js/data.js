// Exercise Data with YouTube Videos, GIFs and Muscle Info
// Using reliable GIF sources that work on all devices

const exerciseData = {
    warmup: [
        { name: "Jumping Jacks", duration: "60 sec", why: "Raises heart rate, warms entire body", video: "iSSAk4XCsRA", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Jumping-Jack.gif", muscles: ["Full Body"] },
        { name: "Arm Circles", duration: "30s each way", why: "Loosens shoulder joints for pressing", video: "140RTsLGFyY", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/06/Arm-Circles.gif", muscles: ["Shoulders"] },
        { name: "Leg Swings", duration: "10 each leg", why: "Loosens hips for squats/lunges", video: "Of8TL8X6SHU", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/06/Front-Back-Leg-Swings.gif", muscles: ["Hip Flexors", "Hamstrings"] },
        { name: "Hip Circles", duration: "10 each way", why: "Mobilizes hip joints, prevents injury", video: "QxCNkVT70JM", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/06/Hip-Circles.gif", muscles: ["Hips"] },
        { name: "Bodyweight Squats", duration: "10 reps", why: "Activates legs, prepares for leg day", video: "aclHkVaku9U", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Squat.gif", muscles: ["Quads", "Glutes"] },
        { name: "Walkouts", duration: "5 reps", why: "Warms core, shoulders, hamstrings", video: "ancMYBD4Pgg", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/06/Inchworm.gif", muscles: ["Core", "Shoulders", "Hamstrings"] },
        { name: "Cat-Cow Stretch", duration: "10 reps", why: "LOWER BACK - Mobilizes spine", video: "kqnua4rHVVA", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/06/Cat-Cow-Stretch.gif", muscles: ["Spine", "Core"], goal: "lower-back" },
        { name: "Chin Tucks", duration: "10 reps", why: "NECK HUMP - Daily fix, never skip", video: "wQylqaCl8Zo", gif: "https://fitnessprogramer.com/wp-content/uploads/2022/02/Chin-Tuck.gif", muscles: ["Neck", "Upper Back"], goal: "neck-hump" }
    ],
    
    day1: {
        name: "Chest + Triceps",
        focus: "Upper body, chest fat appearance",
        week1: [
            { name: "Incline DB Press", sets: "4 x 10-12", rest: "90s", why: "Upper chest - reduces chest fat appearance", video: "8iPEnn-ltC8", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Incline-Dumbbell-Press.gif", muscles: { primary: ["Upper Chest"], secondary: ["Front Delts", "Triceps"] }, goal: "chest-fat" },
            { name: "Flat Bench Press", sets: "4 x 10", rest: "90s", why: "Main chest builder - compound movement", video: "rT7DgCr-3pg", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Bench-Press.gif", muscles: { primary: ["Chest"], secondary: ["Front Delts", "Triceps"] } },
            { name: "Cable Flyes", sets: "3 x 12-15", rest: "60s", why: "Chest squeeze - defines chest shape", video: "Iwe6AmxVf7o", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Cable-Crossover.gif", muscles: { primary: ["Chest"], secondary: [] } },
            { name: "Tricep Pushdowns", sets: "3 x 12", rest: "60s", why: "Tricep mass - arm definition", video: "2-LAMcpzODU", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Pushdown.gif", muscles: { primary: ["Triceps"], secondary: [] } },
            { name: "Overhead Tricep Extension", sets: "3 x 12", rest: "60s", why: "Long head tricep - arm shape", video: "YbX7Wd8jQ-Q", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Triceps-Extension.gif", muscles: { primary: ["Triceps (Long Head)"], secondary: [] } },
            { name: "Dead Bugs", sets: "3 x 10 each", rest: "45s", why: "CORE + LOWER BACK stability", video: "I5xbsA71v4c", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dead-Bug.gif", muscles: { primary: ["Core"], secondary: ["Hip Flexors"] }, goal: "lower-back" },
            { name: "Plank", sets: "3 x 45s", rest: "45s", why: "CORE - overall stability", video: "ASdvN_XEl_c", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Plank.gif", muscles: { primary: ["Core"], secondary: ["Shoulders"] }, goal: "belly-fat" }
        ],
        week2: [
            { name: "Incline DB Press", sets: "4 x 10-12", rest: "90s", why: "Upper chest - reduces chest fat appearance", video: "8iPEnn-ltC8", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Incline-Dumbbell-Press.gif", muscles: { primary: ["Upper Chest"], secondary: ["Front Delts", "Triceps"] }, goal: "chest-fat" },
            { name: "Dumbbell Bench Press", sets: "4 x 10", rest: "90s", why: "Better stretch than barbell", video: "VmB1G1K7v94", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Press.gif", muscles: { primary: ["Chest"], secondary: ["Front Delts", "Triceps"] } },
            { name: "Pec Deck Machine", sets: "3 x 12-15", rest: "60s", why: "Isolates chest - good squeeze", video: "xUm0BiZCWlQ", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Pec-Deck-Fly.gif", muscles: { primary: ["Chest"], secondary: [] } },
            { name: "Dips", sets: "3 x 10-12", rest: "60s", why: "Lower chest + triceps compound", video: "2z8JmcrW-As", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Chest-Dip.gif", muscles: { primary: ["Lower Chest", "Triceps"], secondary: ["Front Delts"] } },
            { name: "Skull Crushers", sets: "3 x 12", rest: "60s", why: "Tricep mass - different angle", video: "d_KZxkY_0cM", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Skull-Crusher.gif", muscles: { primary: ["Triceps"], secondary: [] } },
            { name: "Dead Bugs", sets: "3 x 10 each", rest: "45s", why: "CORE + LOWER BACK stability", video: "I5xbsA71v4c", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dead-Bug.gif", muscles: { primary: ["Core"], secondary: ["Hip Flexors"] }, goal: "lower-back" },
            { name: "Side Plank", sets: "3 x 30s each", rest: "45s", why: "Obliques - waist definition", video: "K2VljzCC16g", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Side-Plank.gif", muscles: { primary: ["Obliques"], secondary: ["Core"] }, goal: "belly-fat" }
        ],
        cooldown: [
            { name: "Chest Doorway Stretch", duration: "30s each arm", why: "Releases tight chest, improves posture", video: "WTjkS3b8pFA", muscles: ["Chest"], goal: "posture" },
            { name: "Tricep Stretch", duration: "30s each arm", why: "Releases worked triceps", video: "4aosnF1FPkA", muscles: ["Triceps"] },
            { name: "Shoulder Stretch", duration: "30s each", why: "Releases pressing muscles", video: "Yf1LYAC4otc", muscles: ["Shoulders"] },
            { name: "Chin Tucks", duration: "15 reps", why: "NECK HUMP FIX - never skip", video: "wQylqaCl8Zo", muscles: ["Neck"], goal: "neck-hump" }
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
            { name: "Band Pull-Aparts", sets: "3 x 20", rest: "45s", why: "POSTURE - rear delt activation", video: "JObYtU7Y7ag", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Resistance-Band-Pull-Apart.gif", muscles: { primary: ["Rear Delts"], secondary: ["Traps"] }, goal: "posture" },
            { name: "Wrist Curls", sets: "3 x 15", rest: "45s", why: "BAT SPEED - wrist snap power", video: "7ac_qmBYdMs", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Wrist-Curl.gif", muscles: { primary: ["Forearms"], secondary: [] }, goal: "bat-speed" }
        ],
        week2: [
            { name: "Pull-ups/Assisted", sets: "4 x 8-12", rest: "90s", why: "Best back builder - bodyweight", video: "eGo4IYlbE5g", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Pull-up.gif", muscles: { primary: ["Lats"], secondary: ["Biceps", "Core"] } },
            { name: "Single Arm DB Row", sets: "4 x 10 each", rest: "60s", why: "Unilateral - fixes imbalances", video: "pYcpY20QaE8", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Row.gif", muscles: { primary: ["Lats", "Mid Back"], secondary: ["Biceps"] } },
            { name: "Face Pulls", sets: "4 x 15-20", rest: "60s", why: "POSTURE + NECK HUMP - key exercise", video: "rep-qVOkqgk", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Face-Pull.gif", muscles: { primary: ["Rear Delts", "Traps"], secondary: ["Rotator Cuff"] }, goal: "neck-hump" },
            { name: "Incline DB Curls", sets: "3 x 10-12", rest: "60s", why: "Full bicep stretch - peak", video: "soxrZlIl35U", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Incline-Dumbbell-Curl.gif", muscles: { primary: ["Biceps"], secondary: [] } },
            { name: "Reverse Curls", sets: "3 x 12", rest: "60s", why: "Forearm + BAT GRIP strength", video: "nRgxYX2Ve9w", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Reverse-Curl.gif", muscles: { primary: ["Brachioradialis", "Forearms"], secondary: ["Biceps"] }, goal: "bat-speed" },
            { name: "Prone Y-T-W", sets: "3 x 8 each", rest: "45s", why: "NECK HUMP - mid/lower trap strength", video: "1hLiTHlBIoA", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/06/Prone-I-Y-T-Raise.gif", muscles: { primary: ["Mid Traps", "Lower Traps"], secondary: ["Rear Delts"] }, goal: "neck-hump" },
            { name: "Reverse Wrist Curls", sets: "3 x 15", rest: "45s", why: "BAT SPEED - forearm balance", video: "FW0p0vJHkRY", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Reverse-Wrist-Curl.gif", muscles: { primary: ["Forearm Extensors"], secondary: [] }, goal: "bat-speed" }
        ],
        cooldown: [
            { name: "Lat Stretch", duration: "30s each side", why: "Releases lats from pulling", video: "pYPkPx2wE1I", muscles: ["Lats"] },
            { name: "Bicep Wall Stretch", duration: "30s each arm", why: "Releases worked biceps", video: "3uHV4Cb5Tck", muscles: ["Biceps"] },
            { name: "Child's Pose", duration: "45s", why: "LOWER BACK relief + relaxation", video: "2MJGg-dUKh0", muscles: ["Lower Back", "Lats"], goal: "lower-back" },
            { name: "Chin Tucks", duration: "15 reps", why: "NECK HUMP FIX - never skip", video: "wQylqaCl8Zo", muscles: ["Neck"], goal: "neck-hump" }
        ]
    },
    
    day3: {
        name: "Legs (Quads) + Lower Back",
        focus: "Burns most calories, back rehab",
        week1: [
            { name: "Barbell Squats", sets: "4 x 10-12", rest: "90s", why: "Best leg builder - burns most calories", video: "ultWZbUMPL8", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/BARBELL-SQUAT.gif", muscles: { primary: ["Quads", "Glutes"], secondary: ["Hamstrings", "Core"] }, goal: "belly-fat" },
            { name: "Leg Press", sets: "4 x 12", rest: "90s", why: "Quad focus - safer for back", video: "IZxyjW7MPJQ", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Leg-Press.gif", muscles: { primary: ["Quads"], secondary: ["Glutes"] } },
            { name: "Walking Lunges", sets: "3 x 10 each", rest: "60s", why: "Balance + glute activation", video: "L8fvypPrzzs", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Walking-Lunge.gif", muscles: { primary: ["Quads", "Glutes"], secondary: ["Hamstrings"] } },
            { name: "Leg Extensions", sets: "3 x 12-15", rest: "60s", why: "Quad isolation - definition", video: "YyvSfVjQeL0", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/LEG-EXTENSION.gif", muscles: { primary: ["Quads"], secondary: [] } },
            { name: "Calf Raises", sets: "4 x 15-20", rest: "45s", why: "Calf development", video: "gwLzBJYoWlI", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Standing-Calf-Raise.gif", muscles: { primary: ["Calves"], secondary: [] } },
            { name: "Glute Bridge", sets: "3 x 15", rest: "60s", why: "LOWER BACK - glute activation", video: "OUgsJ8-Vi0E", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Glute-Bridge.gif", muscles: { primary: ["Glutes"], secondary: ["Hamstrings"] }, goal: "lower-back" },
            { name: "Bird Dog", sets: "3 x 10 each", rest: "45s", why: "LOWER BACK - core stability", video: "wiFNA3sqjCA", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Bird-Dog.gif", muscles: { primary: ["Core", "Lower Back"], secondary: ["Glutes"] }, goal: "lower-back" },
            { name: "Leg Curl", sets: "3 x 12", rest: "60s", why: "Hamstring balance for knee health", video: "1Tq3QdYUuHs", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Leg-Curl.gif", muscles: { primary: ["Hamstrings"], secondary: [] } }
        ],
        week2: [
            { name: "Goblet Squats", sets: "4 x 12", rest: "90s", why: "Easier form - front loaded", video: "MeIiIdhvXT4", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Goblet-Squat.gif", muscles: { primary: ["Quads", "Glutes"], secondary: ["Core"] } },
            { name: "Hack Squat", sets: "4 x 12", rest: "90s", why: "Quad focus - machine guided", video: "0tn5K9NlCfo", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Hack-Squat.gif", muscles: { primary: ["Quads"], secondary: ["Glutes"] } },
            { name: "Reverse Lunges", sets: "3 x 10 each", rest: "60s", why: "Easier on knees than forward", video: "xrPteyQLGAo", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Rear-Lunge.gif", muscles: { primary: ["Quads", "Glutes"], secondary: ["Hamstrings"] } },
            { name: "Sissy Squats", sets: "3 x 12", rest: "60s", why: "Quad stretch - definition", video: "o97gfM16T-w", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/06/Sissy-Squat.gif", muscles: { primary: ["Quads"], secondary: [] } },
            { name: "Seated Calf Raise", sets: "4 x 15-20", rest: "45s", why: "Soleus focus - lower calf", video: "JbyjNymZOt0", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Seated-Calf-Raise.gif", muscles: { primary: ["Soleus"], secondary: [] } },
            { name: "Hip Thrust", sets: "3 x 12", rest: "60s", why: "LOWER BACK - best glute exercise", video: "SEdqd1n0cvg", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Hip-Thrust.gif", muscles: { primary: ["Glutes"], secondary: ["Hamstrings"] }, goal: "lower-back" },
            { name: "Dead Bug", sets: "3 x 10 each", rest: "45s", why: "LOWER BACK + CORE stability", video: "I5xbsA71v4c", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dead-Bug.gif", muscles: { primary: ["Core"], secondary: ["Hip Flexors"] }, goal: "lower-back" },
            { name: "Good Mornings", sets: "3 x 12", rest: "60s", why: "LOWER BACK - posterior chain", video: "YA-h3n9L4YU", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Good-Morning.gif", muscles: { primary: ["Lower Back", "Hamstrings"], secondary: ["Glutes"] }, goal: "lower-back" }
        ],
        cooldown: [
            { name: "Quad Stretch", duration: "30s each leg", why: "Releases tight quads from squats", video: "3hRO1YkJN_U", muscles: ["Quads"] },
            { name: "Hip Flexor Stretch", duration: "30s each", why: "POSTURE + LOWER BACK relief", video: "YQmpO9VT2X4", muscles: ["Hip Flexors"], goal: "lower-back" },
            { name: "Hamstring Stretch", duration: "30s each", why: "Releases hamstrings", video: "FDwpEdxZ4H4", muscles: ["Hamstrings"] },
            { name: "Child's Pose", duration: "45s", why: "LOWER BACK decompression", video: "2MJGg-dUKh0", muscles: ["Lower Back"], goal: "lower-back" },
            { name: "Chin Tucks", duration: "15 reps", why: "NECK HUMP FIX - never skip", video: "wQylqaCl8Zo", muscles: ["Neck"], goal: "neck-hump" }
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
            { name: "Pallof Press", sets: "3 x 10 each", rest: "45s", why: "CORE - anti-rotation stability", video: "AH_QZLm_0-s", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Pallof-Press.gif", muscles: { primary: ["Core"], secondary: ["Obliques"] } },
            { name: "Shrugs", sets: "3 x 12-15", rest: "60s", why: "Upper trap development", video: "cJRVVxmytaM", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Shrug.gif", muscles: { primary: ["Upper Traps"], secondary: [] } }
        ],
        week2: [
            { name: "Arnold Press", sets: "4 x 10-12", rest: "90s", why: "All delt heads - rotation movement", video: "6Z15_WdXmVw", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Arnold-Press.gif", muscles: { primary: ["Front Delts", "Side Delts"], secondary: ["Triceps"] } },
            { name: "Cable Lateral Raise", sets: "4 x 12-15", rest: "60s", why: "Constant tension - better pump", video: "PPrzBWZDOhA", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Cable-Lateral-Raise.gif", muscles: { primary: ["Side Delts"], secondary: [] } },
            { name: "Reverse Pec Deck", sets: "3 x 15", rest: "60s", why: "POSTURE - rear delt isolation", video: "5YK4bgzXDp0", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Rear-Delt-Fly-Machine.gif", muscles: { primary: ["Rear Delts"], secondary: [] }, goal: "posture" },
            { name: "Band Pull-Aparts", sets: "3 x 20", rest: "45s", why: "POSTURE + NECK HUMP fix", video: "JObYtU7Y7ag", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Resistance-Band-Pull-Apart.gif", muscles: { primary: ["Rear Delts"], secondary: ["Traps"] }, goal: "neck-hump" },
            { name: "Med Ball Rotational Throw", sets: "3 x 8 each", rest: "60s", why: "BAT SPEED - explosive hip power", video: "Cf_2gRh1FZU", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/09/Medicine-Ball-Rotational-Throw.gif", muscles: { primary: ["Obliques", "Core"], secondary: ["Hips"] }, goal: "bat-speed" },
            { name: "Russian Twists", sets: "3 x 20 total", rest: "45s", why: "CORE - rotational strength", video: "wkD8rjkodUI", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Russian-Twist.gif", muscles: { primary: ["Obliques"], secondary: ["Core"] }, goal: "bat-speed" },
            { name: "Front Raises", sets: "3 x 12", rest: "60s", why: "Front delt - shoulder roundness", video: "-t7fuZ0KhDA", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Front-Raise.gif", muscles: { primary: ["Front Delts"], secondary: [] } }
        ],
        cooldown: [
            { name: "Shoulder Cross-Body Stretch", duration: "30s each", why: "Releases worked delts", video: "Yf1LYAC4otc", muscles: ["Shoulders"] },
            { name: "Chest Doorway Stretch", duration: "30s each", why: "Opens chest - POSTURE", video: "WTjkS3b8pFA", muscles: ["Chest"], goal: "posture" },
            { name: "Torso Twist Stretch", duration: "30s each", why: "Releases rotational muscles", video: "cSZAmTvvnuw", muscles: ["Obliques", "Lower Back"] },
            { name: "Chin Tucks", duration: "15 reps", why: "NECK HUMP FIX - never skip", video: "wQylqaCl8Zo", muscles: ["Neck"], goal: "neck-hump" }
        ]
    },
    
    day5: {
        name: "Legs (Hamstrings/Glutes)",
        focus: "Glute strength protects back",
        week1: [
            { name: "Romanian Deadlift", sets: "4 x 10-12", rest: "90s", why: "Hamstrings + LOWER BACK strength", video: "7j-2w4-P14I", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Romanian-Deadlift.gif", muscles: { primary: ["Hamstrings", "Glutes"], secondary: ["Lower Back"] }, goal: "lower-back" },
            { name: "Hip Thrusts", sets: "4 x 12", rest: "90s", why: "Best glute exercise - protects back", video: "SEdqd1n0cvg", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Hip-Thrust.gif", muscles: { primary: ["Glutes"], secondary: ["Hamstrings"] }, goal: "lower-back" },
            { name: "Lying Leg Curls", sets: "3 x 12", rest: "60s", why: "Hamstring isolation", video: "1Tq3QdYUuHs", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Leg-Curl.gif", muscles: { primary: ["Hamstrings"], secondary: [] } },
            { name: "Bulgarian Split Squat", sets: "3 x 10 each", rest: "60s", why: "Single leg - fixes imbalances", video: "2C-uNgKwPLE", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Bulgarian-Split-Squat.gif", muscles: { primary: ["Quads", "Glutes"], secondary: ["Hamstrings"] } },
            { name: "Calf Raises", sets: "3 x 15-20", rest: "45s", why: "Calf development", video: "gwLzBJYoWlI", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Standing-Calf-Raise.gif", muscles: { primary: ["Calves"], secondary: [] } },
            { name: "Superman Hold", sets: "3 x 10", rest: "45s", why: "LOWER BACK - spinal erector strength", video: "cc6UVRS7PW4", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Superman.gif", muscles: { primary: ["Lower Back"], secondary: ["Glutes"] }, goal: "lower-back" },
            { name: "Glute Kickbacks", sets: "3 x 12 each", rest: "45s", why: "Glute isolation - shape", video: "uaBz9RwK1XE", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Cable-Glute-Kickback.gif", muscles: { primary: ["Glutes"], secondary: [] } }
        ],
        week2: [
            { name: "Stiff Leg Deadlift", sets: "4 x 10-12", rest: "90s", why: "More hamstring focus than RDL", video: "1uDiW5--rAE", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Stiff-Leg-Deadlift.gif", muscles: { primary: ["Hamstrings"], secondary: ["Lower Back", "Glutes"] } },
            { name: "Cable Pull-Through", sets: "4 x 12", rest: "60s", why: "Glute + hamstring - hip hinge", video: "ArPaAX_f4UQ", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Cable-Pull-Through.gif", muscles: { primary: ["Glutes", "Hamstrings"], secondary: [] } },
            { name: "Seated Leg Curls", sets: "3 x 12", rest: "60s", why: "Different angle for hamstrings", video: "ELOCsoDSmrg", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/08/Seated-Leg-Curl.gif", muscles: { primary: ["Hamstrings"], secondary: [] } },
            { name: "Step-ups", sets: "3 x 10 each", rest: "60s", why: "Functional - glute activation", video: "dQqApCGd5Ss", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Step-up.gif", muscles: { primary: ["Glutes", "Quads"], secondary: [] } },
            { name: "Donkey Calf Raise", sets: "3 x 15-20", rest: "45s", why: "Full calf stretch - development", video: "e0s2xKEMwac", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/06/Donkey-Calf-Raise.gif", muscles: { primary: ["Calves"], secondary: [] } },
            { name: "Reverse Hyper", sets: "3 x 12", rest: "45s", why: "LOWER BACK - decompression", video: "ZeRsNzFcn-Q", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/06/Reverse-Hyperextension.gif", muscles: { primary: ["Lower Back", "Glutes"], secondary: [] }, goal: "lower-back" },
            { name: "Single Leg RDL", sets: "3 x 10 each", rest: "60s", why: "Balance + hamstring stretch", video: "cR6Y-XLVMtA", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/05/Single-Leg-Romanian-Deadlift.gif", muscles: { primary: ["Hamstrings", "Glutes"], secondary: ["Core"] } }
        ],
        cooldown: [
            { name: "Hamstring Stretch", duration: "30s each leg", why: "Releases tight hamstrings", video: "FDwpEdxZ4H4", muscles: ["Hamstrings"] },
            { name: "Pigeon Pose", duration: "30s each side", why: "Deep glute release", video: "c1iwMP0Bknk", muscles: ["Glutes", "Hip Flexors"] },
            { name: "Hip Flexor Stretch", duration: "30s each", why: "POSTURE + LOWER BACK relief", video: "YQmpO9VT2X4", muscles: ["Hip Flexors"], goal: "lower-back" },
            { name: "Child's Pose", duration: "45s", why: "LOWER BACK decompression", video: "2MJGg-dUKh0", muscles: ["Lower Back"], goal: "lower-back" },
            { name: "Chin Tucks", duration: "15 reps", why: "NECK HUMP FIX - never skip", video: "wQylqaCl8Zo", muscles: ["Neck"], goal: "neck-hump" }
        ]
    },
    
    day6: {
        name: "Upper Body + Power + Neck Hump",
        focus: "Full posture/neck hump focus",
        week1: [
            { name: "Push-ups", sets: "3 x max", rest: "60s", why: "Chest/tricep - bodyweight strength", video: "IODxDxX7oi4", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Push-Up.gif", muscles: { primary: ["Chest", "Triceps"], secondary: ["Front Delts", "Core"] } },
            { name: "DB Row", sets: "3 x 10 each", rest: "60s", why: "Back thickness - posture", video: "pYcpY20QaE8", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Row.gif", muscles: { primary: ["Lats", "Mid Back"], secondary: ["Biceps"] }, goal: "posture" },
            { name: "Face Pulls", sets: "4 x 20", rest: "60s", why: "POSTURE + NECK HUMP - key exercise", video: "rep-qVOkqgk", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Face-Pull.gif", muscles: { primary: ["Rear Delts", "Traps"], secondary: ["Rotator Cuff"] }, goal: "neck-hump" },
            { name: "Farmers Walk", sets: "3 x 40m", rest: "60s", why: "BAT SPEED - grip + core stability", video: "Fkzk_RqlYig", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Farmers-Walk.gif", muscles: { primary: ["Forearms", "Traps"], secondary: ["Core"] }, goal: "bat-speed" },
            { name: "Prone Y-T-W", sets: "3 x 10 each", rest: "45s", why: "NECK HUMP - mid/lower trap strength", video: "1hLiTHlBIoA", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/06/Prone-I-Y-T-Raise.gif", muscles: { primary: ["Mid Traps", "Lower Traps"], secondary: ["Rear Delts"] }, goal: "neck-hump" },
            { name: "Chin Tucks", sets: "3 x 15", rest: "30s", why: "NECK HUMP - pull chin back", video: "wQylqaCl8Zo", gif: "https://fitnessprogramer.com/wp-content/uploads/2022/02/Chin-Tuck.gif", muscles: { primary: ["Deep Neck Flexors"], secondary: [] }, goal: "neck-hump" },
            { name: "Thoracic Extension", sets: "3 x 10", rest: "30s", why: "NECK HUMP - upper back mobility", video: "LT_dFRnmdGs", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/06/Thoracic-Extension.gif", muscles: { primary: ["Thoracic Spine"], secondary: [] }, goal: "neck-hump" },
            { name: "Dead Hang", sets: "3 x 30s", rest: "30s", why: "Spine decompression - POSTURE", video: "HoE-C85ZlCE", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dead-Hang.gif", muscles: { primary: ["Lats", "Shoulders"], secondary: ["Forearms"] }, goal: "posture" }
        ],
        week2: [
            { name: "Incline Push-ups", sets: "3 x 15", rest: "60s", why: "Easier variation - builds up", video: "cfns5VDVVvk", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/06/Incline-Push-Up.gif", muscles: { primary: ["Chest", "Triceps"], secondary: ["Front Delts"] } },
            { name: "Inverted Row", sets: "3 x 10-12", rest: "60s", why: "Back + posture - bodyweight", video: "hXTc1mDnZCw", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Inverted-Row.gif", muscles: { primary: ["Mid Back", "Lats"], secondary: ["Biceps"] }, goal: "posture" },
            { name: "Band Pull-Aparts", sets: "4 x 25", rest: "45s", why: "POSTURE - rear delt endurance", video: "JObYtU7Y7ag", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Resistance-Band-Pull-Apart.gif", muscles: { primary: ["Rear Delts"], secondary: ["Traps"] }, goal: "posture" },
            { name: "Plate Pinch Hold", sets: "3 x 30s", rest: "60s", why: "BAT SPEED - finger grip strength", video: "VzXxJkTRoMQ", gif: "https://fitnessprogramer.com/wp-content/uploads/2022/02/Plate-Pinch.gif", muscles: { primary: ["Forearms", "Fingers"], secondary: [] }, goal: "bat-speed" },
            { name: "Wall Angels", sets: "3 x 15", rest: "45s", why: "NECK HUMP + POSTURE - mobility", video: "M_ooIhKYs7c", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/06/Wall-Slides.gif", muscles: { primary: ["Shoulders", "Upper Back"], secondary: [] }, goal: "neck-hump" },
            { name: "Chin Tucks", sets: "3 x 15", rest: "30s", why: "NECK HUMP - pull chin back", video: "wQylqaCl8Zo", gif: "https://fitnessprogramer.com/wp-content/uploads/2022/02/Chin-Tuck.gif", muscles: { primary: ["Deep Neck Flexors"], secondary: [] }, goal: "neck-hump" },
            { name: "Scapular Squeezes", sets: "3 x 15", rest: "30s", why: "POSTURE - shoulder blade control", video: "aV0QsghN2CU", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/06/Scapular-Retraction.gif", muscles: { primary: ["Rhomboids", "Mid Traps"], secondary: [] }, goal: "posture" },
            { name: "Neck Stretches", sets: "3 x 30s each", rest: "-", why: "NECK HUMP - releases tight muscles", video: "wQylqaCl8Zo", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/06/Neck-Side-Stretch.gif", muscles: { primary: ["Neck"], secondary: [] }, goal: "neck-hump" }
        ],
        cooldown: [
            { name: "Chest Doorway Stretch", duration: "30s each", why: "Opens chest - POSTURE fix", video: "WTjkS3b8pFA", muscles: ["Chest"], goal: "posture" },
            { name: "Lat Stretch", duration: "30s each", why: "Releases back from rows", video: "pYPkPx2wE1I", muscles: ["Lats"] },
            { name: "Neck Stretches", duration: "60s total", why: "NECK HUMP - releases all sides", video: "wQylqaCl8Zo", muscles: ["Neck"], goal: "neck-hump" },
            { name: "Wall Angels", duration: "10 reps", why: "POSTURE - shoulder mobility", video: "M_ooIhKYs7c", muscles: ["Shoulders"], goal: "posture" },
            { name: "Chin Tucks", duration: "15 reps", why: "NECK HUMP FIX - never skip", video: "wQylqaCl8Zo", muscles: ["Neck"], goal: "neck-hump" }
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
    'chest-fat': { name: 'Chest Definition', icon: '💪', color: '#4ECDC4' },
    'lower-back': { name: 'Lower Back Pain', icon: '🩹', color: '#45B7D1' },
    'posture': { name: 'Posture Fix', icon: '🧍', color: '#96CEB4' },
    'neck-hump': { name: 'Neck Hump Fix', icon: '🦒', color: '#FFEAA7' },
    'bat-speed': { name: 'Cricket Bat Speed', icon: '🏏', color: '#DDA0DD' }
};
