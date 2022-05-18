import React, { useState } from 'react'

export const Todo4 = () => {
    let[yyy,setYyy]=useState("");
const[xxx,setXxx]=useState([]);
  return (
    <div>Todo4
        <input  value={yyy} onChange={(e)=>{setYyy(e.target.value)}}/>
        <button onClick={()=>{setXxx([...xxx,{id:Date.now(),value:yyy}])
        setYyy("")}}>Add</button>
       { xxx.map((e)=>(<div key={e.id}>{e.value}</div>))}
    </div>
  )
}
