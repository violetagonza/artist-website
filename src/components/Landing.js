import React from 'react';
import Header from './Header';
import Footer from './Footer';
import List from './List';
import { Link } from 'react-router-dom';
function Landing() {
  return (
    <>
      <Header title='Tania Berta Judith' style='header-landing' />
      <main className='landing'>
        <p className='landing-text'>
          I’m an artist -{' '}
          <Link className='landing-link' to='/bio'>
            bio
          </Link>
        </p>
        <address>
          <a className='landing-link' href='mailto:taniabertajudith@gmail.com'>
            taniabertajudith@gmail.com
          </a>
          <a className='landing-link block' href='https://www.instagram.com/tania_berta_judith/' target='_blank' rel='noopener noreferrer'>
            instagram
          </a>
        </address>

        <h2 className='landing-text__title'>Selected work</h2>
        <List />
        <h2 className='landing-text__title'>My book</h2>
        <Link className='landing-link' to='/magia'>
          El libro de la magia blanca
        </Link>
      </main>
      <Footer hidden='hidden' position='footer-position' />
    </>
  );
}

export default Landing;
