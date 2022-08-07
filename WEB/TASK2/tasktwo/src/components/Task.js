import React from "react";
import { FaTimes } from "react-icons/fa";

const Task = ({ task, deleteItem, completeItem }) => {
  return (
    <div className="row border border-primary m-1" onDoubleClick={() => {completeItem(task.id)}}>
        <div className={`col-1 ${task.completed ? "completedclass" : "notcompletedclass"}`}>_</div>
        <div className="col-11">
          <div className="d-flex justify-content-between pt-1">
            <div>{task.title}</div>
            <div className="px-3">
              <FaTimes
                style={{ color: "red", cursor: "pointer" }}
                onClick={() => deleteItem(task.id)}
              ></FaTimes>
            </div>
          </div>
          <div>hello world -- {task.text}</div>
      </div>
    </div>
  );
};

export default Task;
