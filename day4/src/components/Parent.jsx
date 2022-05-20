import React, { useState } from 'react'
import { Child1 } from './Child1'
import { Child2 } from './Child2'

export const Parent = () => {
    const[info,setInfo] = useState("")
  return (
    <div>
        Parents:{info}
        <Child1/>
        <Child2/>
    </div>
  )
}
