import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Background } from '../../../layout/Background'
import { TestItem } from '../../UI/TestItem/TestItem'
import Button from '../../UI/Buttons/Button'
import { axiosInstance } from '../../../config/axiosInstance'
import { createTestActions } from '../../../store/admin/createTestSlice'
import Notify from '../../UI/Notifay'

export const TestItems = () => {
   const { tests } = useSelector((state) => state.createTestSlice)
   const dispatch = useDispatch()
   const navigate = useNavigate()

   const AddNewTestHandler = () => {
      navigate(`/admin/create-test`)
   }

   const getData = async () => {
      const response = await axiosInstance.get('/tests')
      const result = response.data
      dispatch(createTestActions.tests(result))
   }

   const deleteTestHandler = async (testID) => {
      Notify(
         {
            sucessTitle: 'Test deleted ',
            successMessage: 'Successfully deleted',
            errorTitle: 'Error',
         },
         axiosInstance.delete(`/tests?testId=${testID}`)
      )
      setTimeout(() => {
         getData()
      }, 500)
   }

   const enableHandler = async (e, id) => {
      await axiosInstance.put(
         `/tests/updateEnable?testId=${id}`,
         e.target.checked
      )
      getData()
   }

   useEffect(() => {
      getData()
   }, [])
   return (
      <div>
         <Background>
            <TestButtonContainer>
               <Button
                  className="addNewTestButton"
                  defaultStyle="#3A10E5"
                  hoverStyle="#3A10E5E5"
                  onClick={AddNewTestHandler}
               >
                  add new test
               </Button>
            </TestButtonContainer>
            <TestItemsContainer>
               {tests.length > 0 ? (
                  tests.map((test) => {
                     return (
                        <TestItem
                           key={test.id}
                           test={test}
                           onDelete={deleteTestHandler}
                           enableHandler={enableHandler}
                        />
                     )
                  })
               ) : (
                  <div>There is nothing here yet</div>
               )}
            </TestItemsContainer>
         </Background>
      </div>
   )
}

const TestItemsContainer = styled('div')`
   width: 58.5vw;
   display: flex;
   flex-direction: column;
   row-gap: 15px;
`

const TestButtonContainer = styled('div')`
   width: 58.5vw;
   display: flex;
   justify-content: end;
   align-items: start;
   height: 70px;
`
