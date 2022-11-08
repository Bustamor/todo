import './App.css';
import Display from './components/Display';
import Form from './components/Form';

import React, { useState } from 'react'

function App() {

  // STATE
  const [allTasks, setAllTasks] = useState([])

  // ADD A TASK
  const addTask = (newtask) => {
    setAllTasks([newtask, ...allTasks])
  }
  // DElETE A TASK
  const deleteTask = (index) => {
    console.log("delete task invoked")
    const filteredTasks = allTasks.filter((task, idx) => idx !== index)
    console.log("oh noes")
    setAllTasks(filteredTasks)
  }
  
  // UPDATE CHECKABOX
  const checkTask = (index) => {
    console.log(index)
    const updatedTasks = allTasks.map((t, idx)=>{
      if (index === idx){
        t.isComplete = !t.isComplete
      }
      return t
    })
    setAllTasks(updatedTasks)
  }

  // HOW DO I CREATE INSTRUCTIONS?  DOES THIS GET MADE IN A CHECKBOX COMPONENT?  

  return (
    <fieldset>
      <legend> App.jsx </legend>

      <Form addTask={addTask} />
      <Display
        allTasks={allTasks}
        deleteTask={deleteTask}
        checkTask={checkTask}
      />
    </fieldset>
  );
}

export default App
