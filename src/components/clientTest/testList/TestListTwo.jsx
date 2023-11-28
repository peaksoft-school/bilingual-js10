import React from 'react'
import { styled } from '@mui/material'
import { useNavigate, useParams } from 'react-router-dom'
import { ALaptop, Contacts, Search, Time } from '../../../assets'
import Button from '../../UI/Buttons/Button'
import Header from '../../../layout/Header'
import { testListArr } from '../../../utils/helpers/testListArr'

export const TestListTwo = () => {
   const navigate = useNavigate()
   const { id } = useParams()

   const findTest = testListArr.find((test) => Number(id) === test.id)
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
                        <span>{findTest.title}</span>
                     </div>
                     <div className="divTime">
                        <Time />
                        <span>
                           Practice takes just {findTest.minutes} minutes
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
                     onClick={() => navigate('/user/testing')}
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
