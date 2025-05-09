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
                li.innerHTML = `
                    <span class="todo-text">${todo.text}</span>
                    <div class="button-group">
                        <button class="check-btn">Check/Uncheck</button>
                        <button class="delete-btn">Delete</button>
                    </div>
                `;
                li.dataset.id = todo.id;
                li.classList.add('fade-in');
                todoList.appendChild(li);
            });
        });

    // Add a new todo
    todoForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const newTodo = todoInput.value.trim();
        if (newTodo) {
            fetch('/add', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: `todo=${encodeURIComponent(newTodo)}`
            }).then(() => {
                const li = document.createElement('li');
                li.innerHTML = `
                    <span class="todo-text">${newTodo}</span>
                    <div class="button-group">
                        <button class="check-btn">Check/Uncheck</button>
                        <button class="delete-btn">Delete</button>
                    </div>
                `;
                todoList.appendChild(li);
                todoInput.value = '';
            });
        }
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

    // Handle check/uncheck and delete actions
    todoList.addEventListener('click', (e) => {
        if (e.target.classList.contains('delete-btn')) {
            const todoId = e.target.closest('li').dataset.id;
            fetch('/delete', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: `todoId=${todoId}`
            }).then(() => e.target.closest('li').remove());
        } else if (e.target.classList.contains('check-btn')) {
            const todoText = e.target.closest('li').querySelector('.todo-text');
            todoText.classList.toggle('crossed-out');
        }
    });
});
