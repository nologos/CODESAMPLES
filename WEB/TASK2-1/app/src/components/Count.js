import React from 'react'

const Count = () => {

    const [count, setCount] = React.useState(0);
    const [minute, setMinute] = React.useState(0);
    React.useEffect(() => {
      setTimeout(() => {
        setCount((count) => count + 1);
        setMinute((minute) => Math.floor(count / 60));
      }, 1000);
    }, [count, setCount]);
  

    


  return (
    <div className='container'>
    <h2>I've rendered {count} times!</h2>
    <h3>equivalent of {minute} minutes</h3>

    </div>
  )
}

export default Count