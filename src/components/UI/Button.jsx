import React from 'react';

const Button = ({ children, onClick, type }) => {
  return (
    <button style={{ color: 'green' }} type={type} onClicik={onClick}>
      {children}
    </button>
  );
};

export default Button;
