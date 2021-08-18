console.log("inside warmup file");

class Circle {
    constructor(radius){
        this.radius = radius
    }
    getRadius(){
        return this.radius * 2
    }
    getCircumference(){
        return 2 * 3,14 * this.radius
    }
    getArea(){
        return 3,14 * (this.radius ** 2)
    }
}

const cirleOne = new Circle(30)

console.log(cirleOne.getArea())
console.log(cirleOne.getCircumference())
console.log(cirleOne.getRadius())