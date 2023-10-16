import { styled } from '@mui/material'

const ListenSelect = () => {
   return (
      <Container>
         <div>
            <div>
               <p>Title</p>
               <input type="text" placeholder="Select real English words" />
               <p>Duration (in minutes)</p>
               <input type="time" />
            </div>
            <p>Type</p>
         </div>
         <button>+ ADD OPTIONS</button>
      </Container>
   )
}
const Container = styled('div')(() => ({}))

export default ListenSelect
