import { styled } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Button from '../../UI/Buttons/Button'
import { Background } from '../../../layout/Background'
import { Bilingual, Complete } from '../../../assets'
import { axiosInstance } from '../../../config/axiosInstance'

export const SendTheResults = () => {
   const { tests } = useSelector((state) => state.globalTestSlice)
   const navigate = useNavigate()

   const handleSendTheResults = async () => {
      await axiosInstance.post('/answer/', tests)
   }
   return (
      <Container>
         <Background>
            <ContainerTestComplete>
               <span>Test is complete!</span>
               <Complete />
            </ContainerTestComplete>
            <ContainerImgParagraf>
               <div className="BilingualImg">
                  <Bilingual />
               </div>
               <p className="paragrafResults">
                  your results were sent for evaluation proccess.
                  <br /> after evaluation your results will be sent to your
                  email.
               </p>
            </ContainerImgParagraf>
            <hr className="hrTop" />
            <ContainerButton>
               <Button
                  variant="outlined"
                  hoverStyle="#3A10E5"
                  className="buttonTry"
                  onClick={() => navigate(-2)}
               >
                  TRY AGAIN
               </Button>
               <Button
                  variant="contained"
                  className="buttonDone"
                  hoverStyle="#3A10E5"
                  onClick={() => {
                     navigate(-3)
                     handleSendTheResults()
                  }}
               >
                  DONE
               </Button>
            </ContainerButton>
         </Background>
      </Container>
   )
}
const Container = styled('div')({
   marginTop: '5rem',
   '.hrTop': {
      marginTop: '3.75rem',
      width: '51rem',
      border: ' 1px solid #d4d0d0',
   },
})

const ContainerTestComplete = styled('div')({
   display: 'flex',
   alignItems: 'center',
   justifyItems: 'center',
   gap: '1.12rem',
   justifyContent: 'center',
   alignContent: 'center',
   span: {
      color: '#4C4859',
      display: 'flex',
      justifyContent: 'center',
      alignContent: 'center',
      fontSize: '1.75rem',
      fontWeight: '500',
      fontFamily: 'DINNextRoundedLTW01 - Regular',
   },
})

const ContainerImgParagraf = styled('div')({
   '.BilingualImg': {
      display: 'flex',
      justifyContent: 'center',
      marginTop: '3.3rem',
   },
   '.paragrafResults': {
      marginTop: '1.63rem',
      textAlign: 'center',
      color: '#4C4859',
      fontSize: '1.1rem',
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: '130%',
      textTransform: 'lowercase',
   },
})

const ContainerButton = styled('div')({
   display: 'flex',
   justifyContent: 'space-between',
   alignContent: 'center',
   marginTop: '2rem',
   '.buttonTry': {
      padding: '0.81rem 1.5rem',
      width: '7.37rem',
      height: '2.62rem',
      fontSize: ' 0.76rem',
      fontWeight: 600,
   },

   '.buttonDone': {
      width: '9.25rem',
      height: '2.62rem',
      fontSize: ' 0.76rem',
      fontWeight: 600,
   },
})
