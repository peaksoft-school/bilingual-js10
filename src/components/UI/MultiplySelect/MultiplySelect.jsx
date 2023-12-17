import React, { useEffect } from 'react'
import CheckIcon from '@mui/icons-material/Check'
import { SelectEnglishWord } from './SelectEnglishWord'

export const MultiplySelect = ({
   words,
   setIsButtonDisabled,
   answer,
   setAnswer,
}) => {
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

   useEffect(() => {
      setIsButtonDisabled(isButtonDisabled)
   }, [isButtonDisabled, setIsButtonDisabled])

   return (
      <SelectEnglishWord
         words={words}
         answer={answer}
         handleSelectWord={handleSelectWord}
         CheckIcon={CheckIcon}
      />
   )
}
