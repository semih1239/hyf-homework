console.log("Script loaded");

const products = getAvailableProducts();

console.log(products)

const ul = document.querySelector('ul')

const searchName = document.getElementById('itemSearch')
const searchMinPrice = document.getElementById('minPrice')
const searchMaxPrice = document.getElementById('maxPrice')

// For Create Some Extra Feature

const spiritAnimals = ['The Laughing Butterfly', 'The Brave Badger', 'The Sharp Hawk', 'The Sleeper Rabbit', 'The Bully Tiger', 'The Blind Eagle', 'The Big Eye Wolf', 'The Runner Turtle', 'The Walking Grasshopper', 'The Lazy Ant']

products.forEach(product => {
    const random = Math.floor(Math.random() * 10)
    product.for = spiritAnimals[random]
})

function deleteMain() {
    document.querySelector('ul').innerHTML = ''
}


function renderProducts(products) {
    products.forEach(product => {
        const li = document.createElement('li')
        const itemName = document.createElement('h2')
        const itemPrice = document.createElement('div')
        const itemRatio = document.createElement('div')
        const itemFor = document.createElement('div')

        itemName.innerHTML = product.name
        li.appendChild(itemName)

        itemPrice.innerHTML = `<b>Price</b>: ${product.price}`
        li.appendChild(itemPrice)

        itemRatio.innerHTML = `<b>Rating</b>: ${product.rating}`
        li.appendChild(itemRatio)

        itemFor.innerHTML = `<b>For</b>: ${product.for}`
        li.appendChild(itemFor)

        ul.appendChild(li)
    })
}

function filteredName() {
    const searchValue = searchName.value
    const filteredProducts = products.filter(product =>
        (product.name.toLowerCase().includes(searchValue.toLowerCase()))
    )
    renderProducts(filteredProducts)
}
function filteredPrice() {
    const minPrice = searchMinPrice.value
    const maxPrice = searchMaxPrice.value
    if (maxPrice > 0 && minPrice > 0) {
        const filteredMinPrice = products.filter(product => product.price > minPrice && product.price < maxPrice)
        return renderProducts(filteredMinPrice)
    }
    else if (maxPrice > 0) {
        const filteredMaxPrice = products.filter(product => product.price < maxPrice)
        return renderProducts(filteredMaxPrice)
    }
    else if (minPrice > 0) {
        const filteredMinPrice = products.filter(product => product.price > minPrice)
        return renderProducts(filteredMinPrice)
    }
    return renderProducts(products)

}

searchName.addEventListener('keyup', function () {
    deleteMain()
    filteredName()
})

searchMinPrice.addEventListener('keyup', function () {
    deleteMain()
    filteredPrice()
})

searchMaxPrice.addEventListener('keyup', function () {
    deleteMain()
    filteredPrice()
})


renderProducts(products)

