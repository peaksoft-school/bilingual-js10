import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { styled } from '@mui/material'
import { StickRed } from '../../assets'

const Notify = (messages, promise) => {
   const { sucessTitle, successMessage, errorTitle } = messages
   return toast.promise(promise, {
      pending: 'Promise is pending...',
      success: {
         render() {
            return (
               <SuccessToast>
                  <h4>{sucessTitle}</h4>
                  <p>{successMessage}</p>
               </SuccessToast>
            )
         },
         style: {
            backgroundColor: '#e9fbe7',
            height: '6rem',
         },
      },
      error: {
         render({ data }) {
            return (
               <ErrorToast>
                  <h4>{errorTitle}</h4>
                  <p>{data.response.data.message}</p>
               </ErrorToast>
            )
         },
         style: {
            backgroundColor: '#fff1f1',
            height: '6rem',
         },
         icon: <StickRed />,
      },
   })
}
export default Notify
const SuccessToast = styled('div')`
   h4 {
      color: #4d4859;
   }
   p {
      color: #646464;
   }
`
const ErrorToast = styled('div')`
   h4 {
      color: #4d4859;
   }
   p {
      color: #646464;
   }
`
