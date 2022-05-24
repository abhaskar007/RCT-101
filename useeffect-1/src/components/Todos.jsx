import React, { useEffect, useState } from 'react'

export const Todos = () => {
    const [todos,setTodo]=useState([]);
    useEffect(()=>{
        fetch("http://localhost:8080/todos")
        .then((r)=>r.json())
        .then((d)=>{
            console.log(d);
        })

    },[])
  return (
    <div>Todos
        <div><input  />
        {todos.map((todo)=>{
            <div></div>
        })}
        </div>
    </div>
  )
}
