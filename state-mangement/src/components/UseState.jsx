import React, { useState } from 'react'

export const UseState = () => {
    const [state,setState] = useState(false);
    const [value,setValue] = useState(0)
  return (
    <div>UseState
<h1>Fan: {state?"on":"off"}</h1>
<button onClick={()=>{
    setState(!state);
}}>Switch</button>

<h2>Count:{value}</h2>
<button onClick={()=> {
   setValue(prev => prev+1);
   setValue(prev => prev+1);
   setValue(prev => prev+1);
   setValue(prev => prev+1);
   setValue(prev => prev+1);
   setValue(prev => prev+1);
   setValue(prev => prev+1);
}}>Incr</button>

    </div>
  )
}
