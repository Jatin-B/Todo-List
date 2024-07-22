const todoList =JSON.parse(localStorage.getItem('todoList')) || [{}];

renderHTML();

function renderHTML() {
  let todoListHTML = '';

  todoList.forEach(function(todoObject, index) {
    const { name, dueDate } = todoObject;
    const html = `
    <div>${name}</div>  
    <div>${dueDate}</div>
    <button onclick="
      todoList.splice(${index},1);
      renderHTML();
      saveToStorage();
    " class="delete-button">Delete</button> 
    `;

    todoListHTML += html;
  });
  document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}

function addTodo() {
  const inputElement = document.querySelector('.js-task');
  const name = inputElement.value;
  const dateElement = document.querySelector('.date');
  const dueDate = dateElement.value;
  todoList.push({
    name,
    dueDate
  });

  inputElement.value = '';
  dateElement.value = '';
  renderHTML();
  saveToStorage();
}

function saveToStorage() {
  localStorage.setItem('todoList', JSON.stringify(todoList));
}