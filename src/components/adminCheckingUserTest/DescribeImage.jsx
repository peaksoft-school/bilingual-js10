import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Background } from '../../layout/Background'
import Header from '../../layout/Header'
import Button from '../UI/Buttons/Button'

const DescribeImage = ({
   title,
   duration,
   questionType,
   answer,
   enteredStatement,
   img,
}) => {
   const [score, setScore] = useState(7)
   const [isFocused, setIsFocused] = useState(false)

   useEffect(() => {
      getQuestionTest()
   }, [])
   const handleFocus = () => {
      setIsFocused(true)
   }

   const handleBlur = () => {
      setIsFocused(false)
   }
   const replaceImage = () => {}
   useEffect(() => {
      const fetchData = async () => {
         try {
            const response = await fetch()
            const data = await response.json()
            const initialScoreFromBackend = data.score
            setScore(initialScoreFromBackend)
         } catch (error) {
            console.error(error)
         }
      }
      fetchData()
   }, [])
   return (
      <>
         <Header />
         <Container>
            <Background marginTop="3rem" padding="0">
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
                           <p className="ColorBlue">Score:</p>
                           <span>{score}</span>
                        </div>
                     </ContaineScore>
                  </ContainerCkeckInTheTest>
                  <ContainerImgQuestion>
                     <BoxImg
                        tabIndex="0"
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        onClick={replaceImage}
                        role="button"
                     >
                        {isFocused ? (
                           <BoxImgRep>
                              <Button
                                 className="replaceImg"
                                 onClick={handleBlur}
                              >
                                 Replace
                              </Button>
                              <img
                                 className="imgReplace"
                                 src={img}
                                 alt="img comes with props"
                              />
                           </BoxImgRep>
                        ) : (
                           <img src={img} alt="img comes with props" />
                        )}
                     </BoxImg>
                     <BoxCorrectAnswer>
                        <p className="p">Correct Answer:</p>
                        <span>{answer}</span>
                     </BoxCorrectAnswer>
                  </ContainerImgQuestion>
                  <ContainerUserAnswer>
                     <p className="TextUserAnswer">User’s Answer </p>
                     <div className="statement-box">
                        <span className="statement">Entered statement:</span>
                        <p className="p">{enteredStatement}</p>
                     </div>
                  </ContainerUserAnswer>
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

export default DescribeImage

const Container = styled('div')({
   display: 'flex',
   justifyContent: 'center',
   fontFamily: ' DINNextRoundedLTW04-Medium',
   '.imgReplace': {
      width: '100%',
      height: '100%',
      opacity: 0.5,
   },
   '.ContainerEvaluation': {
      display: 'flex',
      gap: '7px',
      color: 'green',
   },
   '.TextTestQuestion': {
      color: '#4C4859',
      fontSize: '1.25rem',
      fontWeight: 500,
      lineHeight: '2rem',
      marginBottom: '0.6rem',
   },
   '.p': {
      fontFamily: 'DIN Next Rounded LT W01 Regular',
      fontSize: '1rem',
      lineHeight: '1rem',
      color: '#4C4859',
      fontWeight: 400,
   },
})

const ContainerFlex = styled('div')({
   width: '100%',
   display: 'flex',
   flexDirection: 'column',
   gap: '1rem',
   justifyContent: 'center',
   alignItems: 'start',
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
const ContainerImgQuestion = styled('div')({
   display: 'flex',
   flexDirection: 'row',
   gap: '1rem',
   width: '38rem',
   height: '13rem',
})
const BoxImgRep = styled('div')({
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
   width: '11.25rem',
   height: '11rem',
   alignSelf: 'center',
   borderRadius: '0.5rem',
})
const BoxImg = styled('div')({
   width: '11.25rem',
   height: '11rem',
   alignSelf: 'center',
   borderRadius: '0.5rem',
   img: {
      borderRadius: '0.5rem',
      width: '100%',
      height: '100%',
      cursor: 'pointer',
   },
   '.replaceImg': {
      backgroundColor: 'blue',
      position: 'absolute',
      zIndex: 5,
      color: 'white',
      width: '4rem',
      height: '3rem',
      textAlign: 'center',
      cursor: 'pointer',
      margin: 0,
   },
})
const BoxCorrectAnswer = styled('div')({
   display: 'flex',
   flexDirection: 'row',
   justifyContent: 'start',
   alignItems: 'center',
   gap: '1rem',
})
const ContainerUserAnswer = styled('div')({
   width: '21.25rem',
   height: '4rem',
   display: 'flex',
   flexDirection: 'column',
   justifyContent: 'center',
   alignItems: 'start',
   gap: '1rem',
   '.statement-box': {
      display: 'flex',
      flexDirection: 'row',
      gap: '1rem',
   },
   '.TextUserAnswer': {
      fontFamily: 'DIN Next Rounded LT W04 Medium',
      color: '#4C4859',
      fontSize: '1.125rem',
      lineHeight: '1.28rem',
      fontWeight: 500,
   },
   '.statement': {
      fontFamily: 'DIN Next Rounded LT W04 Medium',
      color: '#4C4859',
      fontSize: '1.14rem',
      lineHeight: '1.28rem',
      fontWeight: 500,
   },
})
const ContainerCkeckInTheTest = styled('div')({
   display: 'flex',
   justifyContent: 'space-between',
   width: '100%',
   alignContent: 'center',
   flexDirection: 'row',
   gap: '10rem',
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
