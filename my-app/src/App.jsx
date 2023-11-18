import { React } from "react";
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

export function App() {
  function handleCurrentTime() {
    const time = new Date();
    alert(`Current time is: ${time.toLocaleTimeString()}`)
  }

  function onLogin(data) {
    console.log('Login data:', data)
  }

  const persons = [
    { name: "Alice", key: "abc" },
    { name: "Bob", key: "def" },
    { name: "Charlie", key: "ghi" },
    { name: "David", key: "jkl" },
    { name: "Eve", key: "mno" }
  ];

  return (
    <div>
      <LanguageContext.Provider value={selectedLanguage}>
        <div>
          <label>Select Language</label>
          <select value={selectedLanguage} onChange={handleLanguage}>
            <option value="english">English</option>
            <option value="italiano">Italiano</option>
          </select>
        </div>
        <Clock />
      </LanguageContext.Provider>
    </div>
  );
}
