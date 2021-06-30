const redBox = document.querySelector('ul.marks li:nth-child(1)')
const blueBox = document.querySelector('ul.marks li:nth-child(2)')
const greenBox = document.querySelector('ul.marks li:nth-child(3)')

const redBoxNewPosition = { 'x': 20 - redBox.offsetLeft, 'y': 300 - redBox.offsetTop }
const blueBoxNewPosition = { 'x': 400 - blueBox.offsetLeft, 'y': 300 - blueBox.offsetTop }
const greenBoxNewPosition = { 'x': 400 - greenBox.offsetLeft, 'y': 20 - greenBox.offsetTop }


function translateOneByOne() {
    moveElement(redBox, { 'x': redBoxNewPosition.x, 'y': redBoxNewPosition.y })
        .then(() => { return moveElement(blueBox, { 'x': blueBoxNewPosition.x, 'y': blueBoxNewPosition.y }) })
        .then(() => { return moveElement(greenBox, { 'x': greenBoxNewPosition.x, 'y': greenBoxNewPosition.y }) })
        .then(() => { console.log('All elements has been moved') })
        .catch(() => { 'ERROR' })
}

translateOneByOne()

function translateAllAtOnce() {
    return Promise.all([
        moveElement(redBox, { 'x': redBoxNewPosition.x, 'y': redBoxNewPosition.y }),
        moveElement(blueBox, { 'x': blueBoxNewPosition.x, 'y': blueBoxNewPosition.y }),
        moveElement(greenBox, { 'x': greenBoxNewPosition.x, 'y': greenBoxNewPosition.y })
    ])
}

translateAllAtOnce()