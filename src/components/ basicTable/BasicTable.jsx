import React from 'react'
import { TableCell, TableHead, TableRow, styled } from '@mui/material'
import { TrashCan, Eye, Check } from '../../assets'

const table = [
   {
      number: '1',
      name: 'Kubanov Farid',
      dateHours: '08:15 20.11.2021',
      testName: 'Test number 1',
      statusText: 'Not evaluated',
      status: true,
      score: '0',
   },
   {
      number: '2',
      name: 'Azatov Ulan',
      dateHours: '14:02 25.10.2021',
      testName: 'Test number 2',
      statusText: 'Not evaluated',
      status: true,
      score: '0',
   },
   {
      number: '3',
      name: 'Maratova Aijan',
      dateHours: '11:25 27.09.2021',
      testName: 'Test number 1',
      statusText: 'Evaluated',
      status: true,
      score: '7',
   },
   {
      number: '4',
      name: 'Bekova Aliza',
      dateHours: '11:25 27.09.2021',
      testName: 'Test number 3',
      statusText: 'Evaluated',
      status: true,
      score: '7',
   },
]

export const BasicTable = ({ columns }) => {
   return (
      <Container>
         <Container2>
            <TableHead>
               <TableRow>
                  {columns.map((name) => (
                     <TableCell key={name}>{name}</TableCell>
                  ))}
               </TableRow>
            </TableHead>
            {/* <MainContainer>
               <h3>#</h3>
               <h3>User Name</h3>
               <h3>Date of Submition</h3>
               <h3>Test name</h3>
               <h3>Status</h3>
               <h3>Score</h3>
            </MainContainer> */}
            <div>
               {table.map((item) => (
                  <div key={item.id}>
                     <MiniContainer status={item.statusText}>
                        <p>{item.number}</p>
                        <p>{item.name}</p>
                        <p>{item.dateHours}</p>
                        <p>{item.testName}</p>
                        <h4>{item.statusText}</h4>
                        <p>{item.status}</p>
                        <h4>{item.score}</h4>
                        <Eye />
                        <Check />
                        <TrashCan />
                     </MiniContainer>
                  </div>
               ))}
            </div>
         </Container2>
      </Container>
   )
}

const Container = styled('div')`
   background-color: #fff;
   display: flex;
   align-items: center;
   justify-content: space-around;
   flex-direction: column;
   gap: 2rem;
`
const Container2 = styled('div')`
   background-color: #fff;
   width: 69rem;
   height: 32rem;
`
const MainContainer = styled('div')`
   display: flex;
   align-items: center;
   justify-content: space-around;
   gap: 2rem;
`
const MiniContainer = styled('div')`
   height: 5rem;
   display: flex;
   align-items: center;
   justify-content: space-around;
   gap: 1.5rem;
   border-radius: 0.6rem;
   box-shadow:
      0px 4px 10px 0px rgba(0, 0, 0, 0.06),
      0px -4px 10px 0px rgba(0, 0, 0, 0.06);
   margin-top: 20px;
   color: #4c4859;
   h4 {
      color: ${(props) => (props.status === 'Evaluated' ? 'green' : 'red')};
   }
`
