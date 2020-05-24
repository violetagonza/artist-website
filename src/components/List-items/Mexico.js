import React from 'react';
import Header from '../Header';
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
      <Link to='/' title='volver'>
        <i className='fas fa-long-arrow-alt-left'></i>
      </Link>
      <Header title='Mujeres Tortilla' />
      <main>
        <article>
          <small>21/11 — 21/01 2016</small>
          <p>Curator Adriana de la Rosa</p>
          <p>La Casa Rosa, Oaxaca</p>
          <p>Based on my experiences living with women from two Mazatec families in Huautla de Jimenez (Oaxaca, Mexico), I embroidered a huipil as a storytelling device. This is the piece that lead me to use embroidery as a means for research and made me aware of our responsibility to conserve the knowledges of our ancestors.</p>
          <p>90x50 cm</p>
          <img src={mexico1} alt='' />
          <img src={mexico2} alt='' />
          <img src={mexico3} alt='' />
          <img src={mexico4} alt='' />
          <img src={mexico5} alt='' />
          <img src={mexico6} alt='' />
          <img src={mexico7} alt='' />
          <img src={mexico8} alt='' />
          <img src={mexico9} alt='' />
          <img src={mexico10} alt='' />
          <img src={mexico11} alt='' />
          <img src={mexico12} alt='' />
        </article>
        <a href='https://www.youtube.com/watch?v=cQXxM-RAYsU&t=1284s' target='_blank' rel='noopener noreferrer'>
          Maria Sabina de Huautla de Jiménez
        </a>
      </main>
    </>
  );
}

export default Mexico;
