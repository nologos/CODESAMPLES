import React from "react";
import { FaTimes } from "react-icons/fa";

const Task = ({ task,deleteItem }) => {
  return (
    <div className="event test border border-primary m-1">
      <div className="d-flex justify-content-between pt-3">
        <div>{task.title}</div>
        <div className="px-3">
          <FaTimes
            style={{color: "red",cursor: "pointer",}}
            onClick={() => deleteItem(task.id)}
          ></FaTimes>
        </div>
      </div>
      <div>hello world -- {task.text}</div>
    </div>
  );
};

export default Task;
