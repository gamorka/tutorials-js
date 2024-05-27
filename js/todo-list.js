const todoList = [];

function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  todoList.push(name);
  console.log(name)

  inputElement.value = ''; 
}

for (let i = 1; i <= 8; i++){
  console.log(i);
}