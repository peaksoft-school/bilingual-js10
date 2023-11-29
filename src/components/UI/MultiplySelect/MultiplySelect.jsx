import React, { useRef, useEffect } from 'react'
import CheckIcon from '@mui/icons-material/Check'
import { SelectEnglishWord } from './SelectEnglishWord'

export const MultiplySelect = ({
   words,
   setIsButtonDisabled,
   answer,
   setAnswer,
}) => {
   const audioRef = useRef(new Audio())
   const isButtonDisabled = answer.length === 0

   const handleSelectWord = (word) => {
      setAnswer((prevSelectedWords) => {
         const isWordSelected = prevSelectedWords.some(
            (selectedWord) => selectedWord.id === word.id
         )

         const updatedSelectedWords = isWordSelected
            ? prevSelectedWords.filter(
                 (selectedWord) => selectedWord.id !== word.id
              )
            : [...prevSelectedWords, word]
         return updatedSelectedWords
      })
   }

   const handleVolumeUpClick = (audioUrl) => {
      if (audioRef.current.paused) {
         audioRef.current.src = audioUrl
         audioRef.current.play()
      } else {
         audioRef.current.pause()
      }
   }

   useEffect(() => {
      setIsButtonDisabled(isButtonDisabled)
   }, [isButtonDisabled, setIsButtonDisabled])

   return (
      <SelectEnglishWord
         words={words}
         answer={answer}
         handleSelectWord={handleSelectWord}
         CheckIcon={CheckIcon}
         onVolumeUpClick={(audioUrl) => handleVolumeUpClick(audioUrl)}
      />
   )
}
