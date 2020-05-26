import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import loteria1 from '../../images/loteria/loteria_1.png';
import loteria2 from '../../images/loteria/loteria_2.png';
import loteria3 from '../../images/loteria/loteria_3.png';
import { Link } from 'react-router-dom';

function Loteria() {
  return (
    <>
      <Link className='arrow-icon' to='/' title='volver'>
        <i className='fas fa-long-arrow-alt-left'></i>
      </Link>
      <Header title='Lotería de la mama 23046/32046' />
      <main>
        <article>
          <p className='text'>Sábana heredada con un roto en forma de “siete” en donde transfiero a bordado la nota que lleva mi abuela en la cartera con los números de la lotería a los que jugaba su madre. </p>
          <img className='image' src={loteria1} alt='' />
          <img className='image' src={loteria2} alt='' />
          <img className='image' src={loteria3} alt='' />
          <iframe className='video' title='Loteria' src='https://youtube.com/embed/w4BWCHCgGVI'></iframe>
        </article>
      </main>
      <Footer />
    </>
  );
}

export default Loteria;
