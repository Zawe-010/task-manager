# Task Manager

A simple task management application to help you stay organized and keep track of your tasks. The app allows you to add, view, and delete tasks, with data persisted in the browser's localStorage. Whether you're organizing personal tasks, work projects, or school assignments, this app provides a clean and user-friendly interface to manage your to-do list.

---

## Features

- **Task Management**: Add, view, and delete tasks.
- **Persistent Data**: All tasks are stored in the browser’s localStorage, allowing them to persist even after page refreshes.
- **User-friendly Interface**: Easy-to-use forms to add tasks with a task name, description, and due date.
- **Dynamic Content**: Tasks are dynamically added and removed from the page.
- **Mobile-Responsive**: The application is fully responsive and works well on mobile and tablet devices.

---

## File Structure

```plaintext
Task-Manager/
│
├── css/
│   └── styles.css    # Styles for the application
│
└── js/
│   └── app.js        # JavaScript logic for task management
│
├── about.html        # About page detailing the app's purpose
├── contact.html      # Page for adding new tasks
├── index.html        # Home page with an overview of the app
├── README.MD         # This file, which explains the project and setup instructions. 
```

---

## Pages

### 1. **Home Page (`index.html`)**

The home page provides an introduction to the Task Manager, explaining its features and how it can help users stay organized.

### 2. **About Page (`about.html`)**

The about page gives a brief overview of the app's purpose, its goal to help users manage tasks, and the benefits of staying organized.

### 3. **Add Task Page (`contact.html`)**

The contact page lets users add new tasks to the system. Tasks are added through a form with fields for the task name, description, and due date. Tasks are then displayed below the form. Tasks are stored in `localStorage` for persistence.

---

## How to Use

1. **Add a Task**:
   - Navigate to the "Add Task" page.
   - Enter a task name, description, and due date.
   - Click "Add Task" to save the task.
   
2. **View Tasks**:
   - Once a task is added, it will appear in a list below the form.
   - Tasks are dynamically rendered from localStorage and will persist even after a page refresh.
   
3. **Delete a Task**:
   - Click the "Delete" button next to a task to remove it from the list.
   - The task will be deleted from both the page and localStorage.

---

## Technologies Used

- **HTML5**: Structure of the web pages.
- **CSS3**: Styling for the app’s layout and design.
- **JavaScript**: Used for DOM manipulation, event handling, and localStorage interaction.
- **LocalStorage**: For persisting task data in the browser.

---

## Installation

1. Clone this repository to your local machine.
   ```bash
   git clone https://github.com/Zawe-010/task-manager.git
   ```

2. Open the project folder.
   ```bash
   cd task-manager
   ```

3. Open `index.html` in a browser to view the app.

---

## License

This project is open-source and available under the [MIT License](LICENSE).

---
