import React, { useState } from 'react'

function msToTime(duration) {
    var milliseconds = Math.floor((duration % 1000) / 100),
      seconds = Math.floor((duration / 1000) % 60),
      minutes = Math.floor((duration / (1000 * 60)) % 60),
      hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
  
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
  
    return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
  }
export default function Stopwatch() {
    const [timerid,setTimerid] = useState(null);
    const [watch, setWatch]= useState(1000);

    

    const start = ()=> {
        if(!timerid)
        {
            let id =   setInterval(()=>{
                setWatch((prev)=>prev+1000)
            },100);
            setTimerid(id);
        }
    
    };
    const wait = ()=> {
        clearInterval(timerid)
    };
    const reset = ()=> {
        clearInterval(timerid);
        setWatch(0)
    };

  return (
    <div>
       <h2> Stopwatch :</h2>
       <h1> {msToTime(watch)}</h1>
   
    <div>
    <button onClick={start}>Start</button>
    <button onClick={wait}>Pause</button>
    <button onClick={reset}>reset</button>
    </div>
   
    </div>

  )
}
