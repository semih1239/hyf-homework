// Flight booking fullname function

function getFullname(fullname1, fullname2) {
    return fullname1 + ' ' + fullname2
}

console.log(getFullname('Semih', 'AYYILDIZ'))



// Formal fullname

let name1 = prompt('Please write your name')
let name2 = prompt('Please write your surname')
useFormalName = confirm('Do you want formal name?')

function getFullname(fullname1,fullname2,useFormalName){
    if (useFormalName){
    return 'Lord ' + fullname1 + ' ' + fullname2
    }
    else{return fullname1 + ' ' + fullname2}
}
console.log(getFullname(name1,name2,useFormalName))


// Event application

function getEventWeekdays(number) {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    let today = new Date()
    let day = (today.getDay() + number) % 7
    return days[day]
}

console.log(getEventWeekdays(14))


// Weather wear

function whatShouldWear(tempretureInCelcius) {
    if (tempretureInCelcius >= 25) {
        return 'Shorts and T-shirt'
    }
    else if (tempretureInCelcius > 5) {
        return 'Pants and Sweater'
    }
    else if (tempretureInCelcius > -20) {
        return 'Coats and Boots'
    }
    else if (tempretureInCelcius > -40) {
        return 'Wear Everything Double'
    }
    else {
        return "Dont't Go Outside"
    }
}
console.log(whatShouldWear(-20))


// Student manager

let class18Students = []
function addStudentToClass(studentName) {
    if (typeof studentName !== "string") {
        console.log('You cant add. Please write a name!!!')
        return
    }
    studentName = studentName.trim()
    if (studentName == 'Queen Margrethe II') {
        class18Students.push(studentName)
        return
    }
    else if (class18Students.indexOf(studentName) != -1) {
        console.log(`Student ${studentName} is already in the class`)
        return
    }
    else if (class18Students.length >= 6) {
        console.log('Cannot add more students to class 18')
        return
    }
    else if (studentName == '') {
        console.log('You cant add "empty". Please write a name!!!')
        return
    }
    class18Students.push(studentName)
}
addStudentToClass(true)
addStudentToClass('Semih')
addStudentToClass("     ")
addStudentToClass('Semih')
addStudentToClass('Ugur')
addStudentToClass('Yusuf')
addStudentToClass('Celal')
addStudentToClass('John')
addStudentToClass('Dean')
addStudentToClass('Rick')
addStudentToClass('Queen Margrethe II')

console.log(class18Students)



// Candy helper (optional)

candys = ['sweet', 'chocolate', 'toffee', 'chewing-gum']
prices = [0.5, 0.7, 1.1, 0.03]
let boughtCandyPrices = []

function addCandy(candyType, weight) {
    money = prices[candys.indexOf(candyType)] * weight
    boughtCandyPrices.push(money)
    console.log(boughtCandyPrices)
}

addCandy('sweet', 30)
addCandy('chocolate', 20)
addCandy('toffee', 20)
addCandy('chewing-gum', 20)




let amountToSpend = Math.floor(Math.random() * 100)

function canBuyMoreCandy() {
    let total = 0
    for (i = 0; i < boughtCandyPrices.length; i++) {
        total = total + boughtCandyPrices[i]
    }
    if (total < amountToSpend) {
        console.log(`You can buy ${amountToSpend - total} money`)
    }
    else {
        console.log('You cant buy more candy.')
    }
}
canBuyMoreCandy()

