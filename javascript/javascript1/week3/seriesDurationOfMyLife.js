// Series duration of my life

const seriesDurations = [
    {
        title: "Breaking Bad",
        days: 1,
        hours: 22,
        minutes: 30,
    },
    {
        title: "Rick And Morty",
        days: 0,
        hours: 14,
        minutes: 25,
    },
    {
        title: "Supernatural",
        days: 10,
        hours: 5,
        minutes: 15,
    },
];



function logOutSeriesText(list){
    let lifeSpan = 80 * 12 * 30 * 24 * 60  // minutes
    let book
    let total = 0
    for(i=0;i<list.length;i++){
        day = list[i].days * 24 * 60
        hour = list[i].hours * 60
        book = day + hour + list[i].minutes
        percent = (book / lifeSpan).toFixed(5)
        total = total + book
        console.log(`${list[i].title} took ${percent}% of my life `)
    }
    total = (total / lifeSpan).toFixed(5)
    return `In total that is ${total}% of my life`
}

console.log(logOutSeriesText(seriesDurations))