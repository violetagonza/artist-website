import React from 'react';

function Header(props) {
  return (
    <header>
      <h1 className='header'>{props.title}</h1>
    </header>
  );
}

export default Header;
