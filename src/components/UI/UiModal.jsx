import UiModal from '@mui/material/Modal'
import { Box } from '@mui/material'
import React from 'react'

export const Modal = ({
   open,
   handleClose,
   children,
   width,
   height,
   padding,
   borderRadius,
   ...rest
}) => {
   const style = {
      width: { width },
      height: { height },
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      borderRadius: borderRadius || '10px',
      backgroundColor: '#FFF',
      boxShadow: '0px 4px 39px -5px rgba(196, 196, 196, 0.60)',
      padding: `${padding}`,
      '&:focus-visible': {
         outline: '0',
      },
   }
   return (
      <UiModal
         open={open}
         onClose={handleClose}
         aria-labelledby="modal-modal-title"
         aria-describedby="modal-modal-description"
         {...rest}
      >
         <Box sx={style}>{children}</Box>
      </UiModal>
   )
}
