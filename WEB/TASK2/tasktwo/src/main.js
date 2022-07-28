import React from 'react'
import Onebutton from './components/oneButton';
import Tasks from './components/Tasks';
import { useState } from 'react'





const onClick = () => {
    console.log('clicked')
}


const main = () => {
const[tasks, setTasks] = useState([ // was removed from here
    {  id: 1, title: 'Task 1', text:"Lorem ipsum dolor" ,completed: false, },
    {  id: 2, title: 'Task 2', text:"ipsum dolor sit" ,completed: false, },
    {  id: 3, title: 'Task 3', text:"Lorem  dolor sit" ,completed: false, },
    {  id: 4, title: 'Task 4', text:"Lorem ipsum  sit" ,completed: false, },
])

const deleteItem = (id) => {
    console.log("delete" + id)
    setTasks(tasks.filter((task) => task.id !== id))
}
  return (
    
  <div style={{backgroundColor:"beige"}}>
    
      <div className="container">
            <div className='container mt-5 d-flex justify-content-around'>
                <Onebutton color="yellow" text="press me easy" onClick={onClick}/>
                <Onebutton color="yellow" text="press me easy" onClick={onClick}/>
            </div>
            <Tasks 
                tasks={tasks}
                deleteItem={deleteItem}
            ></Tasks>
      </div>
  </div>
  )
}



export default main