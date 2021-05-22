// When will we be there??

const travelInformation = {
    speed: 50,
    destinationDistance: 432,
};

function travelTimeCalculate(travelInformation) {
    const carSpeed = travelInformation.speed
    const distance = travelInformation.destinationDistance
    const hour = Math.floor(distance / carSpeed)
    const minute = Math.ceil (60 * ((distance / carSpeed) % 1))
    return `${hour} hours and ${minute} minutes`
}

console.log(travelTimeCalculate(travelInformation))
