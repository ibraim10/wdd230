const apiURL = 'https://api.openweathermap.org/data/2.5/weather?q=Bethesda&units=imperial&appid=2f24733c28429c899cc5dfafd6c236fb'

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);

        document.querySelector('#current-temp').textContent = jsObject.main.temp.toFixed(1);

        const iconsrc= `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
        const desc = jsObject.weather[0].description;
        const speed = jsObject.wind.speed;
        const humidity = jsObject.main.humidity;

        document.querySelector('#weathericon').setAttribute('src', iconsrc);
        document.querySelector('#weathericon').setAttribute('alt', desc);
        document.querySelector('figcaption').textContent = desc;
        document.querySelector('#s').textContent = speed;
        document.querySelector('#h').textContent = humidity;

        Swal.fire({
            title: "The weather today is:",
            text: desc,
            backdrop: true,
            timer: 4000,
            timerProgressBar: true,
            toast: true,
            position: 'top',
            background: '#fefffeff',
            confirmButtonColor: '#fec601ff',
            showCloseButton: true,
            color: '#3993ddff',
        
        });
    });

// let t = parseFloat(document.querySelector("#weathericon").textContent);
// let s = parseFloat(document.querySelector("#s").textContent);
// let value;

// if (t <= 50 && s > 3.0){
//     let f = 35.74 + (0.6215*t) - (35.75 * s **0.16) + (0.4275 * t * s ** 0.16);
//     value = `${f.toFixed(2)}°F`
// }else{
//     value = "N/A";
// }
// document.querySelector("#w").textContent = value;