import { React, useEffect, useRef, useState } from "react"

export function FirstMount() {
  const firstMount = useRef(true)

  useEffect(() => {
      if(firstMount.current) {
          console.log("Mounted for the first time")
          firstMount.current = false
      }
  }, [])

  return (
    <>
    </>
  )
}