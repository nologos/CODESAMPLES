import React from 'react'
import './time.css'

const Time = () => {

setInterval(myFunction, 1000);

function myFunction() {
  let d = new Date();
  document.getElementById("datetime").innerHTML=
  d.getHours() + ":" +
  d.getMinutes() + ":" +
  d.getSeconds();
}



  return (
    <div id="datetime" className='timebox'>Time</div>
    
  )
}

export default Time