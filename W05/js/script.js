const input = document.querySelector('input');
const btn = document.querySelector('button');
const list = document.querySelector('ul');

btn.addEventListener('click', function(){
    let chapter = input.value;
        input.value = '';

    const newLi = document.createElement('li');
    const deleteBtn = document.createElement('button');

    newLi.innerHTML = chapter;
    deleteBtn.textContent = '❌';
    newLi.appendChild(deleteBtn);
    list.appendChild(newLi);

    deleteBtn.addEventListener('click', function(){
        list.removeChild(newLi);   
    })
    input.focus();
})