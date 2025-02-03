// Get DOM elements
const taskForm = document.getElementById('taskForm');
const taskList = document.getElementById('taskList');

// Load tasks from localStorage
document.addEventListener('DOMContentLoaded', loadTasks);

// Add Task
taskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const taskName = document.getElementById('task-name').value;
    const taskDesc = document.getElementById('task-desc').value;
    const taskDate = document.getElementById('task-date').value;

    if (taskName && taskDesc && taskDate) {
        const task = { name: taskName, description: taskDesc, dueDate: taskDate };
        saveTask(task);
        renderTasks();
    } else {
        alert('Please fill in all fields!');
    }
});

// Save task to localStorage
function saveTask(task) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Render tasks on the page
function renderTasks() {
    taskList.innerHTML = '';
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <h3>${task.name}</h3>
            <p>${task.description}</p>
            <span>Due: ${task.dueDate}</span>
            <button class="btn delete-btn" onclick="deleteTask(${index})">Delete</button>
        `;
        taskList.appendChild(li);
    });
}

// Delete task
function deleteTask(index) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    renderTasks();
}

// Load tasks on page load
function loadTasks() {
    renderTasks();
}
