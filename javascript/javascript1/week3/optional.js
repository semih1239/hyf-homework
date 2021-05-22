// OPTIONAL

const activitiesO = []

function addActivity(activity, duration) {
    const today = new Date();
    activitiesO.push({ date: (today.toLocaleDateString("en-US")), activity: activity, duration: duration })

}
addActivity("Youtube", 30);
addActivity("Instagram", 29);
addActivity("Twitter", 42);
addActivity("Instagram", 55);
addActivity("Twitter", 33);

console.log(activitiesO)

function showStatus(date) {
    let total = 0
    for (i = 0; i < activitiesO.length; i++) {
        if (activitiesO[i].date === date)
            total = total + 1
    }
    return `You log in ${total} times at ${date}`
}
console.log(showStatus('5/18/2021'))

function calculateActivities() {
    let total = 0
    let log = []
    for(i=0;i<activitiesO.length;i++){
        for(k=1;k<activitiesO.length;k++){
            if (activitiesO[i].activity == activitiesO[k].activity && activitiesO[i] != activitiesO[k]){
                activitiesO[i].duration += activitiesO[k].duration
                activitiesO.splice(k,1)
            }
        }
    }
    log.push({activities : activitiesO[0].activity , duration : activitiesO[0].duration})
    for(i = 1 ; i < activitiesO.length ; i++){
            if(activitiesO[i].duration > total){
                total = activitiesO[i].duration
                log[0].activities = activitiesO[i].activity
                log[0].duration = activitiesO[i].duration
            }
    }
    return `The most used application is ${log[0].activities} . You used its for ${log[0].duration} minutes`
}

console.log(calculateActivities())