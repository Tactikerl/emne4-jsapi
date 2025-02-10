import { renderTasks } from "./renderTasks.js";
import { saveTask } from "./saveTasks.js";

export function deleteTask(index) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  tasks.splice(index, 1);
  saveTask("tasks", tasks);
  renderTasks();
}
