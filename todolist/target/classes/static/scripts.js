document.addEventListener('DOMContentLoaded', () => {
    const todoList = document.getElementById('todo-list');
    const todoForm = document.getElementById('todo-form');
    const todoInput = document.getElementById('todo-input');

    // Fetch and display todos
    fetch('/todos')
        .then(response => response.json())
        .then(todos => {
            todos.forEach(todo => {
                const li = document.createElement('li');
                li.textContent = todo;
                todoList.appendChild(li);
            });
        });

    // Add a new todo
    todoForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const newTodo = todoInput.value;
        fetch('/todos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ todo: newTodo })
        })
        .then(response => response.json())
        .then(todo => {
            const li = document.createElement('li');
            li.textContent = todo;
            todoList.appendChild(li);
            todoInput.value = '';
        });
    });
});
