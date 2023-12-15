// import { Typography, styled } from '@mui/material'
// import React from 'react'
// import ReactPlayer from 'react-player'
// import { usefulVideosList } from '../../utils/helpers/useVideoList'

// const UsefulVideo = () => {
//    return (
//       <Container>
//          <MyText>Useful videos</MyText>
//          <StyledBox>
//             {usefulVideosList.map((item) => (
//                <StyledInnerBox key={item.id}>
//                   <BoxVideo>
//                      <ReactPlayer url={item.url} width="100%" height="100%" />
//                   </BoxVideo>
//                   <StyledBottomBox>
//                      <Title>{item.title}</Title>
//                      <Text>Duration {item.duration}</Text>
//                   </StyledBottomBox>
//                </StyledInnerBox>
//             ))}
//          </StyledBox>
//       </Container>
//    )
// }

// const Container = styled('div')({
//    fontfamily: 'Gilroy',
//    fontStyle: 'normal',
//    position: 'relative',
//    height: '28rem',
//    display: 'flex',
//    flexDirection: 'column',
//    alignItems: 'center',
//    gap: '2.8rem',
// })

// const StyledBox = styled('div')({
//    width: '79rem',
//    height: '21.05rem',
//    display: 'flex',
//    flexDirection: 'row',
//    justifyContent: 'space-around',
//    alignItems: 'center',
// })

// const MyText = styled(Typography)({
//    fontSize: '2.5rem',
//    fontWeight: '700',
//    lineHeight: '48.36px',
//    color: '#3752B4',
//    textAlign: 'center',
//    paddingTop: '10px',
// })
// const Title = styled(Typography)({
//    fontSize: '1.3rem',
//    fontWeight: '700',
//    lineHeight: '24.18px',
//    color: '#3A10E5',
//    paddingLeft: '20px',
// })
// const Text = styled(Typography)({
//    fontfamily: 'Gilroy',
//    fontSize: '1.2rem',
//    fontWeight: '400',
//    lineHeight: '20.88px',
//    color: '#212629',
//    paddingLeft: '20px',
// })
// const StyledInnerBox = styled('div')({
//    width: '23rem',
//    height: '21.75rem',
//    display: 'flex',
//    flexDirection: 'column',
//    alignItems: 'start',
//    borderRadius: '16px',
//    gap: '0.7rem',
//    border: '1px solid #DDDDDD',
//    backgroundColor: 'white',
// })
// const BoxVideo = styled('div')({
//    width: '23rem',
//    height: '16rem',
//    border: '1px solid #DDDDDD',
//    borderTopLeftRadius: '16px',
//    borderTopRightRadius: '16px',
//    overflow: 'hidden',
// })

// const StyledBottomBox = styled('div')({
//    width: '23rem',
//    height: '5rem',
//    display: 'flex',
//    flexDirection: 'column',
//    justifyContent: 'space-around',
// })
// export default UsefulVideo

import { Grid, Typography, styled } from '@mui/material'
import { DefaultPlayer as Video } from 'react-html5video'
import 'react-html5video/dist/styles.css'
import { motion } from 'framer-motion'
import { textAnimation } from '../../utils/helpers/animation'
import video1 from '../../assets/video/video1.MP4'
import video2 from '../../assets/video/video2.MP4'
import video3 from '../../assets/video/video3.MP4'
import poster from '../../assets/images/poster.jpg'

const videos = [
   {
      id: 1,
      poster,
      video: video1,
      title: 'Test Overview',
      duration: 'Duration 1:00',
   },
   {
      id: 2,
      poster,
      video: video2,
      title: 'Test Walkthrough',
      duration: 'Duration 5:00',
   },
   {
      id: 3,
      poster,
      video: video3,
      title: 'Integrated Subscores',
      duration: 'Duration 2:55',
   },
]

const videosAnimation = {
   hidden: {
      opacity: 0,
      y: 100,
   },
   visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom * 0.1 },
   }),
}

const UsefulVideos = () => {
   return (
      <Container
         initial="hidden"
         whileInView="visible"
         viewport={{ amount: 0.4 }}
      >
         <FirstSection>
            <TitleContainer variants={textAnimation}>
               <Title> Useful videos </Title>
            </TitleContainer>
            <SecondSection>
               {videos.map((item) => {
                  return (
                     <VideoContainer
                        key={item.id}
                        variants={videosAnimation}
                        custom={item.id}
                     >
                        <StyledVideo
                           controle={[
                              'PlayPause',
                              'Seek',
                              'Time',
                              'Volume',
                              'FullScreen',
                           ]}
                           poster={item.poster}
                        >
                           <source src={item.video} type="video/webm" />
                        </StyledVideo>

                        <VideoTitle>{item.title}</VideoTitle>
                        <VideoDuration>{item.duration}</VideoDuration>
                     </VideoContainer>
                  )
               })}
            </SecondSection>
         </FirstSection>
      </Container>
   )
}

export default UsefulVideos

const Container = styled(motion(Grid))(() => ({
   // background: '#F0F0DC',
}))

const FirstSection = styled(Grid)(() => ({
   display: 'flex',
   flexDirection: 'column',
}))
const TitleContainer = styled(motion(Grid))(() => ({
   textAlign: 'center',
}))
const Title = styled(Typography)(() => ({
   fontFamily: 'Gilroy',
   fontStyle: 'normal',
   fontWeight: 700,
   fontSize: '40px',
   lineHeight: '48px',
   color: '#3752B4',
}))
const SecondSection = styled(Grid)(() => ({
   display: 'flex',
   justifyContent: 'space-evenly',
   flexWrap: 'wrap',
   marginBottom: '120px',
   marginTop: '48px',
}))
const StyledVideo = styled(Video)(() => ({
   borderRadius: '16px 16px 0px 0px',
   width: '370px',
   height: '261px',
}))
const VideoContainer = styled(motion(Grid))(() => ({
   background: '#FFFFFF',
   border: '1px solid #DDDDDD',
   borderRadius: '16px',
   transform: 'matrix(1, 0, 0, 1, 0, 0)',
}))
const VideoTitle = styled(Typography)(() => ({
   fontFamily: 'Gilroy',
   fontStyle: 'normal',
   fontWeight: 700,
   fontSize: '20px',
   lineHeight: '24px',
   color: '#3A10E5',
   marginTop: '16px',
   marginLeft: '20px',
   marginBottom: '10px',
}))

const VideoDuration = styled(Typography)(() => ({
   fontFamily: 'Gilroy',
   fontStyle: 'normal',
   fontWeight: 400,
   fontSize: '18px',
   lineHeight: '21px',
   color: '#212629',
   marginLeft: '20px',
   marginBottom: '16px',
}))
