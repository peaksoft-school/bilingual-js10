import styled from 'styled-components'
import { useRef, useState } from 'react'
import { VolumeEnglishWord } from '../../../assets'

export const SelectEnglishWord = ({
   words,
   answer,
   handleSelectWord,
   CheckIcon,
}) => {
   const audioRef = useRef(new Audio())
   const [isPlaying, setIsPlaying] = useState(false)

   const handleVolumeUpClick = (audioUrl) => {
      if (audioRef.current.paused) {
         audioRef.current.src = audioUrl
         audioRef.current.play()
      } else {
         audioRef.current.pause()
      }
      setIsPlaying(!isPlaying)
   }

   return (
      <Container>
         {words.map((word) => (
            <div
               key={word.id}
               className={`ContainerMultiply ${
                  answer.includes(word) ? 'checked' : ''
               }`}
            >
               <div className="textCon">
                  <VolumeEnglishWord
                     className={`volumeIcon ${
                        isPlaying ? 'playing' : 'paused'
                     }`}
                     style={{
                        fill: isPlaying ? '#3A10E5' : '#655F5F',
                     }}
                     onClick={() => handleVolumeUpClick(word.audioUrl)}
                  />
                  <p>{word.title}</p>
               </div>
               <div className="InputCheckBox">
                  <button
                     type="button"
                     className={`IconValue ${
                        answer.includes(word) ? 'checked' : ''
                     }`}
                     onClick={() => handleSelectWord(word)}
                  >
                     {CheckIcon && <CheckIcon />}
                  </button>
               </div>
            </div>
         ))}
      </Container>
   )
}
const Container = styled('div')(() => ({
   display: 'flex',
   justifyContent: 'center',
   width: '800px',
   flexWrap: 'wrap',
   columnGap: '70px',
   rowGap: '20px',
   '.ContainerMultiply': {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      border: '1.5px solid #D4D0D0',
      borderRadius: '0.5rem',
      width: '12.7rem',
      height: '2.6rem',
      paddingLeft: '10px',
      color: '#4C4859',
      lineHeight: '1rem',
   },
   ' .textCon': {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: '15px',
   },
   ' .InputCheckBox': {
      display: 'flex',
      width: '3rem',
      height: '2.6rem',
      justifyContent: 'center',
      alignItems: 'center',
   },
   ' .checked': {
      width: '12.4rem',
      color: '#4C4859',
      border: ' 2px solid #3A10E5',
   },
   ' .IconValue': {
      width: '3.3rem',
      height: '2.6rem',
      border: '1.5px solid #D4D0D0',
      borderRadius: '0rem 0.5rem 0.5rem 0rem',
      borderRight: 'none',
      color: '#D4D0D0',
      background: 'white',
      cursor: 'pointer',
   },
   ' .IconValue.checked': {
      color: 'white',
      background: '#3A10E5',
      border: ' 1.5px solid #3A10E5',
      cursor: 'pointer',
   },
   '.volumeIcon': { cursor: 'pointer' },
}))
