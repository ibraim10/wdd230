function toggleMenu(){
    document.getElementById('primaryNav').classList.toggle('open');
    document.getElementById('hamburguerBtn').classList.toggle('open');
}/*toggle is like a switch*/
const x = document.getElementById('hamburguerBtn')
x.onclick = toggleMenu;
//Button Temples
function toggleMenu2(){
    document.getElementById('primary').classList.toggle('open1');
    document.getElementById('templeBtn').classList.toggle('open1');
}/*toggle is like a switch*/
const y = document.getElementById('templeBtn')
y.onclick = toggleMenu2;
