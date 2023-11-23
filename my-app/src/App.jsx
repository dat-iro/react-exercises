import { React } from "react";
import { Hello } from "./Hello";
import { Message } from "./Message";
import { Welcome } from "./Welcome";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome name="Matteo" />} />
      </Routes>
    </BrowserRouter>
  );
}
