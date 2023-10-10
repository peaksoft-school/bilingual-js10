import { useState } from 'react'
import Slider from 'react-slick'
import { Grid, Typography, styled } from '@mui/material'
import StepperItem from './StepperItem'
import { stepperText } from '../../utils/helpers/stepperText'
import { BackIcon, NextIcon, Paging, PagingActive } from '../../assets/index'

export const Back = (props) => <BackIcon {...props} />
export const Next = (props) => <NextIcon {...props} />

const StepperPage = () => {
   const [pointer, setPointer] = useState(0)

   const customDots = (dots) => <div>{dots}</div>
   const paging = (i) => (i === pointer ? <PagingActive /> : <Paging />)

   const settings = {
      infinite: true,
      className: 'center',
      slidesToShow: 1,
      speed: 1000,
      dots: true,
      slidesToScroll: 1,
      appendDots: (dots) => customDots(dots),
      customPaging: (i) => paging(i),
      nextArrow: <NextIcon />,
      prevArrow: <BackIcon />,
      afterChange: (current) => {
         setPointer(current)
      },
   }

   return (
      <div>
         <ContainerTitle>
            <Title>Check out each question type</Title>
         </ContainerTitle>
         <Container>
            <Stepper {...settings}>
               {stepperText.map((stepper, i) => (
                  <StepperItem
                     key={stepper.id}
                     stepper={stepper}
                     prop={i === pointer}
                  />
               ))}
            </Stepper>
         </Container>
      </div>
   )
}

export default StepperPage

const ContainerTitle = styled(Grid)(() => ({
   display: 'flex',
   justifyContent: 'center',
}))
const Title = styled(Typography)(() => ({
   fontfamily: 'Gilroy',
   fontStyle: 'normal',
   fontWeight: 700,
   fontSize: '40px',
   lineHeight: '48px',
   color: '#3752B4',
}))

const Container = styled(Grid)(() => ({
   display: 'flex',
   justifyContent: 'center',
   gap: '50px',
   overflow: 'hidden',
   marginBottom: '120px',
   marginTop: '30px',
   width: '100%',
}))

const Stepper = styled(Slider)({
   padding: '40px',
   display: 'grid',
   gridTemplateColumns: 'repeat(3, 1fr)',
   gridColumnStart: 1,
   gridColumnEnd: 4,
   alignItems: 'center',
   justifyItems: 'center',
   gap: '30px',
   maxHeight: '600px',

   '& .slick-track': {
      display: 'flex',
      justifyContent: 'center',
      width: '100px',
   },

   '& .slick-list': {
      width: '1050px',
      height: '740px',
   },
   '& .slick-arrow': {
      cursor: 'pointer',
      zIndex: 11,
      position: 'relative',
      top: '200px',
   },
   '& .slick-next': {
      position: 'relative',
      right: '460px',
   },
   '& .slick-prev': {
      position: 'relative',
      left: '370px',
   },
   '& .slick-next:hover, .slick-prev:hover': {
      content: 'none',
      circle: {
         fill: '#3A10E5',
      },

      path: {
         fill: '#fff',
      },
   },

   '& .slick-dots': {
      position: 'relative',
      bottom: '210px',
      right: '40px',
      gridRowStart: 2,
      gridColumn: 2,
      display: 'flex',
      justifyContent: 'center',
      listStyle: 'none',
      gap: '10px',
      alignItems: 'flex-end',
   },
})
