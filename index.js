<<<<<<< HEAD
let input = document.getElementById('inputText');
let button = document.getElementById('inputButton');
let todoContainer = document.getElementById('todoContainer');
let totalTask = document.getElementById('totalTasks');
let completedTasks = document.getElementById('completedTasks');
let remainingTasks = document.getElementById('remainingTasks');
let total = 0;


function pintar(todo){
    todoContainer.insertAdjacentHTML("beforeend",todo)
}


//Enviar la informacion al formulario para agregarla en la todoapp
button.addEventListener('click', (e)=>{
    e.preventDefault();
    
    if(e.type === 'click'){
        total = total + 1;
    }

    console.log(e)
    let todoValue = input.value
    //Imprimir una tarjeta con la tarea
    const article =`
        <article class="todo">
        <span>${todoValue}</span>
        <br>
        <label for="completedTask">Completed</label>
        <input type="radio" name="${todoValue}">
        <br>
        <label for="remainingTask">Remaining</label>
        <input type="radio" name="${todoValue}">
        </article>
`
    pintar(article)
    totalTask.innerText = total;
    console.log(total)
})


=======
let input = document.getElementById('inputText');
let button = document.getElementById('inputButton');
let todoContainer = document.getElementById('todoContainer');
let totalTask = document.getElementById('totalTasks');
let completedTasks = document.getElementById('completedTasks');
let remainingTasks = document.getElementById('remainingTasks');
let total = 0;


function pintar(todo){
    todoContainer.insertAdjacentHTML("beforeend",todo)
}


//Enviar la informacion al formulario para agregarla en la todoapp
button.addEventListener('click', (e)=>{
    e.preventDefault();
    
    if(e.type === 'click'){
        total = total + 1;
    }

    console.log(e)
    let todoValue = input.value
    //Imprimir una tarjeta con la tarea
    const article =`
        <article class="todo">
        <span class="cardTitle">${todoValue}</span>
        <br>
        <label for="completedTask">Completed</label>
        <input type="radio" name="${todoValue}">
        <br>
        <label for="remainingTask">Remaining</label>
        <input type="radio" name="${todoValue}">
        </article>
`
    pintar(article)
    totalTask.innerText = total;
    todoValue.value = '';
    console.log(total)
})


>>>>>>> b5751febe28c37ba2926c2c291d9b7121455efb6
