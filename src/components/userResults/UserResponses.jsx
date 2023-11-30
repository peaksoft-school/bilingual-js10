import React from 'react'
import { styled } from '@mui/material'
import { Table } from '../table/Table'
import { Eye, GrenCheck } from '../../assets'
import { Background } from '../../layout/Background'

export const UserResponses = () => {
   const columns = [
      { id: 'id', label: '#' },
      { id: 'question', label: 'Question' },
      { id: 'score', label: 'Score' },
      { id: 'status', label: 'Status' },
      {
         id: 'Score',
         label: <div style={{ width: '30px' }} />,
         render: (item) => {
            return (
               <IconsContainer>
                  {item.status === 'Evaluated' ? <GrenCheck /> : <Eye />}
               </IconsContainer>
            )
         },
      },
   ]
   const data = [
      {
         question: 'Type what you hear',
         status: 'Evaluated',
         score: 7,
         id: 1,
      },
      {
         question: 'Type what you hear',
         status: 'Evaluated',
         score: 7,
         id: 2,
      },
      {
         question: 'Type what you hear',
         status: 'Not evaluated',
         score: 7,
         id: 3,
      },
      {
         question: 'Type what you hear',
         status: 'Not evaluated',
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
