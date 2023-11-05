import React from "react";
import HelloWorld from "./HelloWorld";
import Message from "./Message";

function App() {
  return (
    <div>
      <HelloWorld />
      <Message /> {/* possiamo fare il render di Message direttamente all'interno del componente App, importando automaticamenete il componenete Message */}
      <Hello /> {/* si, possiamo usare il componente Hello più volte */}
    </div>
  );
}

export default App;