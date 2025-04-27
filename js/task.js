export class Task{
    constructor(name,description,isCompleted=false){
        this.id=Date.now()
        this.name=name;
        this.description=description;
        this.isCompleted=isCompleted;   
    }

    toggle(){
      this.isCompleted=!this.isCompleted;
    }

    update(name, desc) {
        if(!name && !desc){
            console.log('enter name or description')
            return;
        }
       if (name) {
        this.name=name;
       }
       if (desc) {
        this.description=desc;
       }
    }
}


export class TaskManager {
    constructor(){
        this.tasks = [];
    }


    addTask(name, description, isCompleted = false) {
        let newTask=new Task(name, description, isCompleted);
        this.tasks.push(newTask);
    }

    deleteTask(id) {
        this.tasks = this.tasks.filter(task => task.id !== id);
    }

    updateTask(id, name, desc) {
        let task = this.tasks.find(task => task.id === id);
        if (task) {
            task.update(name, desc); 
        }
    }

    toggleTaskCompletion(id) {
        const task = this.tasks.find(task => task.id === id);
        if (task) {
            task.toggle();
        }
    }

    getAllTask() {
        return this.tasks;
    }

    getTaskById(id) {
        return this.tasks.find(task => task.id === id);
    }
}
    