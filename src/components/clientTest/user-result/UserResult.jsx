/* eslint-disable no-unused-vars */
import { styled } from '@mui/material'
import { useEffect, useState } from 'react'
import { Table } from '../../table/Table'
import { Background } from '../../../layout/Background'
import Header from '../../../layout/Header'
import { Modal } from '../../UI/UiModal'
import Button from '../../UI/Buttons/Button'
import { CancelModal, ModalDeleteIcon, TrashCan } from '../../../assets'
import { axiosInstance } from '../../../config/axiosInstance'

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
   const [error, setError] = useState(null)
   const [userTestID, setUserTestID] = useState(null)
   const [userId, setUserId] = useState(null)

   const getData = async () => {
      try {
         const response = await axiosInstance.get('/result/userGetResults')
         setApiData(response.data)
         if (Array.isArray(response.data) && response.data.length > 0) {
            const firstItem = response.data[0]
            const isUserId = firstItem.userId
            setUserId(isUserId)
         }
      } catch (error) {
         setError(error)
      }
   }

   useEffect(() => {
      getData()
   }, [])

   const deleteData = async () => {
      try {
         await axiosInstance.delete(
            `/result/?userId=${userId}&testId=${userTestID}`
         )
         getData()
         setOpenModal(false)
      } catch (error) {
         setError(error)
      }
   }

   const handleCloseModal = () => {
      setOpenModal(false)
   }

   const handleOpenModal = (id) => {
      setUserTestID(id)
      setOpenModal(true)
   }

   const columns = [
      {
         id: 'dateOfSubmission',
         label: <div style={{ marginLeft: '5vw' }}>Date of submissions</div>,
      },
      {
         id: 'testName',
         label: <div style={{ marginLeft: '4.1vw' }}>Test name</div>,
      },
      {
         id: 'status',
         label: <div style={{ marginLeft: '8vw' }}>Status</div>,
         render: (row) => {
            const statusText =
               row.checked === true ? 'Evaluated' : 'Not evaluated'
            const color = row.checked === true ? 'green' : 'red'
            return <p style={{ color, width: '113px' }}>{statusText}</p>
         },
      },
      {
         id: 'finalScore',
         label: <div style={{ marginLeft: '5.9vw' }}>Score</div>,
         render: (row) => {
            const color = row.checked === true ? 'green' : 'red'

            return <p style={{ color, width: '20px' }}>{row.finalScore}</p>
         },
      },
      {
         id: 'action',
         render: (row) => {
            return (
               <MainContainer>
                  <TrashCan
                     className="TrashCan"
                     onClick={() => handleOpenModal(row.testId)}
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
            <ContainerBackground>
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
               {error && (
                  <div style={{ color: 'red', marginTop: '10px' }}>
                     An error occurred: {error.message || 'Unknown error'}
                  </div>
               )}
            </ContainerBackground>
         </Background>
      </Container>
   )
}
const ContainerBackground = styled('div')`
   width: 20rem;
`
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
