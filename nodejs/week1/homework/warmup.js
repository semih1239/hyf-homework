console.log("inside warmup file");

class Circle {
    constructor(radius){
        this.radius = radius
    }
    getDiameter(){
        return this.radius * 2
    }
    getCircumference(){
        return 2 * Math.PI * this.radius
    }
    getArea(){
        return Math.PI * (this.radius ** 2)
    }
}

const cirleOne = new Circle(30)

console.log(cirleOne.getArea())
console.log(cirleOne.getCircumference())
console.log(cirleOne.getDiameter())