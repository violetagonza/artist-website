import React from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';

function Mantra() {
  return (
    <>
      <Link to='/' title='volver'>
        <i className='fas fa-long-arrow-alt-left'></i>
      </Link>
      <Header
        title='Esto es todo lo que tengo que hacer para solucionar este problema que tengo en mi mente
'
      />
      <main></main>
    </>
  );
}

export default Mantra;
