import React from 'react'

export const TodoItem = ({value,Delete}) => {

  return (
    <div>
      <li>
        {value}
        <button onClick={()=>{Delete(value)}}>delete</button>
        </li>
    </div>
  )
}
