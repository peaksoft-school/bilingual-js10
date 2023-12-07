import React, { useEffect, useState } from 'react'
// import { Table } from './components/components/table/Table'
import { useDispatch } from 'react-redux'
import { styled } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { Check, Eye, TrashCan } from '../../assets'
import { Table } from '../table/Table'
import { axiosInstance } from '../../config/axiosInstance'
import { Background } from '../../layout/Background'
import { answersSlice } from '../../store/checkTestSlices/answers-slice'

export const UserAnswers = () => {
   const [data, setData] = useState([])
   const dispatch = useDispatch()
   const navigate = useNavigate()

   const result = async () => {
      try {
         const response = await axiosInstance.get(
            'http://ec2-18-153-48-98.eu-central-1.compute.amazonaws.com/api/result/'
         )
         setData(
            response.data.map((el) => {
               return {
                  ...el,
                  newDate: el?.dateOfSubmission
                     .split(' ')[0]
                     .slice(0, 10)
                     .replaceAll('-', '.'),
                  time: el?.dateOfSubmission.split(' ')[1].slice(0, 5),
               }
            })
         )
      } catch (error) {
         console.log(error)
      }
   }

   useEffect(() => {
      result()
   }, [])

   const columns = [
      { id: 'userFullName', label: 'User Name' },
      {
         id: 'newDate',
         label: 'Date of Submition',
         render: (row) => {
            return (
               <div>
                  <p>{row.time}</p>
                  <p>{row.newDate}</p>
               </div>
            )
         },
      },
      { id: 'testName', label: 'Test Name' },
      {
         id: 'checked',
         label: 'Status',
         render: (row) => {
            const statusText =
               row.checked === true ? 'Evalauted' : 'Not evalauted'
            const color = row.checked === true ? '#2AB930' : '#F61414'
            return <p style={{ color }}>{statusText}</p>
         },
      },
      {
         id: 'finalScore',
         label: 'Score',
         render: (row) => {
            const color = row.finalScore > 0 ? '#2AB930' : '#F61414'
            return <p style={{ color }}>{row.finalScore}</p>
         },
      },
      {
         render: (row) => {
            return (
               <Container>
                  {row.checked === true ? (
                     <Eye
                        style={{ cursor: 'pointer' }}
                        onClick={() => {
                           dispatch(answersSlice.actions.addUserId(row.userId))
                           dispatch(answersSlice.actions.addTestId(row.testId))
                           navigate('/admin/user-responses')
                        }}
                     />
                  ) : (
                     <Check style={{ cursor: 'pointer' }} />
                  )}
                  <TrashCan style={{ cursor: 'pointer' }} />
               </Container>
            )
         },
      },
   ]

   return (
      <div>
         <Background>
            <Table
               data={data}
               columns={columns}
               columnGap="40px"
               rowGap="3px"
            />
         </Background>
      </div>
   )
}
const Container = styled('div')`
   display: flex;
   gap: 0.7rem;
`
