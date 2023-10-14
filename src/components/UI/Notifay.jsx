import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { styled } from '@mui/material'
import { StickRed } from '../../assets'

const Notify = (messageVariant, messages, text) => {
   const showLoadingToast = () => {
      return toast.promise(
         new Promise((resolve, reject) => {
            setTimeout(() => {
               if (messageVariant === 'success') {
                  resolve()
               } else {
                  reject()
               }
            }, 1000)
         }),
         {
            pending: 'Promise is pending...',
            success: {
               render() {
                  return (
                     <SuccessToast>
                        <h4>{messages}</h4>
                        <p>{text}</p>
                     </SuccessToast>
                  )
               },
               style: {
                  backgroundColor: '#e9fbe7',
                  height: '6rem',
               },
            },
            error: {
               render() {
                  return (
                     <ErrorToast>
                        <h4>{messages}</h4>
                        <p>{text}</p>
                     </ErrorToast>
                  )
               },
               style: {
                  backgroundColor: '#fff1f1',
                  height: '6rem',
               },
               icon: <StickRed />,
            },
         }
      )
   }

   showLoadingToast()

   return (
      <ToastContainer
         position="top-right"
         autoClose={2000}
         hideProgressBar={false}
         newestOnTop={false}
         closeOnClick
         rtl={false}
         pauseOnFocusLoss
         draggable
         pauseOnHover
         theme="light"
      />
   )
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
