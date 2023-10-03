import React from 'react'

const Button = ({ children, type }) => {
   return (
      <button style={{ color: 'green' }} type={type}>
         {children}
      </button>
   )
}

export default Button
