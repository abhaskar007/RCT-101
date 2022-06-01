import React from 'react'
import { IconButton } from '@chakra-ui/react'

export const Ic = () => {
  return (
    <div>
      <h2>Ic</h2>
      <div>
      <IconButton
  colorScheme='blue'
  aria-label='Search database'
   icon={<SearchIcon />}
/>
      </div>
      </div>
  )
}


