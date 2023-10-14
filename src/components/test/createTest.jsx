import React from 'react'
import { styled } from '@mui/material'
import { Background } from '../UI/Background'
import Input from '../UI/Input'
import Button from '../UI/Buttons/Button'

export const CreateTest = ({ onClickSave, onClickGoBack }) => {
   return (
      <TestStyle>
         <Background>
            <p>Title</p>
            <Input className="testInput" />
            <p className="twoP">Short Description</p>
            <Input className="testInput" />
            <div className="testButtonContainer">
               <Button
                  defaultStyle="white"
                  hoverStyle="#3A10E5"
                  variant="outlined"
                  onCLick={onClickGoBack}
               >
                  GO BACK
               </Button>
               <Button
                  defaultStyle="#2AB930"
                  hoverStyle="#31CF38"
                  variant="contained"
                  onCLick={onClickSave}
               >
                  SAVE
               </Button>
            </div>
         </Background>
      </TestStyle>
   )
}

const TestStyle = styled('div')(() => ({
   ' .testInput': {
      width: '53.94vw',
      maxWidth: '820px',
      marginTop: '12px',
   },
   ' .twoP': {
      marginTop: '28px',
   },
   ' p': {
      fontSize: '16px',
      fontStyle: 'normal',
      fontWeight: '500',
      lineHeight: 'normal',
   },
   ' .testButtonContainer': {
      marginTop: '32px',
      display: 'flex',
      justifyContent: 'end',
      gap: '16px',
   },
}))
