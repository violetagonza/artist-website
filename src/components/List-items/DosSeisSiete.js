import React from 'react';
import Header from '../Header';
import { Link } from 'react-router-dom';

function DosSeisSiete() {
  return (
    <>
      <Link to='/' title='volver'>
        <i className='fas fa-long-arrow-alt-left'></i>
      </Link>
      <Header title='267' />
      <main></main>
    </>
  );
}

export default DosSeisSiete;
