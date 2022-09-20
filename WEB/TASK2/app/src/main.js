import React from "react";
import Onebutton from "./components/oneButton";
import Tasks from "./components/Tasks";
import { useState } from "react";
import NoTask from "./components/NoTask";
import AddTask from "./components/AddTask";
import { FaTwitch } from "react-icons/fa";




const onClick = (tasks) => {
  console.log("clicked");
  console.log(tasks)
};

const main = () => {
  const startDate = ""
  const [tasks, setTasks] = useState([
    { id: 1, title: "Task 1", text: "Lorem ipsum dolor",date:startDate, completed: false },
    { id: 2, title: "Task 2", text: "ipsum dolor sit", date:startDate, completed: false },
    { id: 3, title: "Task 3", text: "Lorem  dolor sit", date:startDate, completed: false },
    { id: 4, title: "Task 4", text: "Lorem ipsum  sit", date:startDate, completed: false },
  ]);
  console.log(tasks);
  const AddNewTask = (task) => {
    const id = Math.floor(Math.random() * 1000)+1;
    const newTask = {  id, ...task };
    setTasks([...tasks, newTask])
  };

  const deleteItem = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const completeItem = (id) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)));
  };

  return (
    <div style={{ backgroundColor: "beige" }}>
      <div className="d-flex justify-content-center m-4 p-4">
        <FaTwitch size={300} />
      </div>

      <div className="container d-flex justify-content-around p-1">
        <Onebutton color="yellow" text="press me easy" onClick={onClick} />
        <div type="submit" className="btn btn-primary" onClick={onClick}>function btn</div>
        <a href="#122" className="btn border-dark">test</a>
      </div>
      <div className="container">{tasks.length > 0 ? <Tasks tasks={tasks} deleteItem={deleteItem} completeItem={completeItem}></Tasks> : <NoTask></NoTask>}</div>
      <div className="d-flex justify-content-between">
        <AddTask onAdd={AddNewTask}></AddTask>
      </div>
    </div>
  );
};

export default main;
