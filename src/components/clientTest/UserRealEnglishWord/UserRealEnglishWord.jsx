import { styled } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Background } from '../../../layout/Background'
import Button from '../../UI/Buttons/Button'
import ProgressBar from '../../UI/progressBar/ProgressBar'
import { useProgressBar } from '../../UI/progressBar/useProgressBar'
import { addTest } from '../../../store/userTest/global-test-slice'

export const UserRealEnglishWord = ({ onClickQuitTest }) => {
   const dispatch = useDispatch()
   const initialState = [
      {
         id: 1,
         options: [
            { id: 1, title: 'twall' },
            { id: 1, title: 'world' },
            { id: 1, title: 'greesey' },
            { id: 1, title: 'cability' },
            { id: 1, title: 'advantage' },
            { id: 1, title: 'uncove' },
         ],
      },
      {
         id: 2,
         title: 'select words and drag here',
         options: [],
      },
   ]
   const duration = 40
   function handleTimeUp() {}
   const { timeObject, chartPercent } = useProgressBar(duration, handleTimeUp)
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
   const handleNext = () => {
      const newTest = {
         id: 3,
         title: 'Next Test Title',
         options: movedItems,
      }

      dispatch(addTest(newTest))
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

   return (
      <GlobalDiv>
         <div className="buttonContainer">
            <Button
               defaultStyle="white"
               hoverStyle="#3A10E5"
               className="logOutButton"
               variant="outlined"
               onClick={onClickQuitTest}
            >
               QUIT TEST
            </Button>
         </div>
         <BackgroundStyle marginTop="10px">
            <ProgressBar timeObject={timeObject} timeProgress={chartPercent} />
            <div className="title">
               Select the real English words in this list
            </div>
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
         </BackgroundStyle>
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

const BackgroundStyle = styled(Background)(() => ({
   minWidth: '62.5vw',
   '.timer': {
      color: '#4C4859',
      fontFamily: 'Poppins',
      fontSize: '32px',
      fontStyle: 'normal',
      fontWeight: '500',
      lineHeight: '24px',
   },
   '.title': {
      marginTop: '15px',
      width: '100%',
      height: '70px',
      borderRadius: '3px',
      alignItems: 'end',
      justifyContent: 'center',
      display: 'flex',
      color: '#4C4859',
      fontFamily: 'Poppins',
      fontSize: '28px',
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: '24px',
   },
}))
const GlobalDiv = styled('div')(() => ({
   height: '100vh',
   background: '#D7E1F8',
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