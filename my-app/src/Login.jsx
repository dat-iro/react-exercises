import { React } from "react"
import { useState } from "react"
import { useLogin } from "./useLogin"

export function Login({func}) {
  const {data, onInput, onLogin, onReset} = useLogin({func: func})

  return (
    <div>
      <form onSubmit={handleLogin}>
        <input name="username" type="text" value={data.username} onChange={handleInput} />
        <input name="password" type="password" value={data.password} onChange={handleInput} />
        <label htmlFor="save">Remember me!</label>
        <input name="save" type="checkbox" checked={data.save} onChange={handleInput} />
        <button disabled={!data.username || !data.password} onClick={handleLogin}>Login</button>
        <button onClick={handleReset}>Reset</button>
      </form>
    </div>
  )
}