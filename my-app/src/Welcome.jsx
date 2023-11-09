import { React } from "react";

export function Welcome({ name = "Franco", age }) {
  return (
    <div>
      <p>Welcome, <strong>{name}</strong>!</p>
      <p>Your age is {age}</p>
    </div>
  )
}
