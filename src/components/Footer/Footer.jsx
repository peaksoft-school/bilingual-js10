import React from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Typography from '@mui/material/Typography'
import AddOutlinedIcon from '@mui/icons-material/AddOutlined'
import styled from '@emotion/styled'
import ClearIcon from '@mui/icons-material/Clear'
import { NoEncryption } from '@mui/icons-material'
import Bilingual from '../../assets/Image/Layer 2.svg'
import YouTube from '../../assets/Image/Ellipse 269.svg'
import Fecabook from '../../assets/Image/Group 4328.svg'
import Instagram from '../../assets/Image/Ellipse 264.svg'

const faq = [
   {
      id: 1,
      name: 'What is Bilingual',
      text: 'The relevance of the findings for cross-linguistic interaction in bilingual phonetic/phonological development is discussed.',
   },
   {
      id: 2,
      name: '',
   },
   {
      id: 3,
      name: '',
      text: 'Bilingual loves its varied and ranging staff of guest contributors. From edleaders, educators and students to business leaders, tech experts and researchers we are committed to finding diverse voices that highlight the cutting edge of learning.',
   },
   {
      id: 4,
      name: '',
      text: 'Remember, your audience doesn’t care if you’re comfortable or not, but they do care about what you have to say, so it’s your mission to make it as easy as possible for them to understand you.',
   },
   {
      id: 5,
      name: '',
      text: 'Today, educators recognize the increased importance of testing English learners in their home language. The research caught up to what we anecdotally suspected: Assessing kids in their first, or home language is a better pathway to provide every student an equal opportunity to demonstrate what they know and what they are ready to learn next.',
   },
]
console.log(faq)

