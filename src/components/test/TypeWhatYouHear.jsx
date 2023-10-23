import React from 'react'
import { styled } from '@mui/material'
import { Background } from '../../layout/Background'
import Input from '../UI/Input'
import Select from '../UI/select/Select'

export const TypeWhatYouHear = () => {
   return (
      <div>
         <Background>
            <ContainStyle className="Contain">
               <div>
                  <p>Title</p>
                  <Input
                     type="text"
                     className="InputText"
                     placeholder="Select real English words"
                  />
               </div>
               <label>
                  <p>
                     Duration <br /> (in minutes)
                  </p>
                  <input
                     className="InputTime"
                     onChange={(e) => setTime(e.target.value)}
                  />
               </label>
            </ContainStyle>

            <div className="ContainSelects">
               <p>Type</p>
               <Select className="SelectStyle" />
            </div>
         </Background>
      </div>
   )
}

const ContainStyle = styled('div')(() => {
   return {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '1rem',
      p: {
         fontSize: '1rem',
         fontStyle: 'normal',
         fontWeight: '500',
         color: ' #4B4759',
         fontFamly: 'Poppins',
      },
      ' .InputText': {
         width: '43.5rem',
         height: '2.8rem',
         backgrount: '#fff',
         fontFamly: 'Poppins',
      },
      ' .InputTime:hover': {
         border: ' 1.53px solid blue',
      },
      ' .InputTime': {
         width: '6.1rem',
         height: '3.4rem',
         borderRadius: '0.2rem',
         border: ' 1.53px solid #D4D0D0',
         marginBottom: '0.6rem',
         backgrount: '#fff',
         paddingLeft: '2rem',
         fontWeight: '500',
         outline: 'none',
         fontFamly: 'Poppins',
      },
      '.ContainSelects': {
         width: '51.1rem',
         lineHeight: '2rem',
      },
   }
})
