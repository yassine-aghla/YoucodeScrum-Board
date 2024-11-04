let array = JSON.parse(localStorage.getItem("MyStorage")) || [];
let title = document.getElementById("task-title").value;
let type = document.querySelector('input[name="task-type"]:checked').value;
let priority = document.getElementById("task-priority").value;
let status = document.getElementById("task-status").value;
let date = document.getElementById("task-date").value;
let description = document.getElementById("task-description").value;
let taskItem = document.createElement("div");

function displaymodal() {
    let modal = document.getElementById("modal-dialog");
       modal.style.display="block";
  }
  function hideenmodal(){
    let modal = document.getElementById("modal-dialog");
    modal.style.display="none";
  }
 
 
  
document.getElementById("form-task").addEventListener("submit", function(event) {

  event.preventDefault();
}

  // renderTasks()
 



  // taskItem.classList.add("list-group-item", "task-item")
  // taskItem.innerHTML = `
  //  <button class="task">
  //                 <div class="">
  //                   <i class=""></i>
  //                 </div>
  //                 <div class="">
  //                   <div class="">
  //                   ${title}
  //                   </div>
  //                   <div class="">
  //                     <div class=""> created in  ${date}</div>
  //                     <div
  //                       class=""
  //                       title="There is hardly anything more frustrating than having to look for current requirements in tens of comments under the actual description or having to decide which commenter is actually authorized to change the requirements. The goal here is to keep all the up-to-date requirements and details in the main/primary description of a task. Even though the information in comments may affect initial criteria, just update this primary description accordingly."
  //                     >
  //                     ${description}
  //                     </div>
  //                   </div>
  //                   <div class="">
  //                     <span class="btn btn-primary">${type}</span>
  //                     <span class="btn btn-white">${priority}</span>
  //                   </div>
  //                   <button class="btn btn-danger btn-sm delete-task" id="task-delete-btn" onclick="DeleteTaskEvent(this)" >Supprimer</button>
  //                   <button type="submit" name="update" class="btn btn-warning task-action-btn" id="task-update-btn" >Update</button>
  //                 </div>
                 
  //               </button>
  // `;

  if (status === "To Do") {
    document.getElementById("to-do-tasks").appendChild(taskItem);

  } else if (status === "In Progress") {
    document.getElementById("in-progress-tasks").appendChild(taskItem);
  } else if (status === "Done") {
    document.getElementById("done-tasks").appendChild(taskItem);
 
  }

  document.getElementById("form-task").reset();
  hideenmodal();


 function DeleteTaskEvent() {
  const deleteButton = document.querySelector("#task-delete-btn");
  deleteButton.addEventListener("click", function() {
    taskItem.remove();
    });
  }

  function updateTask(taskId, newText) {
    const taskIndex = tasks.findIndex(task => task.id === taskId);
    tasks[taskIndex].text = newText;
    renderTasks();

    // SweetAlert pour confirmer la mise à jour
    Swal.fire({
        title: 'Task Updated!',
        text: `Task updated to: "${newText}"`,
        icon: 'info',
        confirmButtonText: 'Got it!'
    });
}
