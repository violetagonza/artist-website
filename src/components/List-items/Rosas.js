import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import rosas1 from '../../images/rosas/rosas_1.png';
import rosas2 from '../../images/rosas/rosas_2.png';
import rosas3 from '../../images/rosas/rosas_3.png';
import { Link } from 'react-router-dom';

function Rosas() {
  return (
    <>
      <Link className='arrow-icon' to='/' title='volver'>
        <i className='fas fa-long-arrow-alt-left'></i>
      </Link>
      <Header title='3 roses' />
      <main>
        <article>
          <p className='initial-text'>
            This series is comprised of cross stitch kits from Framecraft Minuatures Ltd <span className='hidden'>,</span> <br /> designed by Ailsa Carradus.
          </p>
          <p className='text'>I follow the established pattern in the stem and on the leaves and I break it in the flower, where I complete it with other leaves, thus mutating the shape. My aim is to highlight the importance of preserving our traditions and ancestral knowledges, as well as to demonstrate their permeability with respect to our always varying perspectives and realities.</p>
          <p className='text'>8x8 cm each one</p>
          <img src={rosas1} alt='' />
          <img src={rosas2} alt='' />
          <img src={rosas3} alt='' />
        </article>
      </main>
      <Footer />
    </>
  );
}

export default Rosas;
