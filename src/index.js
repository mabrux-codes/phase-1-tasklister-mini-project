document.addEventListener("DOMContentLoaded", () => {
  const taskForm = document.getElementById("create-task-form");
  const taskInput = document.getElementById("new-task-description");
  const taskPriority = document.getElementById("task-priority");
  const taskList = document.getElementById("tasks");

  taskForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const taskText = taskInput.value.trim();
    const priority = taskPriority.value;

    if (taskText !== "") {
      const listItem = document.createElement("li");
      listItem.innerHTML = `
        <span class="task-text">${taskText}</span>
        <button class="edit-task">✏️ Edit</button>
        <button class="delete-task">❌ Delete</button>
      `;

      listItem.classList.add(priority);
      taskList.appendChild(listItem);
      taskInput.value = "";
    }
  });

  taskList.addEventListener("click", (event) => {
    if (event.target.classList.contains("delete-task")) {
      event.target.parentElement.remove();
    }

    if (event.target.classList.contains("edit-task")) {
      const taskText = event.target.parentElement.querySelector(".task-text");
      const newText = prompt("Edit your task:", taskText.textContent);
      if (newText !== null && newText.trim() !== "") {
        taskText.textContent = newText.trim();
      }
    }
  });
});
