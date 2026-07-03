import Todoitem from "./Todoitems";

function TodoList({
    todos,
    deleteTodo,
    toggleTodo,
    editTodo,
}) {

    return (
        <div>

            {
                todos.map(todo => (

                    <Todoitem
                        key={todo.id}
                        todo={todo}
                        deleteTodo={deleteTodo}
                        toggleTodo={toggleTodo}
                        editTodo={editTodo}
                    />

                ))
            }

        </div>
    );
}

export default TodoList;