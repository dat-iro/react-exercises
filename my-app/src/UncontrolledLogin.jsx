import { React } from "react"

export function UncontrolledLogin() {
  function handleSubmit(event) {
      event.preventDefault()

      const formData = new FormData(event.target)

      console.log({
          username: formData.get("username"),
          password: formData.get("password"),
          save: formData.get("save") === "on" ? true : false
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