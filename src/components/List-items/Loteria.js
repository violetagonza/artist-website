import React from 'react';
import Header from '../Header';
import { Link } from 'react-router-dom';

function Loteria() {
  return (
    <>
      <Link to='/' title='volver'>
        <i className='fas fa-long-arrow-alt-left'></i>
      </Link>
      <Header title='Lotería de la mama 23046/32046' />
      <main></main>
    </>
  );
}

export default Loteria;
