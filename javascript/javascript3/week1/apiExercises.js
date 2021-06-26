// Find a cool api
// We are using cat api. We are using id inside that api.
// We are searching images with id name

const getCatsButton = document.querySelector('button')
const searchWord = document.querySelector('input')

getCatsButton.addEventListener('click', getCatsFunction)

function getCatsFunction() {
    fetch(`https://cataas.com/api/cats?tags=${searchWord.value}&limit=15`)
        .then(res => res.json())
        .then((data) => {
            data.forEach(catID => {
                const img = document.createElement('img')
                img.src = `https://cataas.com/#/cat/${catID.id}`
                document.body.appendChild(img)
            });
        })
}
