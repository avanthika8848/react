import React, { useEffect, useState } from 'react'

const Timer = () => {
  const [seconds, setSeconds] = useState(0);

    useEffect(() =>{
      const intervel = setInterval(() => {
        setSeconds((s) => s + 1);
        
      }, 1000);

      //setintervel creates a timer that runs every 1000 miliseconds (1 second)

    //cleanup function
    return () => clearInterval(intervel);


    },[]); // empty depandacy - run once on mount
  return (
    <div>
      <p>Timer: {seconds} seconds</p>

    </div>
  )
}

export default Timer