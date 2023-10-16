import React, { useState } from 'react'
import { VolumeUp } from '@mui/icons-material'
import CheckIcon from '@mui/icons-material/Check'
import { SelectEnglishWord } from './SelectEnglishWord'

export const MultiplySelect = () => {
   const [selectedWords, setSelectedWords] = useState([])

   const handleSelectWord = (word) => {
      if (selectedWords.includes(word)) {
         setSelectedWords(
            selectedWords.filter((selectedWord) => selectedWord !== word)
         )
      } else {
         setSelectedWords([...selectedWords, word])
      }
   }

   const allWords = [
      'Word 1',
      'Word 2',
      'Word 3',
      'Word 4',
      'Word 5',
      'Word 6',
      'Word 7',
      'Word 8',
      'Word 9',
   ]

   return (
      <SelectEnglishWord
         words={allWords}
         selectedWords={selectedWords}
         handleSelectWord={handleSelectWord}
         VolumeUp={<VolumeUp />}
         CheckIcon={<CheckIcon />}
      />
   )
}
