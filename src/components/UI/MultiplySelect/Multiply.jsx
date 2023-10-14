import React, { useState } from 'react'
import { VolumeUp } from '@mui/icons-material'
import CheckIcon from '@mui/icons-material/Check'
import { MultiplySelect } from './MultiplySelect'

export const MyMultiply = () => {
   const [isChecked, setIsChecked] = useState(false)

   const handleCheckClick = () => {
      setIsChecked(!isChecked)
   }
   return (
      <MultiplySelect
         text="Word 1"
         handleCheckClick={handleCheckClick}
         isChecked={isChecked}
         VolumeUp={<VolumeUp />}
         CheckIcon={<CheckIcon />}
      />
   )
}
