import { Task } from "./task.js";
import { TaskManager } from "./task.js";
import { updateScreenwithTasks } from "./dom.js";

let taskManager = new TaskManager();

taskManager.addTask('Wash clothes', 'Wash them well', false);
taskManager.addTask('Do your bed', 'Finish your bed stuff', true);

function handleDeleteTask(id) {
    taskManager.deleteTask(id);      
    displayTasks();                 
}

function handleUpdateTask(id, newName, newDescription) {
    taskManager.updateTask(id, newName, newDescription); 
    displayTasks();                 
} 

function displayTasks() {
    const tasks = taskManager.getAllTask();  
    updateScreenwithTasks(tasks, handleDeleteTask, handleUpdateTask); 
}

displayTasks();

const firstTaskId = taskManager.getAllTask()[0].id; 
taskManager.updateTask(firstTaskId, 'Do Laundry', 'Use washing machine for laundry');

taskManager.toggleTaskCompletion(firstTaskId); 
displayTasks(); 

console.log(taskManager.getAllTask());
