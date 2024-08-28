const todoList =JSON.parse(localStorage.getItem('todoList')) || [{}];

renderHTML();

document.querySelector('.js-add-button').addEventListener('click', () => {
  addTodo();
})

function renderHTML() {
  let todoListHTML = '';

  todoList.forEach((todoObject, index) => {
    const { name, dueDate } = todoObject;
    const html = `
    <div>${name}</div>  
    <div>${dueDate}</div>
    <button class="delete-button js-delete-button">Delete</button> 
    `;

    todoListHTML += html;
  });
  document.querySelector('.js-todo-list').innerHTML = todoListHTML;

  document.querySelectorAll('.js-delete-button').forEach((deleteButton, index) => {
    deleteButton.addEventListener('click', () => {
      todoList.splice(index,1);
      renderHTML();
      saveToStorage();
    })
  });
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