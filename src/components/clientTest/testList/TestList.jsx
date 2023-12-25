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
         const arr = response.data.filter((el) => el.enable === true)
         dispatch(typeTest.actions.addTestsArr(arr))
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
               <Container className="StrokaClass">
                  <h1 className="stroka">T</h1>
                  <h2 className="stroka">h</h2>
                  <h2 className="stroka">e</h2>
                  <h2 className="stroka">r</h2>
                  <h2 className="stroka">e</h2>
                  <div style={{ width: '15px' }} />
                  <h2 className="stroka">i</h2>
                  <h2 className="stroka">s</h2>
                  <div style={{ width: '15px' }} />
                  <h2 className="stroka">n</h2>
                  <h2 className="stroka">o</h2>
                  <h2 className="stroka">t</h2>
                  <h2 className="stroka">h</h2>
                  <h2 className="stroka">i</h2>
                  <h2 className="stroka">n</h2>
                  <h2 className="stroka">g</h2>
                  <div style={{ width: '15px' }} />
                  <h2 className="stroka">h</h2>
                  <h2 className="stroka">e</h2>
                  <h2 className="stroka">r</h2>
                  <h2 className="stroka">e</h2>
                  <div style={{ width: '15px' }} />
                  <h2 className="stroka">y</h2>
                  <h2 className="stroka">e</h2>
                  <h2 className="stroka">t</h2>
               </Container>
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
                                 <p>{Math.floor(test.duration / 60)} MINUTES</p>
                                 <p>{test ? test.title : null}</p>
                                 <p>Train as much as you like.</p>
                              </div>
                           </div>
                           <Button
                              onClick={() => {
                                 dispatch(typeTest.actions.setIDToTest(test.id))
                                 navigate(`/user/test-list/test/${test.id}`)
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
const Container = styled('div')`
   display: flex;
   gap: 1rem;
   align-items: center;
   height: 1.5rem;
   font-weight: 800;
   font-family: Poppins;
   .stroka {
      display: block;
      position: relative;
      color: #3a10e5;
      font-size: 1.5rem;
      height: 100%;
      width: 20px;
      border-radius: 3.1rem;
      top: 8rem;
      animation: animate 2s linear infinite;
      box-shadow: '0px 4px 10px rgba(0, 0, 0, 0.1), 0px 8px 20px rgba(0, 0, 0, 0.2)';
   }
   @keyframes animate {
      50% {
         height: 30%;
      }
      100% {
         height: 100%;
      }
   }
   .stroka:nth-child(1) {
      animation-delay: 0s;
   }
   .stroka:nth-child(2) {
      animation-delay: 0.2s;
   }
   .stroka:nth-child(3) {
      animation-delay: 0.4s;
   }
   .stroka:nth-child(4) {
      animation-delay: 0.6s;
   }
   .stroka:nth-child(5) {
      animation-delay: 0.8s;
   }
   .stroka:nth-child(6) {
      animation-delay: 0.6s;
   }
   .stroka:nth-child(7) {
      animation-delay: 0.4s;
   }
   .stroka:nth-child(8) {
      animation-delay: 0.2s;
   }
   .stroka:nth-child(9) {
      animation-delay: 0s;
   }
   .stroka:nth-child(10) {
      animation-delay: 0.2s;
   }
   .stroka:nth-child(11) {
      animation-delay: 0.4s;
   }
   .stroka:nth-child(12) {
      animation-delay: 0.6s;
   }
   .stroka:nth-child(13) {
      animation-delay: 0.8s;
   }
   .stroka:nth-child(14) {
      animation-delay: 0.6s;
   }
   .stroka:nth-child(15) {
      animation-delay: 0.4s;
   }
   .stroka:nth-child(16) {
      animation-delay: 0.2s;
   }
`
const PurpleBackground = styled('div')({
   backgroundColor: '#D7E1F8',
   display: 'flex',
   flexDirection: 'column',
   '.StrokaClass': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'end',
      marginTop: '10rem',
   },
})

const ListContainerStyle = styled('div')({
   display: 'flex',
   alignItems: 'end',
   justifyContent: 'space-between',
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
