import { addTask } from "./addTask.js";
import { renderTasks } from "./renderTasks.js";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form");
  const input = document.getElementById("task-input");

  /** her var det mindre kode plutselig */

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    addTask(input.value);
  });

  renderTasks();
});
