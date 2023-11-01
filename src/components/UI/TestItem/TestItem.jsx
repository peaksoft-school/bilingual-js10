import React from 'react'
import styled from '@emotion/styled'
import { Button } from '@mui/material'
import { InputRadio } from '../InputRadio'
import Edits from '../../../assets/icons/edit.svg'
import Delete from '../../../assets/icons/delete.svg'

export const TestItem = ({ text, onDelete, onEdit, checked }) => {
   return (
      <ContainerItems>
         <p>{text}</p>
         <div className="radio">
            <InputRadio variant="SWITCH" checkedSwitch={checked} />
            <Button onClick={onEdit}>
               <img src={Edits} alt="Изменения" />
            </Button>
            <Button onClick={onDelete}>
               <img src={Delete} alt="Удаления" />
            </Button>
         </div>
      </ContainerItems>
   )
}

const ContainerItems = styled('div')(() => ({
   width: '100%',
   height: '66px',
   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'center',
   borderRadius: '8px',
   background: '#fff',
   border: 'none',
   padding: '22px',
   boxShadow:
      ' 0px 4px 10px 0px rgba(0, 0, 0, 0.066), 0px -4px 10px 0px rgba(0, 0, 0, 0.06)',
   '& .Buttons': {
      display: 'flex',
      alignItems: 'center',
      border: '#fff',
   },
   '& .Switch': {
      width: '32px',
      height: '20px',
   },
   '& .radio ': {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
   },
   '& .MuiButtonBase-root': {
      minWidth: '0',
      color: '#fff',
   },
}))
