import React from 'react'
import styled from 'styled-components'
import Header from '../../layout/Header'
import Button from '../UI/Buttons/Button'
import { Background } from '../../layout/Background'
import { InputRadio } from '../UI/InputRadio'
import Input from '../UI/Input'

const options = [
   {
      id: 1,
      title: 'champion',
   },
   {
      id: 2,
      title: 'Dasi012',
   },
   {
      id: 3,
      title: 'Rinat',
   },
   {
      id: 4,
      title: 'Nurlan',
   },
   {
      id: 5,
      title: 'Begish',
   },
   {
      id: 6,
      title: 'Elizar',
   },
]

const answers = [
   {
      id: 1,
      title: 'Listen',
   },
   {
      id: 2,
      title: 'Dastan',
   },
   {
      id: 3,
      title: 'Rinat',
   },
   {
      id: 4,
      title: 'Nurlan',
   },
]

const SelectRealEnglishWords = ({ title, duration, questionType }) => {
   const handleInputChange = (e) => {
      const value = parseInt(e.target.value, 10)
      const clampedValue = Math.min(Math.max(value, 0), 10)
      e.target.value = clampedValue
   }
   return (
      <>
         <Header />
         <Container>
            <Background padding="0">
               <ContainerFlex>
                  <ContainerCkeckInTheTest>
                     <div>
                        <p className="TextTestQuestion ">Test Question </p>
                        <ContainerTestQuestion>
                           <div className="FixedDisplay">
                              <span className="ColorBlue">Question Title:</span>
                              <p> {title} </p>
                           </div>
                           <div className="FixedDisplay">
                              <span className="ColorBlue">
                                 Duration (in minutes):
                              </span>
                              <span>{duration} </span>
                           </div>
                           <div className="FixedDisplay">
                              <span className="ColorBlue">Question Type:</span>
                              <p>{questionType}</p>
                           </div>
                        </ContainerTestQuestion>
                     </div>

                     <ContaineScore>
                        <p>Evaluation</p>
                        <div className="ContainerEvaluation">
                           <p className="ColorBlue">Score:(1-10)</p>
                           <Input
                              type="number"
                              min="1"
                              max="10"
                              onChange={handleInputChange}
                           />
                        </div>
                     </ContaineScore>
                  </ContainerCkeckInTheTest>
                  <ContainerCreateTest>
                     {options.map((option, index) => (
                        <CreateTest key={option.id}>
                           <div style={{ width: '1rem' }}>
                              <MainContainer>
                                 <p className="Number-Words">{index + 1}</p>
                                 <div className="NumberText">
                                    <span>{option.title}</span>
                                 </div>
                              </MainContainer>
                           </div>
                           <div className="InputDelete">
                              <InputRadio variant="CHECKBOX" />
                           </div>
                        </CreateTest>
                     ))}
                  </ContainerCreateTest>
                  <ContainerCreateAnswerTest>
                     <p className="TextUserAnswer">User’s Answer </p>
                     <div className="ContainerAnswerMap">
                        {answers.map((el) => (
                           <CreateAnswerTest key={el.id}>
                              <MainContainer>
                                 <div className="NumberText">
                                    <p>{el.title}</p>
                                 </div>
                              </MainContainer>
                           </CreateAnswerTest>
                        ))}
                     </div>
                  </ContainerCreateAnswerTest>
               </ContainerFlex>
               <ContainerButtons>
                  <Button variant="outlined" hoverStyle="#3A10E5">
                     GO BACK
                  </Button>
                  <Button defaultStyle="#2AB930" hoverStyle="#31CF38">
                     Save
                  </Button>
               </ContainerButtons>
            </Background>
         </Container>
      </>
   )
}

export default SelectRealEnglishWords

const Container = styled('div')({
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   marginTop: '4.25rem',
   '.TextUserAnswer': {
      color: '#4C4859',
      fontSize: '1.125rem',
      fontWeight: 500,
      paddingTop: '2.87rem',
   },
   '.TextTestQuestion': {
      color: '#4C4859',
      fontSize: '1.125rem',
      fontWeight: 500,
      lineHeight: '2rem',
   },
   '.ContainerEvaluation': {
      display: 'flex',
      flexDirection: 'column',
   },
   '& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input': {
      paddingLeft: '40px',
      width: '45px',
      height: '10px',
   },
})
const ContaineScore = styled('div')({
   display: 'flex',
   flexDirection: 'column',
   marginRight: '3.2rem',
   '.rightAnswer': {
      color: 'green',
      fontWeight: 500,
      paddingLeft: '10px',
   },
})
const ContainerFlex = styled('div')({
   display: 'flex',
   flexDirection: 'column',
   justifyContent: 'center',
   alignItems: 'start',
})
const ContainerCkeckInTheTest = styled('div')({
   display: 'flex',
   justifyContent: 'space-between',
   width: '100%',
   alignContent: 'center',
   '.ColorBlue': {
      color: 'blue',
   },
})
const ContainerTestQuestion = styled('div')({
   display: 'flex',
   flexDirection: 'column',
   justifyContent: 'center',
   alignItems: 'start',
   '.FixedDisplay': {
      display: 'flex',
      gap: '10px',
      textAlign: 'center',
   },
})
const ContainerCreateTest = styled('div')(() => ({
   display: 'flex',
   gap: '10px',
   marginTop: '9px',
   flexWrap: 'wrap',
   paddingTop: '20px',
}))
const CreateTest = styled('div')(() => ({
   border: 'solid 1.53px #D4D0D0',
   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'center',
   width: '14.5rem',
   height: '2.8rem',
   borderRadius: '0.5rem',
   p: { color: 'grey' },
   padding: '0.88rem 1rem 0.81rem 1rem ',
   '.NumberText': {
      display: 'flex',
      justifyContent: 'start',
      p: {
         color: '#4C4859',
      },
   },
}))
const MainContainer = styled('div')(() => ({
   display: 'flex',
   gap: '10px',
   '.Number-Words': {
      color: '#4C4859',
   },
}))
const ContainerCreateAnswerTest = styled('div')({
   '.ContainerAnswerMap': {
      display: 'flex',
      alignItems: 'center',
      gap: '0.87rem',
      marginTop: '9px',
      flexWrap: 'wrap',
   },
})
const CreateAnswerTest = styled('div')({
   border: 'solid 1.53px #D4D0D0',
   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'center',
   width: '10.6rem',
   height: '2.8rem',
   borderRadius: '0.5rem',
   p: { color: 'grey' },
   padding: '0.88rem 1rem 0.81rem 1rem ',
   '.NumberText': {
      display: 'flex',
      justifyContent: 'start',
      p: {
         color: '#4C4859',
      },
   },
})
const ContainerButtons = styled('div')(() => ({
   display: 'flex',
   justifyContent: 'end',
   gap: '1rem',
   marginTop: '2rem',
   marginRight: '3.2rem',
}))
