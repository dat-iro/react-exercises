import React from "react";

export function Welcome({ name = "Franco", age }) { /* possiamo assegnare un valore di default a prop name */
  return (
    <div>
      <p>Welcome, <strong>{name}</strong>!</p>
      <p>Your age is {age}</p>
    </div>
  )
}