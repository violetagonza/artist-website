import React from 'react';

const Scroll = (props) => {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return <i title='back to top' onClick={handleClick} className={`fas fa-long-arrow-alt-up arrow-icon ${props.hidden}`}></i>;
};

export default Scroll;
