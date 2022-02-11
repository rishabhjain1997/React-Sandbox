import React from "react"
import { useState, useEffect, useRef } from "react"

const Todo = () => {
  const [loading, setLoading] = useState(true)
  const [todo, setTodo] = useState({})
  const isMounted = useRef(true)
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos/1"
      )
      const data = await response.json()

      setTimeout(() => {
        if (isMounted.current) {
          setTodo(data)

          setLoading(false)
        }
      }, 3000)
    }

    fetchData()
    // Runs when component is unmounted
    return () => {
      isMounted.current = false
    }
  })

  return loading ? <h3>Loading...</h3> : <h1>{todo.title}</h1>
}

export default Todo
