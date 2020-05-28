import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import sabana1 from '../../images/267/sabana_1.png';
import sabana2 from '../../images/267/sabana_2.png';
import sabana3 from '../../images/267/sabana_3.png';
import { Link } from 'react-router-dom';

function DosSeisSiete() {
  return (
    <>
      <Link className='arrow-icon' to='/' title='volver'>
        <i className='fas fa-long-arrow-alt-left'></i>
      </Link>
      <Header title='267 grandmothers' />
      <main>
        <article>
          <p className='text'>This one of the sheets from my grandmother's trousseau that I repurposed by embroidering on it the names of the female ancestors from my family tree.</p>
          <p className='name-first'>1500 </p>
          <p className='text'>Anna Maria Cathalina</p>
          <p className='text'>Maria</p>
          <p className='text'>Cathalina</p>
          <p className='text'>(...)</p>
          <p className='text'>Eloisa</p>
          <p className='text'>Ana</p>
          <p className='text'>Luisa</p>
          <p className='name-last'>2017</p>
          <p className='text'>There are many names that are nearly impossible to trace (even more so for women), but in all there are 267. This was thanks to my fathers research, which uncovered the names of our ancestors dating back to the 16th century.</p>
          <p className='text'>208x228</p>
          <img className='image' src={sabana1} alt='' />
          <img className='image' src={sabana2} alt='' />
          <img className='image' src={sabana3} alt='' />
        </article>
      </main>
      <Footer />
    </>
  );
}

export default DosSeisSiete;
