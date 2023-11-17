import { React } from "react";

export function MouseClicker({name="one"}) {
  function handleButtonEvent(event) {
    console.log(event.target.name)
  }

  function handleImageEvent(event) {
    console.log(event.currentTarget.src)
  }

  return <button name={name} onClick={handleButtonEvent}><img onClick={handleImageEvent} src="https://cdn.britannica.com/16/234216-050-C66F8665/beagle-hound-dog.jpg" width="24px" alt="" />Click</button>
}