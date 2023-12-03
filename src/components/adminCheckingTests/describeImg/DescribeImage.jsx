import React from 'react'
import styled from 'styled-components'
import { Background } from '../../../layout/Background'
import Header from '../../../layout/Header'
import Button from '../../UI/Buttons/Button'
import Input from '../../UI/Input'

const DescribeImage = ({ title, duration, questionType }) => {
   return (
      <>
         <Header />
         <Background>
            <Containers>
               <ContainerCkeckInTheTest>
                  {' '}
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
                           // onChange={handleInputChange}
                        />
                     </div>
                  </ContaineScore>
               </ContainerCkeckInTheTest>
               <ContainerButtons>
                  <Button variant="outlined" hoverStyle="#3A10E5">
                     GO BACK
                  </Button>
                  <Button defaultStyle="#2AB930" hoverStyle="#31CF38">
                     Save
                  </Button>
               </ContainerButtons>
            </Containers>
         </Background>
      </>
   )
}

export default DescribeImage
const Containers = styled('div')({
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   marginTop: '4.25rem',
   fontFamily: ' DINNextRoundedLTW04-Medium',
   '.ContainerEvaluation': {
      display: 'flex',
      flexDirection: 'column',
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
