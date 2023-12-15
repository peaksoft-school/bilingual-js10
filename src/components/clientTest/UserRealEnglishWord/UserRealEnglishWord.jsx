import { styled } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../../UI/Buttons/Button'
import {
   addTest,
   globalTestSlice,
} from '../../../store/userTest/global-test-slice'
import ProgressBar from '../../UI/progressBar/ProgressBar'
import { useProgressBar } from '../../UI/progressBar/useProgressBar'

export default function UserRealEnglishWord() {
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const { testComponent, questions, currentComponent } = useSelector(
      (state) => state.globalTestSlice
   )

   const initialState = [
      {
         id: 1,
         options: testComponent.optionList,
      },
      {
         id: 2,
         title: 'select words and drag here',
         options: [],
      },
   ]
   const [movedItems, setMovedItems] = useState([])
   const [boards, setBoards] = useState(initialState)
   const [currentBoard, setCurrentBoard] = useState(null)
   const [currentItem, setCurrentItem] = useState(null)
   const isFirstBoard = (board) => boards.indexOf(board) === 0
   const isSecondBoard = (board) => boards.indexOf(board) === 1
   function dragStartHandler(e, board, item) {
      e.target.style.backgroundColor = 'rgb(51, 0, 255)'
      setCurrentBoard(board)
      setCurrentItem(item)
   }
   function dragOverHandler(e) {
      e.preventDefault()
   }
   function dragEnterHandler(e) {
      e.preventDefault()
      e.target.style.backgroundColor = 'rgba(58, 16, 229, 0.10)'
   }
   function dragLeaveHandler(e) {
      e.preventDefault()
      e.target.style.backgroundColor = '#fff'
   }
   function dragEndHandler(e) {
      if (e.target.classList.contains('item')) {
         e.target.style.backgroundColor = '#fff'
      }
   }
   function dropHandler(e, targetBoard, targetItem) {
      e.preventDefault()
      if (currentBoard === targetBoard) {
         const newItems = [...currentBoard.options]
         const currentIndex = newItems.indexOf(currentItem)
         newItems.splice(currentIndex, 1)
         newItems.splice(newItems.indexOf(targetItem), 0, currentItem)
         const newBoards = boards.map((board) => {
            if (board.id === currentBoard.id) {
               board.options = newItems
            }
            return board
         })
         setBoards(newBoards)
      } else {
         const sourceBoard = currentBoard
         const sourceItem = currentItem
         const newSourceItems = [...sourceBoard.options]
         const sourceIndex = newSourceItems.indexOf(sourceItem)
         newSourceItems.splice(sourceIndex, 1)
         const newTargetItems = [...targetBoard.options]
         const targetIndex = newTargetItems.indexOf(targetItem)
         newTargetItems.splice(targetIndex + 1, 0, sourceItem)
         const newBoards = boards.map((board) => {
            if (board.id === sourceBoard.id) {
               board.options = newSourceItems
            } else if (board.id === targetBoard.id) {
               board.options = newTargetItems
            }
            return board
         })
         setBoards(newBoards)
         if (sourceBoard.id === 1 && targetBoard.id === 2) {
            setMovedItems([...movedItems, sourceItem])
         } else if (sourceBoard.id === 2 && targetBoard.id === 1) {
            setMovedItems(
               movedItems.filter((item) => item.id !== sourceItem.id)
            )
         }
      }
   }

   const handleNext = () => {
      const newTest = {
         questionId: testComponent.id,
         optionsId: movedItems.map((el) => {
            return el.id
         }),
      }
      dispatch(addTest(newTest))
      if (questions.length === currentComponent + 1) {
         navigate('/user/send-the-results')
      } else {
         dispatch(globalTestSlice.actions.addCurrentComponent(1))
      }
   }
   function handleTimeUp() {}

   const { duration } = testComponent
   const { timeObject, chartPercent } = useProgressBar(duration, handleTimeUp)

   useEffect(() => {
      if (+timeObject.minute === 0) {
         if (+timeObject.seconds === 0) {
            dispatch(globalTestSlice.actions.addCurrentComponent(1))
         }
      }
   }, [+timeObject.seconds])

   return (
      <GlobalDiv>
         <ProgressBar timeObject={timeObject} timeProgress={chartPercent} />
         <div className="title">Select the real English words in this list</div>
         <Container>
            {boards.map((board) => (
               <Board
                  key={board.id}
                  onDragOver={(e) => dragOverHandler(e)}
                  onDrop={(e) => dropHandler(e, board, null)}
                  isFirstBoard={isFirstBoard(board)}
                  isSecondBoard={isSecondBoard(board)}
                  onDragEnter={(e) => dragEnterHandler(e)}
                  onDragLeave={(e) => dragLeaveHandler(e)}
               >
                  <BoardTitle>
                     {board.options.length === 0 ? board.title : ''}
                  </BoardTitle>
                  {board.options?.map((item) => (
                     <Item
                        key={item.id}
                        onDragStart={(e) => dragStartHandler(e, board, item)}
                        onDragEnd={(e) => dragEndHandler(e)}
                        draggable={Boolean(true)}
                        className="item"
                     >
                        {item.title}
                     </Item>
                  ))}
               </Board>
            ))}
            <div className="nextButtonContainer">
               <Button
                  disabled={
                     movedItems.length === 0 ? Boolean(true) : Boolean(false)
                  }
                  defaultStyle="#3A10E5"
                  hoverStyle="#4E28E8"
                  className="nextButton"
                  onClick={handleNext}
               >
                  next
               </Button>
            </div>
         </Container>
      </GlobalDiv>
   )
}
const Container = styled('div')(() => ({
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'end',
   gap: '5px',
}))
const Board = styled('div')(({ isFirstBoard, isSecondBoard }) => ({
   minWidth: isSecondBoard ? '243px' : '100%',
   minHeight: '20vh',
   border: isFirstBoard ? 'none' : 'dashed 2px lightgray',
   padding: '20px 18px',
   borderRadius: '12px',
   margin: '10px',
   display: 'flex',
   alignItems: 'center',
   rowGap: '0px',
   columnGap: '10px',
   flexWrap: 'wrap',
}))
const BoardTitle = styled('div')(() => ({
   fontSize: '0.90rem',
   fontWeight: '700',
}))
const Item = styled('div')(() => ({
   width: 'fit-content',
   height: '41px',
   textAlign: 'center',
   border: '1.53px solid var(--Grey-INPUT, #D4D0D0)',
   padding: '7px 34px 10px 34px',
   borderRadius: '8px',
   margin: '5px 0',
   fontFamily: 'Poppins',
   fontWeight: '500',
   cursor: 'grab',
   backgroundColor: '#fff',
   '&:hover': {
      border: '1.53px solid var(--3A10E5, #3A10E5)',
   },
   '&:active': {
      backgroundColor: '#3A10E5',
      color: 'white',
   },
}))

const GlobalDiv = styled('div')(() => ({
   '.title': {
      color: '#4C4859',
      fontSize: '1.75rem',
      fontStyle: 'normal',
      display: 'flex',
      justifyContent: 'center',
      marginTop: '2rem',
   },
   height: '100%',
   width: '100%',
   marginTop: '2rem',
   '.buttonContainer': {
      display: 'flex',
      padding: '15px 40px 0 0',
      alignItems: 'center',
      justifyContent: 'end',
      width: '100%',
   },
   '.nextButtonContainer': {
      height: '70px',
      width: '100%',
      borderTop: '2px solid #D4D0D0',
      display: 'flex',
      alignItems: 'end',
      justifyContent: 'end',
      '& Button': {
         width: '143px',
      },
   },
}))
