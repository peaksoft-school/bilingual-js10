import React, { useState } from 'react'
import { styled } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { ALaptop, Contacts, Search, Time } from '../../../assets'
import Button from '../../UI/Buttons/Button'
import Header from '../../../layout/Header'
import { axiosInstance } from '../../../config/axiosInstance'

export const EstimatePracticeScore = () => {
   const navigate = useNavigate()
   const dispatch = useDispatch()
   const [error, setError] = useState(null)
   const { testID, testsArr } = useSelector((state) => state.typeTest)

   const getTest = async () => {
      try {
         const response = await axiosInstance.get(
            `/tests/getById?testId=${testID}`
         )
         dispatch(response.data)
      } catch (error) {
         setError(error)
      }
   }
   const currTest = testsArr.find((test) => test.id === testID)

   return (
      <div>
         <Header roles="user" />
         <Container>
            <ContainerMain>
               <h2>Take a free practice test and estimate your score</h2>
               <ContainerIkons>
                  <Search className="Search" />
                  <MiniContainer>
                     <div className="divALaptop">
                        <ALaptop />
                        <span>{currTest.title}</span>
                     </div>
                     <div className="divTime">
                        <Time />
                        <span>
                           Practice takes just {currTest[0]}
                           minutes
                        </span>
                     </div>
                     <div className="divContacts">
                        <Contacts />
                        <span>get an unofficial score estimate</span>
                     </div>
                  </MiniContainer>
               </ContainerIkons>
               <p>
                  * The practice test may include question types that may not
                  appear on the certified test.
               </p>
               <hr />
               {error && (
                  <div style={{ color: 'red', marginTop: '10px' }}>
                     An error occurred: {error.message || 'Unknown error'}
                  </div>
               )}
               <ContainerButtons>
                  <Button
                     onClick={() => navigate(-1)}
                     className="CANCEL"
                     variant="outlined"
                     hoverStyle="#3A10E5"
                  >
                     CANCEL
                  </Button>
                  <Button
                     className="PRACTICE"
                     hoverStyle="#4E28E8"
                     defaultStyle="#3A10E5"
                     onClick={getTest}
                  >
                     PRACTICE TEST
                  </Button>
               </ContainerButtons>
            </ContainerMain>
         </Container>
      </div>
   )
}

const ContainerIkons = styled('div')`
   display: flex;
   align-items: center;
   justify-content: center;
   margin-top: 4rem;
   gap: 5rem;
   .Search {
      display: flex;
      align-items: center;
      justify-content: end;
   }
`
const MiniContainer = styled('div')`
   display: flex;
   align-items: start;
   justify-content: center;
   flex-direction: column;
   gap: 2rem;
   .divALaptop {
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      gap: 1rem;
   }
   .divTime {
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      gap: 1rem;
   }
   .divContacts {
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      gap: 1rem;
   }
`
const Container = styled('div')`
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   text-align: center;
   margin-top: 4rem;
   h2 {
      color: #4d4859;
      margin-top: 2rem;
   }
   hr {
      width: 50.8125rem;
      height: 0.09563rem;
      margin-left: 2.5rem;
      margin-top: 3.7rem;
      border: 2px solid #d4d0d0;
   }
`
const ContainerMain = styled('div')`
   background-color: #ffffff;
   width: 56.25rem;
   height: 33rem;
   border-radius: 0.625rem;
   p {
      margin-top: 3rem;
      color: #4d4859;
   }
`
const ContainerButtons = styled('div')`
   display: flex;
   align-items: center;
   justify-content: space-between;
   margin-top: 2rem;
   .CANCEL {
      margin-left: 2.5rem;
   }
   .PRACTICE {
      margin-right: 2.5rem;
   }
`
