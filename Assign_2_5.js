const form = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

form.addEventListener('submit', addTask);

function addTask(e) {
  e.preventDefault();

  if (taskInput.value === '') {
    alert('Please enter a task');
    return;
  }

  const li = document.createElement('li');
  li.innerHTML = `<label for="task-${taskList.children.length}">${taskInput.value}</label>
                  <button onclick="deleteTask(this)">Completed</button>`;

  li.id = `task-${taskList.children.length}`;
  taskList.appendChild(li);

  taskInput.value = '';
}

function deleteTask(button) {
  const li = button.parentNode;
  taskList.removeChild(li);
}