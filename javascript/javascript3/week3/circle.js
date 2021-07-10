// Paint a circle to a canvas element

const canvas = document.querySelector('canvas')
canvas.width = window.innerWidth
canvas.height = window.innerHeight

const context = canvas.getContext('2d')

context.beginPath()
context.arc(100, 75, 50, 0, 2 * Math.PI)
context.stroke()
context.fillStyle = 'blue'
context.fill()

// Class creation time!

class Circle {
    constructor(x, y, r, startAngle, endAngle, fillColor) {
        this.x = x
        this.y = y
        this.r = r
        this.startAngle = startAngle
        this.endAngle = endAngle
        this.fillColor = fillColor
    }
    draw() {
        const context = canvas.getContext('2d')
        context.beginPath()
        context.arc(this.x, this.y, this.r, this.startAngle, this.endAngle)
        context.stroke()
        context.fillStyle = this.fillColor
        context.fill()
        document.body.appendChild(canvas)
    }
}

// Now lets make art!

setInterval(() => {
    const newCircle = new Circle(
        // Random Width
        Math.ceil(window.innerWidth * Math.random()),
        // Random Height
        Math.ceil(window.innerHeight * Math.random()),
        // Random R
        Math.ceil((60 * Math.random()) + 5),
        0, 2 * Math.PI, 
        // Random Color
        `#${Math.floor((Math.random() * 999999))}`)
    newCircle.draw()
}, 100);


//Follow the mouse - optional


document.body.addEventListener('mousemove', (event) => {
    const X = event.clientX
    const Y = event.clientY
    console.log(X, Y)
        const newCircle = new Circle(X, Y , 50, 0, 2 * Math.PI,`#${Math.floor((Math.random() * 999999))}`)
        newCircle.draw()
})