let input = document.getElementById('inputText');
let button = document.getElementById('inputButton');
let todoContainer = document.getElementById('todoContainer')

function pintar(todo){
    todoContainer.insertAdjacentHTML("beforeend",todo)
}

//Enviar la informacion al formulario para agregarla en la todoapp
button.addEventListener('click', (e)=>{
    e.preventDefault();
    console.log(input.value)
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
})


