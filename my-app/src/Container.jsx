import { useState, useRef } from "react";
import classes from "./container.module.css"


export function Container({children, title}) {
  const [show, setShow] = useState(true)

  return (
    <div className={classes.container}>
      <h3 onClick={() => setShow(!show)}>{title}</h3>
      {show && <div>{children}</div>}
    </div>
  )
}