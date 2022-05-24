import React, { useState } from 'react'
import { Child1 } from './Child1'
import { Child2 } from './Child2'

export const Parent = () => {

    const[childVal,setChildVal] = useState("");
    
  
  return (
    <div>
      <input onChange={(e)=>setChildVal(e.target.value)}/>
        Parents: {childVal}
        <Child1 childVal={childVal} />
        childVal1: {childVal}
       
        <Child2  setChildVal={setChildVal} childVal={childVal}/>

    </div>
  )
}
