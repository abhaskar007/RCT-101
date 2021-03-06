import React, { useState } from 'react'
// import {Todoitems  } from "./Todoitems";
import styles from './todo.module.css'

export const TodoList = ({el}) => {
  const[isCompleted,setIsCompleted]=useState(el.isCompleted)
  return (
    <div   >
        <div style={{display:"flex",justifyContent:"space-between"}} key={el.id}>
        <div key={el.id}>{ el.value }</div>
            <div style={{backgroundColor:"grey",width:"15px",height:"15px",borderRadius:"50%",border:"7px solid purple"}}   
            checked={isCompleted}
            onChange={(e)=>{
                console.log(e);
                setIsCompleted(e.target.checked)
            }}></div>
            
        </div>
       
        
    </div>
  );
};
