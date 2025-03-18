console.log('Sistema de Gestión cargado');

document.getElementById('task-form').addEventListener('submit', function(event) {
    event.preventDefault();
    addTask();
});

function addTask() {
    const taskName = document.getElementById('task-name').value;
    const taskDesc = document.getElementById('task-desc').value;
    const taskDate = document.getElementById('task-date').value;
    const taskPriority = document.getElementById('task-priority').value;
    const taskStatus = document.getElementById('task-status').value;

    const task = {
        name: taskName,
        description: taskDesc,
        dueDate: taskDate,
        priority: taskPriority,
        status: taskStatus
    };

    displayTask(task);
}

function displayTask(task) {
    const taskList = document.getElementById('tasks');
    const taskItem = document.createElement('li');
    taskItem.textContent = `${task.name} - ${task.description} (Due: ${task.dueDate}, Priority: ${task.priority}, Status: ${task.status})`;
    taskList.appendChild(taskItem);
}

function filterTasks(priority, status) {
    const tasks = document.querySelectorAll('#tasks li');
    tasks.forEach(task => {
        const taskPriority = task.textContent.match(/Priority: (\w+)/)[1];
        const taskStatus = task.textContent.match(/Status: (\w+)/)[1];
        if ((priority === 'all' || taskPriority === priority) && (status === 'all' || taskStatus === status)) {
            task.style.display = '';
        } else {
            task.style.display = 'none';
        }
    });
}
