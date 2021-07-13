const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const doubledNumbers = numbers.filter(number => number % 2 != 0).map(number => number * 2)

console.log("The doubled numbers are", doubledNumbers)

const movies = require("./movies.json");

// 1. Create an array of movies containing the movies with a short title (you define what short means)

const getShortTitle = movies.filter(movie => movie.title.length < 3)
console.log(getShortTitle)

// 2. Create an array of movie titles with long movie titles

const getLongestTitle = movies.filter(movie => movie.title.length > 50)
console.log(getLongestTitle)

// 3. Count the number of movies made between 1980-1989 (including both the years)

const getBetweenYears = movies.filter(movie => movie.year >= 1980 && movie.year <= 1989)
console.log(getBetweenYears.length)

// 4. Create a new array that has an extra key called tag. The tag is based on the rating: Good (>= 7), Average (>= 4 and < 7), Bad (< 4)

const newMoviesWithTagGood = movies.filter(movie => movie.rating >= 7)
const newMoviesWithTagAverage = movies.filter(movie => movie.rating >=4 && movie.rating <7)
const newMoviesWithTagBad = movies.filter(movie => movie.rating < 4)

newMoviesWithTagGood.map(movie => movie.tag = 'Good')
newMoviesWithTagAverage.map(movie => movie.tag = 'Average')
newMoviesWithTagBad.map(movie => movie.tag = 'Bad')

const allMovies = newMoviesWithTagGood.concat(newMoviesWithTagAverage.concat(newMoviesWithTagBad))

console.log(allMovies)

// 9. Count the total number of Good, Average and Bad movies using reduce. A return could fx be {goodMovies: 33, averageMovies: 45, goodMovies: 123} Optional

// I can find with newMoviesTagGood's length but That want with reduce solition

const goodMovies = newMoviesWithTagGood.reduce((total) => total + 1,0)
const averageMovies = newMoviesWithTagAverage.reduce((total) => total + 1,0)
const badMovies = newMoviesWithTagBad.reduce((total) => total + 1,0)
console.log(`Good Movies: ${goodMovies}  ,  Average Movies : ${averageMovies}  ,  Bad Movies : ${badMovies}`)

// 5. Using chaining, first filter the movies array to only contain the movies rated higher than 6. Now map the movies array to only the rating of the movies.

const filteredHigherRating = movies.filter(movie => movie.rating > 6)

const getRatings = filteredHigherRating.map(movie => movie.rating)

console.log(getRatings)

// 6. Count the total number of movies containing any of following keywords: Surfer, Alien or Benjamin. So if there were 3 movies that contained Surfer, 1 with Alien and 2 with Benjamin, you would return 6. Can you make sure the search is case insensitive?

let total = 0
const filteredMoviesNames = movies.map(movies => movies.title.toLowerCase())
const count = filteredMoviesNames.filter(movie => {
    if (movie.includes('surfer')) {
        total += 1
    }
    else if (movie.includes('alien')) {
        total += 1
    }
    else if (movie.includes('benjamin')) {
        total += 1
    }
})

console.log(total)

// 7. Create an array of movies where a word in the title is duplicated. Fx "Star Wars: The Clone Wars" the word Wars is duplicated. Here are some madeup examples of movies with duplicated words in the title: "The three men and the pistol", "Chase three - The final chase"

const filteredMoviesNames2 = movies.map(movies => movies.title.toLowerCase())

const getDuplicatedMovies = filteredMoviesNames2.forEach(name => {
    name = name.split(' ')
    nameLength = name.length
    let newName = [...new Set(name)]
    newNameLength = newName.length
    name = name.join(' ')
    if (nameLength > newNameLength) {
        console.log(name
        )
    }
})

// 8. Calculate the average rating of all the movies using reduce. Optional

const moviesRates = movies.map(movie => movie.rating)

const ratesSum = moviesRates.reduce((total,value) => total + value, 0)
const moviesRatesLength = moviesRates.length

const averageRating = ( ratesSum / moviesRatesLength ).toFixed(3)

console.log(averageRating)
