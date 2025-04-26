let body=document.getElementById('body')

export function updateScreenwithTasks(tasks, onDelete, onUpdate) {
    body.innerHTML = '';
    tasks.map(task=>{
        let p=document.createElement('h1');
        let desc=document.createElement('p')
        let div=document.createElement('div');

        p.textContent= task.name;
        desc.textContent= task.description;

         
         let deleteBtn = document.createElement('button');
         deleteBtn.textContent = 'Delete';
         deleteBtn.onclick = () => onDelete(task.id); 
 
         let updateBtn = document.createElement('button');
         updateBtn.textContent = 'Update';
         updateBtn.onclick = () => {
             let newName = prompt('New name:', task.name);
             let newDesc = prompt('New description:', task.description);
             onUpdate(task.id, newName, newDesc); 
         };

         div.append(p, desc, deleteBtn, updateBtn);
         body.append(div);
     });
}