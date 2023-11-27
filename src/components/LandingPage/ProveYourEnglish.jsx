import { styled } from '@mui/material'
import { Logo, YellowBackground } from '../../assets'
import Button from '../UI/Buttons/Button'
import { ToBeginButton } from '../UI/Buttons/ToBeginButton'

export const ProveYourEnglish = () => {
   return (
      <div>
         <HeaderContiners>
            <div>
               <Logo />
            </div>
            <ButtonContinersss>
               <Button defaultStyle="#3A10E5" hoverStyle="#4E28E8">
                  to come in
               </Button>
               <Button
                  defaultStyle="white"
                  hoverStyle="#F0EDED"
                  className="registerButton"
               >
                  Registration
               </Button>
            </ButtonContinersss>
         </HeaderContiners>
         <TextContiners>
            <h2>Prove your English </h2>
            <h2>proficiency today with</h2>
            <h1>BILINGUAL</h1>
            <p>
               For nearly 30 years, learners have turned to Rosetta Stone to
               build the fluency
            </p>
            <span>and confidence they need to speak new languages.</span>
            <ToBeginButton className="Buttons">TO BEGIN</ToBeginButton>
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
   top: '11rem',
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
      marginTop: '2rem',
   },
})
const HeaderContiners = styled('div')({
   padding: '1.5rem 5rem 0 5rem',
   width: '100%',
   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'center',
   //   gap: '37.5rem',
   position: 'absolute',
})

const ButtonContinersss = styled('div')({
   display: 'flex',
   gap: '1.5rem',
})
const ContainerBackground = styled(YellowBackground)({
   width: '100%',
   height: '20%',
})
