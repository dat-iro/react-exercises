import { React } from "react"
import { Color } from "./Color"

export function Colors({arr}) {
  return (
    <ul>
        {arr.map((obj) => <Color key={obj.key} obj={obj}/>)}
    </ul>
  )
}