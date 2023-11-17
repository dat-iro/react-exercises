import { useState } from "react";

export function TodoList() {
  const [todos, setTodos] = useState(["Matteo"]);
  const [newTodo, setNewTodo] = useState("");

  function handleAdd() {
    event.preventDefault();

    if(newTodo) setTodos(t => t = [...t, newTodo])
    setNewTodo("")
  }

  function handleRemove(i) {
    setTodos(t => t.filter((el, index) => index != 1))
  }

  function handleInput(event) {
    setNewTodo(event.target.value)
  }

  function handleReset() {
    setTodos([])
  }

  return (
    <div>
      <ul>
        {todos.map((todo, index) => <li key={index}>{todo}<button onClick={() => handleRemove(index)}>Remove</button></li>)}
      </ul>
      <form onSubmit={handleAdd}>
        <input name="newTodo" value={newTodo} type="text" onChange={handleInput} />
        <button>Add new Todo</button>
        <button type="reset" onClick={handleReset}>Reset</button>
      </form>
    </div>
  )
}