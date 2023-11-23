import { React, useState } from "react";
import { Hello } from "./Hello";
import { Message } from "./Message";
import { Welcome } from "./Welcome";
import { AlertClock } from "./AlertClock";
import { Counter } from "./Counter";
import { Clock } from "./Clock";
import { MouseClicker } from "./MouseClicker";
import { InteractiveWelcome } from "./InteractiveWelcome";
import { Login } from "./Login";
import { UncontrolledLogin } from "./UncontrolledLogin";
import { FocusableInput } from "./FocusableInput";
import { FirstMount } from "./FirstMount";
import { Colors } from "./Colors";
import { TodoList } from "./TodoList";
import { Container } from "./Container";
import { GitHubUser } from "./GitHubUser";
import { ShowGitHubUser } from "./ShowGitHubUser";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export function App() {
  const [selectedLanguage, setSelectedLanguage] = useState("english");

  function handleLanguage(event) {
    setSelectedLanguage(event.target.value)
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="users/:username" element={<ShowGitHubUser />} />
      </Routes>
    </BrowserRouter>
  );
}
