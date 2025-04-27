import { Task, TaskManager } from "./task.js";
import { updateScreenwithTasks } from "./dom.js";

let taskManager = new TaskManager();

// Get the Add Task button and input fields
const addButton = document.getElementById('addBtn');
const taskNameInput = document.getElementById('taskName');
const taskDescInput = document.getElementById('taskDesc');

// Function to add task
function addNewTask() {
    const name = taskNameInput.value;
    const description = taskDescInput.value;

    if (name && description) {
        taskManager.addTask(name, description);
        taskNameInput.value = '';  // Clear input fields
        taskDescInput.value = '';
        displayTasks();
    } else {
        alert("Please enter both task name and description.");
    }
}

// Add task on button click
addButton.addEventListener('click', addNewTask);

// Function to display tasks on screen
function displayTasks() {
    const tasks = taskManager.getAllTask();
    updateScreenwithTasks(tasks, handleDeleteTask, handleUpdateTask);
}

// Display tasks 
displayTasks();

// Handle task deletion
function handleDeleteTask(id) {
    taskManager.deleteTask(id);
    displayTasks();
}

// Handle task update
function handleUpdateTask(id, newName, newDescription) {
    taskManager.updateTask(id, newName, newDescription);
    displayTasks();
}