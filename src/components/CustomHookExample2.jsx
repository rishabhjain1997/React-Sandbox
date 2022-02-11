import React, { useState } from "react"
import useLocalStorage from "../hooks/useLocalStorage"

const CustomHookExample2 = () => {
  const [task, setTask] = useLocalStorage("task", "")
  const [tasks, setTasks] = useLocalStorage("tasks", [])
  const onSubmit = (e) => {
    e.preventDefault()
    const taskObj = {
      task,
      completed: false,
      date: new Date().toLocaleDateString(),
    }
    setTasks([...tasks, taskObj])
  }
  return (
    <>
      <form onSubmit={onSubmit}>
        <div className="form-control max-w-2xl mb-8">
          <label className="label">
            <span className="label-text">Task</span>
          </label>
          <input
            type="text"
            className="input input-bordered"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
        </div>
        <input type="submit" className="btn btn-primary" />
      </form>
      <div className="mt-5">
        {tasks.map((task) => {
          return <h3>{task.task}</h3>
        })}
      </div>
    </>
  )
}

export default CustomHookExample2
