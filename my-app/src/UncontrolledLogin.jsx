import { React } from "react"

export function UncontrolledLogin() {
  function handleSubmit(event) {
      event.preventDefault()

      const username = event.target.elements.namedItem("username").value;
      const password = event.target.elements.namedItem("password").value
      const save = event.target.elements.namedItem("save").checked


      console.log({
          username,
          password,
          save
      })
  }

  return (
      <form onSubmit={handleSubmit}>
          <input name="username" type="text" />
          <input name="password" type="password" />
          <input type="checkbox" name="save" id="save" />
          <button >Submit</button>
          <button type="reset">Reset</button>
      </form>
  )
}