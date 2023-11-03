import React from 'react'
import { styled } from '@mui/material'
import { Background } from '../../../layout/Background'
import { testListArr } from '../../../utils/helpers/testListArr'
import { BilingualLogo } from '../../../assets'

const TestList = () => {
   return (
      <PurpleBackground>
         <Background marginTop="80px">
            {testListArr[0].map((test) => {
               return test.testList
            })}
         </Background>
         <FooterStyle>
            <BilingualLogo />
            <p>© 2022 Peaksoft</p>
         </FooterStyle>
      </PurpleBackground>
   )
}

export default TestList

const PurpleBackground = styled('div')({
   backgroundColor: '#D7E1F8',
   position: 'fixed',
   height: '100vh',
   width: '100vw',
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
