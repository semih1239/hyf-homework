// Flight booking fullname function

function getFullname(fullname1,fullname2){
    return console.log(fullname1 + ' ' + fullname2)
}
getFullname('Semih','AYYILDIZ')


// Formal fullname

let name1 = prompt('Please write your name')
let name2 = prompt('Please write your surname')
useFormalName = confirm('Do you want formal name?')

function getFullname(fullname1,fullname2,useFormalName){
    if (useFormalName){
    return console.log('Lord ' + fullname1 + ' ' + fullname2)
    }
    else{return console.log(fullname1 + ' ' + fullname2)}
}
getFullname(name1,name2,useFormalName)


// Event application

let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']

function getEventWeekdays(number){
    let today = new Date()
    let day = today.getDate()
    today.setDate(day+number)
    return console.log(days[today.getDay()])
}

getEventWeekdays(55)


// Weather wear

function whatAmIWear(temp){
    if(temp>=25){
        console.log('Shorts and T-shirt')
    }
    else if(temp>5){
        console.log('Pants and Sweater')
    }
    else if(temp>-20){
        console.log('Coats and Boots')
    }
    else if(temp>-40){
        console.log('Wear Everything Double')
    }
    else{
        console.log("Dont't Go Outside")
    }
}
whatAmIWear(-20)


// Student manager

let class18Students = []
function addStudentToClass(studentName) {
    if (studentName == 'Margrethe') {
        class18Students.push(studentName)
    }
    else if (class18Students.indexOf(studentName) != (-1)) {
        console.log(`Student ${studentName} is already in the class`)
    }
    else if (class18Students.length>=6){
        console.log('Cannot add more students to class 18')
    }
    else if(studentName==''){
        console.log('You cant add "nothing"')
    }
    else{
        class18Students.push(studentName)
    }
}

addStudentToClass('Semih')
addStudentToClass('Semih')
addStudentToClass('')
addStudentToClass('Yusuf')
addStudentToClass('Celal')
addStudentToClass('Ugur')
addStudentToClass('John')
addStudentToClass('Dean')
addStudentToClass('Rick')
addStudentToClass('Margrethe')

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

addCandy('sweet',30)
addCandy('chocolate',20)
addCandy('toffee',20)
addCandy('chewing-gum',20)




let amountToSpend = Math.floor(Math.random()*100)

function canBuyMoreCandy(){
    let total = 0
    for(i=0;i<boughtCandyPrices.length;i++){
        total = total + boughtCandyPrices[i]
    }
    if(total < amountToSpend){
        console.log(`You can buy ${amountToSpend-total} money`)
    }
    else{
        console.log('You cant buy more candy.')
    }
}
canBuyMoreCandy()

