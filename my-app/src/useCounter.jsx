import { useState } from "react";

export function useCounter({initialValue = 0, increment = 1, decrement = 1}) {
  const [counter, setCounter] = useState(initialValue)

  function handleIncrement() {
    setCounter((c) => c + increment)
  }

  function handleDecrement() {
    setCounter((c) => c - decrement)
  }

  function handleReset() {
    setCounter(initialValue)
  }

  return { counter, handleIncrement, handleDecrement, handleReset }
}