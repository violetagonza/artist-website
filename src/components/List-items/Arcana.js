import React from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';

function Arcana() {
  return (
    <>
      <Link to='/' title='volver'>
        <i className='fas fa-long-arrow-alt-left'></i>
      </Link>
      <Header title='Arcana, the secrets of Tarot' />
      <main></main>
    </>
  );
}

export default Arcana;
