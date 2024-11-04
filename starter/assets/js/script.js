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
  let title = document.getElementById("task-title")
  let feature = document.getElementById('task-type-feature')
  let type= document.getElementById('task-type-bug')
  let date = document.getElementById("task-date")
  let description = document.getElementById("task-description")
  let donecount = document.getElementById("done-tasks-count");
 
  function loadTasks() {
    toDoTasksElement.innerHTML = '';
    inProgressTasksElement.innerHTML = '';
    doneTasksElement.innerHTML = '';
    
    tasks.forEach((task, index) => {
      displayTask(task, index);
    });
  }
  
 
  function displayTask(task, index) {
    const taskElement = document.createElement('div');
    taskElement.classList.add('list-group-item');
    taskElement.innerHTML = `
      <h5>${task.title}</h5>
      <p>${task.description}</p>
    <p> crated in ${task.date}</p>
    <div >
    <button class="btntype" > ${task.type}</button>
      <button class="btnpriority"> ${task.priority}</button>
      </div>
      <div class=update-delete>
        <button onclick="editTask(${index})" class="btn btn-warning btn-sm">Update</button>
        <button onclick="deleteTask(${index})" class="btn btn-danger btn-sm">Delete</button>
      </div>
    `;
  
    if (task.status === 'To Do') {
      toDoTasksElement.appendChild(taskElement);
      let numb = document.getElementById("to-do-tasks-count").childElementCount;
    
    } else if (task.status === 'In Progress') {
      inProgressTasksElement.appendChild(taskElement);
      let numb = document.getElementById("in-progress-tasks-count").childElementCount;
    
    } else if (task.status === 'Done') {
      doneTasksElement.appendChild(taskElement);
      let numb = document.getElementById("done-tasks-count").childElementCount;
      
      
    }
  }
  
  
  function saveTask() {
    const title = document.getElementById('task-title').value;
    const description = document.getElementById('task-description').value;
    const priority = document.getElementById('task-priority').value;
    const status = document.getElementById('task-status').value;
    const index = document.getElementById('task-id').value;
    const type= document.getElementById('task-type-bug').value;
    const date = document.getElementById("task-date").value;
    
    const task = { title, description, priority, status , type, date };
  
    if (index === '') {
      tasks.push(task);
    } else {
      tasks[index] = task;
    }
    
    localStorage.setItem('tasks', JSON.stringify(tasks));
    loadTasks();
    hideModal();
  } 
  function showModal() {
    document.getElementById('modal-dialog').style.display = 'block';
  }
  
  function hideModal() {
    document.getElementById('modal-dialog').style.display = 'none';
    document.getElementById('form-task').reset();
    document.getElementById('task-id').value = '';
  }
  

  document.getElementById('task-save-btn').addEventListener('click', (e) => {
    e.preventDefault();
    saveTask();
  });
  
 
  loadTasks();
  
