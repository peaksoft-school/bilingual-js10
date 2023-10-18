import { styled } from '@mui/material'
import React, { useState } from 'react'

const initialState = [
   {
      id: 1,
      items: [
         { id: 1, title: 'hello' },
         { id: 2, title: 'agay' },
         { id: 3, title: 'my' },
         { id: 4, title: 'name' },
         { id: 5, title: 'is' },
         { id: 6, title: 'rinat' },
      ],
   },
   {
      id: 2,
      title: 'select words and drag here',
      items: [],
   },
]

const DragAndDrop = () => {
   const [boards, setBoards] = useState(initialState)
   const [currentBoard, setCurrentBoard] = useState(null)
   const [currentItem, setCurrentItem] = useState(null)
   const [result, setResult] = useState([])

   const isFirstBoard = (board) => boards.indexOf(board) === 0
   const isSecondBoard = (board) => boards.indexOf(board) === 1

   function dragStartHandler(e, board, item) {
      setCurrentBoard(board)
      setCurrentItem(item)
   }

   function dragOverHandler(e) {
      e.preventDefault()
   }
   function dragEnterHandler(e) {
      e.preventDefault()
      e.target.style.backgroundColor = 'rgba(58, 16, 229, 0.10)'
      setResult([...result, ])
   }
   function dragLeaveHandler(e) {
      e.preventDefault()
      e.target.style.backgroundColor = '#fff'
   }

   function dragEndHandler(e) {
      if (e.target.classList.contains('item')) {
         e.target.style.boxShadow = 'none'
         e.target.style.backgroundColor = '#fff'
      }
   }

   function dropHandler(e, targetBoard, targetItem) {
      e.preventDefault()
      if (currentBoard === targetBoard) {
         const newItems = [...currentBoard.items]
         const currentIndex = newItems.indexOf(currentItem)
         newItems.splice(currentIndex, 1)
         newItems.splice(newItems.indexOf(targetItem), 0, currentItem)

         const newBoards = boards.map((board) => {
            if (board.id === currentBoard.id) {
               board.items = newItems
            }
            return board
         })
         setBoards(newBoards)
      } else {
         const sourceBoard = currentBoard
         const sourceItem = currentItem

         const newSourceItems = [...sourceBoard.items]
         const sourceIndex = newSourceItems.indexOf(sourceItem)
         newSourceItems.splice(sourceIndex, 1)

         const newTargetItems = [...targetBoard.items]
         const targetIndex = newTargetItems.indexOf(targetItem)
         newTargetItems.splice(targetIndex + 1, 0, sourceItem)

         const newBoards = boards.map((board) => {
            if (board.id === sourceBoard.id) {
               board.items = newSourceItems
            } else if (board.id === targetBoard.id) {
               board.items = newTargetItems
            }
            return board
         })
         setBoards(newBoards)
      }
   }

   return (
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
                  {board.items.length === 0 ? board.title : ''}
               </BoardTitle>
               {board.items.map((item) => (
                  <Item
                     key={item.id}
                     onDragStart={(e) => dragStartHandler(e, board, item)}
                     onDragEnd={(e) => dragEndHandler(e)}
                     // eslint-disable-next-line react/jsx-boolean-value
                     draggable={true}
                     className="item"
                  >
                     {item.title}
                  </Item>
               ))}
            </Board>
         ))}
      </Container>
   )
}

const Container = styled('div')(() => ({
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'end',
   gap: '30px',
}))

const Board = styled('div')(({ isFirstBoard, isSecondBoard }) => ({
   minWidth: isSecondBoard ? '243px' : '100vw',
   minHeight: '20vh',
   border: isFirstBoard ? 'none' : 'dashed 2px lightgray',
   padding: '20px 18px',
   borderRadius: '12px',
   margin: '10px',
   display: 'flex',
   alignItems: 'center',
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

export default DragAndDrop
