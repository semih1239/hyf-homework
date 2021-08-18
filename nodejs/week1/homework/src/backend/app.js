const express = require("express");
const app = express();

// import data here
const meals = require("./data/meals");
const reviews = require("./data/reviews")
const reservations = require("./data/reservations")

// this is where you will be adding your routes
app.get("/", async (request, response) => {
  response.send("Meal Sharing Web App");
});

app.get("/meals", async (request, response) => {
  response.send(getMealsWithReviews())
})

app.get("/cheap-meals", async (request, response) => {
  response.send(getMealsWithReviews().filter(meal => meal.price < 90))
})

app.get("/large-meals", async (request, response) => {
  response.send(getMealsWithReviews().filter(meal => meal.price > 90))
})

app.get("/meal", async (request, response) => {
  response.send(getRandomMeal(getMealsWithReviews()))
})

app.get("/reservations", async (request, response) => {
  response.send(reservations)
})

app.get("/reservation", async (request, response) => {
  response.send(getRandomMeal(reservations))
})

module.exports = app;

// Functions

function getMealsWithReviews() {
  return meals.map(meal => {
    meal.reviews = reviews.filter(review => review.mealId === meal.id)
    return meal
  });
}

function getRandomMeal(randomList) {
  return randomList[Math.floor(Math.random() * randomList.length)]
}
