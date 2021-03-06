import React from 'react';

const ButtonPrimary  = ({ value, onClickHandler }) => {
  return (
    <button
      className={'button button-primary'}
      onClick={onClickHandler}
    >
      {value}
    </button>
  );
};

export default ButtonPrimary;
