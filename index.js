// Get the input element and the list element
const inputBox = document.getElementById('toDos');
const list = document.querySelector('.to-dos__list');

// Function to add a new to-do item
function addTodo() {
  // Get the value from the input box
  const todoText = inputBox.value.trim();

// Create a new list item and buttons
  const listItem = document.createElement('li');
  listItem.className = 'to-dos__list-item';
  listItem.innerHTML = `${todoText} <button class="remove">X</button> <button class="tick">✔</button>`;

  // Append the new item to the list
  list.appendChild(listItem);

  // Clear the input box
  inputBox.value = '';
}

// Function to remove a to-do item
function removeTodo() {
  // Get the parent list item and remove it from the list
  const listItem = this.parentNode;
  list.removeChild(listItem);
}

// Function to mark a to-do item as completed
function completeTodo() {
  // Add a class to the parent list item to style it as completed
  const listItem = this.parentNode;
  listItem.classList.toggle('completed');
}

// Add event listeners to buttons and input box
document.querySelector('.to-dos__delete-btn').addEventListener('click', function () {
  // Remove all to-do items
  list.innerHTML = '';
});

document.querySelector('.to-dos__input-box').addEventListener('keydown', function (e) {
  // Add a to-do item when the Enter key is pressed
  if (e.key === 'Enter') {
    addTodo();
  }
});

document.querySelectorAll('.remove').forEach(btn => {
 
  btn.addEventListener('click', removeTodo);
});

document.querySelectorAll('.tick').forEach(btn => {
 
  btn.addEventListener('click', completeTodo);
});




// Function to create a new list item
const createListItem = (id, title) => {
  const listItem = document.createElement('input');
  listItem.innerHTML = `
    <span>${id}:</span>
    <span>${title}</span>
  `;
  return listItem;
};


const displaySelectedItems = (selectedItems) => {
  const todoList = document.getElementById('todoList');
  todoList.innerHTML = '';

  selectedItems.forEach(item => {
    const listItem = createListItem(item.id, item.title);
    todoList.appendChild(listItem);
  });
};


const fetchTodos = () => {
  const userId = document.getElementById('userId').value;
  const url = (`https://dummyjson.com/todos/user/${userId}`);

  fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log('To-Do List:', data);
      displaySelectedItems(data);
    })
    .catch(error => console.error('Error:', error));
};


const addTodoItem = () => {
  const task = document.getElementById('newTask').value;
  const url = ('https://dummyjson.com/todos/user/5');

  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      title: task,
      completed: false
    })
  })
    .then(response => response.json())
    .then(newItem => {
      console.log('New To-Do Item:', newItem);
      const listItem = createListItem(newItem.id, newItem.title);
      const todoList = document.getElementById('todoList');
      todoList.appendChild(listItem);
    })
    .catch(error => console.error('Error:', error));
};


const updateTodoItem = () => {
  const itemId = document.getElementById('updateItemId').value;
  const updatedTask = document.getElementById('updatedTask').value;
  const url = (`https://dummyjson.com/todos/${itemId}`);

  fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      title: updatedTask
    })
  })
    .then(response => response.json())
    .then(updatedItem => {
      console.log('Updated To-Do Item:', updatedItem);
    
      const listItem = document.querySelector(`#todoList li span:first-child:nth-child(${itemId * 2})`);
      listItem.nextElementSibling.textContent = updatedTask;
    })
    .catch(error => console.error('Error:', error));
};


const deleteTodoItem = () => {
  const itemId = document.getElementById('deleteItemId').value;
  const url = (`https://dummyjson.com/todos/${itemId}`);

  fetch(url, {
    method: 'DELETE'
  })
    .then(response => {
      if (response.ok) {
        console.log(`Item ${itemId} deleted successfully.`);
        // Remove the list item from the UI
        const listItem = document.querySelector(`#todoList li span:first-child:nth-child(${itemId * 2})`).parentNode;
        listItem.parentNode.removeChild(listItem);
      } else {
        console.error('Error:', response.statusText);
      }
    })
    .catch(error => console.error('Error:', error));
};


document.getElementById('fetchBtn').addEventListener






























































































