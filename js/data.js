// Exercise Data with YouTube Videos, GIFs and Muscle Info
// Using ExerciseDB GIFs (reliable source that allows hotlinking)

const exerciseData = {
    warmup: [
        { name: "Jumping Jacks", duration: "60 sec", why: "Raises heart rate, warms entire body", video: "iSSAk4XCsRA", gif: "https://v2.exercisedb.io/image/jNfVGEDJgRf7pq", muscles: ["Full Body"] },
        { name: "Arm Circles", duration: "30s each way", why: "Loosens shoulder joints for pressing", video: "140RTsLGFyY", gif: "https://v2.exercisedb.io/image/qlP0Xs0nzSXAiZ", muscles: ["Shoulders"] },
        { name: "Leg Swings", duration: "10 each leg", why: "Loosens hips for squats/lunges", video: "Of8TL8X6SHU", gif: "https://v2.exercisedb.io/image/Xr6vNR6qqc3I1W", muscles: ["Hip Flexors", "Hamstrings"] },
        { name: "Hip Circles", duration: "10 each way", why: "Mobilizes hip joints, prevents injury", video: "QxCNkVT70JM", gif: "https://v2.exercisedb.io/image/RLfYm9YlMYCE0r", muscles: ["Hips"] },
        { name: "Bodyweight Squats", duration: "10 reps", why: "Activates legs, prepares for leg day", video: "aclHkVaku9U", gif: "https://v2.exercisedb.io/image/e4N0kvEPV0u-4p", muscles: ["Quads", "Glutes"] },
        { name: "Walkouts", duration: "5 reps", why: "Warms core, shoulders, hamstrings", video: "ancMYBD4Pgg", gif: "https://v2.exercisedb.io/image/x3g3rk8pvZGHPj", muscles: ["Core", "Shoulders", "Hamstrings"] },
        { name: "Cat-Cow Stretch", duration: "10 reps", why: "LOWER BACK - Mobilizes spine", video: "kqnua4rHVVA", gif: "https://v2.exercisedb.io/image/vj0pOyrTDwVtXC", muscles: ["Spine", "Core"], goal: "lower-back" },
        { name: "Chin Tucks", duration: "10 reps", why: "NECK HUMP - Daily fix, never skip", video: "wQylqaCl8Zo", gif: "https://v2.exercisedb.io/image/SUGJPq8lKF2aRf", muscles: ["Neck", "Upper Back"], goal: "neck-hump" }
    ],
    
    day1: {
        name: "Chest + Triceps",
        focus: "Upper body, chest fat appearance",
        week1: [
            { name: "Incline DB Press", sets: "4 x 10-12", rest: "90s", why: "Upper chest - reduces chest fat appearance", video: "8iPEnn-ltC8", gif: "https://v2.exercisedb.io/image/3ZYOvmTqLqxqGi", muscles: { primary: ["Upper Chest"], secondary: ["Front Delts", "Triceps"] }, goal: "chest-fat" },
            { name: "Flat Bench Press", sets: "4 x 10", rest: "90s", why: "Main chest builder - compound movement", video: "rT7DgCr-3pg", gif: "https://v2.exercisedb.io/image/qFk5HmJQvQQM9F", muscles: { primary: ["Chest"], secondary: ["Front Delts", "Triceps"] } },
            { name: "Cable Flyes", sets: "3 x 12-15", rest: "60s", why: "Chest squeeze - defines chest shape", video: "Iwe6AmxVf7o", gif: "https://v2.exercisedb.io/image/sVmzN9j0sA7zB1", muscles: { primary: ["Chest"], secondary: [] } },
            { name: "Tricep Pushdowns", sets: "3 x 12", rest: "60s", why: "Tricep mass - arm definition", video: "2-LAMcpzODU", gif: "https://v2.exercisedb.io/image/1VFx0j3F0L1TxW", muscles: { primary: ["Triceps"], secondary: [] } },
            { name: "Overhead Tricep Extension", sets: "3 x 12", rest: "60s", why: "Long head tricep - arm shape", video: "YbX7Wd8jQ-Q", gif: "https://v2.exercisedb.io/image/J3pwxDg0sTHX9K", muscles: { primary: ["Triceps (Long Head)"], secondary: [] } },
            { name: "Dead Bugs", sets: "3 x 10 each", rest: "45s", why: "CORE + LOWER BACK stability", video: "I5xbsA71v4c", gif: "https://v2.exercisedb.io/image/dZn6C8CUFv6tTN", muscles: { primary: ["Core"], secondary: ["Hip Flexors"] }, goal: "lower-back" },
            { name: "Plank", sets: "3 x 45s", rest: "45s", why: "CORE - overall stability", video: "ASdvN_XEl_c", gif: "https://v2.exercisedb.io/image/7d9pJEW1KVVWRD", muscles: { primary: ["Core"], secondary: ["Shoulders"] }, goal: "belly-fat" }
        ],
        week2: [
            { name: "Incline DB Press", sets: "4 x 10-12", rest: "90s", why: "Upper chest - reduces chest fat appearance", video: "8iPEnn-ltC8", gif: "https://v2.exercisedb.io/image/3ZYOvmTqLqxqGi", muscles: { primary: ["Upper Chest"], secondary: ["Front Delts", "Triceps"] }, goal: "chest-fat" },
            { name: "Dumbbell Bench Press", sets: "4 x 10", rest: "90s", why: "Better stretch than barbell", video: "VmB1G1K7v94", gif: "https://v2.exercisedb.io/image/Jvzp1sZQ04RGGz", muscles: { primary: ["Chest"], secondary: ["Front Delts", "Triceps"] } },
            { name: "Pec Deck Machine", sets: "3 x 12-15", rest: "60s", why: "Isolates chest - good squeeze", video: "xUm0BiZCWlQ", gif: "https://v2.exercisedb.io/image/Aogr7uW3T-yP54", muscles: { primary: ["Chest"], secondary: [] } },
            { name: "Dips", sets: "3 x 10-12", rest: "60s", why: "Lower chest + triceps compound", video: "2z8JmcrW-As", gif: "https://v2.exercisedb.io/image/XJk3VH8wCtF30N", muscles: { primary: ["Lower Chest", "Triceps"], secondary: ["Front Delts"] } },
            { name: "Skull Crushers", sets: "3 x 12", rest: "60s", why: "Tricep mass - different angle", video: "d_KZxkY_0cM", gif: "https://v2.exercisedb.io/image/3pjqMHh7mZ4OY1", muscles: { primary: ["Triceps"], secondary: [] } },
            { name: "Dead Bugs", sets: "3 x 10 each", rest: "45s", why: "CORE + LOWER BACK stability", video: "I5xbsA71v4c", gif: "https://v2.exercisedb.io/image/dZn6C8CUFv6tTN", muscles: { primary: ["Core"], secondary: ["Hip Flexors"] }, goal: "lower-back" },
            { name: "Side Plank", sets: "3 x 30s each", rest: "45s", why: "Obliques - waist definition", video: "K2VljzCC16g", gif: "https://v2.exercisedb.io/image/NrfXS5O0F3JxRm", muscles: { primary: ["Obliques"], secondary: ["Core"] }, goal: "belly-fat" }
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
            { name: "Lat Pulldown", sets: "4 x 10-12", rest: "90s", why: "Builds wide back - V-taper shape", video: "CAwf7n6Luuc", gif: "https://v2.exercisedb.io/image/kHJqPQF8j8GGvz", muscles: { primary: ["Lats"], secondary: ["Biceps", "Rear Delts"] } },
            { name: "Seated Cable Row", sets: "4 x 10-12", rest: "90s", why: "Back thickness + POSTURE", video: "GZbfZ033f74", gif: "https://v2.exercisedb.io/image/lJ5qT-mCjc8dRS", muscles: { primary: ["Mid Back", "Lats"], secondary: ["Biceps"] }, goal: "posture" },
            { name: "Face Pulls", sets: "4 x 15-20", rest: "60s", why: "POSTURE + NECK HUMP - key exercise", video: "rep-qVOkqgk", gif: "https://v2.exercisedb.io/image/iFWCBvLJvJoJhW", muscles: { primary: ["Rear Delts", "Traps"], secondary: ["Rotator Cuff"] }, goal: "neck-hump" },
            { name: "Barbell Curls", sets: "3 x 10-12", rest: "60s", why: "Bicep mass - arm size", video: "kwG2ipFRgfo", gif: "https://v2.exercisedb.io/image/UMpPyMwqCU-RJH", muscles: { primary: ["Biceps"], secondary: ["Forearms"] } },
            { name: "Hammer Curls", sets: "3 x 12", rest: "60s", why: "Forearm + BAT GRIP strength", video: "zC3nLlEvin4", gif: "https://v2.exercisedb.io/image/CPFQ8Ck5xyPXzL", muscles: { primary: ["Biceps", "Brachialis"], secondary: ["Forearms"] }, goal: "bat-speed" },
            { name: "Band Pull-Aparts", sets: "3 x 20", rest: "45s", why: "POSTURE - rear delt activation", video: "JObYtU7Y7ag", gif: "https://v2.exercisedb.io/image/WFPmZPG9A3NdxY", muscles: { primary: ["Rear Delts"], secondary: ["Traps"] }, goal: "posture" },
            { name: "Wrist Curls", sets: "3 x 15", rest: "45s", why: "BAT SPEED - wrist snap power", video: "7ac_qmBYdMs", gif: "https://v2.exercisedb.io/image/r1mG-JK8r0RaJl", muscles: { primary: ["Forearms"], secondary: [] }, goal: "bat-speed" }
        ],
        week2: [
            { name: "Pull-ups/Assisted", sets: "4 x 8-12", rest: "90s", why: "Best back builder - bodyweight", video: "eGo4IYlbE5g", gif: "https://v2.exercisedb.io/image/eJTrj0zpmqe7HW", muscles: { primary: ["Lats"], secondary: ["Biceps", "Core"] } },
            { name: "Single Arm DB Row", sets: "4 x 10 each", rest: "60s", why: "Unilateral - fixes imbalances", video: "pYcpY20QaE8", gif: "https://v2.exercisedb.io/image/GGJxSC3SzBEqhd", muscles: { primary: ["Lats", "Mid Back"], secondary: ["Biceps"] } },
            { name: "Face Pulls", sets: "4 x 15-20", rest: "60s", why: "POSTURE + NECK HUMP - key exercise", video: "rep-qVOkqgk", gif: "https://v2.exercisedb.io/image/iFWCBvLJvJoJhW", muscles: { primary: ["Rear Delts", "Traps"], secondary: ["Rotator Cuff"] }, goal: "neck-hump" },
            { name: "Incline DB Curls", sets: "3 x 10-12", rest: "60s", why: "Full bicep stretch - peak", video: "soxrZlIl35U", gif: "https://v2.exercisedb.io/image/k3W9Y8xQqeFnXH", muscles: { primary: ["Biceps"], secondary: [] } },
            { name: "Reverse Curls", sets: "3 x 12", rest: "60s", why: "Forearm + BAT GRIP strength", video: "nRgxYX2Ve9w", gif: "https://v2.exercisedb.io/image/5pHQB2VqPKvQxC", muscles: { primary: ["Brachioradialis", "Forearms"], secondary: ["Biceps"] }, goal: "bat-speed" },
            { name: "Prone Y-T-W", sets: "3 x 8 each", rest: "45s", why: "NECK HUMP - mid/lower trap strength", video: "1hLiTHlBIoA", gif: "https://v2.exercisedb.io/image/r9JPWQ1qT2k9Wz", muscles: { primary: ["Mid Traps", "Lower Traps"], secondary: ["Rear Delts"] }, goal: "neck-hump" },
            { name: "Reverse Wrist Curls", sets: "3 x 15", rest: "45s", why: "BAT SPEED - forearm balance", video: "FW0p0vJHkRY", gif: "https://v2.exercisedb.io/image/QjLKm5PxKvr0JP", muscles: { primary: ["Forearm Extensors"], secondary: [] }, goal: "bat-speed" }
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
            { name: "Barbell Squats", sets: "4 x 10-12", rest: "90s", why: "Best leg builder - burns most calories", video: "ultWZbUMPL8", gif: "https://v2.exercisedb.io/image/RKdqvFJvG6e9Pm", muscles: { primary: ["Quads", "Glutes"], secondary: ["Hamstrings", "Core"] }, goal: "belly-fat" },
            { name: "Leg Press", sets: "4 x 12", rest: "90s", why: "Quad focus - safer for back", video: "IZxyjW7MPJQ", gif: "https://v2.exercisedb.io/image/KdxHYMDNBnL8QJ", muscles: { primary: ["Quads"], secondary: ["Glutes"] } },
            { name: "Walking Lunges", sets: "3 x 10 each", rest: "60s", why: "Balance + glute activation", video: "L8fvypPrzzs", gif: "https://v2.exercisedb.io/image/M9D3P0LTvNbhxF", muscles: { primary: ["Quads", "Glutes"], secondary: ["Hamstrings"] } },
            { name: "Leg Extensions", sets: "3 x 12-15", rest: "60s", why: "Quad isolation - definition", video: "YyvSfVjQeL0", gif: "https://v2.exercisedb.io/image/KeFHN9C2DjKrVY", muscles: { primary: ["Quads"], secondary: [] } },
            { name: "Calf Raises", sets: "4 x 15-20", rest: "45s", why: "Calf development", video: "gwLzBJYoWlI", gif: "https://v2.exercisedb.io/image/WPrVJ3qQKPNJyD", muscles: { primary: ["Calves"], secondary: [] } },
            { name: "Glute Bridge", sets: "3 x 15", rest: "60s", why: "LOWER BACK - glute activation", video: "OUgsJ8-Vi0E", gif: "https://v2.exercisedb.io/image/sV9TK3QDvp1wXM", muscles: { primary: ["Glutes"], secondary: ["Hamstrings"] }, goal: "lower-back" },
            { name: "Bird Dog", sets: "3 x 10 each", rest: "45s", why: "LOWER BACK - core stability", video: "wiFNA3sqjCA", gif: "https://v2.exercisedb.io/image/y6TpZQzKfNx3Rr", muscles: { primary: ["Core", "Lower Back"], secondary: ["Glutes"] }, goal: "lower-back" },
            { name: "Leg Curl", sets: "3 x 12", rest: "60s", why: "Hamstring balance for knee health", video: "1Tq3QdYUuHs", gif: "https://v2.exercisedb.io/image/yz9pNJKmgFx8sW", muscles: { primary: ["Hamstrings"], secondary: [] } }
        ],
        week2: [
            { name: "Goblet Squats", sets: "4 x 12", rest: "90s", why: "Easier form - front loaded", video: "MeIiIdhvXT4", gif: "https://v2.exercisedb.io/image/MLQP6JWVFv3eRx", muscles: { primary: ["Quads", "Glutes"], secondary: ["Core"] } },
            { name: "Hack Squat", sets: "4 x 12", rest: "90s", why: "Quad focus - machine guided", video: "0tn5K9NlCfo", gif: "https://v2.exercisedb.io/image/5KLj7PzN9rp1xC", muscles: { primary: ["Quads"], secondary: ["Glutes"] } },
            { name: "Reverse Lunges", sets: "3 x 10 each", rest: "60s", why: "Easier on knees than forward", video: "xrPteyQLGAo", gif: "https://v2.exercisedb.io/image/YxLp5FJkVN8Qwm", muscles: { primary: ["Quads", "Glutes"], secondary: ["Hamstrings"] } },
            { name: "Sissy Squats", sets: "3 x 12", rest: "60s", why: "Quad stretch - definition", video: "o97gfM16T-w", gif: "https://v2.exercisedb.io/image/qFk5HmJQvQQM9F", muscles: { primary: ["Quads"], secondary: [] } },
            { name: "Seated Calf Raise", sets: "4 x 15-20", rest: "45s", why: "Soleus focus - lower calf", video: "JbyjNymZOt0", gif: "https://v2.exercisedb.io/image/Jx7LkDmNyWp3Rf", muscles: { primary: ["Soleus"], secondary: [] } },
            { name: "Hip Thrust", sets: "3 x 12", rest: "60s", why: "LOWER BACK - best glute exercise", video: "SEdqd1n0cvg", gif: "https://v2.exercisedb.io/image/5WMJ1QPKvNx8rL", muscles: { primary: ["Glutes"], secondary: ["Hamstrings"] }, goal: "lower-back" },
            { name: "Dead Bug", sets: "3 x 10 each", rest: "45s", why: "LOWER BACK + CORE stability", video: "I5xbsA71v4c", gif: "https://v2.exercisedb.io/image/dZn6C8CUFv6tTN", muscles: { primary: ["Core"], secondary: ["Hip Flexors"] }, goal: "lower-back" },
            { name: "Good Mornings", sets: "3 x 12", rest: "60s", why: "LOWER BACK - posterior chain", video: "YA-h3n9L4YU", gif: "https://v2.exercisedb.io/image/BLxjPz5KNv9QrW", muscles: { primary: ["Lower Back", "Hamstrings"], secondary: ["Glutes"] }, goal: "lower-back" }
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
            { name: "Overhead Press", sets: "4 x 10", rest: "90s", why: "Main shoulder builder - strength", video: "2yjwXTZQDDI", gif: "https://v2.exercisedb.io/image/TJqpN9zKLv5xRm", muscles: { primary: ["Front Delts", "Side Delts"], secondary: ["Triceps", "Core"] } },
            { name: "Lateral Raises", sets: "4 x 12-15", rest: "60s", why: "Side delts - shoulder width", video: "3VcKaXpzqRo", gif: "https://v2.exercisedb.io/image/Kp9xJLzNvQ5rWm", muscles: { primary: ["Side Delts"], secondary: [] } },
            { name: "Rear Delt Flyes", sets: "3 x 15", rest: "60s", why: "POSTURE - balances front delts", video: "EA7u4Q_8HQ0", gif: "https://v2.exercisedb.io/image/zVqP9xJKLm5nRw", muscles: { primary: ["Rear Delts"], secondary: ["Traps"] }, goal: "posture" },
            { name: "Face Pulls", sets: "3 x 15", rest: "60s", why: "POSTURE + NECK HUMP fix", video: "rep-qVOkqgk", gif: "https://v2.exercisedb.io/image/iFWCBvLJvJoJhW", muscles: { primary: ["Rear Delts", "Traps"], secondary: ["Rotator Cuff"] }, goal: "neck-hump" },
            { name: "Cable Woodchops", sets: "3 x 12 each", rest: "60s", why: "BAT SPEED - hip rotation power", video: "pAplQXk3dkU", gif: "https://v2.exercisedb.io/image/Wp3NxJzKvQ9rLm", muscles: { primary: ["Obliques", "Core"], secondary: ["Shoulders"] }, goal: "bat-speed" },
            { name: "Pallof Press", sets: "3 x 10 each", rest: "45s", why: "CORE - anti-rotation stability", video: "AH_QZLm_0-s", gif: "https://v2.exercisedb.io/image/Qp7NxKzLvJ5rWm", muscles: { primary: ["Core"], secondary: ["Obliques"] } },
            { name: "Shrugs", sets: "3 x 12-15", rest: "60s", why: "Upper trap development", video: "cJRVVxmytaM", gif: "https://v2.exercisedb.io/image/Rp8NxLzMvK6sXn", muscles: { primary: ["Upper Traps"], secondary: [] } }
        ],
        week2: [
            { name: "Arnold Press", sets: "4 x 10-12", rest: "90s", why: "All delt heads - rotation movement", video: "6Z15_WdXmVw", gif: "https://v2.exercisedb.io/image/Sp9OyMzNvL7tYo", muscles: { primary: ["Front Delts", "Side Delts"], secondary: ["Triceps"] } },
            { name: "Cable Lateral Raise", sets: "4 x 12-15", rest: "60s", why: "Constant tension - better pump", video: "PPrzBWZDOhA", gif: "https://v2.exercisedb.io/image/Tp0PzNzOvM8uZp", muscles: { primary: ["Side Delts"], secondary: [] } },
            { name: "Reverse Pec Deck", sets: "3 x 15", rest: "60s", why: "POSTURE - rear delt isolation", video: "5YK4bgzXDp0", gif: "https://v2.exercisedb.io/image/Up1QzOzPvN9vAq", muscles: { primary: ["Rear Delts"], secondary: [] }, goal: "posture" },
            { name: "Band Pull-Aparts", sets: "3 x 20", rest: "45s", why: "POSTURE + NECK HUMP fix", video: "JObYtU7Y7ag", gif: "https://v2.exercisedb.io/image/WFPmZPG9A3NdxY", muscles: { primary: ["Rear Delts"], secondary: ["Traps"] }, goal: "neck-hump" },
            { name: "Med Ball Rotational Throw", sets: "3 x 8 each", rest: "60s", why: "BAT SPEED - explosive hip power", video: "Cf_2gRh1FZU", gif: "https://v2.exercisedb.io/image/Vp2RzPzQvO0wBr", muscles: { primary: ["Obliques", "Core"], secondary: ["Hips"] }, goal: "bat-speed" },
            { name: "Russian Twists", sets: "3 x 20 total", rest: "45s", why: "CORE - rotational strength", video: "wkD8rjkodUI", gif: "https://v2.exercisedb.io/image/Wp3SzQzRvP1xCs", muscles: { primary: ["Obliques"], secondary: ["Core"] }, goal: "bat-speed" },
            { name: "Front Raises", sets: "3 x 12", rest: "60s", why: "Front delt - shoulder roundness", video: "-t7fuZ0KhDA", gif: "https://v2.exercisedb.io/image/Xp4TzRzSvQ2yDt", muscles: { primary: ["Front Delts"], secondary: [] } }
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
            { name: "Romanian Deadlift", sets: "4 x 10-12", rest: "90s", why: "Hamstrings + LOWER BACK strength", video: "7j-2w4-P14I", gif: "https://v2.exercisedb.io/image/Yp5UzSzTvR3zEu", muscles: { primary: ["Hamstrings", "Glutes"], secondary: ["Lower Back"] }, goal: "lower-back" },
            { name: "Hip Thrusts", sets: "4 x 12", rest: "90s", why: "Best glute exercise - protects back", video: "SEdqd1n0cvg", gif: "https://v2.exercisedb.io/image/5WMJ1QPKvNx8rL", muscles: { primary: ["Glutes"], secondary: ["Hamstrings"] }, goal: "lower-back" },
            { name: "Lying Leg Curls", sets: "3 x 12", rest: "60s", why: "Hamstring isolation", video: "1Tq3QdYUuHs", gif: "https://v2.exercisedb.io/image/yz9pNJKmgFx8sW", muscles: { primary: ["Hamstrings"], secondary: [] } },
            { name: "Bulgarian Split Squat", sets: "3 x 10 each", rest: "60s", why: "Single leg - fixes imbalances", video: "2C-uNgKwPLE", gif: "https://v2.exercisedb.io/image/Zp6VzTzUvS4AFv", muscles: { primary: ["Quads", "Glutes"], secondary: ["Hamstrings"] } },
            { name: "Calf Raises", sets: "3 x 15-20", rest: "45s", why: "Calf development", video: "gwLzBJYoWlI", gif: "https://v2.exercisedb.io/image/WPrVJ3qQKPNJyD", muscles: { primary: ["Calves"], secondary: [] } },
            { name: "Superman Hold", sets: "3 x 10", rest: "45s", why: "LOWER BACK - spinal erector strength", video: "cc6UVRS7PW4", gif: "https://v2.exercisedb.io/image/Ap7WzUzVvT5BGw", muscles: { primary: ["Lower Back"], secondary: ["Glutes"] }, goal: "lower-back" },
            { name: "Glute Kickbacks", sets: "3 x 12 each", rest: "45s", why: "Glute isolation - shape", video: "uaBz9RwK1XE", gif: "https://v2.exercisedb.io/image/Bp8XzVzWvU6CHx", muscles: { primary: ["Glutes"], secondary: [] } }
        ],
        week2: [
            { name: "Stiff Leg Deadlift", sets: "4 x 10-12", rest: "90s", why: "More hamstring focus than RDL", video: "1uDiW5--rAE", gif: "https://v2.exercisedb.io/image/Cp9YzWzXvV7DIy", muscles: { primary: ["Hamstrings"], secondary: ["Lower Back", "Glutes"] } },
            { name: "Cable Pull-Through", sets: "4 x 12", rest: "60s", why: "Glute + hamstring - hip hinge", video: "ArPaAX_f4UQ", gif: "https://v2.exercisedb.io/image/Dp0ZzXzYvW8EJz", muscles: { primary: ["Glutes", "Hamstrings"], secondary: [] } },
            { name: "Seated Leg Curls", sets: "3 x 12", rest: "60s", why: "Different angle for hamstrings", video: "ELOCsoDSmrg", gif: "https://v2.exercisedb.io/image/Ep1AzYzZvX9FKA", muscles: { primary: ["Hamstrings"], secondary: [] } },
            { name: "Step-ups", sets: "3 x 10 each", rest: "60s", why: "Functional - glute activation", video: "dQqApCGd5Ss", gif: "https://v2.exercisedb.io/image/Fp2BzZzAvY0GLB", muscles: { primary: ["Glutes", "Quads"], secondary: [] } },
            { name: "Donkey Calf Raise", sets: "3 x 15-20", rest: "45s", why: "Full calf stretch - development", video: "e0s2xKEMwac", gif: "https://v2.exercisedb.io/image/Gp3CzAzBvZ1HMC", muscles: { primary: ["Calves"], secondary: [] } },
            { name: "Reverse Hyper", sets: "3 x 12", rest: "45s", why: "LOWER BACK - decompression", video: "ZeRsNzFcn-Q", gif: "https://v2.exercisedb.io/image/Hp4DzBzCvA2IND", muscles: { primary: ["Lower Back", "Glutes"], secondary: [] }, goal: "lower-back" },
            { name: "Single Leg RDL", sets: "3 x 10 each", rest: "60s", why: "Balance + hamstring stretch", video: "cR6Y-XLVMtA", gif: "https://v2.exercisedb.io/image/Ip5EzCzDvB3JOE", muscles: { primary: ["Hamstrings", "Glutes"], secondary: ["Core"] } }
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
            { name: "Push-ups", sets: "3 x max", rest: "60s", why: "Chest/tricep - bodyweight strength", video: "IODxDxX7oi4", gif: "https://v2.exercisedb.io/image/Jp6FzDzEvC4KPF", muscles: { primary: ["Chest", "Triceps"], secondary: ["Front Delts", "Core"] } },
            { name: "DB Row", sets: "3 x 10 each", rest: "60s", why: "Back thickness - posture", video: "pYcpY20QaE8", gif: "https://v2.exercisedb.io/image/GGJxSC3SzBEqhd", muscles: { primary: ["Lats", "Mid Back"], secondary: ["Biceps"] }, goal: "posture" },
            { name: "Face Pulls", sets: "4 x 20", rest: "60s", why: "POSTURE + NECK HUMP - key exercise", video: "rep-qVOkqgk", gif: "https://v2.exercisedb.io/image/iFWCBvLJvJoJhW", muscles: { primary: ["Rear Delts", "Traps"], secondary: ["Rotator Cuff"] }, goal: "neck-hump" },
            { name: "Farmers Walk", sets: "3 x 40m", rest: "60s", why: "BAT SPEED - grip + core stability", video: "Fkzk_RqlYig", gif: "https://v2.exercisedb.io/image/Kp7GzEzFvD5LQG", muscles: { primary: ["Forearms", "Traps"], secondary: ["Core"] }, goal: "bat-speed" },
            { name: "Prone Y-T-W", sets: "3 x 10 each", rest: "45s", why: "NECK HUMP - mid/lower trap strength", video: "1hLiTHlBIoA", gif: "https://v2.exercisedb.io/image/r9JPWQ1qT2k9Wz", muscles: { primary: ["Mid Traps", "Lower Traps"], secondary: ["Rear Delts"] }, goal: "neck-hump" },
            { name: "Chin Tucks", sets: "3 x 15", rest: "30s", why: "NECK HUMP - pull chin back", video: "wQylqaCl8Zo", gif: "https://v2.exercisedb.io/image/SUGJPq8lKF2aRf", muscles: { primary: ["Deep Neck Flexors"], secondary: [] }, goal: "neck-hump" },
            { name: "Thoracic Extension", sets: "3 x 10", rest: "30s", why: "NECK HUMP - upper back mobility", video: "LT_dFRnmdGs", gif: "https://v2.exercisedb.io/image/Lp8HzFzGvE6MRH", muscles: { primary: ["Thoracic Spine"], secondary: [] }, goal: "neck-hump" },
            { name: "Dead Hang", sets: "3 x 30s", rest: "30s", why: "Spine decompression - POSTURE", video: "HoE-C85ZlCE", gif: "https://v2.exercisedb.io/image/Mp9IzGzHvF7NSI", muscles: { primary: ["Lats", "Shoulders"], secondary: ["Forearms"] }, goal: "posture" }
        ],
        week2: [
            { name: "Incline Push-ups", sets: "3 x 15", rest: "60s", why: "Easier variation - builds up", video: "cfns5VDVVvk", gif: "https://v2.exercisedb.io/image/Np0JzHzIvG8OTJ", muscles: { primary: ["Chest", "Triceps"], secondary: ["Front Delts"] } },
            { name: "Inverted Row", sets: "3 x 10-12", rest: "60s", why: "Back + posture - bodyweight", video: "hXTc1mDnZCw", gif: "https://v2.exercisedb.io/image/Op1KzIzJvH9PUK", muscles: { primary: ["Mid Back", "Lats"], secondary: ["Biceps"] }, goal: "posture" },
            { name: "Band Pull-Aparts", sets: "4 x 25", rest: "45s", why: "POSTURE - rear delt endurance", video: "JObYtU7Y7ag", gif: "https://v2.exercisedb.io/image/WFPmZPG9A3NdxY", muscles: { primary: ["Rear Delts"], secondary: ["Traps"] }, goal: "posture" },
            { name: "Plate Pinch Hold", sets: "3 x 30s", rest: "60s", why: "BAT SPEED - finger grip strength", video: "VzXxJkTRoMQ", gif: "https://v2.exercisedb.io/image/Pp2LzJzKvI0QVL", muscles: { primary: ["Forearms", "Fingers"], secondary: [] }, goal: "bat-speed" },
            { name: "Wall Angels", sets: "3 x 15", rest: "45s", why: "NECK HUMP + POSTURE - mobility", video: "M_ooIhKYs7c", gif: "https://v2.exercisedb.io/image/Qp3MzKzLvJ1RWM", muscles: { primary: ["Shoulders", "Upper Back"], secondary: [] }, goal: "neck-hump" },
            { name: "Chin Tucks", sets: "3 x 15", rest: "30s", why: "NECK HUMP - pull chin back", video: "wQylqaCl8Zo", gif: "https://v2.exercisedb.io/image/SUGJPq8lKF2aRf", muscles: { primary: ["Deep Neck Flexors"], secondary: [] }, goal: "neck-hump" },
            { name: "Scapular Squeezes", sets: "3 x 15", rest: "30s", why: "POSTURE - shoulder blade control", video: "aV0QsghN2CU", gif: "https://v2.exercisedb.io/image/Rp4NzLzMvK2SXN", muscles: { primary: ["Rhomboids", "Mid Traps"], secondary: [] }, goal: "posture" },
            { name: "Neck Stretches", sets: "3 x 30s each", rest: "-", why: "NECK HUMP - releases tight muscles", video: "wQylqaCl8Zo", gif: "https://v2.exercisedb.io/image/Sp5OzMzNvL3TYO", muscles: { primary: ["Neck"], secondary: [] }, goal: "neck-hump" }
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
            "Light walking okay - helps blood flow",
            "Drink plenty of water",
            "Eat enough protein for recovery",
            "Do Chin Tucks (3x15) morning AND night for neck hump",
            "Foam rolling or light stretching if needed",
            "Avoid intense physical activity",
            "Meal prep for the week if needed"
        ]
    }
};

