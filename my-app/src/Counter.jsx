import { useState } from "react";

export function Counter(initialCounter = 0, increment = 1) {
  const [counter, setCounter] = useState(initialCounter)

  function handleCounterIncrement() {
    setCounter((c) => c + increment) /* richiamando la funzione "setter" il parametro deve essere una funzione */
  }

  return (
    <div>
      <h2>{counter}</h2>
      <button onClick={handleCounterIncrement}>Increment</button>
    </div>
  )
}