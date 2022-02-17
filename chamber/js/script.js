function toggleMenu(){
    document.getElementById('primaryNav').classList.toggle('open');
    document.getElementById('hamburguerBtn').classList.toggle('open');
}/*toggle is like a switch*/
const x = document.getElementById('hamburguerBtn')
x.onclick = toggleMenu;

const lastModified = document.querySelector('#lastUpdate');
// last modified
lastModified.innerHTML = document.lastModified

const currentTime = new Date();

const year = currentTime.getFullYear();

document.querySelector('#year').innerHTML = year;
// large date
const dateUK = document.querySelector("#date");
const fullDateUk = new Intl.DateTimeFormat('en-UK', {
    dateStyle: 'full'
}).format(currentTime);
dateUK.innerHTML = fullDateUk;

//BANNER
let day = currentTime.getDay();

let message;

if (day >= 1 && day <= 3){
    message = '🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.';
}

document.querySelector('.banner').textContent = message;