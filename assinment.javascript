<!DOCTYPE html>
<html>
<head>
  <title>To-Do List</title>
  <style>
    body {
      font-family: Arial, sans-serif;
    }
    
    .container {
      max-width: 400px;
      margin: 0 auto;
      padding: 20px;
    }
    
    h1 {
      text-align: center;
    }
    
    .task-list {
      list-style-type: none;
      padding: 0;
    }
    
    .task-item {
      display: flex;
      align-items: center;
      margin-bottom: 10px;
    }
    
    .task-item input[type="text"] {
      flex-grow: 1;
      padding: 5px;
    }
    
    .task-item button {
      margin-left: 10px;
    }
    
    .error-message {
      color: red;
      margin-top: 5px;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>To-Do List</h1>
    
    <form id="task-form">
      <input type="text" id="task-input" placeholder="Enter a task">
      <button type="submit">Add Task</button>
    </form>
    
    <ul id="task-list" class="task-list">
    </ul>
  </div>

  <script>
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
    
    taskForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const taskText = taskInput.value.trim();
      
      if (taskText !== '') {
        addTask(taskText);
        taskInput.value = '';
      } else {
        showError('Please enter a task.');
      }
    });
    
    function addTask(taskText) {
      const taskItem = document.createElement('li');
      taskItem.className = 'task-item';
      
      const taskTextInput = document.createElement('input');
      taskTextInput.type = 'text';
      taskTextInput.value = taskText;
      taskTextInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
          event.preventDefault();
          taskTextInput.blur();
        }
      });
      
      const editButton = document.createElement('button');
      editButton.textContent = 'Edit';
      editButton.addEventListener('click', function() {
        editTask(taskTextInput);
      });
      
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.addEventListener('click', function() {
        deleteTask(taskItem);
      });
      
      taskItem.appendChild(taskTextInput);
      taskItem.appendChild(editButton);
      taskItem.appendChild(deleteButton);
      
      taskList.appendChild(taskItem);
    }
    
    function editTask(taskTextInput) {
      taskTextInput.readOnly = false;
      taskTextInput.focus();
    }
    
    function deleteTask(taskItem) {
      taskItem.remove();
    }
    
    function showError(errorMessage) {
      const errorContainer = document.createElement('div');
      errorContainer.className = 'error-message';
      errorContainer.textContent = errorMessage;
      
      taskForm.appendChild(errorContainer);
      
      setTimeout(function() {
        errorContainer.remove();
      }, 3000);
    }
  </script>
</body>
</html>
