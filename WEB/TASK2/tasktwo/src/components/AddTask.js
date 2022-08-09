import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";

// datepicker
// import React from 'react'

const AddTask = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [time, setTime] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [startTime, setStartTime] = useState(new Date());

  const [completed, setCompleted] = useState(false);

  return (
    <div className="container">
      <form>
        <div className="mb-1">
          <label htmlFor="taskTitle" className="form-label">
            Task title
          </label>
          <input type="text" className="form-control" id="taskTitle" onChange={(e) => setTitle(e.target.value)}></input>
        </div>
        <div className="mb-1">
          <label htmlFor="taskDescription" className="form-label">
            Task description
          </label>
          <input type="text" className="form-control" id="taskDescription" onChange={(e) => setText(e.target.value)}></input>
        </div>
        <div className="mb-1">
          <label htmlFor="dateTime" className="form-label">
            Date time
          </label>
          <div className="row g-1">
            <div className="col-6">
              <DatePicker
              className="m-0"
               selected={startDate}
                date={""}
                onChange={(date) => setStartDate(date)}
                dateFormat="dd MMMM yyyy"
                showYearDropdown
                scrollableYearDropdown
                yearDropdownItemNumber={35}
                />
            </div>
            <div className="col-6">
              <DatePicker
              className="m-0"
                selected={startTime}
                onChange={(date) => {setStartTime(date)}}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={30}
                timeFormat="HH:mm"
                dateFormat="HH:mm"
                />
            </div>
          </div>
        </div>
        <div className="mb-1 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" onChange={(e) => setCompleted(e.currentTarget.checked)}></input>
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-primary mx-1" onClick={(e) => console.log(e)}>
          Submit
        </button>
        {/* test button */}
        <div type="submit" className="btn btn-primary mx-1" onClick={(e) => console.log(e.target.parentElement[2].value)}>
          Get Date Time Field
        </div>
        <div type="submit" className="btn btn-primary mx-1" onClick={(e) => console.log(e)}>
          Test
        </div>
      </form>
    </div>
  );
};

export default AddTask;
