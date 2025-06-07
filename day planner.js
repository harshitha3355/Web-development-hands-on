document.addEventListener("DOMContentLoaded", loadTasks);

function addTask() {
    let time = document.getElementById("task-time").value;
    let text = document.getElementById("task-text").value;

    if (time && text) {
        let taskList = document.getElementById("task-list");
        let taskItem = document.createElement("div");
        taskItem.classList.add("task");
        taskItem.innerHTML = `<span>${time} - ${text}</span> 
            <button onclick="completeTask(this)">COMPLETED</button> 
            <button onclick="removeTask(this)">DEL</button>`;

        taskList.appendChild(taskItem);
        saveTask(time, text);
        document.getElementById("task-text").value = "";
    }
}

function completeTask(button) {
    button.parentElement.classList.toggle("completed");
}

function removeTask(button) {
    deleteTask(button);
}

function saveTask(time, text) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push({ time, text });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    let taskList = document.getElementById("task-list");

    tasks.forEach(task => {
        let taskItem = document.createElement("div");
        taskItem.classList.add("task");
        taskItem.innerHTML = `<span>${task.time} - ${task.text}</span> 
            <button onclick="completeTask(this)">COMPLETED</button> 
            <button onclick="removeTask(this)">DEL</button>`;
        taskList.appendChild(taskItem);
    });
}

function deleteTask(button) {
    let taskElement = button.parentElement;
    let taskText = taskElement.querySelector("span").textContent;

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks = tasks.filter(task => `${task.time} - ${task.text}` !== taskText.trim());

    localStorage.setItem("tasks", JSON.stringify(tasks));
    taskElement.remove();
}
localStorage.clear();

function clearAllTasks() {
    localStorage.clear();
    document.getElementById("task-list").innerHTML = ""; 
}
