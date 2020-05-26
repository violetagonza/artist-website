import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import mexico1 from '../../images/mexico/mexico_1.png';
import mexico2 from '../../images/mexico/mexico_2.png';
import mexico3 from '../../images/mexico/mexico_3.png';
import mexico4 from '../../images/mexico/mexico_4.png';
import mexico5 from '../../images/mexico/mexico_5.png';
import mexico6 from '../../images/mexico/mexico_6.png';
import mexico7 from '../../images/mexico/mexico_7.png';
import mexico8 from '../../images/mexico/mexico_8.png';
import mexico9 from '../../images/mexico/mexico_9.png';
import mexico10 from '../../images/mexico/mexico_10.png';
import mexico11 from '../../images/mexico/mexico_11.png';
import mexico12 from '../../images/mexico/mexico_12.gif';
import { Link } from 'react-router-dom';

function Mexico() {
  return (
    <>
      <Link className='arrow-icon' to='/' title='volver'>
        <i className='fas fa-long-arrow-alt-left'></i>
      </Link>
      <Header title='Mujeres Tortilla' />
      <main>
        <article>
          <small className='initial-text'>21/11 — 21/01 2016</small>
          <p className='initial-text'>Curator Adriana de la Rosa.</p>
          <p className='initial-text'>La Casa Rosa, Oaxaca.</p>
          <p className='text'>Based on my experiences living with women from two Mazatec families in Huautla de Jimenez (Oaxaca, Mexico), I embroidered a huipil as a storytelling device. This is the piece that lead me to use embroidery as a means for research and made me aware of our responsibility to conserve the knowledges of our ancestors.</p>
          <p className='text'>90x50 cm</p>
          <img className='image' src={mexico1} alt='' />
          <img className='image' src={mexico2} alt='' />
          <img className='image' src={mexico3} alt='' />
          <img className='image' src={mexico4} alt='' />
          <img className='image' src={mexico5} alt='' />
          <img className='image' src={mexico6} alt='' />
          <img className='image' src={mexico7} alt='' />
          <img className='image' src={mexico8} alt='' />
          <img className='image' src={mexico9} alt='' />
          <img className='image' src={mexico10} alt='' />
          <img className='image' src={mexico11} alt='' />
          <img className='image' src={mexico12} alt='' />
        </article>
        <a className='link' href='https://www.youtube.com/watch?v=cQXxM-RAYsU' target='_blank' rel='noopener noreferrer'>
          Maria Sabina de Huautla de Jiménez
        </a>
      </main>
      <Footer />
    </>
  );
}

export default Mexico;
