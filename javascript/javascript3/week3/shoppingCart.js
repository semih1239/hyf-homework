// Shopping cart using Classes

class Product {
    constructor(name, price) {
        this.name = name
        this.price = price
    }

    convertToCurrency(currencyUnit) {
        if (currencyUnit === 'euro') {
            return this.price * 0.13
        }
        else if (currencyUnit === 'dollar') {
            return this.price * 0.16
        }
        else if (currencyUnit === 'sk') {
            return this.price * 1.38
        }
    }
}

class ShoppingCart {
    constructor() {
        this.products = []
    }

    addProduct(product) {
        this.products.push(product)
    }

    removeProduct(product) {
        const removedProductArray = this.products.filter((pro) => product.toLowerCase().trim() != pro.name.toLowerCase())
        this.products = removedProductArray
    }

    searchProduct(productName) {
        let result;
        this.products.forEach((product) => {
            if (product.name.toLowerCase().includes(productName.toLowerCase().trim())) {
                result = true
            }
        })
        return result
    }

    getTotal() {
        let total = 0
        this.products.forEach((product) => { total += product.price })
        const totalPrice = document.getElementById('total')
        totalPrice.innerHTML = `Total Price : ${total}`
    }

    renderProducts() {
        const items = document.querySelector('.items')
        items.innerHTML = ''
        this.products.forEach(((product) => {
            const h3 = document.createElement('h3')
            h3.innerHTML = `Product : ${product.name} - Price : ${product.price}`
            items.appendChild(h3)
        }))
    }

    getUser() {
        async function userApi() {
            await fetch('https://jsonplaceholder.typicode.com/users/1')
                .then((res) => res.json())
                .then((data) => {
                    const username = document.getElementById('username')
                    username.innerHTML = data.username
                })
        }
        userApi()
            .then(() => { this.renderProducts() })
            .then(() => { this.getTotal() })
    }
}


const shoppingCart = new ShoppingCart();
const flatScreen = new Product("Flat Screen", 5000);
const wideScreen = new Product("Wide Screen", 8000);
const laptop = new Product("Laptop", 6000);
const phone = new Product("Phone", 3500);


shoppingCart.addProduct(flatScreen);
shoppingCart.addProduct(wideScreen);
shoppingCart.addProduct(laptop);
shoppingCart.addProduct(phone);

const input = document.querySelector('input')
const removeButton = document.getElementById('remove-button')

removeButton.addEventListener('click', () => {
    if (shoppingCart.searchProduct(input.value)) {
        shoppingCart.removeProduct(input.value)
        shoppingCart.renderProducts()
        shoppingCart.getTotal()
    }
})


const getUserButton = document.querySelector('#get-user')
getUserButton.addEventListener('click', () => {
    shoppingCart.getUser()
})

// Currency Part

const mouse = new Product("mouse", 300);
console.log(mouse.convertToCurrency('sk'))


// That is my Optional works
// Curreny Buttons

const euro = document.getElementById('euro')
const dollar = document.getElementById('dollar')
const sweedenKroner = document.getElementById('svensk-krona')

const currencyDiv = document.querySelector('.currency')

function currencies(rate) {
    shoppingCart.products.forEach((product) => {
        product.price = product.price * rate

    })
    shoppingCart.getUser()
    currencyDiv.remove()
}

euro.addEventListener('click', () => {
    currencies(0.13)
})

dollar.addEventListener('click', () => {
    currencies(0.16)
})

sweedenKroner.addEventListener('click', () => {
    currencies(1.38)
})