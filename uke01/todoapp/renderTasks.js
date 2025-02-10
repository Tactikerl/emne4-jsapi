import { editTask, toggleComplete } from "./editTask.js";
import { deleteTask } from "./deleteTask.js";

export function renderTasks() {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const taskList = document.getElementById("task-list");
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.className = "todo-item";

    const span = document.createElement("span");
    span.className = "task text";
    span.textContent = task.text;
    if (task.completed) span.classList.add("completed");

    span.addEventListener("dblclick", () => editTask(index));

    const completeBtn = document.createElement("button");
    completeBtn.className = "task complete";
    completeBtn.innerHTML = '<i class="fa fa-check"></i>';
    completeBtn.addEventListener("click", () => toggleComplete(index));

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "task delete";
    deleteBtn.innerHTML = '<i class="fa fa-trash-o"></i>';
    deleteBtn.addEventListener("click", () => deleteTask(index));

    li.appendChild(span);
    li.appendChild(completeBtn);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
  });
}
