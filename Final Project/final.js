//assign taskForm & taskManager element
const taskForm = document.getElementById("taskForm");
const taskManager = document.getElementById("taskmanager");

//define tasks array
let tasks = [];
let taskId = 1;

//event listener for form submition
taskForm.addEventListener("submit", function (event) {
  event.preventDefault();
  //assign taskName element
  const taskName = document.getElementById("taskName");

  //assign taskPriority, checkImportant, isCompleted, and date element
  const taskPriority = document.getElementById("taskPriority");
  const checkImportant = document.getElementById("checkImportant");
  const isCompleted = false;
  const date = new Date().toDateString();

  //display to console log
  const newTask = {
    id: taskId++,
    name: taskName.value,
    priority: taskPriority.value,
    isImportant: checkImportant.value,
    isCompleted,
    date,
  };

  //add tasks to array
  tasks.push(newTask);

  //create list items
  const listItem = document.createElement("li");
  listItem.id = newTask.id;

  // Create a separate span for the task info 
  const taskInfo = document.createElement("span");
  taskInfo.className = "task-info";

  const taskText = document.createElement("span");
  taskText.textContent = taskName.value;
  taskText.className = "task-text";

  const priorityText = document.createElement("span");
  priorityText.textContent = " Priority: " + taskPriority.value;

  const dateText = document.createElement("span");
  dateText.textContent = " Date: " + date;

  //if statement for color change of important items
  if (checkImportant.checked) {
    listItem.style.backgroundColor = "#fdc3d0ff";
  } else {
    listItem.style.backgroundColor = "none";
  }

  //checkbox to mark items done
  const checkDone = document.createElement("input");
  checkDone.type = "checkbox";
  const doneLabel = document.createElement("label");
  doneLabel.textContent = "Done ";
  doneLabel.className = "doneLabel";
//function to implement change when done is checked
  checkDone.addEventListener("change", function () {
    if (checkDone.checked) {
      taskInfo.style.textDecoration = "line-through";
      newTask.isCompleted = true;
      doneLabel.textContent = "Undo ";
    } else {
      taskInfo.style.textDecoration = "none";
      newTask.isCompleted = false;
      doneLabel.textContent = "Done ";
    }
  });

  //delete task button
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", function () {
    taskManager.removeChild(listItem);
    let currentId = listItem.id;
    let currentIndex = 0;
    //for loop to find current element from array in console
    for (let i = 0; i < tasks.length; i++) {
      if (tasks[i].id == currentId) {
        currentIndex = i;
        break;
      }
    }
    //delete current element from array in console
    tasks.splice(currentIndex, 1);
    console.log(JSON.stringify(tasks));
  });
  //append to task manager
  taskManager.appendChild(listItem);
//append to task info
  taskInfo.appendChild(taskText);
  taskInfo.appendChild(priorityText);
  taskInfo.appendChild(dateText);
  //append to list item
  listItem.appendChild(taskInfo);
  listItem.appendChild(checkDone);
  listItem.appendChild(doneLabel);
  listItem.appendChild(deleteButton);

  //log tasks
  console.log(JSON.stringify(tasks));
});
