import React from 'react';

const Button = ({ children, onClick, type }) => {
  return (
    <button type={type} onClicik={onClick}>
      {children}
    </button>
  );
};

export default Button;
