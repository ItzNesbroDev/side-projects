// Get form, input, and list elements
const form = document.querySelector('#todo-form');
const input = document.querySelector('#todo-input');
const list = document.querySelector('#todo-list');

// Array to hold to-do items
let todoItems = [];

// Function to add a to-do item
const addTodoItem = (text) => {
  // Create list item element
  const item = document.createElement('li');
  item.innerHTML = `${text}`;

  // Create delete button element
  const deleteButton = document.createElement('button');
  deleteButton.classList.add(...'bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'.split(' '));
  deleteButton.innerHTML = 'Delete';

  // Append delete button to list item
  item.appendChild(deleteButton);

  // Append list item to list
  list.appendChild(item);

  // Add to-do item to array
  todoItems.push(text);

  // Save to-do items to local storage
  localStorage.setItem('todoItems', JSON.stringify(todoItems));
};

// Function to delete a to-do item
const deleteTodoItem = (index) => {
  // Remove to-do item from array
  todoItems.splice(index, 1);

  // Save to-do items to local storage
  localStorage.setItem('todoItems', JSON.stringify(todoItems));

  // Reload page to update list
  location.reload();
};

// Listen for submit event on form element
form.addEventListener('submit', (event) => {
  // Prevent default form submission behavior
  event.preventDefault();

  // Add to-do item
  addTodoItem(input.value);

  // Clear input field
  input.value = '';
});

// Listen for click event on delete buttons
list.addEventListener('click', (event) => {
  if (event.target.tagName === 'BUTTON') {
    // Get index of to-do item in array
    const index = todoItems.indexOf(event.target.parentElement.textContent);

    // Delete to-do item
    deleteTodoItem(index);
  }
});

// Load to-do items from local storage on page load
window.addEventListener('load', () => {
  const storedItems = localStorage.getItem('todoItems');
  if (storedItems) {
    todoItems = JSON.parse(storedItems);
    todoItems.forEach((item) => {
      addTodoItem(item);
    });
  }
});

