function displaymodal() {
    let modal = document.getElementById("modal-dialog");
       modal.style.display="block";
  }
  function hideenmodal(){
    let modal = document.getElementById("modal-dialog");
    modal.style.display="none";
  }
 
  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  const toDoTasksElement = document.getElementById('to-do-tasks');
  const inProgressTasksElement = document.getElementById('in-progress-tasks');
  const doneTasksElement = document.getElementById('done-tasks');

 
  function loadTasks() {
    toDoTasksElement.innerHTML = '';
    inProgressTasksElement.innerHTML = '';
    doneTasksElement.innerHTML = '';
    
    tasks.forEach((task, index) => {
      displayTask(task, index);
    });
  }
  
  function saveTask() {
    const title = document.getElementById('task-title').value;
    const description = document.getElementById('task-description').value;
    const priority = document.getElementById('task-priority').value;
    const status = document.getElementById('task-status').value;
    const check = document.getElementById('task-id').value;
    const taskType = document.querySelector('input[name="task-type"]:checked').value;
    const date = document.getElementById("task-date").value;
    
    
    const task = { title, description,taskType, priority, status , type, date };
  
    if (check === ''){ 
      // ajouter task
      tasks.push(task); 
    } else {
      // modiifer la tache deja exite
      tasks[check] = task;  
    }
    
    localStorage.setItem('tasks', JSON.stringify(tasks));
    loadTasks();
    hideenmodal();
    document.getElementById('form-task').reset();
  }


  function displayTask(task, index) {
    const taskElement = document.createElement('div');
    taskElement.classList.add('list-group-item');
    taskElement.innerHTML = `
      <h5>${task.title}</h5>
      <p>${task.description}</p>
    <p> crated in ${task.date}</p>
    <div >
    <button class="btntype" > ${task.taskType}</button>
      <button class="btnpriority"> ${task.priority}</button>
      </div>
      <div class="update-delete">
        <button onclick="editTask(${index})" class="btn btn-warning btn-sm">Update</button>
        <button onclick="deleteTask(${index})" class="btn btn-danger btn-sm">Delete</button>
      </div>
    `;
  
    if (task.status === 'To Do') {
      toDoTasksElement.appendChild(taskElement);
      let numb1 = document.getElementById("to-do-tasks-count");
    numb1.textContent=toDoTasksElement.children.length
    } else if (task.status === 'In Progress') {
      inProgressTasksElement.appendChild(taskElement);
      let numb2 = document.getElementById("in-progress-tasks-count");
      numb2.textContent=inProgressTasksElement.children.length
    } else if (task.status === 'Done') {
      doneTasksElement.appendChild(taskElement);
      let numb3 = document.getElementById("done-tasks-count");
      numb3.textContent=doneTasksElement.children.length
      
    }
  }
  
  

  
 
  function editTask(index) {
    displaymodal();
  
    const task = tasks[index];
    
    document.getElementById('task-title').value = task.title;
    document.getElementById('task-description').value = task.description;
    document.getElementById('task-priority').value = task.priority;
    document.getElementById('task-status').value = task.status;
    document.getElementById('task-id').value = index;
    document.querySelector('input[name="task-type"]:checked').value = task.taskType;
    document.getElementById("task-date").value = task.date;
  }
  
  
  function deleteTask(index) {
    tasks.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    loadTasks();
  }
  
  

  document.getElementById('task-save-btn').addEventListener('click', (e) => {
    e.preventDefault();
    saveTask();
    
    document.getElementById('task-id').value = '';
  });
  
 
  loadTasks();
  
