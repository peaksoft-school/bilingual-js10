import React from 'react'
import { styled } from '@mui/material'
import Button from '../../components/UI/Buttons/Button'
import Select from '../../components/UI/select/Select'
import { Background } from '../Background'

const SelectImage = ({ handleClose }) => {
   return (
      <Background>
         <Container>
            <div className="Box">
               <div className="TitleBlock">
                  <div className="TitleBox">
                     {' '}
                     <p className="title">Title</p>
                     {/* <Input label="text" variant="outlined" /> */}
                     <StyledInput
                        className="InputTitle"
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
                     <StyledInput
                        className="InputDuration"
                        placeholder="15:00"
                     />
                     {/* <Input label="text" variant="outlined" /> */}
                  </div>
               </div>
               <div className="SelectBlock">
                  <p className="SelectType">Type</p>
                  <Select fullWidth />
               </div>
               <div className="ImgBlock">
                  <StyledInput
                     placeholder="Uppload image"
                     className="UpploadBox"
                  >
                     {/* <p className="uppload">Uppload image </p> */}
                  </StyledInput>
                  <div>
                     <p>file_Name_oftheimg_file.jpg</p>
                  </div>
               </div>
               <div className="AnswerBlock">
                  <p>Correct Answer</p>
                  <StyledInput
                     className="InputAnswer"
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
      </Background>
   )
}
// const StyledSelect = styled(Select)({
//    '&.MuiFormControl-root': {
//       marginLeft: '0 !important',
//       width: '51rem',
//       height: '2.8rem',
//       borderRadius: '8px',
//    },
// })
const StyledInput = styled('input')(() => ({
   borderRadius: '8px',
   border: '2px solid #D4D0D0',
   fontfamily: 'Poppins',
   fontStyle: 'normal',
   fontWeight: 400,
   fontSize: '16px',
   lineHeight: '18px',
   color: '#4C4859',
   paddingLeft: '16px',
   marginTop: '0.6rem',
   outline: 'none',
   ':hover': {
      border: '2px solid blue',
   },
   ':focus': {
      border: '2px solid blue',
   },
   '&.InputTitle': {
      marginTop: '1.5rem',
      width: '44rem',
      height: '2.8rem',
   },
   '&.InputDuration': {
      width: '6rem',
      height: '2.8rem',
   },
   '&.InputAnswer': {
      width: '100%',
      height: '2.8rem',
   },
   '&.InputUpload': {
      width: '11.3rem',
      height: '11.1rem',
      border: '1.5px solid #D4D0D0',
      borderRadius: '8px',
      textAlign: 'center',
      color: '#3A10E5',
      paddingLeft: '1rem',
      fontStyle: 'normal',
      fontWeight: '500',
      lineHeight: 'normal',
   },
}))
const Container = styled('div')(() => ({
   display: 'flex',
   fontfamily: 'Poppins',
   '& .Box': {
      // width: '60rem',
      // height: '41rem',
      // borderRadius: '8px',
      // backgroundColor: '#FFFFFF',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
   },
   '.TitleBlock': {
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      marginTop: '1.75rem',
      gap: '2rem',
   },
   '.TitleBox': {
      width: '100%',
      height: '4.75rem',
   },
   '.DurationBox': {
      width: '8rem',
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
      width: '100%',
      marginTop: '2rem',
   },
   '.AnswerBlock': {
      width: '100%',
      marginTop: '1rem',
   },
   '& .title': {
      marginTop: '0.6rem',
   },
   '.SelectType': {
      marginBottom: '1rem',
   },
   '& .uppload': {
      textAlign: 'center',
      color: '#3A10E5',
      paddingLeft: '1rem',
      fontStyle: 'normal',
      fontWeight: '500',
      lineHeight: 'normal',
   },
   '.ButtonBlock': {
      display: 'flex',
      flexDirection: 'row',
      gap: '1rem',
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
      marginTop: '2rem',
      fontFamly: 'Poppins',
      fontfamily: 'Poppins',
   },
}))
export default SelectImage
