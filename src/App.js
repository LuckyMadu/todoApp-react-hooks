import React, { useState } from "react";
import "./App.css";
import TodoList from "./components/todoList";

function App() {
  const [todos, setTodos] = useState([
    {
      title: "post 01",
      description: "post 01 description"
    },
    {
      title: "post 02",
      description: "post 02 description"
    },
    {
      title: "post 03",
      description: "post 03 description"
    }
  ]);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = e => {
    e.preventDefault();

    const newTodo = {
      title,
      description
    };

    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
    setTitle("");
    setDescription("");
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <div>
        <div>
          <h1>TODO APP</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="Title">Title</label>
            <input
              type="text"
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
            <br />
            <label htmlFor="Description">Description</label>
            <input
              type="text"
              value={description}
              onChange={e => setDescription(e.target.value)}
            />
            <br />
            <input type="submit" value="SUBMIT" />
          </form>
        </div>
        <div>
          <TodoList todos={todos} removeTodo={index => removeTodo(index)} />
        </div>
      </div>
    </div>
  );
}

export default App;
