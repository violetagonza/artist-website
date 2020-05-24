import React from 'react';
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <footer>
      <Link to='/'>
        <small> &copy; Tania Berta Judith 2020 </small>
      </Link>
    </footer>
  );
}

export default Footer;
