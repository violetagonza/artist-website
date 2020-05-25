import React from 'react';
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <footer className='footer'>
      <Link className='footer-text' to='/'>
        <small> &copy; Tania Berta Judith 2020 </small>
      </Link>
    </footer>
  );
}

export default Footer;
