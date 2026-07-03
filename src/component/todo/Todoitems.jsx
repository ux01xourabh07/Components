import { useState } from "react";

function Todoitem({
    todo,
    deleteTodo,
    toggleTodo,
    editTodo,
}) {

    const [isEdit, setIsEdit] = useState(false);

    const [newText, setNewText] = useState(todo.text);

    function save() {
        editTodo(todo.id, newText);

        setIsEdit(false);
    }

    return (
        <div>

            <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
            />

            {
                isEdit ? (

                    <input
                        value={newText}
                        onChange={(e) => setNewText(e.target.value)}
                    />

                ) : (

                    <span
                        style={{
                            textDecoration: todo.completed
                                ? "line-through"
                                : "none",
                        }}
                    >
                        {todo.text}
                    </span>

                )
            }

            {
                isEdit ? (
                    <button onClick={save}>
                        Save
                    </button>
                ) : (
                    <button onClick={() => setIsEdit(true)}>
                        Edit
                    </button>
                )
            }

            <button onClick={() => deleteTodo(todo.id)}>
                Delete
            </button>

        </div>
    );
}

export default Todoitem;