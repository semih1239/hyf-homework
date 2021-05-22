// CactusIO-interactive (Smart phone usage app)

const activities = []

function addActivity(date, activity, duration) {
    activities.push({ date , activity, duration })
}
addActivity("23/7-18", "Youtube", 30);
addActivity("23/7-18", "Instagram", 29);
addActivity("23/7-18", "Twitter", 42);

console.log(activities)

function showStatus(activity) {
    let total = 0
    if (activity.length != 0) {
        for (let i = 0; i < activity.length; i++) {
            total += activity[i].duration
        }
        return `You have added ${activity.length} activities. They amount to ${total} min. of usage`
    }
        return 'Add some activities before calling showStatus'
}

console.log(showStatus(activities))

// Usage limit

function showStatus(activity, limit) {
    let total = 0
    if (activity.length != 0) {
        for (let i = 0; i < activity.length; i++) {
            total += activity[i].duration
            if (total > limit) {
                return 'You have reached your limit, no more smartphoning for you!'
            }
            else if(i == (activity.length-1)){
                return `You have added ${activity.length} activities. They amount to ${total} min. of usage`
            }
        }
    }
        return 'Add some activities before calling showStatus'
}

console.log(showStatus(activities, 60))