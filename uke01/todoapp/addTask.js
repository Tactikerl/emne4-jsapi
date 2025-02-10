import { saveTask } from "./saveTasks.js";
import { renderTasks } from "./renderTasks.js";

export function addTask(text) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const input = document.getElementById("task-input");

  if (!text.trim()) return;
  tasks.push({ text, completed: false });
  saveTask("tasks", tasks);
  renderTasks();
  input.value = "";
}
