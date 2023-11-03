import React from 'react'
import { styled } from '@mui/material'
import Button from '../UI/Buttons/Button'
import { TestListIcon } from '../../assets'

export const TestListPage = ({ onClickTryTest }) => {
   return (
      <ListContainerStyle>
         <div className="mainContainer">
            <TestListIcon />
            <div className="description">
               <p>15 MINUTES</p>
               <p>English advanced test</p>
               <p>Train as much as you like.</p>
            </div>
         </div>
         <Button
            onClick={onClickTryTest}
            variant="outlined"
            hoverStyle="#3A10E5"
         >
            try test
         </Button>
      </ListContainerStyle>
   )
}
const ListContainerStyle = styled('div')({
   display: 'flex',
   alignItems: 'end',
   columnGap: '16rem',
   '.mainContainer': {
      display: 'flex',
      alignItems: 'center',
      columnGap: '45px',
      '.description': {
         display: 'flex',
         flexDirection: 'column',
         rowGap: '15px',
         '& :first-child': {
            color: '#3A10E5',
            fontStyle: 'normal',
            fontSize: '15px',
            fontWeight: '900',
         },
         '& :nth-child(2)': {
            color: '#4C4859',
            fontStyle: 'normal',
            fontSize: '26px',
            fontWeight: '500',
         },
         '& :nth-child(3)': {
            color: '#4C4859',
            fontStyle: 'normal',
            fontSize: '16px',
            fontWeight: '400',
         },
      },
   },
})
