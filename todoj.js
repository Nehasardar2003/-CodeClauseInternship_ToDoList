document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("task");
    const addTaskButton = document.getElementById("addTask");
    const taskList = document.getElementById("taskList");
    const clearListButton = document.getElementById("clearList");

    // Add task to the list
    addTaskButton.addEventListener("click", function () {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            const listItem = document.createElement("li");
            listItem.textContent = taskText;
            taskList.appendChild(listItem);
            taskInput.value = "";
        }
    });

    // Clear all tasks
    clearListButton.addEventListener("click", function () {
        taskList.innerHTML = "";
    });

    // Remove a task when clicked
    taskList.addEventListener("click", function (e) {
        if (e.target.tagName === "LI") {
            e.target.remove();
        }
    });
});
