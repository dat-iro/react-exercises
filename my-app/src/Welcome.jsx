import React from "react";
import Age from "./Age";

export function Welcome({ name = "Franco", age }) { /* possiamo assegnare un valore di default a prop name */
  return (
    <div>
      <p>Welcome, <strong>{name}</strong>!</p>
      <Age age={age} />
    </div>
  )
}