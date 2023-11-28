import React, { useState } from 'react'
import styled from 'styled-components'
// import { useDispatch } from 'react-redux'
import { useProgressBar } from '../../UI/progressBar/useProgressBar'
import ProgressBar from '../../UI/progressBar/ProgressBar'
import { MultiplySelect } from '../../UI/MultiplySelect/MultiplySelect'
import { Background } from '../../../layout/Background'
import Button from '../../UI/Buttons/Button'
// import { postFileS3 } from '../../../store/ListenSelect/listenSelectThunk'
// import { addOptions } from '../../../store/userTest/global-test-slice'

export const ListenSelectEnglish = ({
   words = ['nurlan', 'dastan', 'renat', 'nurlan', 'afdsdsd', 'renat'],
}) => {
   const [isButtonDisabled, setIsButtonDisabled] = useState(true)
   // const dispatch = useDispatch()

   // const AddAudioLink = (link) => {
   //    const audioUrl = {
   //       audioUrl: link.payload.data.link,
   //    }
   //    dispatch(addOptions(audioUrl))
   // }

   // const addOptionTest = async () => {
   //    const optionTest = await dispatch(postFileS3())
   //    AddAudioLink(optionTest)
   // }

   const handleOptionSelect = () => {
      setIsButtonDisabled(false)
   }
   const duration = 240
   const handleTimeUp = () => {
      setIsButtonDisabled(true)
   }

   const { timeObject, chartPercent } = useProgressBar(duration, handleTimeUp)

   return (
      <ContainerTest>
         <Background>
            <ProgressBar timeObject={timeObject} timeProgress={chartPercent} />
            <h2>Select the Real English words in this list</h2>
            <ContainerMultiplySelect>
               <MultiplySelect
                  words={words}
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
                  // onClick={addOptionTest}
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
