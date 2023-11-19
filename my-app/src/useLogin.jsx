import { useState } from "react"

function initializeData() {
  return (
    username = "",
    password = "",
    save = false
  )
}

export function useLogin({func}) {
  const [data, setData] = useState(initializeData())

  function handleInput(event) {
    const value = event.target.value;
    const name = event.target.name;
    const checked = event.target.checked;
    const type = event.target.type;

    setData((data) => {
      return {
        ...data,
        [name]: type === "checkbox" ? checked : value
      }
    })
  }

  function handleLogin(event) {
    event.preventdefault()

    const loginData = JSON.stringify(data);
    func(loginData)
  }

  function handleReset() {
    setData(initializeData())
  }

  return (
    data,
    onInput = handleInput,
    onLogin = handleLogin,
    onReset = handleReset
  )
}