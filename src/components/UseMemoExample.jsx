import React, { useEffect, useState, useRef, useMemo } from "react"

const UseMemoExample = () => {
  const [number, setNumber] = useState(1)
  const [inc, setInc] = useState(0)
  const sqrt = useMemo(() => getSqrt(number), [number])
  const renders = useRef(1)
  useEffect(() => {
    renders.current = renders.current + 1
  })
  const onClick = (e) => {
    setInc((prevState) => {
      console.log(prevState)
      return prevState + 1
    })
  }
  return (
    <div>
      <input
        type="number"
        value={number}
        className="w-25 input input-bordered"
        onChange={(e) => setNumber(e.target.value)}
      />
      <h2 className="my-3">
        The sqrt of {number} is {sqrt}
      </h2>
      <h3>Renders: {renders.current}</h3>
      <button className="btn btn-primary" onClick={onClick}>
        Re-render
      </button>
    </div>
  )
}

const getSqrt = (n) => {
  for (let i = 0; i < 10000; i++) {
    console.log(i)
  }
  return Math.sqrt(n)
}

export default UseMemoExample
