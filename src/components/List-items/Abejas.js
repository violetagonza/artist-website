import React from 'react';
import Header from '../Header';
import abejas1 from '../../images/abejas/manteles_1.png';
import abejas2 from '../../images/abejas/manteles_2.png';
import abejas3 from '../../images/abejas/manteles_3.png';
import abejas4 from '../../images/abejas/manteles_4.png';
import { Link } from 'react-router-dom';

function Abejas() {
  return (
    <>
      <Link to='/' title='volver'>
        <i className='fas fa-long-arrow-alt-left'></i>
      </Link>
      <Header title='7 abejas' />
      <main>
        <article>
          <p>A series of two cross-stitched tablecloths put to use during the Christmas holidays of 2017.</p>
          <p>The first one is made by my grandmother in the eighties and repurposed by me with 7 bees, based on a pattern of a French magazine inherited from her.</p>
          <p>150x200 cm</p>
          <img src={abejas1} alt='' />
          <img src={abejas2} alt='' />
          <img src={abejas3} alt='' />
          <img src={abejas4} alt='' />
        </article>
        <a href='https://es.openfoodfacts.org/producto/2000000013645/mantecados-de-canela-con-grasa-vegetal-la-flor-de-antequera' target='_blank' rel='noopener noreferrer'>
          Buy mantecaos de canela de Antequera
        </a>
      </main>
    </>
  );
}

export default Abejas;
