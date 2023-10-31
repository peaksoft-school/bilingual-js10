import { styled } from '@mui/material'
import React, { useState } from 'react'
import { useDropzone } from 'react-dropzone'

const UploadFile = () => {
   const [selectedImage, setSelectedImage] = useState(null)
   const [imageName, setImageName] = useState('')

   const maxFileNameLength = 30

   const validateFileName = (file) => {
      const fileName = file.name.toLowerCase()
      return fileName.length < maxFileNameLength
   }

   const onDrop = (acceptedFiles, rejectedFiles) => {
      if (rejectedFiles.length > 0) {
         // eslint-disable-next-line no-alert
         alert('The file name length should be less than 30 characters.')
         return
      }

      const file = acceptedFiles[0]
      if (validateFileName(file)) {
         setSelectedImage(URL.createObjectURL(file))
         setImageName(file.name)
      } else {
         // eslint-disable-next-line no-alert
         alert('The file name length should be less than 30 characters.')
      }
   }

   const { getRootProps, getInputProps } = useDropzone({
      onDrop,
      accept: 'image/*', // Allow only image files
   })

   return (
      <Container>
         {selectedImage ? (
            <BoxImg>
               <StyledImage src={selectedImage} alt={imageName} />
            </BoxImg>
         ) : (
            <StyledDropzone {...getRootProps()}>
               <input {...getInputProps()} />
               <StyledTextUppload className="upploads">
                  Uppload Image
                  {/* Drag & drop an image here, or click to select one */}
               </StyledTextUppload>
            </StyledDropzone>
         )}
         <BoxText>
            <p>{selectedImage ? imageName : 'The file name'}</p>
         </BoxText>
      </Container>
   )
}

const StyledTextUppload = styled('p')({
   fontfamily: 'Poppins',
   textAlign: 'center',
   color: '#3A10E5',
   fontStyle: 'normal',
   fontWeight: '500',
   lineHeight: '18.3px',
})
const Container = styled('div')({
   width: '28rem',
   height: '11.1rem',
   border: '2ps solid #D4D0D0',
   display: 'flex',
   flexDirection: 'row',
   alignItems: 'center',
   justifyContent: 'start',
   gap: '3rem',
   margin: '1.75rem 0',
})
const BoxImg = styled('div')({
   display: 'flex',
   alignItems: 'center',
   border: '1.5px solid #D4D0D0',
   borderRadius: '8px',
   width: '11.3rem',
   height: '11.1rem',
   overflow: 'hidden',
   backgroundOrigin: 'content-box',
})
const BoxText = styled('div')({
   width: '11.3rem',
   height: '11.1rem',
   alignContent: 'center',
   display: 'flex',
   alignItems: 'center',
   '& > p': {
      textAlign: 'center',
      color: '#4C4859',
      fontfamily: 'Poppins',
   },
})
const StyledImage = styled('img')({
   width: '100%',
   height: '100%',
})
const StyledDropzone = styled('div')({
   textAlign: 'center',
   width: '11.3rem',
   height: '11.1rem',
   border: '1.5px solid #D4D0D0',
   borderRadius: '8px',
   backgroundColor: '#FFFFFF',
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
   cursor: 'pointer',
})

export default UploadFile
