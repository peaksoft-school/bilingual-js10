export const USER_KEY = 'BILINGUAL_USER_KEY'

export const routes = {
   LOGIN: '/signin',
   ADMIN: {
      path: '/admin',
   },
   USER: {
      path: '/user',
   },
   //    // GUEST: {
   //    //    index: '/guest',
   //    // },
}

export const users = [
   {
      email: 'user@gmail.com',
      password: 'user123',
      role: 'USER',
      token: 'token',
   },
   {
      email: 'admin@gmail.com',
      password: 'admin123',
      role: 'ADMIN',
      token: 'token',
   },
]
