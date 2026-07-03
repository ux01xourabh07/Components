import { useState, useEffect } from "react";
import TodoForm from "./todo/TodoNew";
import TodoList from "./todo/TodoList";

function TodoApp() {

    const [todos, setTodos] = useState(() => {
        const saved = localStorage.getItem("todos");
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    function addTodo(text) {
        const newTodo = {
            id: Date.now(),
            text,
            completed: false,
        };

        setTodos([...todos, newTodo]);
    }

    function deleteTodo(id) {
        setTodos(todos.filter(todo => todo.id !== id));
    }

    function toggleTodo(id) {
        setTodos(
            todos.map(todo =>
                todo.id === id
                    ? { ...todo, completed: !todo.completed }
                    : todo
            )
        );
    }

    function editTodo(id, newText) {
        setTodos(
            todos.map(todo =>
                todo.id === id
                    ? { ...todo, text: newText }
                    : todo
            )
        );
    }

    function clearAll() {
        setTodos([]);
    }

    return (
        <div className="container">
            <h1>Todo App</h1>

            <TodoForm addTodo={addTodo} />

            <TodoList
                todos={todos}
                deleteTodo={deleteTodo}
                toggleTodo={toggleTodo}
                editTodo={editTodo}
            />

            {todos.length > 0 && (
                <button onClick={clearAll}>
                    Clear All
                </button>
            )}
        </div>
    );
}

export default TodoApp;