import { React } from "react";
import { Age } from "./Age";

export function Welcome({ name = "Franco", age }) { /* possiamo assegnare un valore di default a prop name */
  return (
    <div>
      <p>Welcome, <strong>{name}</strong>!</p>
      {age > 18 && <Age age={age} />}
      {age && <Age age={age} />}
      {age > 18 && age < 65 && <Age age={age} />}
      {age > 18 && name === "John" && <Age age={age} />}
      {<Age age={age} />}
    </div>
  )
}
