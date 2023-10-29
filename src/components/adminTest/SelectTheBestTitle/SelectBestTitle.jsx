import React, { useState } from 'react'
import { styled } from '@mui/material'
import Button from '../../UI/Buttons/Button'
import { InputRadio } from '../../UI/InputRadio'
import { Delete } from '../../../assets'
import { SelectBestModal } from './SelectBestModal'
import TextArea from '../../UI/textarea/TextArea'

export const SelectBestTitle = () => {
   const [openModal, setOpenModal] = useState(false)
   const [titleValues, setTitleValues] = useState('')
   const [options, setOptions] = useState([])
   const [initialText, setInitialText] = useState(
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.'
   )
   const handleClose = () => setOpenModal(false)
   const removeElement = (id) => {
      const newOption = options.filter((option) => option.id !== id)
      setOptions(newOption)
   }
   const handleSave = () => {
      const newOption = {
         id: Math.random(),
         text: titleValues,
         checked: false,
      }
      setTitleValues('')
      setOptions([...options, newOption])
      handleClose()
   }
   return (
      <Container>
         <WidthContainer>
            <div className="ContainTextArea">
               <span>Passage</span>
               <TextArea
                  variant="outlined"
                  multiline
                  value={initialText}
                  fullWidth
                  onChange={(e) => setInitialText(e.target.value)}
               />
            </div>
            <div className="ContainButton">
               <Button
                  hoverStyle="#3A10E5E5"
                  defaultStyle="#3A10E5"
                  className="addNewTestButton"
                  variant="contained"
                  onClick={() => setOpenModal(true)}
               >
                  ADD OPTIONS
               </Button>
            </div>
            <div className="ContainerCreateTests">
               {options?.map((el, index) => (
                  <div
                     style={{ width: '51.25rem' }}
                     key={el.id}
                     className="ContainCreatTest"
                  >
                     <p className="Number">{index + 1}</p>
                     <p>{el.text}</p>
                     <div className="RadioDelete">
                        <InputRadio variant="RADIO" />
                        <Delete
                           onClick={() => removeElement(el.id)}
                           className="DeleteIcon"
                        />
                     </div>
                  </div>
               ))}
            </div>
            {options.length > 0 ? (
               <div className="ControlButton">
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
            ) : null}
            <SelectBestModal
               handleClose={handleClose}
               openModal={openModal}
               titleValues={titleValues}
               setTitleValues={setTitleValues}
               handleSave={handleSave}
            />
         </WidthContainer>
      </Container>
   )
}
const WidthContainer = styled('div')({
   width: '50rem',
})
const Container = styled('div')(() => ({
   '.DeleteIcon': {
      width: '1.25rem',
      height: '1.25rem',
   },
   '.ContainButton': {
      display: 'flex',
      justifyContent: 'end',
      marginTop: '6rem',
      fontFamly: 'Poppins',
      fontWeight: '800',
   },
   '.ControlButton': {
      display: 'flex',
      gap: '1rem',
      justifyContent: 'end',
      alignItems: 'center',
      marginTop: '2rem',
      fontFamly: 'Poppins',
   },
   '.ContainCreatTest': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '4.5rem',
      borderRadius: '0.5rem',
      border: '1.53px solid #D4D0D0',
      background: '#fff',
      columnGap: '2rem',
      padding: '0.88rem',
      widht: '100%',
   },
   '.ContainerCreateTests': {
      display: 'flex',
      justifyContent: 'start',
      rowGap: '1rem',
      flexWrap: 'wrap',
      marginTop: '1.35rem',
      fontFamly: 'Poppins',
      ul: {
         fontSize: '16px',
         fontStyle: 'normal',
         fontWeight: '400',
         lineHeight: 'normal',
         color: '#4C4859',
      },
   },
   '.ContainTextArea': {
      display: 'flex',
      flexDirection: 'column',
      rowGap: '1rem',
      height: '12rem',
      marginTop: '1.5rem',
   },
   '.Number': { paddingBottom: '1.3rem', cursor: 'pointer' },
   '.RadioDelete': {
      display: 'flex',
      gap: '1rem',
      justifyContent: 'center',
      alignItems: 'center',
      paddingBottom: '1.3rem',
      cursor: 'pointer',
   },
}))
