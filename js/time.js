const lastModified = document.querySelector('#lastUpdate');
// document.querySelector('lastUpdate').innerHTML = lastModified
lastModified.innerHTML = document.lastModified

const currentTime = new Date();

const year = currentTime.getFullYear();

document.querySelector('#year').innerHTML = year;