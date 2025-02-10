import { renderTasks } from "./renderTasks.js";
import { saveTask } from "./saveTasks.js";

export function editTask(index) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const taskItem = document.querySelectorAll(".todo-item")[index];
  const span = taskItem.querySelector(".task.text");
  const input = document.createElement("input");

  input.type = "text";
  input.value = tasks[index].text;
  input.className = "edit-input";

  taskItem.replaceChild(input, span);
  input.focus();

  input.addEventListener("blur", () => saveEdit(index, input.value));
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") saveEdit(index, input.value);
  });
}

export function saveEdit(index, newText) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  if (newText.trim()) {
    tasks[index].text = newText.trim();
    saveTask("tasks", tasks);
    renderTasks();
  } else {
    renderTasks();
  }
}

export function toggleComplete(index) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks[index].completed = !tasks[index].completed;
  saveTask("tasks", tasks);
  renderTasks();
}
