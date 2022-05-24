import React from 'react'

export const Child2 = (props) => {
  return (
    <div>
      <input type="text" placeholder='write xyz' onChange={(e)=>props.setChildVal(e.target.value)} />
      Child2:{props.childVal}</div>
  )
}
