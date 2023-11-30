import React from 'react'
import { styled } from '@mui/material'
import { Table } from '../table/Table'
import { CheckSquare, Delete, Eye } from '../../assets'
import { Background } from '../../layout/Background'

export const UsersAnswers = () => {
   const columns = [
      { id: 'id', label: '#' },
      { id: 'userName', label: 'User Name' },
      { id: 'dateOfSubmition', label: 'Date of Submition' },
      { id: 'title', label: 'Test name' },
      { id: 'status', label: 'Status' },
      { id: 'score', label: 'Score' },
      {
         id: 'Score',
         label: <div style={{ width: '30px' }} />,
         render: (item) => {
            return (
               <IconsContainer>
                  {item.status === 'Evaluated' ? <Eye /> : <CheckSquare />}
                  <Delete />
               </IconsContainer>
            )
         },
      },
   ]
   const data = [
      {
         dateOfSubmition: '39.39.3939',
         title: 'test number 3',
         userName: 'rinat kunduzov',
         status: 'Not evaluated',
         score: 7,
         id: 1,
      },
      {
         dateOfSubmition: '39.39.3939',
         title: 'test number 3',
         userName: 'rinat kunduzov',
         status: 'Evaluated',
         score: 7,
         id: 2,
      },
      {
         dateOfSubmition: '39.39.3939',
         title: 'test number 3',
         userName: 'rinat kunduzov',
         status: 'Not evaluated',
         score: 7,
         id: 3,
      },
      {
         dateOfSubmition: '39.39.3939',
         title: 'test number 3',
         userName: 'rinat kunduzov',
         status: 'Evaluated',
         score: 7,
         id: 4,
      },
   ]
   return (
      <div>
         <Background>
            <Table data={data} columns={columns} />
         </Background>
      </div>
   )
}

const IconsContainer = styled('div')`
   display: flex;
   align-items: center;
   & > * {
      cursor: pointer;
      margin-right: 14px;
   }
`
