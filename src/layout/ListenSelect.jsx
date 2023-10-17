import { styled } from '@mui/material'

const ListenSelect = () => {
   return (
      <Container>
         <div className="ContainMomdal">
            <div className="display">
               <div className="Contain">
                  <p>Title</p>
                  <input
                     className="InputText"
                     type="text"
                     placeholder="Select real English words"
                  />
               </div>
               <div className="Containers">
                  <label>
                     <p>
                        Duration <br /> (in minutes)
                     </p>
                     <input className="InputTime" type="time" />
                  </label>
               </div>
            </div>
            <div className="ContainSelects">
               <p>Type</p>
               <select className="ContainSelect">
                  <option>Listen and select English word</option>
                  <option>Select real English words</option>
                  <option>Select real English words</option>
                  <option>Select real English words</option>
                  <option>Select real English words</option>
               </select>
            </div>
            <div className="ContainButton">
               <Button> ADD OPTIONS</Button>
            </div>
         </div>
      </Container>
   )
}

const Container = styled('div')(() => ({
   display: 'flex',
   justifyContent: 'center',
   paddingTop: '3.25rem',
   background: '#D7E1F8',
   width: '100%',
   height: '100vh',
   border: 'none',
   '.ContainMomdal': {
      paddingTop: '3.1rem',
      width: '61.2rem',
      height: ' 22.8rem',
      background: '#FFF',
      BoxShadow: '(0px 4px 39px rgba(196, 196, 196, 0.60))',
      borderRadius: '1rem',
   },
   '.display': {
      display: 'flex',
      gap: '1.5rem',
      lineHeight: '1.4rem',
      justifyContent: 'center',
      alignItems: 'center',
   },
   ' p': {
      fontSize: '1rem',
      fontStyle: 'normal',
      fontWeight: '500',
      color: ' #4B4759',
   },
   ' .InputText': {
      width: '43.5rem',
      height: '2.8rem',
      borderRadius: '0.5rem',
      border: ' 1.53px solid #D4D0D0',
      backgrount: '#fff',
      paddingLeft: '1rem',
   },
   ' .InputTime': {
      width: '6.1rem',
      height: '2.8rem',
      borderRadius: '0.5rem',
      border: ' 1.53px solid#D4D0D0',
      backgrount: '#fff',
   },
   '.Contain': {
      marginTop: '1.5rem',
   },
   '.ContainButton': {
      display: 'flex',
      justifyContent: 'end',
      marginRight: '5rem',
   },
   button: {
      display: 'flex',
      height: '2.625rem',
      padding: ' 0.75rem 1.5rem 0.75rem 1rem',
      gap: '0.5rem',
      borderRadius: ' 0.5rem',
      background: '#3A10E5',
      color: '#FFF',
      fontSize: '0.875rem',
      textAlign: 'center',
      border: 'none',
   },
   '.ContainSelect': {
      display: 'flex',
      justifyContent: 'center',
      width: '51.2rem',
      height: '2.8rem',
      borderRadius: '0.5rem',
      border: '1.53px solid #D4D0D0',
      background: ' #FFF',
      textAlign: 'center',
   },
   '  .ContainSelects': {
      margin: '3.2rem 5rem',
   },
}))

export default ListenSelect
