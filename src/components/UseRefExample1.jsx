import React from "react"
import { useRef } from "react"
const UseRefExample1 = () => {
  const inputRef = useRef()
  const onSubmit = (e) => {
    e.preventDefault()
    console.log(inputRef.current.value)
    inputRef.current.value = "Hello"
    inputRef.current.style.backgroundColor = "red"
    paraRef.current.innerText = "goodbye"
  }
  const paraRef = useRef()

  return (
    <form className="form-control" onSubmit={onSubmit}>
      <label className="label" htmlFor="name">
        <span className="label-text">Username</span>
      </label>
      <input
        className="input input-bordered"
        id="name"
        type="text"
        placeholder="Name"
        ref={inputRef}
      ></input>
      <button className="btn btn-primary mt-5 w-32 mr-auto" type="submit">
        Sign In
      </button>
      <p onClick={() => inputRef.current.focus()} ref={paraRef}>
        Hello
      </p>
    </form>
  )
}

export default UseRefExample1
