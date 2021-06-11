const h3 = document.querySelector('h3')
const btn = document.getElementById('submitButton')
const username = document.querySelector('#username')

const withButton = document.getElementById('withbutton')
const withHover = document.getElementById('withhover')
const withText = document.getElementById('withtext')

const spiritAnimals = ['The Laughing Butterfly', 'The Brave Badger', 'The Sharp Hawk', 'The Sleeper Rabbit', 'The Bully Tiger', 'The Blind Eagle', 'The Big Eye Wolf', 'The Runner Turtle', 'The Walking Grasshopper', 'The Lazy Ant']

function generateSpiritAnimalName() {
    const name = username.value
    const random = Math.floor(Math.random() * 10)
    h3.innerHTML = `${name} - ${spiritAnimals[random]}`
}

withText.addEventListener('click', function () {
    username.addEventListener('keyup', generateSpiritAnimalName)
})

withHover.addEventListener('click', function () {
    username.addEventListener('mouseenter', generateSpiritAnimalName)
})

withButton.addEventListener('click', function () {
    btn.addEventListener('click', function () {
        const name = username.value
        const random = Math.floor(Math.random() * 10)
        if (name === '') {
            return alert('Please write a name')
        }
        h3.innerHTML = `${name} - ${spiritAnimals[random]}`
    })
})
