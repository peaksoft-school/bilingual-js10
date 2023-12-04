import React from 'react'
import styled from 'styled-components'
import Header from '../../layout/Header'
import { Background } from '../../layout/Background'
import Button from '../UI/Buttons/Button'
import Input from '../UI/Input'

const answers = [
   {
      id: 1,
      title: ' "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam". ',
   },
]

const RespondleastUserTest = ({
   MinimumNumberWords,
   NumberOfWords,
   statement,
   title,
   duration,
   questionType,
}) => {
   const handleInputChange = (e) => {
      const value = parseInt(e.target.value, 10)
      const clampedValue = Math.min(Math.max(value, 0), 10)
      e.target.value = clampedValue
   }
   return (
      <>
         <Header />
         <Container>
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
                        <div>
                           <span className="ColorBlue">
                              Mimimum number of words:
                           </span>
                           <p>{MinimumNumberWords}</p>
                        </div>
                        <div>
                           <span className="ColorBlue">
                              Question Statement:
                           </span>
                           <p>{statement}</p>
                        </div>
                     </ContainerTestQuestion>
                  </div>

                  <ContaineScore>
                     <p>Evaluation</p>
                     <div className="ContainerEvaluation">
                        <p className="ColorBlue">Score:(1-10)</p>
                        <Input type="number" onChange={handleInputChange} />
                     </div>
                  </ContaineScore>
               </ContainerCkeckInTheTest>
               <div className="ContainerTitleMap">
                  <p className="TextUserAnswer">User’s Answer </p>
                  {answers.map((el) => (
                     <CreateAnswerTest key={el.id}>
                        <p>Respond: </p>
                        <div className="TitleText">
                           <p>{el.title}</p>
                        </div>
                     </CreateAnswerTest>
                  ))}
               </div>
               <div className="TextUserAnswer">
                  <span>Number of words:</span>
                  <p>{NumberOfWords}</p>
               </div>
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

export default RespondleastUserTest

const Container = styled('div')({
   marginTop: '4.25rem',
   '.TextUserAnswer': {
      color: '#4C4859',
      fontSize: '1.125rem',
      fontWeight: 500,
      paddingTop: '2.87rem',
      display: 'flex',
      gap: '7px',
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
      gap: '7px',
      color: 'green',
   },
   '& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input': {
      paddingLeft: '40px',
      width: '45px',
      height: '10px',
   },
   '.ContainerTitleMap': {
      display: 'flex',
      flexDirection: 'column',
      gap: '14px',
   },
})
const ContaineScore = styled('div')({
   display: 'flex',
   flexDirection: 'column',
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
   gap: '0.5rem',
   '.FixedDisplay': {
      display: 'flex',
      gap: '10px',
      textAlign: 'center',
   },
})
const CreateAnswerTest = styled('div')({
   display: 'flex',
   gap: '7px',
   p: { color: '#4C4859', fontSize: '1rem', fontWeight: 500 },
   '.TitleText': {
      display: 'flex',
      justifyContent: 'start',
      p: {
         color: ' #3A10E5',
         fontSize: '1rem',
         gotnWeight: 400,
      },
   },
})
const ContainerButtons = styled('div')(() => ({
   display: 'flex',
   justifyContent: 'end',
   gap: '1rem',
   marginTop: '2rem',
}))
