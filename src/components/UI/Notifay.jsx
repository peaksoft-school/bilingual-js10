/* eslint-disable import/no-extraneous-dependencies */
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Notify = (messageVariant, messages, text) => {
   const showLoadingToast = () => {
      return toast.promise(
         new Promise((resolve) => {
            setTimeout(() => {
               resolve()
            }, 2000)
         }),
         {
            pending: 'Загрузка контента...',
         }
      )
   }

   const message =
      messageVariant === 'success'
         ? 'Успешно сохранено'
         : 'Пожалуйста, заполните все поля'

   console.log(message, messageVariant)

   showLoadingToast().then(() => {
      toast[messageVariant](
         <div>
            <h4>{messages}</h4>
            <p>{text}</p>
         </div>,
         {
            position: 'top-right',
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
         }
      )
   })

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
