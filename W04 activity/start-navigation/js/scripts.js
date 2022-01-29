function toggleMenu(){
    document.getElementById('primaryNav').classList.toggle('open');
    document.getElementById('hamburguerBtn').classList.toggle('open');
}/*toggle is like a switch*/
const x = document.getElementById('hamburguerBtn')
x.onclick = toggleMenu;