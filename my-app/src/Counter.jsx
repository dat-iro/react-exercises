import { useCounter } from "./useCounter";

export function Counter({initialValue = 0, increment = 1, decrement = 1}) {
  const { counter, handleIncrement, handleDecrement, handleReset } = useCounter({initialValue:initialValue, increment:increment, decrement:decrement})

  return (
    <div>
        <CounterDisplay count={counter}/>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleReset}>Reset</button>
    </div>
  )
}