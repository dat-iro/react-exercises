import {  React, useEffect } from "react"
import { useRef } from "react"

export function FocusableInput() {
  const ref = useRef(null);

  useEffect(() => {
      ref.current?.focus()
  }, [])

return (
  <input ref={ref} type="text" />
)
}