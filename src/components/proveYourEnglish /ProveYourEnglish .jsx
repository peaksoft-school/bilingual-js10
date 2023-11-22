import { styled } from '@mui/material'
import { Baground, Logo } from '../../assets'
import Button from '../UI/Buttons/Button'
import { ToBeginButton } from '../UI/Buttons/ToBeginButton'

export const ProveYourEnglish = () => {
   return (
      <div>
         <HeaderContinersss>
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
         </HeaderContinersss>

         <TextContiners>
            <h2>Prove your English </h2>
            <h2>proficiency today with</h2>
            <h1>BILINGUAL</h1>
            <p>
               For nearly 30 years, learners have turned to Rosetta Stone to
               build the fluency
            </p>
            <span>and confidence they need to speak new languages.</span>
            <ToBeginButton className="Buttonsssss">TO BEGIN</ToBeginButton>
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
   left: '6.5rem',
   h1: {
      fontSize: '3rem',
      color: '#cd4a85',
      marginTop: '1rem',
   },
   h2: {
      fontSize: '2.5rem',
      color: '#43404e',
   },
   p: {
      color: '#23212a',
      marginTop: '2rem',
   },
   '.Buttonsssss': {
      marginTop: '2.8rem',
   },
})
const HeaderContiners = styled('div')({
   display: 'flex',
   gap: '37.5rem',
   position: 'absolute',
   marginTop: '2rem',
})
const HeaderContinersss = styled('div')({
   display: 'flex',
   justifyContent: 'center',
   alignContent: 'center',
})
const ButtonContinersss = styled('div')({
   display: 'flex',
   gap: '1.5rem',
})
const ContainerBackground = styled(Baground)({
   width: '100%',
   height: '20%',
})
