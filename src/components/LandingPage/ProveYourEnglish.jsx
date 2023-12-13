import { styled } from '@mui/material'
import { ToBeginButton } from '../UI/Buttons/ToBeginButton'
import Header from '../../layout/Header'
import { YellowBackground } from '../../assets'

export const ProveYourEnglish = () => {
   return (
      <div>
         {/* <ContainerHeader> */}
         <Header />
         {/* </ContainerHeader> */}
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

// const ContainerHeader = styled('div')({
//    backgroundColor: isHeaderFixed ? 'white' : 'yellow',
//    position: isHeaderFixed ? 'fixed' : 'static',
//    width: '100%',
//    zIndex: 1000,
// })

const ContainerBackground = styled(YellowBackground)({
   width: '100%',
   height: '50%',
})
const TextContiners = styled('div')({
   position: 'absolute',
   display: 'flex',
   justifyContent: 'center',
   alignContent: 'center',
   flexDirection: 'column',
   top: '11rem',
   left: '5rem',
   h1: {
      fontSize: '4rem',
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
