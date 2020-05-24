import React from 'react';
import Header from '../Header';
import { Link } from 'react-router-dom';

function Rosas() {
  return (
    <>
      <Link to='/' title='volver'>
        <i className='fas fa-long-arrow-alt-left'></i>
      </Link>
      <Header title='Rosas' />
      <main></main>
    </>
  );
}

export default Rosas;
