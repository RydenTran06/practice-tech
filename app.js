const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');
function addTask() {
const taskText = taskInput.value;
if(taskText === '') return;
const listItem = document.createElement('li');
listItem.textContent = taskText;
listItem.addEventListener('click', () => {
listItem.style.textDecoration = 'line-through';
});
listItem.addEventListener('dblclick', () => {
taskList.removeChild(listItem);
});
taskList.appendChild(listItem);
taskInput.value = '';
}
addTaskBtn.addEventListener('click', addTask);