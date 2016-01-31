import React from 'react';

const ToggleButton = ({
  onClick,
  children
}) => {
  return (
    <button onClick={onClick}>
      {children}
    </button>
  );
};

export default ToggleButton;
