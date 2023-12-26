/* eslint-disable jsx-a11y/mouse-events-have-key-events */
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
import { questionsSlice } from '../../store/questions/questionsSlice'
import {
   getOptionByQuestionId,
   getQuestionThunk,
} from '../../store/questions/questionsThunk'

export const Questions = ({ testID }) => {
   const navigate = useNavigate()
   const dispatch = useDispatch()
   const [getId, setGetId] = useState()
   const [openModal, setOpenModal] = useState(false)
   const { questions } = useSelector((state) => state.questionSlice)

   useEffect(() => {
      dispatch(
         questionsSlice.actions.selectedOption('Select real English words')
      )
      dispatch(getTestThunk(testID))
   }, [])

   const handleRadioChange = async (item) => {
      await axiosInstance.put(
         `/questions/updateEnable?questionId=${item.id}`,
         !item.enable
      )
      dispatch(getTestThunk(testID))
   }
   const handleDeleteItem = () => {
      dispatch(deleteQuestion(getId))
      setOpenModal(false)
      setTimeout(() => dispatch(getTestThunk(testID)), 600)
   }
   const handleOpenModal = (id) => {
      setOpenModal(true)
      setGetId(id)
   }
   const handleCloseModal = () => {
      setOpenModal(false)
   }
   const goToCustomForm = () => {
      dispatch(questionsSlice.actions.addTime(null))
      dispatch(questionsSlice.actions.addTitle(''))
      navigate('/admin/tests/create-question')
   }

   const qestionTypes = {
      RECORD_SAYING_STATEMENT: 'Record saying statement',
      SELECT_REAL_ENGLISH_WORD: 'Select real English words',
      LISTEN_AND_SELECT_ENGLISH_WORDS: 'Listen and select English word',
      TYPE_WHAT_YOU_HEAR: 'Type what you hear',
      DESCRIBE_IMAGE: 'Describe image',
      RESPOND_AT_LEAST_N_WORDS: 'Respond in at least N words',
      HIGHLIGHT_THE_ANSWER: 'Highlight the answer',
      SELECT_THE_MAIN_IDEA: 'Select the main idea',
      SELECT_THE_BEST_TITLE: 'Select the best title',
   }

   const editQuestionHandler = (item) => {
      const select = qestionTypes[item.questionType]
      navigate(
         `/admin/tests/update-question/${select
            .toLowerCase()
            .replaceAll(' ', '-')}`
      )
      dispatch(questionsSlice.actions.selectedOption(select))
      dispatch(questionsSlice.actions.setQuestionID(item.id))
      dispatch(getOptionByQuestionId())
      dispatch(getQuestionThunk())
   }

   const columns = [
      {
         id: 'title',
         label: <div style={{ marginLeft: '5.5vw' }}>Name</div>,
      },
      {
         id: 'duration',
         label: <div style={{ marginLeft: '7.7vw' }}>Duration</div>,
      },
      {
         id: 'questionType',
         label: <div style={{ marginLeft: '6.9vw' }}>Question Type</div>,
      },
      {
         id: 'Score',
         render: (item) => {
            return (
               <Container>
                  <InputRadio
                     checkedSwitch={item.enable}
                     variant="SWITCH"
                     value={item.score}
                     onChange={() => handleRadioChange(item)}
                  />
                  <IconBox>
                     <Edits
                        className="Edits"
                        onClick={() => editQuestionHandler(item)}
                     />
                     <TrashCan
                        onClick={() => handleOpenModal(item.id)}
                        className="TrashCan"
                     />
                  </IconBox>
               </Container>
            )
         },
      },
   ]
   return (
      <div>
         <MiniContainer>
            <Button
               hoverStyle="#4E28E8"
               defaultStyle="#3A10E5"
               onClick={goToCustomForm}
            >
               + ADD MORE QUESTIONS
            </Button>
         </MiniContainer>
         <hr />
         <Table data={questions} columns={columns} />
         <MiniContainer2>
            <Button
               onClick={() => navigate('/admin')}
               variant="outlined"
               hoverStyle="#3A10E5"
            >
               Go back
            </Button>
         </MiniContainer2>
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
                     Cancel
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
      </div>
   )
}
const IconBox = styled('div')`
   display: flex;
   flex-direction: row;
   justify-content: center;
   gap: 2rem;
`

const Container = styled('div')`
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 0.5rem;
   .TrashCan {
      cursor: pointer;
   }
   .Edits {
      cursor: pointer;
   }
`
const MiniContainer = styled('div')`
   width: 100%;
   height: 70px;
   display: flex;
   justify-content: end;
   margin-top: 40px;
`
const MiniContainer2 = styled('div')`
   width: 100%;
   display: flex;
   justify-content: end;
   margin-top: 31px;
`
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
