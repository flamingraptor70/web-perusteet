// array for todo list
const todoList = [
  {
    id: 1,
    task: 'Learn HTML',
    completed: true,
  },
  {
    id: 2,
    task: 'Learn CSS',
    completed: true,
  },
  {
    id: 3,
    task: 'Learn JS',
    completed: false,
  },
  {
    id: 4,
    task: 'Learn TypeScript',
    completed: false,
  },
  {
    id: 5,
    task: 'Learn React',
    completed: false,
  },
];

// add your code here
const ul = document.querySelector('ul');
for (const todo of todoList) {
  const html = `<li>
  <input type="checkbox" id="todo-${todo.id}" ${
    todo.completed ? 'checked' : ''
  }>
  <label for="todo-${todo.id}">${todo.task}</label>
  </li>`;
  ul.insertAdjacentHTML('beforeend', html);
}
