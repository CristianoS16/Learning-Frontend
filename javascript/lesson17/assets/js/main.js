function todo() {
  const tasksContent = document.querySelector(".input-task");
  const addTasksButton = document.querySelector(".add-task");
  const tasksList = document.querySelector(".tasks-list");

  const setSavedTasks = () => {
    const tasks = localStorage.getItem("tasks");
    const tasksList = JSON.parse(tasks);

    tasksList.forEach((task) => {
      createTask(task);
    });
  };

  const saveTasks = () => {
    const tasksLi = tasksList.querySelectorAll("li");
    const todoList = [];
    tasksLi.forEach((element) => {
      todoList.push(element.innerText.replace("Delete", "").trim());
    });
    const tasksJSON = JSON.stringify(todoList);
    localStorage.setItem("tasks", tasksJSON);
  };

  const addDeleteButton = (li) => {
    li.innerHTML += " ";
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.setAttribute("class", "delete-btn");
    li.appendChild(deleteButton);
  };

  const creanInput = () => {
    tasksContent.value = "";
    tasksContent.focus();
  };

  const createTask = (taskText) => {
    console.log(taskText);
    const li = document.createElement("li");
    li.innerHTML = taskText;
    addDeleteButton(li);
    tasksList.appendChild(li);
    saveTasks();
    creanInput();
  };

  setSavedTasks();

  tasksContent.addEventListener("keypress", (e) => {
    if (!tasksContent.value) {
      return;
    }
    if (e.keyCode === 13) {
      createTask(tasksContent.value);
    }
  });

  addTasksButton.addEventListener("click", (e) => {
    if (!tasksContent.value) {
      return;
    }
    createTask(tasksContent.value);
  });

  document.addEventListener("click", function (e) {
    const el = e.target;
    if (el.classList.contains("delete-btn")) {
      el.parentElement.remove();
      saveTasks();
    }
  });
}

todo();
