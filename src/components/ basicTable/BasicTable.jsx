import { styled } from '@mui/material'
import React from 'react'

const table = [
   {
      number: '1',
      name: 'Kubanov Farid',
      dateHours: '08:15',
      dateMonth: '20.11.2021',
      testName: 'Test number 1',
      statusText: 'Not evaluated',
      status: true,
      score: '0',
   },
   {
      number: '2',
      name: 'Azatov Ulan',
      dateHours: '14:02',
      dateMonth: '25.10.2021',
      testName: 'Test number 2',
      statusText: 'Not evaluated',
      status: true,
      score: '0',
   },
   {
      number: '3',
      name: 'Maratova Aijan',
      dateHours: '11:25',
      dateMonth: '27.09.2021',
      testName: 'Test number 1',
      statusText: 'Evaluated',
      status: true,
      score: '7',
   },
   {
      number: '4',
      name: 'Bekova Aliza',
      dateHours: '11:25',
      dateMonth: '27.09.2021',
      testName: 'Test number 3',
      statusText: 'Evaluated',
      status: true,
      score: '7',
   },
]

export const BasicTable = () => {
   return (
      <Container>
         <MainContainer>
            <h3>#</h3>
            <h3>User Name</h3>
            <h3>Date of Submition</h3>
            <h3>Test name</h3>
            <h3>Status</h3>
            <h3>Score</h3>
         </MainContainer>
         <div>
            {table.map((item) => (
               <div key={item.id}>
                  <MiniContainer>
                     <p>{item.number}</p>
                     <h3>{item.name}</h3>
                     <p>{item.dateHours}</p>
                     <p>{item.dateMonth}</p>
                     <p>{item.testName}</p>
                     <p>{item.statusText}</p>
                     <p>{item.status}</p>
                     <p>{item.score}</p>
                  </MiniContainer>
               </div>
            ))}
         </div>
      </Container>
   )
}

const Container = styled('div')`
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
   width: 69rem;
   height: 32rem;
   background-color: red;
   gap: 20px;
`
const MainContainer = styled('div')`
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 20px;
`
const MiniContainer = styled('div')`
   background-color: blue;
   width: '59rem';
   height: '5rem';
   display: flex;
   align-items: center;
   gap: 20px;
`
