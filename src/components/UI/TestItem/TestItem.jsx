import React from 'react'
import styled from '@emotion/styled'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { InputRadio } from '../InputRadio'
import Edits from '../../../assets/icons/edit.svg'
import Delete from '../../../assets/icons/delete.svg'
import { createTestActions } from '../../../store/admin/createTestSlice'

export const TestItem = ({ setOpen, test, enableHandler, setDelID }) => {
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const enableTest = useSelector((state) =>
      state.createTestSlice.tests.find((t) => t.id === test.id)
   )

   const updateFn = (id) => {
      dispatch(createTestActions.updatedTestId(id))
      navigate('/admin/tests/update-test')
   }

   const testQuestionsHandler = (id) => {
      dispatch(createTestActions.testID(id))
      navigate(`/admin/tests/questions/${id}`)
   }

   return (
      <ContainerItems>
         <TextBox onClick={() => testQuestionsHandler(test.id)}>
            <p>{test.title}</p>
         </TextBox>
         <div className="radio">
            <InputRadio
               checkedSwitch={enableTest.enable}
               variant="SWITCH"
               onChange={(e) => enableHandler(e, test.id)}
            />
            <Button onClick={() => updateFn(test.id)}>
               <img src={Edits} alt="Изменения" />
            </Button>
            <Button
               onClick={() => {
                  setDelID(test.id)
                  setOpen(Boolean(true))
               }}
            >
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
   ':hover': {
      backgroundColor: '#f8f8f8',
      transitionDuration: '0.6s',
   },
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
      padding: '22px',
   },
   '& .MuiButtonBase-root': {
      minWidth: '0',
      color: '#fff',
   },
   '& img': {
      width: '22px',
   },
}))

const TextBox = styled('div')({
   width: '100%',
   height: '100%',
   padding: '22px',
   cursor: 'pointer',
})
