import React, { useState } from 'react'
import CheckIcon from '@mui/icons-material/Check'
import { SelectEnglishWord } from './SelectEnglishWord'

export const MultiplySelect = ({ words, setIsButtonDisabled }) => {
   const [selectedWords, setSelectedWords] = useState([])

   const handleSelectWord = (word) => {
      setSelectedWords((prevSelectedWords) => {
         const isWordSelected = prevSelectedWords.some(
            (selectedWord) => selectedWord.id === word.id
         )

         const updatedSelectedWords = isWordSelected
            ? prevSelectedWords.filter(
                 (selectedWord) => selectedWord.id !== word.id
              )
            : [...prevSelectedWords, word]

         if (setIsButtonDisabled) {
            setIsButtonDisabled(updatedSelectedWords.length === 0)
         }

         return updatedSelectedWords
      })
   }

   return (
      <div>
         <SelectEnglishWord
            words={words}
            selectedWords={selectedWords}
            handleSelectWord={handleSelectWord}
            CheckIcon={CheckIcon}
         />
      </div>
   )
}
