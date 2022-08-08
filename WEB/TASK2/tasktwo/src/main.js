import React from "react";
import Onebutton from "./components/oneButton";
import Tasks from "./components/Tasks";
import { useState } from "react";
import NoTask from "./components/NoTask";
import AddTask from "./components/AddTask";


const onClick = () => {
  console.log("clicked");
};

const main = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Task 1", text: "Lorem ipsum dolor", completed: false },
    { id: 2, title: "Task 2", text: "ipsum dolor sit", completed: false },
    { id: 3, title: "Task 3", text: "Lorem  dolor sit", completed: false },
    { id: 4, title: "Task 4", text: "Lorem ipsum  sit", completed: false },
  ]);

  const deleteItem = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const completeItem = (id) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)));
  };

  return (
    <div style={{ backgroundColor: "beige" }}>
      <div className="container d-flex justify-content-around p-1">
        <Onebutton color="yellow" text="press me easy" onClick={onClick} />
        <Onebutton color="yellow" text="press me easy" onClick={onClick} />
      </div>
      <div className="container">{tasks.length > 0 ? <Tasks tasks={tasks} deleteItem={deleteItem} completeItem={completeItem}></Tasks> : <NoTask></NoTask>}</div>
      <div className="d-flex justify-content-between">
        <AddTask 

            
        ></AddTask>
      </div>
    </div>
  );
};


export default main;