// Diet Data
const dietData = {
    breakfast: {
        time: "7:00-8:00 AM",
        options: [
            { name: "3-4 Idli + Sambar + 2 egg whites", protein: "~22g" },
            { name: "2 Dosa + Sambar + 1 egg", protein: "~20g" },
            { name: "2 Wheat bread + 2 eggs + peanut butter + veggies", protein: "~25g" },
            { name: "Overnight oats + seeds + nuts + banana", protein: "~20g" },
            { name: "Boiled banana + 3 eggs + nuts", protein: "~23g" }
        ]
    },
    midMorning: {
        time: "10:30 AM",
        options: [
            { name: "Green juice / Vegetable juice", protein: "-" },
            { name: "Buttermilk / Coconut water", protein: "-" },
            { name: "Greek yogurt", protein: "~15g" },
            { name: "Egg whites (3-4)", protein: "~12g" },
            { name: "Handful of nuts or sprouts", protein: "~8g" }
        ]
    },
    lunch: {
        time: "1:00 PM",
        options: [
            { name: "150g chicken/fish + 1 cup rice + sabzi + salad", protein: "~35g" },
            { name: "Paneer (100g) + 2 rotis + sabzi + curd + salad", protein: "~25g" },
            { name: "Dal + 2 rotis + sabzi + curd + salad", protein: "~18g" }
        ]
    },
    preWorkout: {
        time: "4:00 PM (if morning gym: 7:00 AM)",
        options: [
            { name: "Banana + almonds", protein: "~6g" },
            { name: "Apple + peanut butter", protein: "~8g" },
            { name: "Oats + banana", protein: "~8g" },
            { name: "Black coffee (no sugar)", protein: "-" }
        ]
    },
    postWorkout: {
        time: "Within 30 mins after gym",
        options: [
            { name: "Whey protein (1 scoop) + water", protein: "~24g" },
            { name: "4-5 egg whites + banana", protein: "~18g" }
        ]
    },
    dinner: {
        time: "8:00 PM",
        options: [
            { name: "150g chicken/fish + large salad + minimal carbs", protein: "~35g" },
            { name: "Paneer (150g) + large salad", protein: "~27g" }
        ]
    }
};

// Goal color mapping
const goalColors = {
    "belly-fat": "#ef4444",
    "chest-fat": "#f97316", 
    "lower-back": "#22c55e",
    "posture": "#3b82f6",
    "neck-hump": "#8b5cf6",
    "bat-speed": "#eab308"
};

const goalLabels = {
    "belly-fat": "🔥 Belly Fat",
    "chest-fat": "💪 Chest Fat",
    "lower-back": "🦴 Lower Back",
    "posture": "🧘 Posture",
    "neck-hump": "📍 Neck Hump",
    "bat-speed": "🏏 Bat Speed"
};
