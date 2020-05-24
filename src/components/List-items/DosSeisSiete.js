import React from 'react';
import Header from '../Header';
import sabana1 from '../../images/267/sabana_1.png';
import sabana2 from '../../images/267/sabana_2.png';
import sabana3 from '../../images/267/sabana_3.png';
import { Link } from 'react-router-dom';

function DosSeisSiete() {
  return (
    <>
      <Link to='/' title='volver'>
        <i className='fas fa-long-arrow-alt-left'></i>
      </Link>
      <Header title='267' />
      <main>
        <article>
          <p>This one of the sheets from my grandmother's trousseau that I repurposed by embroidering on it the names of the female ancestors from my family tree.</p>
          <p>1500 </p>
          <p>Anna Maria Cathalina</p>
          <p>(...)</p>
          <p>Eloisa Ana Luisa</p>
          <p>2017</p>
          <p>There are many names that are nearly impossible to trace (even more so for women), but in all there are 267. This was thanks to my fathers research, which uncovered the names of our ancestors dating back to the 16th century..</p>
          <p>208x228</p>
          <img src={sabana1} alt='' />
          <img src={sabana2} alt='' />
          <img src={sabana3} alt='' />
        </article>
      </main>
    </>
  );
}

export default DosSeisSiete;
