import React from 'react'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { useState } from 'react';
import setHours from 'date-fns/setHours';
import setMinutes from 'date-fns/setMinutes';

// datepicker
// import React from 'react'

const DatePickerObj = () => {
  const [startDate, setStartDate] = useState(
    setHours(setMinutes(new Date(), 30), 16)
  );
  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      showTimeSelect
      dateFormat="MMMM d, yyyy h:mm aa"
    />
  );
};

const AddTask = () => {

return (

    <div className='container'>
<form>
  <div className="mb-1">
    <label htmlFor="taskTitle" className="form-label">Task title</label>
    <input type="text" className="form-control" id="taskTitle"></input>
  </div>
  <div className="mb-1">
    <label htmlFor="taskDescription" className="form-label">Task description</label>
    <input type="text" className="form-control" id="taskDescription"></input>
  </div>
  <div className="mb-1">
    <label htmlFor="dateTime" className="form-label">Date time</label>
    <DatePickerObj />
    <input type="email" className="form-control" id="dateTime"></input>
  </div>
  <div className="mb-1 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"></input>
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary" 
  onClick={(e) => console.log(e)}

  >Submit</button>
  {/* test button */}
  <div type="submit" className="btn btn-primary"
  onClick={(e) => console.log(e)}
  >Test</div>

  

</form>

</div>
  )

}



export default AddTask