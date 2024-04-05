// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));
let btn = document.querySelector('#save')
const tForm = document.getElementById('test-form')

// Todo: create a function to generate a unique task id
function generateTaskId() {
    
    const randomNum = Math.floor(Math.random() * 1000)
    return `${randomNum}`;
}

// Todo: create a function to create a task card
function createTaskCard(id) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || []
    console.log(typeof id)
    let taskinfo 

    for (const task of tasks) {
        if (task.id === id) {
            taskinfo = task 
        }
        // console.log(taskinfo)
    }

    console.log('this is task info', taskinfo)

    let taskCard = document.createElement('div')
    taskCard.classList.add('task-card')
    
    
    let cardTitleEL = document.createElement('h2')
    let taskDueEL = document.createElement('p')
    let taskId = document.createElement('p')
    
    taskCard.appendChild(taskId)
    taskCard.appendChild(cardTitleEL)
    taskCard.appendChild(taskDueEL)
    
    cardTitleEL.classList.add('title')
    taskDueEL.classList.add('due')
    taskId.classList.add(taskinfo.id)
    
    console.log(taskCard)
    

    console.log({task})
}

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {
    // $( "#draggable" ).draggable()
    const tasks = JSON.parse(localStorage.getItem('tasks')) || []
    for (const task of tasks) {
        
        createTaskCard(task.id)
        // console.log(tasks, task)
    }


}

// Todo: create a function to handle adding a new task
function handleAddTask(event){
    event.preventDefault()
    const tasks = JSON.parse(localStorage.getItem('tasks')) || []
    const newtask = {
        title: event.target.elements[0].value,
        date: event.target.elements[1].value,
        description: event.target.elements[2].value,
        state: 'todo',
        id: generateTaskId()
    }
    tasks.push(newtask)
    localStorage.setItem('tasks', JSON.stringify(tasks) )
    console.log(newtask)
    
    // console.log(event.target.elements[0].value)
    // console.log(event.target.elements[1].value)
    // console.log(event.target.elements[2].value)
    // createTaskCard()
    

   
}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event){
    
}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {

}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {
    tForm.addEventListener('submit', handleAddTask)
    $( "#datepicker" ).datepicker();
    renderTaskList()
});
