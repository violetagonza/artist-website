import React from 'react';
import { Link } from 'react-router-dom';
import Scroll from './Scroll';
function Footer(props) {
  return (
    <footer className='footer'>
      <Scroll hidden={props.hidden} />
      <Link className='footer-text' to='/'>
        <small> &copy; Tania Berta Judith 2020 </small>
      </Link>
    </footer>
  );
}

export default Footer;
