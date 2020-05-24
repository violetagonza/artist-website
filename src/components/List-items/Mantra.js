import React from 'react';
import Header from '../Header';
import mantra1 from '../../images/mantra/mantra_1.png';
import mantra2 from '../../images/mantra/mantra_2.png';
import mantra3 from '../../images/mantra/mantra_3.png';
import { Link } from 'react-router-dom';

function Mantra() {
  return (
    <>
      <Link to='/' title='volver'>
        <i className='fas fa-long-arrow-alt-left'></i>
      </Link>
      <Header title='Esto es todo lo que tengo que hacer para solucionar este problema que tengo en mi mente' />
      <main>
        <p>Sábana heredada en donde bordo, a modo de mantra, una nota encontrada post-mortem de mi abuela política Julia: “Esto es todo lo que tengo que hacer para solucionar este problema que tengo en mi mente”. </p>
        <img src={mantra1} alt='' />
        <img src={mantra2} alt='' />
        <img src={mantra3} alt='' />
      </main>
    </>
  );
}

export default Mantra;
