import { React } from "react";

export function Welcome({ name = "Franco" }) { /* possiamo assegnare un valore di default a prop name */
  return <p>Welcome, {name}!</p>
}
