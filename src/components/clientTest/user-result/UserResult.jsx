/* eslint-disable no-unused-vars */
import { styled } from '@mui/material'
import { useEffect, useState } from 'react'
import { Table } from '../../table/Table'
import { Background } from '../../../layout/Background'
import Header from '../../../layout/Header'
import { Modal } from '../../UI/UiModal'
import Button from '../../UI/Buttons/Button'
import { CancelModal, ModalDeleteIcon, TrashCan } from '../../../assets'
import { axiosInstanceS3File } from '../../../config/axiosInsatanceS3File'

function convertDateString(timestamp) {
   const dateObject = new Date(timestamp)
   const hours = String(dateObject.getUTCHours()).padStart(2, '0')
   const minutes = String(dateObject.getUTCMinutes()).padStart(2, '0')
   const day = String(dateObject.getUTCDate()).padStart(2, '0')
   const month = String(dateObject.getUTCMonth() + 1).padStart(2, '0')
   const year = dateObject.getUTCFullYear()
   const date = {
      hoursAndMinutes: `${hours}:${minutes}`,
      dayMonthAndYear: `${day}.${month}.${year}`,
   }
   return date
}

const UserResult = () => {
   const [apiData, setApiData] = useState([])
   const [openModal, setOpenModal] = useState(false)

   const getDATA = async () => {
      try {
         const response = await axiosInstanceS3File.get(
            '/result/userGetResults'
         )
         setApiData(response.data)
         return response.data
      } catch (error) {
         console.error(error)
         return null
      }
   }

   useEffect(() => {
      getDATA()
   }, [])

   const deleteData = async () => {
      try {
         await axiosInstanceS3File.delete(`/result/?userId=1&testId=1`)
         getDATA()
      } catch (error) {
         console.error(error)
         setOpenModal(false)
      }
   }

   const handleCloseModal = () => {
      setOpenModal(false)
   }

   const handleOpenModal = (id) => {
      setOpenModal(true)
   }

   const columns = [
      { id: 'row_number', label: '#' },
      {
         id: 'dateOfSubmission',
         label: 'Date of submissions',
      },
      { id: 'testName', label: 'Test name' },
      {
         id: 'status',
         label: 'Status',
         render: (row) => {
            const statusText = row.checked === true ? 'true' : 'false'
            const color = row.checked === true ? 'green' : 'red'
            return <p style={{ color }}>{statusText}</p>
         },
      },
      {
         id: 'finalScore',
         label: 'Score',
         render: (row) => {
            const scoreText = row.score === 'true' ? 'true' : 'false'
            const color = row.score === 'true' ? 'green' : 'red'

            return <p style={{ color }}>{row.finalScore}</p>
         },
      },
      {
         id: 'action',
         render: (row) => {
            return (
               <MainContainer>
                  <TrashCan
                     className="TrashCan"
                     onClick={() => handleOpenModal(row.id)}
                     // onClick={() => deleteData(row.id)}
                  />
               </MainContainer>
            )
         },
      },
   ]
   const transferedData = apiData.map((data) => {
      const stringDate = convertDateString(data.dateOfSubmission)
      return { ...data, dateOfSubmission: stringDate }
   })
   return (
      <Container>
         <Header roles="user" />
         <Background>
            <Table data={transferedData} columns={columns} />
            <Modal
               open={openModal}
               handleCloseModal={handleCloseModal}
               width="32rem"
               height="23rem"
            >
               <div>
                  <ClosedModal>
                     <CancelModal onClick={handleCloseModal} />
                  </ClosedModal>
                  <ModalDeleteStyled>
                     <div>
                        <ModalDeleteIcon onClick={handleCloseModal} />
                     </div>
                  </ModalDeleteStyled>
                  <ModalContainerStyled>
                     <h3>Do you want delete? </h3>
                     <p>You can not restore this file </p>
                  </ModalContainerStyled>
                  <ModalContainer>
                     <Button
                        variant="outlined"
                        hoverStyle="#3A10E5"
                        onClick={handleCloseModal}
                     >
                        Cancel
                     </Button>
                     <Button
                        hoverStyle="#4E28E8"
                        defaultStyle="#3A10E5"
                        onClick={deleteData}
                     >
                        Delete
                     </Button>
                  </ModalContainer>
               </div>
            </Modal>
         </Background>
      </Container>
   )
}
const Container = styled('div')`
   display: flex;
   flex-direction: column;
   gap: 2rem;
`
const MainContainer = styled('div')`
   display: flex;
   gap: 0.7rem;
   .TrashCan {
      cursor: pointer;
   }
`
const ClosedModal = styled('div')`
   display: flex;
   justify-content: end;
   align-items: center;
   margin-right: 1.38rem;
   margin-top: 1.38rem;
`
const ModalContainerStyled = styled('div')`
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
   gap: 0.5rem;
   margin-top: 3.19rem;
   h3 {
      color: #4c4859;
   }
   P {
      color: #4c4859;
   }
`
const ModalContainer = styled('div')`
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 1rem;
   margin-top: 3rem;
   border-radius: 0.625rem;
   width: 32rem;
   height: 5.875rem;
   background-color: #f0f1f1;
`
const ModalDeleteStyled = styled('div')`
   display: flex;
   align-items: center;
   justify-content: center;
   color: #fff;
   margin-top: 3rem;
   div {
      width: 4rem;
      height: 4rem;
      border-radius: 3.125rem;
      background-color: #fbeaeb;
      display: flex;
      align-items: center;
      justify-content: center;
   }
`

export default UserResult
