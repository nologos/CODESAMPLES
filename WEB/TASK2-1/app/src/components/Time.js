import React from 'react'
import './time.css'



const Time = () => {
// display time in the top right corner
    const [time, setTime] = React.useState(new Date().toLocaleTimeString());
    React.useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);
        return () => clearInterval(interval); 
    }, []); 

  return (
    <div className="timebox">{time}</div>
  );
};



export default Time