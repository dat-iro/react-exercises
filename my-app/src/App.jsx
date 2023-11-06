import { React } from "react";
import { Hello } from "./Hello";
import { Message } from "./Message";
import { Welcome } from "./Welcome";

export function App() {
  return (
    <div>
      <Hello />
      <Message /> {/* possiamo fare il render di Message direttamente all'interno del componente App, importando automaticamenete il componenete Message */}
      <Hello /> {/* si, possiamo usare il componente HelloWorld più volte */}
      <Welcome name="Matteo" age={23} />
      <Welcome age={25} /> {/* se nessun prop name viene passato al componente Welcome otterremo undefined */}
    </div>
  );
}
