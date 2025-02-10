//let tasks = JSON.parse(sessionStorage.getItem("tasks")) || [];

// function saveTasks() {
//   localStorage.setItem("tasks", JSON.stringify(tasks));
//   //sessionStorage.setItem("tasks", JSON.stringify(tasks));
// }

/**
 * #funksjon for å visualisere eksisterende eller nye tasks i appen.
 * #forEach loopen går gjennom arrayet i localStorage og lager html tags for innholdet i task objektene
 */

// function renderTasks() {
//   taskList.innerHTML = "";
//   tasks.forEach((task, index) => {
//     const li = document.createElement("li");
//     li.className = "todo-item";

//     const span = document.createElement("span");
//     span.className = "task text";
//     span.textContent = task.text;
//     if (task.completed) span.classList.add("completed");

//     span.addEventListener("dblclick", () => editTask(index));

//     const completeBtn = document.createElement("button");
//     completeBtn.className = "task complete";
//     completeBtn.innerHTML = '<i class="fa fa-check"></i>';
//     completeBtn.addEventListener("click", () => toggleComplete(index));

//     const deleteBtn = document.createElement("button");
//     deleteBtn.className = "task delete";
//     deleteBtn.innerHTML = '<i class="fa fa-trash-o"></i>';
//     deleteBtn.addEventListener("click", () => deleteTask(index));

//     li.appendChild(span);
//     li.appendChild(completeBtn);
//     li.appendChild(deleteBtn);
//     taskList.appendChild(li);
//   });
// }

/**
 * Legger til nye tasks i todo listen, sjekker også etter whitespace og fjerner dette automatisk. om ny entry kun er whitespace blir det ikke lagt til noe task
 */
// function addTask(text) {
//   if (!text.trim()) return;
//   tasks.push({ text, completed: false });
//   saveTask("tasks", tasks);
//   renderTasks();
//   input.value = "";
// }

// function editTask(index) {
//   const taskItem = document.querySelectorAll(".todo-item")[index];
//   const span = taskItem.querySelector(".task.text");

//   const input = document.createElement("input");
//   input.type = "text";
//   input.value = tasks[index].text;
//   input.className = "edit-input";

//   taskItem.replaceChild(input, span);
//   input.focus();

//   input.addEventListener("blur", () => saveEdit(index, input.value));
//   input.addEventListener("keydown", (e) => {
//     if (e.key === "Enter") saveEdit(index, input.value);
//   });
// }

// function saveEdit(index, newText) {
//   if (newText.trim()) {
//     tasks[index].text = newText.trim();
//     saveTask("tasks", tasks);
//     renderTasks();
//   } else {
//     renderTasks();
//   }
// }

// function toggleComplete(index) {
//   tasks[index].completed = !tasks[index].completed;
//   saveTask("tasks", tasks);
//   renderTasks();
// }

// function deleteTask(index) {
//   tasks.splice(index, 1);
//   saveTask("tasks", tasks);
//   renderTasks();
// }
