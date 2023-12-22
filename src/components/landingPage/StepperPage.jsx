import { useState } from 'react'
import { motion } from 'framer-motion'
import Slider from 'react-slick'
import { Grid, Typography, styled } from '@mui/material'
import StepperItem from './StepperItem'
import { stepperText } from '../../utils/helpers/stepperText'
import { BackIcon, NextIcon, Paging, PagingActive } from '../../assets/index'
import { textAnimation } from '../../utils/helpers/animation'

export const Back = (props) => <BackIcon {...props} />
export const Next = (props) => <NextIcon {...props} />

const StepperPage = () => {
   const [pointer, setPointer] = useState(0)

   const customDots = (dots) => <div>{dots}</div>
   const paging = (i) => (i === pointer ? <PagingActive /> : <Paging />)

   const settings = {
      infinite: false,
      className: 'center',
      slidesToShow: 1,
      speed: 900,
      dots: true,
      appendDots: (dots) => customDots(dots),
      customPaging: (i) => paging(i),
      nextArrow: <NextIcon />,
      prevArrow: <BackIcon />,
      beforeChange: (current, next) => setPointer(next),
   }

   return (
      <motion.div
         initial="hidden"
         whileInView="visible"
         viewport={{ amount: 0.4 }}
      >
         <ContainerTitle variants={textAnimation}>
            <Title>Check out each question type</Title>
         </ContainerTitle>
         <Container variants={textAnimation}>
            <Stepper style={{ position: 'relative' }} {...settings}>
               {stepperText.map((stepper, i) => (
                  <StepperItem
                     key={stepper.id}
                     stepper={stepper}
                     prop={i === pointer}
                  />
               ))}
            </Stepper>
         </Container>
      </motion.div>
   )
}

export default StepperPage

const ContainerTitle = styled(motion(Grid))(() => ({
   display: 'flex',
   justifyContent: 'center',
}))
const Title = styled(Typography)(() => ({
   fontFamily: 'Gilroy',
   fontStyle: 'normal',
   fontWeight: 700,
   fontSize: '40px',
   lineHeight: '48px',
   color: '#3752B4',
}))

const Container = styled(motion(Grid))(() => ({
   display: 'flex',
   justifyContent: 'center',
   '& .slick-center': {
      transition: 'transform 0.2s ease, scale 0.3s ease',
   },
   gap: '50px',
   overflow: 'hidden',
   marginTop: '30px',
   widht: '100%',
   height: '740px',
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

   '& .slick-track': {
      display: 'flex',
      justifyContent: 'center',
      width: '100px',
      transition: 'transform 0.3s ease',
   },

   '& .slick-list': {
      width: '1050px',
      height: '740px',
   },
   '& .slick-arrow': {
      cursor: 'pointer',
      zIndex: 1,
      position: 'relative',
      top: '200px',
   },
   '& .slick-next': {
      position: 'relative',
      right: '460px',
   },
   '& .slick-prev': {
      position: 'relative',
      left: '360px',
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
