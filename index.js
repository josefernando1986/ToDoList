const template = document.querySelector('template').content;
const inputButton = document.getElementById('inputButton');
const inputText = document.getElementById('inputText');
const completedTasks = document.getElementById('completedTasks');
const remainingTasks = document.getElementById('remainingTasks');
const totalTasks = document.getElementById('totalTasks');
const todoContainer = document.getElementById('todoContainer');
const container = template.getElementById('container');
const fragment = new DocumentFragment();
// const clone = template.cloneNode(true)

let contadorCompleted = 0;
let contadorRemaining = 0;
let contadorTotal = 0;

inputButton.addEventListener('click', e => {
    e.preventDefault();
    contadorRemaining++;
    contadorTotal = contadorCompleted + contadorRemaining;
    remainingTasks.textContent = contadorRemaining;
    totalTasks.textContent = contadorTotal;

    template.querySelector('h2').textContent = inputText.value;
    template.querySelector('.checked').setAttribute('id', inputText.value)
    const clone = template.cloneNode(true)
    fragment.appendChild(clone)
    todoContainer.appendChild(fragment)
})

todoContainer.addEventListener('click', e => {
    const element = e.target.parentNode
    if(e.target.classList.contains('checked')){
        remainingTasks.textContent = --contadorRemaining
        completedTasks.innerText = ++contadorCompleted
        todoContainer.removeChild(element)
    }
})

