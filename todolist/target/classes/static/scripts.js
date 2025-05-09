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
                li.classList.add('fade-in');
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
        .then(() => {
            const li = document.createElement('li');
            li.textContent = newTodo; // Use the submitted value directly
            li.classList.add('fade-in');
            todoList.appendChild(li);
            todoInput.value = '';
        });
    });

    // Add fade-in animation
    const style = document.createElement('style');
    style.textContent = `
        .fade-in {
            animation: fadeIn 0.5s ease-in;
        }

        @keyframes fadeIn {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }
    `;
    document.head.appendChild(style);
});
