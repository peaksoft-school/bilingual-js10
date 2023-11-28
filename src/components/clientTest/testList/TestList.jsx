import React from 'react'
import { styled } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { Background } from '../../../layout/Background'
import { TestListIcon } from '../../../assets'
import Button from '../../UI/Buttons/Button'
import { testListArr } from '../../../utils/helpers/testListArr'
import Header from '../../../layout/Header'

const TestList = () => {
   const navigate = useNavigate()

   return (
      <div>
         <Header roles="user" />
         <PurpleBackground>
            {testListArr.length === 0 ? (
               <h1>there s nothing here yet</h1>
            ) : (
               testListArr.map((test) => {
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
                              onClick={() => navigate(`/user/test/${test.id}`)}
                              variant="outlined"
                              hoverStyle="#3A10E5"
                           >
                              try test
                           </Button>
                        </ListContainerStyle>
                     </Background>
                  )
               })
            )}
         </PurpleBackground>
      </div>
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
