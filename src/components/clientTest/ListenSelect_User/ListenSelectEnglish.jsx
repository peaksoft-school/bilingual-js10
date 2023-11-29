import React, { useState } from 'react'
import styled from 'styled-components'
import { useProgressBar } from '../../UI/progressBar/useProgressBar'
import ProgressBar from '../../UI/progressBar/ProgressBar'
import { MultiplySelect } from '../../UI/MultiplySelect/MultiplySelect'
import { Background } from '../../../layout/Background'
import Button from '../../UI/Buttons/Button'

export const ListenSelectEnglish = ({
   words = [
      {
         id: 1,
         title: 'LASEW',
         isTrue: false,
         audioUrl:
            'https://billingual-10.s3.eu-central-1.amazonaws.com/1701176650836Set Fire To The Rain Remix.mp3',
      },
      {
         id: 2,
         title: 'LASEW ',
         isTrue: false,
         audioUrl:
            'https://billingual-10.s3.eu-central-1.amazonaws.com/1701176650836Set Fire To The Rain Remix.mp3',
      },
      {
         id: 3,
         title: 'LASEW',
         isTrue: false,
         audioUrl:
            'https://billingual-10.s3.eu-central-1.amazonaws.com/1701176650836Set Fire To The Rain Remix.mp3',
      },
      {
         id: 4,
         title: 'LASEW',
         isTrue: false,
         audioUrl:
            'https://billingual-10.s3.eu-central-1.amazonaws.com/1701176650836Set Fire To The Rain Remix.mp3',
      },
   ],
}) => {
   const [isButtonDisabled, setIsButtonDisabled] = useState(true)
   const [selectedWords, setSelectedWords] = useState([...words])

   const handleOptionSelect = (selectedWordId, isChecked) => {
      setSelectedWords((prevWords) =>
         prevWords.map((word) =>
            word.id === selectedWordId ? { ...word, isTrue: isChecked } : word
         )
      )
   }

   const duration = 240
   const handleTimeUp = () => {
      setIsButtonDisabled(true)
   }

   const handleNextButtonClick = () => {
      console.log(selectedWords)
   }

   const { timeObject, chartPercent } = useProgressBar(duration, handleTimeUp)

   return (
      <ContainerTest>
         <Background>
            <ProgressBar timeObject={timeObject} timeProgress={chartPercent} />
            <h2>Select the Real English words in this list</h2>
            <ContainerMultiplySelect>
               <MultiplySelect
                  words={selectedWords}
                  onSelect={handleOptionSelect}
                  setIsButtonDisabled={setIsButtonDisabled}
               />
            </ContainerMultiplySelect>
            <hr className="ContainerHr" />
            <ContainerButton>
               <Button
                  className="nextButton"
                  defaultStyle="#3A10E5"
                  hoverStyle="#4E28E8"
                  disabled={isButtonDisabled}
                  onClick={handleNextButtonClick}
               >
                  NEXT
               </Button>
            </ContainerButton>
         </Background>
      </ContainerTest>
   )
}

const ContainerTest = styled('div')({
   background: 'white',
   width: '100vw',
   height: '100vh',
   h2: {
      marginTop: '3.12rem',
      textAlign: 'center',
      color: '#4C4859',
      fontSize: ' 1.75rem',
   },
   '& .ContainerHr': {
      marginTop: '3.75rem',
      background: '#D4D0D0;',
      border: '1px solid #D4D0D0',
   },
})
const ContainerMultiplySelect = styled('div')({
   marginTop: '3.12rem',
})
const ContainerButton = styled('div')({
   display: 'flex',
   justifyContent: 'end',
   marginTop: '2rem',
   button: {
      width: '9rem',
      height: '2.6rem',
   },
})
