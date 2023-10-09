import styled from '@emotion/styled'
import MainCounter from './components/MainCounter/MainCounter'

function App() {
   return (
      <div>
         {/* <h1>Hello World</h1> */}
         <Container>
            <h1>hello</h1>
         </Container>
         <MainCounter />
         <Container>
            <h1>hello</h1>
         </Container>
      </div>
   )
}

const Container = styled('div')`
   width: 100%;
   height: 700px;
`
export default App
