import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import mantra1 from '../../images/mantra/mantra_1.png';
import mantra2 from '../../images/mantra/mantra_2.png';
import mantra3 from '../../images/mantra/mantra_3.png';
import { Link } from 'react-router-dom';

function Mantra() {
  return (
    <>
      <Link className='arrow-icon' to='/' title='volver'>
        <i className='fas fa-long-arrow-alt-left'></i>
      </Link>
      <Header title='Esto es todo lo que tengo que hacer para solucionar este problema que tengo en mi mente' />
      <main>
        <article>
          <p className='text'>Sábana heredada en donde bordo, a modo de mantra, una nota encontrada post-mortem de mi abuela política Julia: “Esto es todo lo que tengo que hacer para solucionar este problema que tengo en mi mente”. </p>
          <img className='image' src={mantra1} alt='' />
          <img className='image' src={mantra2} alt='' />
          <img className='image' src={mantra3} alt='' />
        </article>
      </main>
      <Footer />
    </>
  );
}

export default Mantra;
