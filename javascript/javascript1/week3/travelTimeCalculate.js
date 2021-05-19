// When will we be there??

const travelInformation = {
    speed: 50,
    destinationDistance: 432,
};

function travelTimeCalculate(travelInformation) {
    let carSpeed = travelInformation.speed
    let distance = travelInformation.destinationDistance
    var hour = Math.floor(distance / carSpeed)
    var minute = Math.ceil (60 * ((distance / carSpeed) % 1))
    return `${hour} hours and ${minute} minutes`
}

console.log(travelTimeCalculate(travelInformation))
