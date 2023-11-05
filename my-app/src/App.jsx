import React from "react";
import HelloWorld from "./HelloWorld";
import Message from "./Message";
import Welcome  from "./Welcome";

function App() {
  return (
    <div>
      <HelloWorld />
      <Message /> {/* possiamo fare il render di Message direttamente all'interno del componente App, importando automaticamenete il componenete Message */}
      <HelloWorld /> {/* si, possiamo usare il componente HelloWorld più volte */}
      <Welcome name="Matteo" age={23} />
      <Welcome age={25} /> {/* se nessun prop name viene passato al componente Welcome otterremo undefined */}
    </div>
  );
}

export default App;