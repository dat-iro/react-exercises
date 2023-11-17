import { useState } from "react";

export function TodoList() {
  const [todos, setTodos] = useState(["Matteo"]);

  function handleAdd() {
    event.preventDefault();

    const formData = new FormData(event.target)
    const newTodo = formData.get("newTodo")

    if (newTodo) setTodos(t => t = [...t, newTodo])
  }

  return (
    <div>
      <ul>
        {todos.map((todo, index) => <li key={index}>{todo}</li>)}
      </ul>
      <form onSubmit={handleAdd}>
        <input name="newTodo" type="text" />
        <button>Add new Todo</button>
      </form>
    </div>
  )
}