// CactusIO-interactive (Smart phone usage app)

var activities = []

function addActivity(date, activity, duration) {
    activities.push({ date: date, activity: activity, duration: duration })
}
addActivity("23/7-18", "Youtube", 30);
addActivity("23/7-18", "Instagram", 29);
addActivity("23/7-18", "Twitter", 42);

console.log(activities)

function showStatus(act) {
    var total = 0
    if (activities.length != 0) {
        for (i = 0; i < activities.length; i++) {
            total = total + activities[i].duration
        }
        return `You have added ${activities.length} activities. They amount to ${total} min. of usage`
    }
        return 'Add some activities before calling showStatus'
}

console.log(showStatus(activities))

// Usage limit

function showStatus(act, limit) {
    let total = 0
    if (activities.length != 0) {
        for (i = 0; i < activities.length; i++) {
            total = total + activities[i].duration
            if (total > limit) {
                return 'You have reached your limit, no more smartphoning for you!'
            }
            else if(i == (activities.length-1)){
                return `You have added ${activities.length} activities. They amount to ${total} min. of usage`
            }
        }
    }
        return 'Add some activities before calling showStatus'
}

console.log(showStatus(activities, 60))