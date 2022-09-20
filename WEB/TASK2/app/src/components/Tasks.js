import React from "react";
import Task from "./Task";

const Tasks = ({ tasks, deleteItem,completeItem }) => {
  return (
    <div className="py-1">
      {tasks.map((task) => (
        <Task key={task.id} task={task} deleteItem={deleteItem} completeItem={completeItem}></Task>
      ))}
    </div>
  );
};

export default Tasks;
