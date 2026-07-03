import { useState } from "react";

function TodoNew({ addTodo }) {

    const [text, setText] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        if (!text.trim()) return;

        addTodo(text);

        setText("");
    }

    return (
        <form onSubmit={handleSubmit}>

            <input
                type="text"
                placeholder="Enter Todo"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />

            <button>Add</button>

        </form>
    );
}

export default TodoNew;