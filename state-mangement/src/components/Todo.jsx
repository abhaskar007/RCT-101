import React from 'react'
import { useState } from 'react';

export const Todo = () => {
    const [text, setText] =useState();
  const [user,setUser] = useState([]);

  const handleChange = (event) => {
      setText(event.target.value)
  }
  const handleAdd = ()=> {
      setUser([...user,text])
  }
  return (
    <div>Todo: {text}

        <input placeholder='Enter name'/>
        <button onClick={handleAdd}>ADD</button>
    </div>
  )
}
