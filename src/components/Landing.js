import React from 'react';
import List from './List';
import { Link } from 'react-router-dom';
function Landing() {
  return (
    <>
      <p>
        I’m an artist - <Link to='/bio'>bio</Link>
      </p>
      <a href='mailto:taniabertajudith@gmail.com'>taniabertajudith@gmail.com</a>
      <a href='https://www.instagram.com/tania_berta_judith/'>Instagram</a>

      <h2>Selected work</h2>
      <List />
      <h2>My book</h2>
      <Link to='/magia'>El libro de la magia blanca</Link>
    </>
  );
}

export default Landing;
