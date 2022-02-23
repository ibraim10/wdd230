let t = parseFloat(document.querySelector("#t").textContent);
let s = parseFloat(document.querySelector("#s").textContent);
let value;

if (t <= 50 && s > 3.0){
    let f = 35.74 + (0.6215*t) - (35.75 * s **0.16) + (0.4275 * t * s ** 0.16);
    value = `${f.toFixed(2)}°F`
}else{
    value = "N/A";
}

document.querySelector("#w").textContent = value;
// function windChill(temp, speed){

// }