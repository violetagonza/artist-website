import React from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';

function Malta() {
  return (
    <>
      <Link to='/' title='volver'>
        <i className='fas fa-long-arrow-alt-left'></i>
      </Link>
      <Header title='Constellation Malta' />
      <main></main>
    </>
  );
}

export default Malta;
