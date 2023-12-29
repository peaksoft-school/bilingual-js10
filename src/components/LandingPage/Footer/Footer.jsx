import React from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Typography from '@mui/material/Typography'
import AddOutlinedIcon from '@mui/icons-material/AddOutlined'
import ClearIcon from '@mui/icons-material/Clear'
import styled from '@emotion/styled'
import bilingual from '../../../assets/images/layer.svg'
import youTube from '../../../assets/images/ellipse.svg'
import facebook from '../../../assets/images/faceBook.svg'
import instagram from '../../../assets/images/ellipse2.svg'

const FAQ = [
   {
      id: 1,
      name: 'What is Bilingual ?',
      text: 'The relevance of the findings for cross-linguistic interaction in bilingual phonetic/phonological development is discussed.',
   },
   {
      id: 2,
      name: 'How can I show what I am typing during the test ?',
      text: 'Please take the test in a separate, quiet room. Close all other windows and close all other programs before starting the    test. An external USB keyboard or mouse can be used during the   test. However, when answering test questions, you should only type on one keyboard and use one mouse. Dont switch between multiple keyboards or mice.',
   },
   {
      id: 3,
      name: 'Why should I take the Bilingual English Test ?',
      text: 'Bilingual loves its varied and ranging staff of guest contributors. From edleaders, educators and students to business leaders, tech experts and researchers we are committed to finding diverse voices that highlight the cutting edge of learning.',
   },
   {
      id: 4,
      name: 'How can I make sure my microphone picks up my voice clearly ?',
      text: 'Remember, your audience doesn’t care if you’re comfortable or not, but they do care about what you have to say, so it’s your mission to make it as easy as possible for them to understand you.',
   },
   {
      id: 5,
      name: 'How can I allow a test to record my computers screen ?',
      text: 'Today, educators recognize the increased importance of testing English learners in their home language. The research caught up to what we anecdotally suspected: Assessing kids in their first, or home language is a better pathway to provide every student an equal opportunity to demonstrate what they know and what they are ready to learn next.',
   },
]
export function FooterAccordions() {
   const [expanded, setExpanded] = React.useState(false)
   const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false)
   }
   return (
      <ContainerFooter>
         <h1 className="H1">FAQ:</h1>
         {FAQ.map((item) => (
            <StyledAccordion
               className="Accordions"
               key={item.id}
               item={item}
               expanded={expanded === `panel${item.id}`}
               onChange={handleChange(`panel${item.id}`)}
            >
               <AccordionSummary
                  expandIcon={
                     expanded === `panel${item.id}` ? (
                        <ClearIcon className="ClearIcons" />
                     ) : (
                        <AddOutlinedIcon className="AddOutlinedIcons" />
                     )
                  }
                  aria-controls={`panel${item.id}bh-content`}
                  id={`panel${item.id}bh-header`}
               >
                  {item.name && (
                     <Typography className="TypographyWidth">
                        {item.name}
                     </Typography>
                  )}
               </AccordionSummary>
               {item.text && (
                  <AccordionDetails>
                     <Typography className="Typographys">
                        {item.text}
                     </Typography>
                  </AccordionDetails>
               )}
            </StyledAccordion>
         ))}

         <ContainerIcon>
            <div>
               <img src={bilingual} alt="Bilingual" />
            </div>
            <div className="ControledIcon">
               <a href="https://www.youtube.com/@bilinguallittlestars">
                  <img src={instagram} alt="Instagram" />
               </a>
               <a href="https://www.facebook.com/?locale=ru_RU">
                  <img src={facebook} alt="Facebook" />
               </a>
               <a href="https://www.instagram.com/">
                  <img src={youTube} alt="YouTube" />
               </a>
            </div>
         </ContainerIcon>
         <Paragraf>
            <p>© Copyright PeakSoft. All Rights Reserved</p>
         </Paragraf>
      </ContainerFooter>
   )
}

const StyledAccordion = styled(Accordion)(({ item }) => ({
   ...(item.id === 5 && {
      borderBottom: '1px solid #a0a0a04c',
      paddingBottom: '20px',
   }),
}))

const ContainerFooter = styled('div')(() => ({
   backgroundColor: '#262626',
   padding: '84px 110px 0 110px',
   display: 'flex',
   gap: '1rem',
   flexDirection: 'column',
   borderRadius: 'none',
   '& .H1': {
      color: '#fff',
      fontSize: '2.5rem',
      fontFamily: 'Gilroy',
   },
   '& .Accordions': {
      borderTop: '1px solid #4A4A4A',
      background: '#262626',
      color: '#fff',
      fontSize: '1.25rem',
      boxShadow: 'none',
      paddingTop: '15px',
      borderRadius: 'none',
   },
   '& .Typographys': {
      color: '#ffffff',
      fontSize: '1.1rem',
      fontFamily: 'Poppins',
   },
   '& .TypographyWidth': {
      width: '80%',
   },
   '& .ClearIcons': {
      color: '#fff',
   },
   '& .AddOutlinedIcons': {
      color: '#fff',
   },
}))
const ContainerIcon = styled('div')(() => ({
   display: 'flex',
   justifyContent: 'space-between',
   marginTop: '8rem',
   '& .ControledIcon': { display: 'flex', gap: '10px' },
}))
const Paragraf = styled('div')`
   display: flex;
   justify-content: center;
   text-align: center;
   color: #98a2b3;
   font-size: 1rem;
   margin-top: 1rem;
`
