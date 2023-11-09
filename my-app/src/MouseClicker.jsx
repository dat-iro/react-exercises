import { React } from "react";

export function MouseClicker({name="one"}) {
  function handleButtonEvent(event) {
    if (event.target.name) {
      console.log(event.target.name)
    } else if (event.target.src) {
      console.log(event.target.src)
    }
  }

  return <button name={name} onClick={handleButtonEvent}><Clicker src="https://cdn.britannica.com/16/234216-050-C66F8665/beagle-hound-dog.jpg" width="24px" alt="" />Clicker</button>
}