export default function ControlledAccordions() {
   const [expanded, setExpanded] = React.useState(false)
   const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false)
   }

   return (
      <ContainerAccardion>
         <h1
            style={{
               fontFamily: 'Gilroy',
               fontSize: '40px',
               fontStyle: 'normal',
               fontWeight: '700',
               lineHeight: '51px',
               color: '#fff',
            }}
         >
            FAQ:
         </h1>

         <Accordion
            style={{
               // borderBottom: '1px solid #4A4A4A',
               // borderTop: '1px solid #4A4A4A',
               background: '#262626',
               color: 'white   ',
               fontFamily: 'Poppins',
               fontSize: '20px',
               fontStyle: 'normal',
               fontWeight: '600',
               lineHeight: '40px',
               '& .css-sh22l5-MuiButtonBase-root-MuiAccordionSummary-root': {
                  boxshadow: 'none',
               },
            }}
            expanded={expanded === 'panel1'}
            onChange={handleChange('panel1')}
         >
            <AccordionSummary
               expandIcon={
                  expanded === `panel1` ? (
                     <ClearIcon style={{ color: 'white' }} />
                  ) : (
                     <AddOutlinedIcon style={{ color: 'white' }} />
                  )
               }
               aria-controls="panel1bh-content"
               id="panel1bh-header"
            >
               <Typography sx={{ width: '33%', flexShrink: 0 }}>
                  What is Bilingual?
               </Typography>
               <Typography sx={{ color: 'text.secondary' }} />
            </AccordionSummary>
            <AccordionDetails>
               <Typography>
                  The relevance of the findings for cross-linguistic interaction
                  in bilingual phonetic/phonological development is discussed.
               </Typography>
            </AccordionDetails>
         </Accordion>
         <Accordion
            expanded={expanded === 'panel2'}
            onChange={handleChange('panel2')}
            style={{
               // borderBottom: '1px solid #4A4A4A',
               background: '#262626',
               color: 'white   ',
               fontFamily: 'Poppins',
               fontSize: '20px',
               fontStyle: 'normal',
               fontWeight: '600',
               lineHeight: '40px',
            }}
         >
            <AccordionSummary
               expandIcon={
                  expanded === `panel2` ? (
                     <ClearIcon style={{ color: 'white' }} />
                  ) : (
                     <AddOutlinedIcon style={{ color: 'white' }} />
                  )
               }
               aria-controls="panel2bh-content"
               id="panel2bh-header"
            >
               <Typography sx={{ width: '33%', flexShrink: 0 }}>
                  How can I show what I am typing during the test?
               </Typography>
               <Typography sx={{ color: 'text.secondary' }} />
            </AccordionSummary>
            <AccordionDetails>
               <Typography>
                  Please take the test in a separate, quiet room. Close all
                  other windows and close all other programs before starting the
                  test. An external USB keyboard or mouse can be used during the
                  test. However, when answering test questions, you should only
                  type on one keyboard and use one mouse. Dont switch between
                  multiple keyboards or mice.
               </Typography>
            </AccordionDetails>
         </Accordion>

         <Accordion
            expanded={expanded === 'panel3'}
            onChange={handleChange('panel3')}
            style={{
               // borderBottom: '1px solid #4A4A4A',
               background: '#262626',
               color: 'white   ',
               fontFamily: 'Poppins',
               fontSize: '20px',
               fontStyle: 'normal',
               fontWeight: '600',
               lineHeight: '40px',
            }}
         >
            <AccordionSummary
               expandIcon={
                  expanded === `panel3` ? (
                     <ClearIcon style={{ color: 'white' }} />
                  ) : (
                     <AddOutlinedIcon style={{ color: 'white' }} />
                  )
               }
               aria-controls="panel3bh-content"
               id="panel3bh-header"
            >
               <Typography sx={{ width: '33%', flexShrink: 0 }}>
                  Why should I take the Bilingual English Test?
               </Typography>
               <Typography sx={{ color: 'text.secondary' }} />
            </AccordionSummary>
            <AccordionDetails>
               <Typography>
                  Bilingual loves its varied and ranging staff of guest
                  contributors. From edleaders, educators and students to
                  business leaders, tech experts and researchers we are
                  committed to finding diverse voices that highlight the cutting
                  edge of learning.
               </Typography>
            </AccordionDetails>
         </Accordion>

         <Accordion
            expanded={expanded === 'panel4'}
            onChange={handleChange('panel4')}
            style={{
               // borderBottom: '1px solid #4A4A4A',
               background: '#262626',
               color: 'white   ',
               fontFamily: 'Poppins',
               fontSize: '20px',
               fontStyle: 'normal',
               fontWeight: '600',
               lineHeight: '40px',
            }}
         >
            <AccordionSummary
               expandIcon={
                  expanded === `panel4` ? (
                     <ClearIcon style={{ color: 'white' }} />
                  ) : (
                     <AddOutlinedIcon style={{ color: 'white' }} />
                  )
               }
               aria-controls="panel4bh-content"
               id="panel4bh-header"
            >
               <Typography sx={{ width: '50%', flexShrink: 0 }}>
                  How can I make sure my microphone picks up my voice clearly?
               </Typography>
            </AccordionSummary>
            <AccordionDetails>
               <Typography>
                  Remember, your audience doesn’t care if you’re comfortable or
                  not, but they do care about what you have to say, so it’s your
                  mission to make it as easy as possible for them to understand
                  you.
               </Typography>
            </AccordionDetails>
         </Accordion>
         <Accordion
            expanded={expanded === 'panel5'}
            onChange={handleChange('panel5')}
            style={{
               // borderBottom: '1px solid #4A4A4A',
               background: '#262626',
               color: 'white   ',
               fontFamily: 'Poppins',
               fontSize: '20px',
               fontStyle: 'normal',
               fontWeight: '600',
               lineHeight: '40px',
               border: NoEncryption,
            }}
         >
            <AccordionSummary
               expandIcon={
                  expanded === `panel5` ? (
                     <ClearIcon style={{ color: 'white' }} />
                  ) : (
                     <AddOutlinedIcon style={{ color: 'white' }} />
                  )
               }
               aria-controls="panel4bh-content"
               id="panel4bh-header"
            >
               <Typography sx={{ width: '33%', flexShrink: 0 }}>
                  How can I allow a test to record my computers screen?
               </Typography>
            </AccordionSummary>
            <AccordionDetails>
               <Typography>
                  Today, educators recognize the increased importance of testing
                  English learners in their home language. The research caught
                  up to what we anecdotally suspected: Assessing kids in their
                  first, or home language is a better pathway to provide every
                  student an equal opportunity to demonstrate what they know and
                  what they are ready to learn next.
               </Typography>
            </AccordionDetails>
         </Accordion>
         <ContainerIcon>
            <div>
               <img src={Bilingual} alt="Bilingual" />
            </div>
            <div
               style={{
                  display: 'flex',
                  gap: '8px ',
               }}
            >
               <a href="https://www.youtube.com/watch?v=JBB9iAo7yrM">
                  <img src={YouTube} alt="YouTube" />
               </a>
               <a href="https://www.youtube.com/watch?v=JBB9iAo7yrM">
                  <img src={Fecabook} alt="Fecabook" />
               </a>
               <a href="https://www.instagram.com/">
                  <img src={Instagram} alt="Instagram" />
               </a>
            </div>
         </ContainerIcon>
         <Paragraf>
            <p>© Copyright PeakSoft. All Rights Reserved</p>
         </Paragraf>
      </ContainerAccardion>
   )
}

const ContainerAccardion = styled('div')`
   background-color: #262626;
   padding: 110px;
   display: flex;
   gap: 1rem;
   flex-direction: column;
`
const ContainerIcon = styled('div')`
   display: flex;
   justify-content: space-between;
   margin-top: 8rem;
`
const Paragraf = styled('div')`
   display: flex;
   justify-content: center;
   color: #98a2b3;
   font-family: 'Poppins';
   font-size: 14px;
   font-style: normal;
   font-weight: 400;
   line-height: 24px;
   margin-top: 1rem;
`
