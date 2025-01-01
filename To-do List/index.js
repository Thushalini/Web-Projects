const submit = document.getElementById('add-TaskBtn');
const deleteAll = document.getElementById('delete-TaskBtn');
const TaskListElement = document.getElementById('taskList');

let taskList = [];

function renderTaskList () {
    TaskListElement.innerHTML = '';

    taskList.forEach((task,index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML =`${task.task} - ${task.status} <button id = "deleteBtn" onClick = "deleteTask(${index})">Delete</button>`;
        TaskListElement.appendChild(listItem);
    });
}

submit.addEventListener('click', () => {
    const taskInput = document.getElementById('taskInput');
    const taskStatus = document.getElementById('taskStatus');

    console.log(taskInput.value);
    console.log(taskStatus.value);

    taskList.unshift({task:taskInput.value, status: taskStatus.value});
    renderTaskList();

    taskInput.value = '';
    taskStatus.value = 'completed';
});

deleteAll.addEventListener('click' , () => {
    taskList = [];
    renderTaskList();
});

window.deleteTask = (index) => {
    taskList.splice(index, 1);
    renderTaskList();
};