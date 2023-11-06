import { React } from "react";
import { Hello } from "./Hello";
import { Message } from "./Message";

export function App() {
  return (
    <div>
      <Hello />
      <Message /> {/* possiamo fare il render di Message direttamente all'interno del componente App, importando automaticamenete il componenete Message */}
      <Hello /> {/* si, possiamo usare il componente Hello più volte */}
    </div>
  );
}
