import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Typography, styled } from '@mui/material'
import { Table } from '../table/Table'
import { Eye, GrenCheck } from '../../assets'
import { Background } from '../../layout/Background'
import Button from '../UI/Buttons/Button'
import { axiosInstance } from '../../config/axiosInstance'

export const UserResponses = () => {
   const { userId, testId } = useSelector((state) => state.answer)
   const [data, setData] = useState([])
   const [disabled, setDisabled] = useState(false)
   const getData = async () => {
      try {
         const response = await axiosInstance.get(
            `/result/getById?testId=${testId}&userId=${userId}`
         )
         setData(response.data)
      } catch (error) {
         console.log(error)
      }
   }

   useEffect(() => {
      getData()
   }, [])

   const sendResultHandler = async () => {
      try {
         await axiosInstance.post(
            `/emailSender/send-html-email?userId=${userId}&testId=${testId}`
         )
         setDisabled(true)
      } catch (error) {
         console.log(error)
      }
   }

   const columns = [
      {
         id: 'questionType',
         label: <div style={{ marginLeft: '8.4vw' }}>Question</div>,
      },
      { id: 'score', label: <div style={{ marginLeft: '8vw' }}>Score</div> },
      {
         id: 'checked',
         label: <div style={{ marginLeft: '11.9vw' }}>Status</div>,
         render: (row) => {
            const color = row.checked ? '#2AB930' : 'red'
            return (
               <p style={{ color, width: '7rem' }}>
                  {row.checked ? 'Evaluated' : 'Not Evaluated'}
               </p>
            )
         },
      },
      {
         id: 'Score',
         render: (item) => {
            return (
               <IconsContainer>
                  {item.checked === true ? <GrenCheck /> : <Eye />}
               </IconsContainer>
            )
         },
      },
   ]

   return (
      <div>
         <Background>
            <HeaderBackground>
               <Title key={data?.id}>
                  <Typography>
                     <span className="User">User: </span>
                     <span>{data?.userFullName}</span>
                  </Typography>
                  <Typography>
                     <span className="Test">Test: </span>
                     <span>{data?.testName}</span>
                  </Typography>
                  <Typography>
                     <span className="date">Date of submission: </span>
                     <span>
                        {data?.dateOfSubmission
                           ?.slice(0, 16)
                           .replaceAll('-', '.')}
                     </span>
                  </Typography>
               </Title>
               <div>
                  <p>
                     <span>Final Score: </span>
                     <span
                        style={
                           data.checked
                              ? { color: '#2AB930' }
                              : { color: 'red' }
                        }
                     >
                        {data.finalScore}
                     </span>
                  </p>
                  <p>
                     <span>Final Status: </span>
                     <span
                        style={
                           data.checked
                              ? { color: '#2AB930' }
                              : { color: 'red' }
                        }
                     >
                        {data.checked ? 'Evaluated' : 'Not Evaluated'}
                     </span>
                  </p>
               </div>
            </HeaderBackground>
            <BtnContainer>
               <Button
                  className="goBackButton"
                  variant="outlined"
                  defaultStyle="white"
                  hoverStyle="#3A10E5"
                  onClick={sendResultHandler}
                  disabled={!data.checked || disabled}
               >
                  SEND RESULTS TO USERS EMAIL
               </Button>
            </BtnContainer>
            <hr />
            <Table data={data.questionResultResponseList} columns={columns} />
         </Background>
      </div>
   )
}

const HeaderBackground = styled('div')`
   display: flex;
   justify-content: space-between;
`

const BtnContainer = styled('div')`
   margin: 6px 0 22px 0;
   text-align: end;
`

const IconsContainer = styled('div')`
   display: flex;
   align-items: center;
   & > * {
      cursor: auto;
      margin-right: 7px;
   }
`
const Title = styled('div')`
   & .User {
      color: #3752b4;
      font-weight: 100;
      font-size: 16px;
      font-family: 'DIN Next Rounded LT Pro Bold';
      line-height: normal;
   }
   & .User + span {
      color: #4c4859;
   }
   & .Test {
      color: #3752b4;
      font-weight: 500;
      font-size: 16px;
      font-family: 'DIN Next Rounded LT Pro Bold';
   }
   & .Test + span {
      color: #4c4859;
   }
   & .date {
      color: #3752b4;
      font-weight: 500;
      font-size: 16px;
      font-family: 'DIN Next Rounded LT Pro Bold';
   }
   & .date + span {
      color: #4c4859;
   }
`
