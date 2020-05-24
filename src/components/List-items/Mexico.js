import React from 'react';
import Header from '../Header';
import { Link } from 'react-router-dom';

function Mexico() {
  return (
    <>
      <Link to='/' title='volver'>
        <i className='fas fa-long-arrow-alt-left'></i>
      </Link>
      <Header title='Mujeres Tortilla' />
      <main></main>
    </>
  );
}

export default Mexico;
