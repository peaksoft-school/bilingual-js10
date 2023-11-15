export const USER_KEY = {
   BILINGUAL_USER_KEY: 'BILINGUAL_USER_KEY',
}

export const signUpInput = [
   {
      name: 'firstName',
      label: 'First name',
      type: 'text',
   },
   {
      name: 'lastName',
      label: 'Last name',
      type: 'text',
   },
   {
      name: 'email',
      label: 'Email',
      type: 'email',
   },
   {
      name: 'password',
      label: 'Password',
      type: 'password',
   },
]

export const ROUTES = {
   LOGIN: '/signin',
   REGISTRATION: '/signup',
   ADMIN: {
      index: '/admin',
   },
   USER: {
      index: '/user',
   },
}
