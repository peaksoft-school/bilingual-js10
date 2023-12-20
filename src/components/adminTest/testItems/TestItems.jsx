import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Background } from '../../../layout/Background'
import { TestItem } from '../../UI/TestItem/TestItem'
import Button from '../../UI/Buttons/Button'
import { axiosInstance } from '../../../config/axiosInstance'
import { createTestActions } from '../../../store/admin/createTestSlice'
import Notify from '../../UI/Notifay'
import { Modal } from '../../UI/UiModal'
import { CloseIcon, ModalDeleteIcon } from '../../../assets'

export const TestItems = () => {
   const { tests } = useSelector((state) => state.createTestSlice)
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const [open, setOpen] = useState(false)
   const [delID, setDelID] = useState(null)

   const AddNewTestHandler = () => {
      navigate(`/admin/tests/create-test`)
   }

   const getData = async () => {
      const response = await axiosInstance.get('/tests')
      const result = response.data
      dispatch(createTestActions.tests(result))
   }

   const deleteTestHandler = async () => {
      try {
         await Notify(
            {
               sucessTitle: 'Test deleted ',
               successMessage: 'Successfully deleted',
               errorTitle: 'Error',
            },
            axiosInstance.delete(`/tests?testId=${delID}`)
         )
         setOpen(false)
         getData()
      } catch (error) {
         console.log(error)
      }
   }

   const enableHandler = async (e, id) => {
      await Notify(
         {
            sucessTitle: 'Test updated ',
            successMessage: 'Successfully updated',
            errorTitle: 'Error',
         },
         axiosInstance.put(`/tests/updateEnable?testId=${id}`, e.target.checked)
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
                           setOpen={setOpen}
                           setDelID={setDelID}
                           enableHandler={enableHandler}
                        />
                     )
                  })
               ) : (
                  <div>There is nothing here yet</div>
               )}
            </TestItemsContainer>
            {open && (
               <ModalStyle
                  open={open}
                  handleClose={() => setOpen(false)}
                  width="519px"
                  height="368px"
                  borderRadius="20px"
               >
                  <div className="closeIconContainer">
                     <CloseIcon onClick={() => setOpen(false)} />
                  </div>
                  <div className="deleteText">
                     <div>
                        <ModalDeleteIcon />
                     </div>
                     <div>
                        <div className="doYouWantDelete">
                           Do you want delete?{' '}
                        </div>
                        <div>You can not restore this file </div>
                     </div>
                  </div>
                  <div className="buttonBlock">
                     <Button
                        variant="outlined"
                        hoverStyle="#3A10E5E5"
                        onClick={() => setOpen(false)}
                     >
                        Cancel
                     </Button>
                     <Button
                        hoverStyle="#3A10E5E5"
                        onClick={() => deleteTestHandler()}
                     >
                        Delete
                     </Button>
                  </div>
               </ModalStyle>
            )}
         </Background>
      </div>
   )
}

const TestItemsContainer = styled('div')`
   width: 55vw;
   display: flex;
   flex-direction: column;
   row-gap: 15px;
`

const TestButtonContainer = styled('div')`
   width: 55vw;
   display: flex;
   justify-content: end;
   align-items: start;
   height: 70px;
`

const ModalStyle = styled(Modal)`
   overflow: hidden;
   & .closeIconContainer {
      width: 100%;
      display: flex;
      justify-content: end;
      padding: 22px 22px 16px 0;
      & :first-child {
         cursor: pointer;
      }
   }
   & .deleteText {
      width: 100%;
      text-align: center;
      & > :first-child {
         display: flex;
         align-items: center;
         justify-content: center;
         margin: auto;
         background-color: #fbeaea;
         width: 66px;
         height: 66px;
         border-radius: 50px;
         margin-bottom: 50px;
      }
      & .doYouWantDelete {
         color: var(--Dark-grey-font-color, #4c4859);
         font-size: 20px;
         font-style: normal;
         font-weight: 800;
      }
      & .doYouWantDelete + div {
         color: var(--Dark-grey-font-color, #4c4859);
         font-size: 16px;
         font-style: normal;
         font-weight: 400;
      }
   }
   & .buttonBlock {
      background-color: #f0f1f1;
      height: 94px;
      margin-top: 46px;
      border-radius: 0 0 20px 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      column-gap: 16px;
   }
`
