import React, { useState } from 'react'
import styled from 'styled-components'
import Header from '../../layout/Header'
import { Background } from '../../layout/Background'
import Input from '../UI/Input'
import { InputRadio } from '../UI/InputRadio'
import { Delete, VolumeForEnglishWord } from '../../assets'
import Button from '../UI/Buttons/Button'

const initialOptions = [
   {
      id: 1,
      title: ' Word 1',
   },
   {
      id: 2,
      title: ' Word 2',
   },
   {
      id: 3,
      title: ' Word 3',
   },
   {
      id: 4,
      title: ' Word 4',
   },
]
const userTest = [
   {
      id: 1,
      title: 'Word 1',
   },
   {
      id: 2,
      title: ' Word 2',
   },
   {
      id: 3,
      title: ' Word 3',
   },
   {
      id: 4,
      title: ' Word 4',
   },
]
const ListenAndSelectEnglishWord = ({ title, duration, questionType }) => {
   const [options, setOptions] = useState(initialOptions)

   const handleInputChange = (e) => {
      const value = parseInt(e.target.value, 10)
      const clampedValue = Math.min(Math.max(value, 0), 10)
      e.target.value = clampedValue
   }
   const removeElement = (id) => {
      const newOptions = options.filter((option) => option.id !== id)
      setOptions(newOptions)
   }
   return (
      <>
         <Header />
         <Containers>
            <Background>
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
               <div className="CreatTests">
                  {options.map((el, index) => (
                     <div key={el.id} className="CreatTest">
                        <AudioContainer>
                           <p>{index + 1}</p>
                           <VolumeForEnglishWord />
                           <p>{el.title}</p>
                        </AudioContainer>
                        <ContainDeleteChek>
                           <InputRadio variant="CHECKBOX" />
                           <Delete
                              onClick={() => removeElement(el.id)}
                              className="DeleteIcon"
                           />
                        </ContainDeleteChek>
                     </div>
                  ))}
               </div>
               <ContainerUserTest>
                  <p className="TextUser">User is Answer </p>
                  <div className="ContainerUserTestMap">
                     {userTest.map((item, index) => (
                        <div key={item.id} className="CreatUserTest">
                           <AudioContainer>
                              <p>{index + 1}</p>
                              <VolumeForEnglishWord />
                              <p>{item.title}</p>
                           </AudioContainer>
                        </div>
                     ))}
                  </div>
               </ContainerUserTest>
               <ContainerButtons>
                  <Button variant="outlined" hoverStyle="#3A10E5">
                     GO BACK
                  </Button>
                  <Button defaultStyle="#2AB930" hoverStyle="#31CF38">
                     Save
                  </Button>
               </ContainerButtons>
            </Background>
         </Containers>
      </>
   )
}

export default ListenAndSelectEnglishWord

const Containers = styled('div')({
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   marginTop: '4.25rem',
   fontFamily: ' DINNextRoundedLTW04-Medium',
   '.TextUserAnswer': {
      color: '#4C4859',
      fontSize: '1.125rem',
      fontWeight: 500,
      paddingTop: '2.87rem',
   },
   '.TextTestQuestion': {
      color: '#4C4859',
      fontSize: '1.25rem',
      fontWeight: 500,
      lineHeight: '2rem',
   },
   '.ContainerEvaluation': {
      display: 'flex',
      flexDirection: 'column',
   },
   '& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input': {
      paddingLeft: '45px',
      width: '50px',
      height: '10px',
   },
   '.CreatTests': {
      display: 'flex',
      rowGap: '1.12rem',
      columnGap: '1.12rem',
      flexWrap: 'wrap',
      marginTop: '2rem',
      fontFamly: 'Poppins',
   },
   '.CreatTest': {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      border: '1.53px solid #D4D0D0',
      width: '15rem',
      height: '2.8rem',
      borderRadius: '0.5rem',
      padding: '0.80rem 0.85rem 0.80rem 0.85rem',
      color: '#4C4859',
   },
   '.CreatUserTest': {
      display: 'flex',
      alignItems: 'center',
      width: '11.6rem',
      height: '2.8rem',
      border: '1.53px solid #D4D0D0',
      borderRadius: '0.5rem',
      padding: '0.80rem 0.85rem 0.80rem 0.85rem',
      color: '#4C4859',
   },
   '.DeleteIcon': {
      width: '1.25rem',
      height: '1.25rem',
   },
   '.TextUser': {
      color: '#4C4859',
      fontSize: '1.125rem',
      fontWeight: 500,
      paddingTop: '2.87rem',
   },
})
const ContaineScore = styled('div')({
   display: 'flex',
   flexDirection: 'column',
   marginRight: '2.2rem',
   '.rightAnswer': {
      color: 'green',
      fontWeight: 500,
      paddingLeft: '10px',
   },
})
const ContainerCkeckInTheTest = styled('div')({
   display: 'flex',
   justifyContent: 'space-between',
   width: '100%',
   alignContent: 'center',
   fontWeight: 500,
   '.ColorBlue': {
      color: '#3752B4',
   },
})
const ContainerTestQuestion = styled('div')({
   display: 'flex',
   flexDirection: 'column',
   justifyContent: 'center',
   alignItems: 'start',
   fontWeight: 500,
   '.FixedDisplay': {
      display: 'flex',
      gap: '10px',
      textAlign: 'center',
   },
})
const ContainDeleteChek = styled('div')(() => ({
   display: 'flex',
   alignItems: 'center',
   gap: '4px',
   cursor: 'pointer',
}))
const AudioContainer = styled('div')(() => ({
   display: 'flex',
   alignItems: 'center',
   gap: '15px',
   cursor: 'pointer',
}))
const ContainerUserTest = styled('div')({
   '.ContainerUserTestMap': {
      display: 'flex',
      alignItems: 'center',
      gap: '0.87rem',
      marginTop: '9px',
      flexWrap: 'wrap',
   },
})
const ContainerButtons = styled('div')(() => ({
   display: 'flex',
   justifyContent: 'end',
   gap: '1rem',
   marginTop: '2rem',
   marginRight: '2.2rem',
   button: {
      fontWeight: 600,
   },
}))
