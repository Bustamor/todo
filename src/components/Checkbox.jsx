import React, {useState} from 'react'

const Checkbox = ({task, checkTask, deleteTask, move}) => {
    console.log (checkTask)
    return (
        <div style={{border:"solid", borderColor:"black", borderWidth:"2px"}}>
            <div style={task.isComplete ? {color: "red"}: {color: "black"} }>                
            {task.task} {""}
                <button onClick={() => deleteTask(move)} style={{color: "red"}}>Delete</button>
                <input  onChange={()=> checkTask(move)} checked={task.isComplete} type="checkbox" />
            </div>
        </div>
    )
}

export default Checkbox