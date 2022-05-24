import React, { useState } from 'react'

export const Child1 = (props) => {


  return (
    <div>
      {/* <input onChange={(e)=>props.setChildVal(e.target.value)}/> */}
      Child1
      <span>Information : {props.childval}</span>
      </div>
    
  )
}
