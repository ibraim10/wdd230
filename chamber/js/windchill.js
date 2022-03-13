const apiURL = 'http://api.openweathermap.org/data/2.5/weather?q=Xochimilco&units=imperial&appid=5411c865cc50668618f773bae92651a7'

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);

        document.querySelector('#current-temp').textContent = jsObject.main.temp.toFixed(1);
    
        const iconsrc= `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
        const desc = jsObject.weather[0].description;
        const speed = jsObject.wind.speed;
        
        document.querySelector('#weathericon').setAttribute('src', iconsrc);
        document.querySelector('#weathericon').setAttribute('alt', desc);
        document.querySelector('figcaption').textContent = desc;
        document.querySelector('#s').textContent = speed;
        
    });

let t = parseFloat(document.querySelector("#weathericon").textContent);
let s = parseFloat(document.querySelector("#s").textContent);
let value;

if (t <= 50 && s > 3.0){
    let f = 35.74 + (0.6215*t) - (35.75 * s **0.16) + (0.4275 * t * s ** 0.16);
    value = `${f.toFixed(2)}°F`
}else{
    value = "N/A";
}
document.querySelector("#w").textContent = value;