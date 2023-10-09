import { Grid, styled, Typography } from '@mui/material'
import React from 'react'

const StepperItem = ({ stepper, prop }) => {
   return (
      <Container background={stepper.background} prop={prop}>
         <Grid style={{ display: 'flex', flexDirection: 'column' }}>
            <Title textColor={stepper.titleColor}>{stepper.title}</Title>
            {prop && <Text prop={prop}>{stepper.desciption}</Text>}
         </Grid>
         <Grid>{stepper.img}</Grid>
      </Container>
   )
}

export default StepperItem

const Container = styled(Grid)(({ background, prop }) => ({
   maxWidth: prop ? '1028px' : '780px',
   backgroundColor: background,
   boxShadow: '16px 16px 20px rgba(0, 0, 0, 0.3)',
   width: '100%',
   height: prop ? '440px' : '390px',
   borderRadius: '70px 70px 70px 0px',
   transition: 'all 0s ease',
   padding: ' 46px 100px 60px 44px',
   display: 'flex',
   marginLeft: prop ? '10px' : '50px',
   marginTop: prop ? '0px' : '20px',
   gap: '42px',
}))

const Title = styled('p')(({ textColor }) => ({
   color: textColor,
   fontFamily: 'Poppins',
   // fontStyle: 'normal',
   fontWeight: 700,
   lineHeight: '46px',
   fontSize: '38px',
   maxWidth: '508px',
   justifySelf: 'self-start',
}))
const Text = styled(Typography)(({ prop }) => ({
   fontFamily: 'Poppins',
   fontStyle: 'normal',
   fontWeight: 400,
   fontSize: '24px',
   lineHeight: '36px',
   color: '#FFFFFF',
   maxWidth: '579px',
   marginTop: prop ? ' 45px' : '0px',
}))
