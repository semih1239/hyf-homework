// // fetch('https://cataas.com/api/cats?tags=cute')
// //     .then(res => res.json)
// //     .then((data) => {console.log(data)})

// // fetch('https://cataas.com/cat/gif/says/Hello?filter=sepia&color=orange&size=40&type=or')
// //     .then(response => response.json())
// //     .then((catData) => {
// //         const img = document.createElement('img')
// //         img.src = catData
// //         document.body.appendChild(img)
// //     })

// fetch('https://dog.ceo/api/breeds/image/random')
//     .then((res) => res.json())
//     .then((data) => {
//         const img = document.getElementById('random-dog')

//         img.setAttribute('src', data.message)
//     })


const input = document.querySelector('input')
const button = document.querySelector('#cityButton')
const locationButton = document.getElementById('locationButton')



button.addEventListener('click', displayTheDatawithCity)


function displayTheDatawithCity() {
    const cityName = input.value.toLowerCase()

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=755f8fac4695a2c84fd8f2e3f6e3e671`)
        .then((res) => res.json())
        .then((data) => {
            informationwithCity(data)
        })
}




function informationwithCity(data) {
    const city = document.querySelector('#cityText')
    city.innerHTML = `City : ${data.name}`

    const temprature = document.getElementById('tempratureText')
    temprature.innerHTML = `Temprature : ${Math.floor(data.main.temp - 273.15)} °C`

    const feelsLike = document.getElementById('feelsLike')
    feelsLike.innerHTML = `Feels : ${Math.floor(data.main.feels_like - 273.15)} °C`

    const minMaxTemp = document.getElementById('tempMinMax')
    minMaxTemp.innerHTML = `Max Temp : ${Math.floor(data.main.temp_max - 273.15)} °C - Min Temp: ${Math.floor(data.main.temp_min - 273.15)} °C`

    const pressure = document.getElementById('pressure')
    pressure.innerHTML = `Pressure : ${data.main.pressure} hPa - Humidity: ${data.main.humidity}%`

    const wind = document.getElementById('windSpeed')
    wind.innerHTML = `Wind Speed : ${data.wind.speed} m/s - Wind Degree : ${data.wind.deg}`

    const cloud = document.getElementById('clouds')
    cloud.innerHTML = `Clouds : ${data.clouds.all} %`

    const sun = (time) => {
        const date = new Date(time * 1000);
        return `${date.getHours()}:${date.getMinutes()}`
    }

    const sunTimes = document.getElementById('sunRiseSet')
    sunTimes.innerHTML = `Sunrise Time: ${sun(data.sys.sunrise)} - Sunset Time : ${sun(data.sys.sunset)}`


    const mapDiv = document.getElementById('mapLocation')
    const mapLocation = document.querySelector('iframe')
    mapLocation.style.visibility = 'visible'
    const srcLoc = `https://maps.google.com/maps?q=${data.coord.lat},${data.coord.lon}&z=15&output=embed`
    mapLocation.src = srcLoc
    mapDiv.appendChild(mapLocation)
}




function getLatitudeLongitude() {
    function confirmed(location) {
        const latitude = location.coords.latitude;
        const longitude = location.coords.longitude
        fetch(`http://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=755f8fac4695a2c84fd8f2e3f6e3e671`)
            .then(res => res.json())
            .then((data) => {
                informationwithLocation(data)
            })
    }

    function error() {
        status.textContent = 'Unable to retrieve your location'
    }

    if (!navigator.geolocation) {
        status.textContent = 'Geolocation is not supported by your browser';
    }
    else {
        status.textContent = 'Locating…';
        navigator.geolocation.getCurrentPosition(confirmed, error);
    }
}

locationButton.addEventListener('click', getLatitudeLongitude)




function informationwithLocation(data) {
    const city = document.querySelector('#cityText')
    city.innerHTML = `Timezone : ${data.timezone}`

    const temprature = document.getElementById('tempratureText')
    temprature.innerHTML = `Temprature : ${Math.floor(data.current.temp - 273.15)} °C`

    const feelsLike = document.getElementById('feelsLike')
    feelsLike.innerHTML = `Feels : ${Math.floor(data.current.feels_like - 273.15)} °C`

    const pressure = document.getElementById('pressure')
    pressure.innerHTML = `Pressure : ${data.current.pressure} hPa - Humidity: ${data.current.humidity}%`

    const wind = document.getElementById('windSpeed')
    wind.innerHTML = `Wind Speed : ${data.current.wind_speed} m/s - Wind Degree : ${data.current.wind_deg}`

    const cloud = document.getElementById('clouds')
    cloud.innerHTML = `Clouds : ${data.current.clouds} %`

    const sun = (time) => {
        const date = new Date(time * 1000);
        return `${date.getHours()}:${date.getMinutes()}`
    }

    const sunTimes = document.getElementById('sunRiseSet')
    sunTimes.innerHTML = `Sunrise Time: ${sun(data.current.sunrise)} - Sunset Time : ${sun(data.current.sunset)}`


    const mapDiv = document.getElementById('mapLocation')
    const mapLocation = document.querySelector('iframe')
    mapLocation.style.visibility = 'visible'
    const srcLoc = `https://maps.google.com/maps?q=${data.lat},${data.lon}&z=15&output=embed`
    mapLocation.src = srcLoc
    mapDiv.appendChild(mapLocation)
}