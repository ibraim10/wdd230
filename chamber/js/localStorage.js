//last visit in days
const showVisit = window.localStorage.getItem('lastVisit');
if(showVisit === undefined) {
    showVisit = new Date(Data.now());
}
const lastVisit = Date.parse(showVisit);
const FACTOR = 1000 * 60 * 60 * 24;


let daysbetween = Date.now() - lastVisit;
let numberOfDays = daysbetween / FACTOR;

window.localStorage.setItem('lastVisit', new Date(Date.now()));

const daysSinceVisit = Math.floor(numberOfDays);
document.querySelector('.lastVisit').textContent = daysSinceVisit;