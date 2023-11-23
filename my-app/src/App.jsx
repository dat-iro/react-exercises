import { React } from "react";
import { Hello } from "./Hello";
import { Message } from "./Message";
import { Welcome } from "./Welcome";
import { AlertClock } from "./AlertClock";
import { Counter } from "./Counter";

export function App() {
  function handleCurrentTime() {
    const time = new Date();
    alert(`Current time is: ${time.toLocaleTimeString()}`)
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/counter" element={<Counter />} />
      </Routes>
    </BrowserRouter>
  );
}
