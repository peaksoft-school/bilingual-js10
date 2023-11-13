import React from 'react'
import { styled } from '@mui/material'
import { Background } from '../../../layout/Background'
import { testListArr } from '../../../utils/helpers/testListArr'
import { BilingualLogo, TestListIcon } from '../../../assets'
import Button from '../../UI/Buttons/Button'

const TestList = ({ onClickTryTest }) => {
   return (
      <PurpleBackground>
         {testListArr.map((test) => {
            return (
               <Background
                  marginTop={testListArr.length > 2 ? '20px' : '80px'}
                  key={test.id}
               >
                  <ListContainerStyle>
                     <div className="mainContainer">
                        <TestListIcon />
                        <div className="description">
                           <p>{test.minutes} MINUTES</p>
                           <p>{test.title}</p>
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
            )
         })}
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
   height: '100vh',
   width: '100vw',
   display: 'flex',
   flexDirection: 'column',
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
