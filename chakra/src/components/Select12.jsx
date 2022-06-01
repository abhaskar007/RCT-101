import React from 'react'
import { Select } from '@chakra-ui/react'
import { Ic } from './Ic'

export const Select12 = () => {
  return (
    <div>
        <h1>Select</h1>
        <Select placeholder='Select option' size="md" variant='filled'>
    <option value='option1' >Option 1</option>
    <option value='option2'>Option 2</option>
    <option value='option3'>Option 3</option>
  </Select>
  <Ic/>
  </div>
  )
}
