import React from "react"
import { useState, useEffect, useRef } from "react"

const UseRefExample2 = () => {
  const [name, setName] = useState("")
  const renders = useRef(1)
  const prevName = useRef("")
  useEffect(() => {
    renders.current = renders.current + 1
    prevName.current = name
  }, [name])

  return (
    <div>
      <h1>Renders: {renders.current}</h1>
      <h2>Prev Name State: {prevName.current}</h2>
      <input
        className="input input-bordered"
        value={name}
        onChange={(e) => {
          setName(e.target.value)
        }}
        type="text"
        placeholder="Name"
      ></input>
    </div>
  )
}

export default UseRefExample2
