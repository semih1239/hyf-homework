// Age-ify (A future age calculator)

let yearOfBirth = 1995
let yearFuture = 2055

let age = yearFuture - yearOfBirth

console.log(`You will be ${age} years old in ${yearFuture} `)

// // Goodboy-Oldboy (A dog age calculator)

let dogYearOfBirh = 2018
let dogYearFuture = 2027

let question = confirm('Do you want dog year?')

let dogYear = (dogYearFuture - dogYearOfBirh) * 7
let humanYear = (dogYearFuture - dogYearOfBirh)


if (question){
    console.log(`Your dog will be ${dogYear} dog years old in ${dogYearFuture}`)
}
else{
    console.log(`Your dog will be ${humanYear} human years old in ${dogYearFuture}`)
}

// Housey pricey (A house price estimator)

let high = prompt('What is your home high?')
let wide = prompt('What is your home wide?')
let deep = prompt('What is your home deep?')
let gardenSize = prompt('What is your garden size (m2)')

let volumeInMeters = high * wide * deep

housePrice = (volumeInMeters * 2.5 * 1000) + (gardenSize * 300)

console.log(`House price is ${housePrice}`)

let ask = confirm('Would you like to compare with the money purchased?')

if(ask){
    let compare = prompt('How much purschase money?')
        if(compare>housePrice){
            console.log(`You bought the house expensive. You gave the house ${compare-housePrice} more than necessary.`)
        }
        else if(compare==housePrice){
            console.log('You bought the house at normal price')
        }
        else{
            console.log(`You bought the house cheap. You gave the house ${housePrice-compare} lower than necessary.`)
        }
    }

// Ez Namey (Startup name generator) Optional

firstWords = ['Easy','Amazing','Excellent','Fantastic','Wonderful','Logical','Reasonable','Fair','Beautiful','Good']
secondWords = ['Company','Corparation','Establishment','Business','Enterprise','Production','Volunteers','Firm','Foundation','Institution']

const randomNumber = Math.floor(Math.random() * 10)
const randomNumber2 = Math.floor(Math.random() * 10)

console.log(firstWords[randomNumber],secondWords[randomNumber2])