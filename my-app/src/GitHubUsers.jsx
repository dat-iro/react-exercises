import { useState } from "react";
import { GitHubUser } from "./GitHubUser";

export function GitHubUsers() {
  const [listElement, setListElement] = useState(["dat-iro"])

  function handleSubmit(event) {
    try {
      event.preventDefault();
      const formData = new FormData(event.target);
      if (!listElement.includes(formData.get("username")))
        setListElement([...listElement, formData.get("username")])
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Inserisci l'username:</label>
        <input type="text" name="username" />
        <button>Search</button>
      </form>
      <ul>
        {listElement.map((element, index) => <li key={index}><GitHubUser username={element}/></li>)}
      </ul>
    </div>
  )
}