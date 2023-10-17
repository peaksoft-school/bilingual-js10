import React, { useState } from 'react'
import { useDrag, useDrop } from 'react-dnd'
import { Answer } from './Answer'

export const answersArr = [
   { id: 1, title: 'hello' },
   { id: 2, title: 'rinat' },
   { id: 3, title: '17' },
   { id: 4, title: 'thank you' },
   { id: 5, title: 'bye' },
   { id: 6, title: 'elephant' },
   { id: 7, title: 'mountain' },
]

export const DragAndDrop = () => {
   const [answers, setAnswers] = useState(answersArr)
   const [result, setResult] = useState(answersArr)

   const [{ isOver }, addToResultRef] = useDrop({
      accept: 'answer',
      collect: (monitor) => ({
         isOver: !!monitor.isOver(),
      }),
   })

   const [{ isOver: isResultOpen }, removeFromResultRef] = useDrop({
      accept: 'result',
      collect: (monitor) => ({
         isOver: !!monitor.isOver(),
      }),
   })

   return (
      <div>
         <div>
            <ul ref={removeFromResultRef}>
               {answers.map((answer, idx) => (
                  <Answer
                     {...answer}
                     key={answer.id}
                     index={idx}
                     anwerType="answer"
                     onDropPlayer={}
                  />
               ))}
            </ul>
         </div>
         <div>
            <ul ref={addToResultRef}></ul>
         </div>
      </div>
   )
}
