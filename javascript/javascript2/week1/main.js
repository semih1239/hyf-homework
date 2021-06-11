console.log("Script loaded");

const products = getAvailableProducts();
console.log(products)
const ul = document.querySelector('ul')

for (let i = 0; i < products.length; i++) {
    const li = document.createElement('li')
    const itemName = document.createElement('h2')
    const itemPrice = document.createElement('div')
    const itemRatio = document.createElement('div')

    itemName.innerHTML = products[i].name
    li.appendChild(itemName)

    itemPrice.innerHTML = `<b>Price</b>: ${products[i].price}`
    li.appendChild(itemPrice)

    itemRatio.innerHTML = `<b>Rating</b>: ${products[i].rating}`
    li.appendChild(itemRatio)

    ul.appendChild(li)
}
