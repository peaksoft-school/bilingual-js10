import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Background } from '../../../layout/Background'
import { TestListIcon } from '../../../assets'
import Button from '../../UI/Buttons/Button'
import Header from '../../../layout/Header'
import { axiosInstance } from '../../../config/axiosInstance'
import { typeTest } from '../../../store/userTest/typeTesrtSlice'

const TestList = () => {
   const navigate = useNavigate()
   const dispatch = useDispatch()
   const [error, setError] = useState(null)
   const { testsArr } = useSelector((state) => state.typeTest)

   const getQuestionTest = async () => {
      try {
         const response = await axiosInstance.get('/tests')
         dispatch(typeTest.actions.addTestsArr(response.data))
      } catch (error) {
         setError(error)
      }
   }

   useEffect(() => {
      getQuestionTest()
   }, [])

   return (
      <div>
         <Header roles="user" />
         <PurpleBackground>
            {testsArr.length === 0 ? (
               <h1>there s nothing here yet</h1>
            ) : (
               testsArr.map((test) => {
                  return (
                     <Background
                        marginTop={testsArr.length > 2 ? '20px' : '80px'}
                        key={test.id}
                     >
                        {error && (
                           <div style={{ color: 'red', marginTop: '10px' }}>
                              An error occurred:
                           </div>
                        )}
                        <ListContainerStyle>
                           <div className="mainContainer">
                              <TestListIcon />
                              <div className="description">
                                 <p>{test.duration} MINUTES</p>
                                 <p>{test ? test.title : null}</p>
                                 <p>Train as much as you like.</p>
                              </div>
                           </div>
                           <Button
                              onClick={() => {
                                 dispatch(typeTest.actions.setIDToTest(test.id))
                                 navigate(`/user/test/${test.id}`)
                              }}
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
