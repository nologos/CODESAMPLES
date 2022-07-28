import React from 'react'
import Task from './Task'



const Tasks = ({tasks, deleteItem}) => {
  return (
  <div>
  {tasks.map((task) => (
    
    <Task
      key={task.id} task={task} deleteItem={deleteItem} 
    ></Task>
    ))}        
  </div>
  )
}

export default Tasks