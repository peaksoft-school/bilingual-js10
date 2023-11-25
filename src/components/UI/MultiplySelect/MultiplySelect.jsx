import React, { useState } from 'react'
import { VolumeUp } from '@mui/icons-material'
import CheckIcon from '@mui/icons-material/Check'
import { SelectEnglishWord } from './SelectEnglishWord'

export const MultiplySelect = ({ words, onSelect, setIsButtonDisabled }) => {
   const [selectedWords, setSelectedWords] = useState([])

   const handleSelectWord = (word) => {
      setSelectedWords((prevSelectedWords) => {
         const updatedSelectedWords = prevSelectedWords.includes(word)
            ? prevSelectedWords.filter((selectedWord) => selectedWord !== word)
            : [...prevSelectedWords, word]

         if (setIsButtonDisabled) {
            setIsButtonDisabled(updatedSelectedWords.length === 0)
         }

         return updatedSelectedWords
      })
   }

   return (
      <SelectEnglishWord
         words={words}
         selectedWords={selectedWords}
         handleSelectWord={handleSelectWord}
         onSelect={onSelect}
         VolumeUp={VolumeUp}
         CheckIcon={CheckIcon}
      />
   )
}
