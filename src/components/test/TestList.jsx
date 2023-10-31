import React from 'react'
import { styled } from '@mui/material'
import { Background } from '../../layout/Background'
import Button from '../UI/Buttons/Button'
import { BilingualLogo, TestListIcon } from '../../assets'

export const TestList = ({ onClickTryTest }) => {
   return (
      <PurpleBackground>
         <Background marginTop="80px">
            <ListContainerStyle>
               <div className="mainContainer">
                  <TestListIcon />
                  <div className="description">
                     <p>15 MINUTES</p>
                     <p>English advanced test</p>
                     <p>Train as much as you like.</p>
                  </div>
               </div>
               <Button
                  onClick={onClickTryTest}
                  variant="outlined"
                  hoverStyle="#3A10E5"
               >
                  try test
               </Button>
            </ListContainerStyle>
         </Background>
         <FooterStyle>
            <BilingualLogo />
            <p>© 2022 Peaksoft</p>
         </FooterStyle>
      </PurpleBackground>
   )
}
const PurpleBackground = styled('div')({
   backgroundColor: '#D7E1F8',
   position: 'fixed',
   height: '100vh',
   width: '100vw',
})
const ListContainerStyle = styled('div')({
   display: 'flex',
   alignItems: 'end',
   columnGap: '16rem',
   '.mainContainer': {
      display: 'flex',
      alignItems: 'center',
      columnGap: '45px',
      '.description': {
         display: 'flex',
         flexDirection: 'column',
         rowGap: '15px',
         '& :first-child': {
            color: '#3A10E5',
            fontStyle: 'normal',
            fontSize: '15px',
            fontWeight: '900',
         },
         '& :nth-child(2)': {
            color: '#4C4859',
            fontStyle: 'normal',
            fontSize: '26px',
            fontWeight: '500',
         },
         '& :nth-child(3)': {
            color: '#4C4859',
            fontStyle: 'normal',
            fontSize: '16px',
            fontWeight: '400',
         },
      },
   },
})

const FooterStyle = styled('div')({
   position: 'fixed',
   width: '100vw',
   bottom: '0',
   padding: '14px 0 14px 0',
   display: 'flex',
   alignItems: 'end',
   backgroundColor: 'white',
   justifyContent: 'center',
   columnGap: '12px',
   p: {
      color: '#98A2B3',
   },
})
