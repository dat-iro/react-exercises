import { React, useState } from "react";
import { Welcome } from "./Welcome";

export function InteractiveWelcome() {
  const [name, setName] = useState("")

  function handleInput (event) {
    const value = event.target.value;

    setName(value)
  }
  return (
    <div>
      <input value={name} onChange={handleInput}></input>
      <Welcome name={name} />
    </div>
  )
}