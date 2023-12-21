import { Grid, styled, Typography } from '@mui/material'
import React from 'react'

const StepperItem = ({ stepper, prop }) => {
   return (
      <Container background={stepper.background} prop={prop}>
         <AboutDesc>
            <Title textColor={stepper.titleColor}>{stepper.title}</Title>
            {prop && <Text prop={prop}>{stepper.desciption}</Text>}
         </AboutDesc>
         <Grid>
            <img src={stepper.img} alt="globus" />
         </Grid>
      </Container>
   )
}

export default StepperItem

const AboutDesc = styled(Grid)(() => ({
   display: 'flex',
   flexDirection: 'column',
}))
const Container = styled(Grid)(({ background, prop }) => ({
   maxWidth: prop ? '1028px' : '780px',
   backgroundColor: background,
   boxShadow: '16px 16px 20px rgba(0, 0, 0, 0.3)',
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
   fontfamily: 'Gilroy',
   fontStyle: 'normal',
   fontWeight: 700,
   lineHeight: '46px',
   fontSize: '38px',
   maxWidth: '508px',
   justifySelf: 'self-start',
}))
const Text = styled(Typography)(({ prop }) => ({
   fontfamily: 'Poppins',
   fontStyle: 'normal',
   fontWeight: 400,
   fontSize: '24px',
   lineHeight: '36px',
   color: '#FFFFFF',
   maxWidth: '579px',
   marginTop: prop ? ' 45px' : '0px',
}))
