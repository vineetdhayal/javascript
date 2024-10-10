function addtask(task) {
    const ul = document.querySelector('ul');
    const li = document.createElement('li');
    li.innerHTML = `<span class="delete">×</span><input type="checkbox"><label>${task}</label>`
    ul.appendChild(li);
}

function onSubmit(e) {
    e.preventDefault();
    const input = document.querySelector('input');
    if (input.value !== '') {
        addtask(input.value);
    }
    input.value = '';
}

function onLoad() {
    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => onSubmit(e));
}

const clear = document.getElementById('clear');
clear.addEventListener('click', () => {
    const ul = document.querySelector('ul');
    ul.innerHTML = '';
})

const ul = document.querySelector('ul');
ul.addEventListener('click', (e) => {
    if(e.target.classList.contains('delete')) {
        let parent = e.target.parentNode;
        console.log(parent);
        parent.parentNode.remove(parent);
    }
    console.log(e.target.nextSibling);
    const task = e.target.nextSibling;
    if(e.target.checked) {
        task.style.textDecoration = 'line-through';
    }
    else {
        task.style.textDecoration = 'none';
    }
})

 onLoad();
