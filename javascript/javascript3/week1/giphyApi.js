// 1. I will get button and inputs from html

const searchWord = document.getElementById('searchInformation')
const countOfGif = document.getElementById('countOfGif')
const getGifsButton = document.querySelector('button')
const list = document.querySelector('ul')
const gifsDiv = document.querySelector('.gifs')
const errorText = document.getElementById('errorText')


// 2. I will add event for search button and count of gifs
getGifsButton.addEventListener('click', getResultsFunction)
countOfGif.addEventListener('keyup', getResultsFunction)

// 3. I am creating a function for search button and count input

function getResultsFunction() {
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=T0HwonHgt4khJAT4v2knR2PGKHDIymeN&fixed_height&q=${searchWord.value}&limit=${countOfGif.value}`)
        .then(res => res.json())
        .then((data) => {
            getGiphysFunction(data)
        })
}

function getGiphysFunction(data){
    errorText.innerHTML = ''
    if (searchWord.value == '') {
        errorText.innerHTML = 'Please write what are you looking for'
    }
    else {
        gifsDiv.innerHTML = ''
        data.data.forEach(element => {
            const img = document.createElement('img')
            img.src = element.images.fixed_height.url
            gifsDiv.appendChild(img)
        });
    }
}