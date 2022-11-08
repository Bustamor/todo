import React, { useState } from 'react'

const Form = ({ addTask }) => {

  // STATE
  const [task, setTask] = useState("")

  // HANDLER FUNCTIONS
  const taskHandler = (e) => {
    setTask(e.target.value)
    // console.log("change a task")
  }
// SUBMIT
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("adding task: ", task)
    addTask({
      task,
      'isComplete' : false
    })
    setTask("")
    console.log("your stuff is submitted")
  }


  return (

    <fieldset>
      <form onSubmit={submitHandler}>
        <p> <input type="text" value={task} onChange={taskHandler} />
        </p>
        <button>Add Task</button>

      </form>
    </fieldset>
  )


}



export default Form