// // 1. Create a special new folder called "pizza-exercise"
// // 2. Inside the folder create a new html file called "index.html"
// // 3. Also inside the folder create a new JavaScript file called "pizza.js"
// // 4. Remember to Include the pizza.js script in the html file
// // 5. Write a log statement, so you know that your javascript code is running: console.log("I love pizza");
// // 6. Create a variable to store the name of your favourite pizza
// // 7. Create a variable to store the price of the pizza
// // 8. Now log at statement to the console that will show the pizza man the entire pizza order in a language he understands, eg. like this: New pizza order: <name of pizza>. The price of the pizza is: <price of pizza></price>

console.log("I love pizza");

let myPizza = 'Cheese pizza';
let priceOfPizza = 120;
console.log(` New pizza order: ${myPizza}. The price of the pizza is: ${priceOfPizza}`);

let amountOfPizza = 3
let amountOfFamilyPizza = 2

let familyPizza = priceOfPizza * 2

let totalPrice = amountOfPizza * priceOfPizza + familyPizza * amountOfFamilyPizza

console.log(`New pizza order: Normal Pizza : ${amountOfPizza} and Family Pizza: ${amountOfFamilyPizza} from ${myPizza}. Total cost for the order is: ${totalPrice}`)