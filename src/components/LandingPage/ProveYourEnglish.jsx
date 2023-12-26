import { useNavigate } from 'react-router-dom'
import { styled } from '@mui/material'
import { useEffect, useState } from 'react'
import { Logo, YellowBackground } from '../../assets'
import Button from '../UI/Buttons/Button'
import { ToBeginButton } from '../UI/Buttons/ToBeginButton'

export const ProveYourEnglish = () => {
   const [isHeaderFixed, setIsHeaderFixed] = useState(false)
   const navigate = useNavigate()

   const handleComeInClick = () => {
      navigate('/signin')
   }
   const handleLoginClick = () => {
      navigate('/signup')
   }
   useEffect(() => {
      const handleScroll = () => {
         const offset = window.scrollY
         setIsHeaderFixed(offset > 0)
      }
      window.addEventListener('scroll', handleScroll)
      return () => {
         window.removeEventListener('scroll', handleScroll)
      }
   }, [isHeaderFixed])

   return (
      <div>
         <HeaderContiners isHeaderFixed={isHeaderFixed}>
            <div>
               <Logo />
            </div>
            <ButtonContinersss>
               <Button
                  defaultStyle="#3A10E5"
                  hoverStyle="#4E28E8"
                  onClick={handleComeInClick}
               >
                  LOG IN
               </Button>
               <Button
                  defaultStyle="white"
                  hoverStyle="#F0EDED"
                  className="registerButton"
                  onClick={handleLoginClick}
               >
                  SIGN UP
               </Button>
            </ButtonContinersss>
         </HeaderContiners>
         <TextContiners>
            <h2>Prove your English </h2>
            <h2>proficiency today with</h2>
            <h1>BILINGUAL</h1>
            <p>
               For nearly 30 years, learners have turned to Bilingual to build
               the fluency
            </p>
            <span>and confidence they need to speak new languages.</span>
            <ToBeginButton className="Buttons" onClick={handleComeInClick}>
               TO BEGIN
            </ToBeginButton>
         </TextContiners>
         <ContainerBackground />
      </div>
   )
}
const TextContiners = styled('div')({
   position: 'absolute',
   display: 'flex',
   justifyContent: 'center',
   alignContent: 'center',
   flexDirection: 'column',
   top: '17.5rem',
   left: '5rem',
   h1: {
      fontSize: '3.75rem',
      color: '#cd4a85',
   },
   h2: {
      fontSize: '3.75rem',
      color: '#43404e',
   },
   p: {
      color: '#23212a',
      marginTop: '1.3rem',
   },
   '.Buttons': {
      marginTop: '3rem',
   },
})
const ButtonContinersss = styled('div')({
   display: 'flex',
   gap: '1.5rem',
})
const HeaderContiners = styled('div')(({ isHeaderFixed }) => ({
   backgroundColor: isHeaderFixed ? 'white' : '#FCD200',
   width: '100%',
   zIndex: 3,
   position: 'fixed',
   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'center',
   height: '6rem',
   padding: '1.5rem 5rem',
   transition: 'background-color 1s ease',
   boxShadow: isHeaderFixed ? '0px 4px 10px rgba(0, 0, 0, 0.1)' : 'none',
}))

const ContainerBackground = styled(YellowBackground)({
   width: '100%',
   height: '100%',
})
