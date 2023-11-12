import { styled } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { CancelModal, Edits, ModalDeleteIcon, TrashCan } from '../../assets'
import Button from '../../components/UI/Buttons/Button'
import { InputRadio } from '../../components/UI/InputRadio'
import { Modal } from '../../components/UI/UiModal'
import { Table } from '../../components/table/Table'
import { axiosInstance } from '../../config/axiosInstance'
import { deleteQuestion, getTestThunk } from '../../store/admin/QuestionsSlice'
import { Background } from '../../layout/Background'

export const Questions = ({ testID }) => {
   const dispatch = useDispatch()
   const [getId, setGetId] = useState()
   const [openModal, setOpenModal] = useState(false)
   const { questions } = useSelector((state) => state.questionSlice)

   useEffect(() => {
      dispatch(getTestThunk(testID))
   }, [])

   const handleRadioChange = async (item) => {
      try {
         console.log(item.id)
         await axiosInstance.put(
            `/questions/updateEnable?questionId=${item.id}`,
            !item.enable
         )
         dispatch(getTestThunk(testID))
      } catch (error) {
         console.log(error)
      }
   }
   const handleDeleteItem = () => {
      dispatch(deleteQuestion(getId))
      setOpenModal(false)
      setTimeout(() => dispatch(getTestThunk(testID)), 300)
      dispatch(getTestThunk(testID))
   }
   const handleOpenModal = (id) => {
      setOpenModal(true)
      setGetId(id)
   }
   const handleCloseModal = () => {
      setOpenModal(false)
   }
   const StyledLabel = styled('span')`
      color: #fff;
   `
   const navigate = useNavigate()
   const goToCustomForm = () => {
      navigate('admin/customForm')
   }
   const columns = [
      { id: 'row_number', label: '#' },
      {
         id: 'title',
         label: 'Name',
      },
      {
         id: 'duration',
         label: 'Duration',
      },
      {
         id: 'questionType',
         label: 'Question Type',
      },
      {
         id: 'Score',
         label: <StyledLabel>ffffffffffffff</StyledLabel>,
         render: (item) => {
            return (
               <Container>
                  <InputRadio
                     checkedSwitch={item.enable}
                     variant="SWITCH"
                     value={item.score}
                     onChange={() => handleRadioChange(item)}
                  />
                  <Edits />
                  <TrashCan onClick={() => handleOpenModal(item.id)} />
               </Container>
            )
         },
      },
   ]
   return (
      <Background maxWidth="1200px">
         <div>
            <Button
               hoverStyle="#4E28E8"
               defaultStyle="#3A10E5"
               onClick={goToCustomForm}
            >
               + ADD MORE QUESTIONS
            </Button>
         </div>
         <Table data={questions} columns={columns} />
         <div>
            <Button
               onClick={() => navigate(-1)}
               variant="outlined"
               hoverStyle="#3A10E5"
            >
               Go back
            </Button>
         </div>
         <Modal
            open={openModal}
            handleCloseModal={handleCloseModal}
            width="32rem"
            height="23rem"
         >
            <div>
               <ClosedModal>
                  <CancelModal onClick={handleCloseModal} />
               </ClosedModal>
               <ModalDeleteStyled>
                  <div>
                     <ModalDeleteIcon onClick={handleCloseModal} />
                  </div>
               </ModalDeleteStyled>
               <ModalContainerStyled>
                  <h3>Do you want delete? </h3>
                  <p>You can not restore this file </p>
               </ModalContainerStyled>
               <ModalContainer>
                  <Button
                     variant="outlined"
                     hoverStyle="#3A10E5"
                     onClick={handleCloseModal}
                  >
                     Cencel
                  </Button>
                  <Button
                     hoverStyle="#4E28E8"
                     defaultStyle="#3A10E5"
                     onClick={handleDeleteItem}
                  >
                     Delete
                  </Button>
               </ModalContainer>
            </div>
         </Modal>
      </Background>
   )
}
const Container = styled('div')`
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 0.5rem;
`
// const MiniContainer = styled('div')`
//    width: 80rem;
//    height: 31.25rem;
//    background-color: #fff;
//    div {
//       display: flex;
//       justify-content: flex-end;
//       button {
//          margin-right: 9rem;
//          margin-top: 1rem;
//       }
//    }
// `
const ModalDeleteStyled = styled('div')`
   display: flex;
   align-items: center;
   justify-content: center;
   color: #fff;
   margin-top: 3rem;
   div {
      width: 4rem;
      height: 4rem;
      border-radius: 3.125rem;
      background-color: #fbeaeb;
      display: flex;
      align-items: center;
      justify-content: center;
   }
`
const ClosedModal = styled('div')`
   display: flex;
   justify-content: end;
   align-items: center;
   margin-right: 1.38rem;
   margin-top: 1.38rem;
`
const ModalContainerStyled = styled('div')`
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
   gap: 0.5rem;
   margin-top: 3.19rem;
   h3 {
      color: #4c4859;
   }
   P {
      color: #4c4859;
   }
`
const ModalContainer = styled('div')`
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 1rem;
   margin-top: 3rem;
   border-radius: 0.625rem;
   width: 32rem;
   height: 5.875rem;
   background-color: #f0f1f1;
`
