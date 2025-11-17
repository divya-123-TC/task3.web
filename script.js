const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

// Add Task
addBtn.addEventListener("click", () => {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    // Create new list item
    const li = document.createElement("li");
    li.textContent = taskText;

    // Mark complete on click
    li.addEventListener("click", () => {
        li.classList.toggle("completed");
    });

    // Remove button
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "X";
    removeBtn.classList.add("remove-btn");

    removeBtn.addEventListener("click", (e) => {
        e.stopPropagation(); // prevent triggering complete toggle
        li.remove();
    });

    li.appendChild(removeBtn);
    taskList.appendChild(li);

    taskInput.value = ""; // clear input
});
