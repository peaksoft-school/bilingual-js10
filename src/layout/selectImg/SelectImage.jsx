import React from 'react'
import { styled } from '@mui/material'
import Button from '../../components/UI/Buttons/Button'

const SelectImage = ({ handleClose }) => {
   return (
      <Container>
         <div className="Box">
            <div className="TitleBlock">
               <div className="TitleBox">
                  {' '}
                  <p className="title">Title</p>
                  {/* <Input label="text" variant="outlined" /> */}
                  <InputTitle
                     className="InputTitles"
                     type="text"
                     placeholder="Take a free practice test and estimate your score"
                     // value={values}
                     // onChange={(e) => setValues(e.target.value)}
                  />
               </div>
               <div className="DurationBox">
                  <p>
                     Duration
                     <br /> (in minutes)
                  </p>
                  <InputDuration placeholder="15:00" />
                  {/* <Input label="text" variant="outlined" /> */}
               </div>
            </div>
            <div className="SelectBlock">
               <p>Type</p>
               <InputAnswer
                  type="text"
                  // value={values}
                  // onChange={(e) => setValues(e.target.value)}
               />
            </div>
            <div className="ImgBlock">
               <div className="UpploadBox">
                  <p className="uppload">Uppload image </p>
               </div>
               <div>
                  <p>file_Name_oftheimg_file.jpg</p>
               </div>
            </div>
            <div className="AnswerBlock">
               <p>CorrectAnswer</p>
               <InputAnswer
                  type="text"
                  // value={values}
                  // onChange={(e) => setValues(e.target.value)}
               />
            </div>
            <div className="ButtonBlock">
               <Button
                  variant="outlined"
                  hoverStyle="#3A10E5"
                  onClick={handleClose}
                  className="Button"
               >
                  GO BACK
               </Button>
               <Button
                  defaultStyle="#2AB930"
                  hoverStyle="#31CF38"
                  className="saveButton"
                  variant="contained"
               >
                  SAVE
               </Button>
            </div>
         </div>
      </Container>
   )
}
const InputTitle = styled('input')(() => ({
   width: '43rem',
   height: '2.8rem',
   borderRadius: '8px',
   border: '2px solid #D4D0D0',
   fontfamily: 'Poppins',
   fontStyle: 'normal',
   fontWeight: 400,
   fontSize: '16px',
   lineHeight: '18px',
   color: '#4C4859',
   paddingLeft: '16px',
   marginTop: '1rem',
   outline: 'none',
   ':hover': {
      border: '2px solid blue',
   },
   ':focus': {
      border: '2px solid blue',
   },
}))
const InputDuration = styled('input')(() => ({
   width: '6rem',
   height: '2.8rem',
   borderRadius: '8px',
   border: '2px solid #D4D0D0',
   fontfamily: 'Poppins',
   fontStyle: 'normal',
   fontWeight: 400,
   fontSize: '16px',
   lineHeight: '18px',
   color: '#4C4859',
   paddingLeft: '16px',
   outline: 'none',
   ':hover': {
      border: '2px solid blue',
   },
   ':focus': {
      border: '2px solid blue',
   },
}))
const InputAnswer = styled('input')(() => ({
   width: '51rem',
   height: '2.8rem',
   borderRadius: '8px',
   border: '2px solid #D4D0D0',
   fontfamily: 'Poppins',
   fontStyle: 'normal',
   fontWeight: 400,
   fontSize: '16px',
   lineHeight: '18px',
   color: '#4C4859',
   paddingLeft: '16px',
   marginTop: '1rem',
   outline: 'none',
   ':hover': {
      border: '2px solid blue',
   },
   ':focus': {
      border: '2px solid blue',
   },
}))
const Container = styled('div')(() => ({
   width: '100vw',
   height: '100vh',
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   background: '#D7E1F8',
   fontfamily: 'Poppins',
   '& .Box': {
      width: '60rem',
      height: '41rem',
      borderRadius: '8px',
      backgroundColor: 'yellow',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      paddingLeft: '3rem',
   },
   '.TitleBlock': {
      display: 'flex',
      flexDirection: 'row',
      marginTop: '1.75rem',
      gap: '2rem',
   },
   '.TitleBox': {
      width: '43rem',
      height: '4.75rem',
   },
   '.DurationBox': {
      width: '7rem',
      height: '5.85rem',
   },
   '.ImgBlock': {
      width: '28rem',
      height: '11.1rem',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'start',
      gap: '2rem',
      marginTop: '1.75rem',
   },
   '.UpploadBox': {
      width: '11.3rem',
      height: '11.1rem',
      border: '1.5px solid #D4D0D0',
      borderRadius: '8px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
   },
   '.SelectBlock': {
      marginTop: '1rem',
   },
   '.AnswerBlock': {
      marginTop: '1rem',
   },
   '& .title': {
      marginTop: '0.6rem',
   },
   '& .uppload': {
      textAlign: 'center',
      color: '#3A10E5',
      paddingLeft: '1rem',
   },
   '.ButtonBlock': {
      display: 'flex',
      gap: '1rem',
      justifyContent: 'end',
      alignItems: 'center',
      marginTop: '2rem',
      fontFamly: 'Poppins',
      paddingLeft: '37rem',
      fontfamily: 'Poppins',
   },
}))
export default SelectImage
