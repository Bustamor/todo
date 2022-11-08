import React, { useState } from 'react'
import Checkbox from './Checkbox'
const Display = ({ allTasks, deleteTask, checkTask }) => {
  
  
  return (
    <fieldset>
      <div>Display
        {
          allTasks.map((task,i) => {
            console.log("task", task, "index", i)
            return <Checkbox 
              move={i} 
              task = {task} 
              deleteTask={deleteTask}
              checkTask={checkTask}
            /> 
          })
        }
      </div>

    </fieldset>
  )
}

export default Display