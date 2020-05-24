import React from 'react';
import Header from './Header';
import List from './List';
import { Link } from 'react-router-dom';
function Landing() {
  return (
    <>
      <Header title='Tania Berta Judith' />
      <main>
        <p>
          I’m an artist - <Link to='/bio'>bio</Link>
        </p>
        <a href='mailto:taniabertajudith@gmail.com'>taniabertajudith@gmail.com</a>
        <a href='https://www.instagram.com/tania_berta_judith/' target='_blank' rel='noopener noreferrer'>
          Instagram
        </a>

        <h2>Selected work</h2>
        <List />
        <h2>My book</h2>
        <Link to='/magia'>El libro de la magia blanca</Link>
      </main>
    </>
  );
}

export default Landing;
