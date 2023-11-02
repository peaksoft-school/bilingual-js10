// import React, { useEffect, useState } from 'react'
// import { useDispatch } from 'react-redux'
// import { useNavigate } from 'react-router'
// import { USER_KEY, routes } from '../../utils/constants/constants'
// import { loginQuery } from '../../store/auth/authThunk'

// import { login } from '../../store/auth/authSlice'

// export const LoginPage = () => {
//    const [userInfo, setUserInfo] = useState({ email: '', password: '' })
//    const dispatch = useDispatch()
//    const navigate = useNavigate()
//    const handleValueOnChange = (e) => {
//       setUserInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }))
//    }
//    const onSubmit = () => {
//       try {
//          dispatch(loginQuery({ userInfo, navigate, login }))
//          setUserInfo({
//             email: '',
//             password: '',
//          })
//       } catch (error) {
//          return error
//       }
//       return 'hello'
//    }

//    useEffect(() => {
//       const user = JSON.parse(localStorage.getItem(USER_KEY))
//       if (user !== null) {
//          navigate(routes[user.role].path)
//       }
//    }, [dispatch])
//    return (
//       <form>
//          <label>
//             email
//             <input
//                type="text"
//                name="email"
//                value={userInfo.email}
//                onChange={handleValueOnChange}
//             />
//          </label>
//          <lable>
//             password
//             <input
//                type="text"
//                name="password"
//                value={userInfo.password}
//                onChange={handleValueOnChange}
//             />
//          </lable>
//          <button type="button" onClick={onSubmit}>
//             Submit
//          </button>
//       </form>
//    )
// }
