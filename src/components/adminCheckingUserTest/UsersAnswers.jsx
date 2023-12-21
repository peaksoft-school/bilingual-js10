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
                     ?.split(' ')[0]
                     ?.slice(0, 10)
                     ?.replaceAll('-', '.'),
                  time: el?.dateOfSubmission?.split(' ')[1].slice(0, 5),
               }
            })
         )
      } catch (error) {
         console.log(error)
      }
   }

   const deleteUserTest = async (userId, testId) => {
      await axiosInstance.delete(`/result/?userId=${userId}&testId=${testId}`)
      result()
   }

   useEffect(() => {
      result()
   }, [])

   const columns = [
      {
         id: 'userFullName',
         label: <div style={{ marginLeft: '5.5vw' }}>User Name</div>,
      },
      {
         id: 'newDate',
         label: <div style={{ marginLeft: '3.4vw' }}>Date of Submition</div>,
         render: (row) => {
            return (
               <div>
                  <p>{row.time || 'no date '}</p>
                  <p>{row.newDate || 'specified'}</p>
               </div>
            )
         },
      },
      { id: 'testName', label: 'Test Name' },
      {
         id: 'checked',
         label: <div style={{ marginLeft: '5.6vw' }}>Status</div>,
         render: (row) => {
            const statusText =
               row.checked === true ? 'Evalauted' : 'Not evalauted'
            const color = row.checked === true ? '#2AB930' : '#F61414'
            return <p style={{ color, width: '113px' }}>{statusText}</p>
         },
      },
      {
         id: 'finalScore',
         label: <div style={{ marginLeft: '5vw' }}>Score</div>,
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
                           navigate('/admin/results/user-responses')
                        }}
                     />
                  ) : (
                     <Check
                        onClick={() => {
                           dispatch(answersSlice.actions.addUserId(row.userId))
                           dispatch(answersSlice.actions.addTestId(row.testId))
                           navigate('/admin/results/user-responses')
                        }}
                        style={{ cursor: 'pointer' }}
                     />
                  )}
                  <TrashCan
                     onClick={() => deleteUserTest(row.userId, row.testId)}
                     style={{ cursor: 'pointer' }}
                  />
               </Container>
            )
         },
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
const Container = styled('div')`
   display: flex;
   gap: 0.7rem;
`
