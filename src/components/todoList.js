import React from "react";

function TodoList({ todos, removeTodo }) {
  return (
    <div>
      <ul>
        {todos.map((todo, index) => (
          <li>
            {todo.title} : {todo.description}
            <button onClick={() => removeTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default TodoList;
