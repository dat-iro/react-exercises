import { useState, useEffect, useRef } from "react";
import { CounterDisplay } from "./CounterDisplay";

export function Counter({initialCounter = 0, increment = 1, decrement = 1}) {
  const [counter, setCounter] = useState(initialCounter)
  const direction = useRef(null)

  useEffect(()=> {
    let prevdirection = direction.current
    if (counter > initialCounter) {
        direction.current = "up"
    } else if (counter < initialCounter) {
        direction.current = "down"
    } 

    if (prevdirection != direction.current) console.log(direction.current)
  }, [counter])

  function handleCounterIncrement() {
    setCounter((c) => c + increment)
  }

  function handleCounterDecrement() {
    setCounter((c) => c - decrement)
  }

  function handleCounterReset() {
    setCounter(initialCounter)
  }

  return (
    <div>
      <CounterDisplay count={counter} />
      <button onClick={handleCounterIncrement}>Increment</button>
      <button onClick={handleCounterDecrement}>Decrement</button>
      <button onClick={handleCounterReset}>Reset</button>
    </div>
  )
}