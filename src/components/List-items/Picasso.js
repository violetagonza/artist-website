import React from 'react';
import Header from '../Header';
import { Link } from 'react-router-dom';

function Picasso() {
  return (
    <>
      <Link to='/' title='volver'>
        <i className='fas fa-long-arrow-alt-left'></i>
      </Link>
      <Header title='In the name of the father' />
      <main></main>
    </>
  );
}

export default Picasso;
