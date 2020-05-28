import React from 'react';
import { Link } from 'react-router-dom';
function List() {
  return (
    <nav>
      <ul className='landing-list'>
        <li>
          <Link className='landing-link' to='/arcana'>
            The Emperor
          </Link>
        </li>
        <li>
          <Link className='landing-link' to='/picasso'>
            {' '}
            Minotaur
          </Link>
        </li>
        <li>
          <Link className='landing-link' to='/malta'>
            Women awake, Named & 267 grandmothers
          </Link>
        </li>
        <li>
          <Link className='landing-link' to='/mexico'>
            {' '}
            Tortilla women
          </Link>
        </li>
        <li>
          <Link className='landing-link' to='/mantra'>
            {' '}
            This is all I have to do to fix this problem on my mind
          </Link>
        </li>
        <li>
          <Link className='landing-link' to='/loteria'>
            Mom lottery 23046/32046
          </Link>
        </li>
        <li>
          <Link className='landing-link' to='/rosas'>
            3 roses
          </Link>
        </li>
        <li>
          <Link className='landing-link' to='/abejas'>
            7 bees
          </Link>
        </li>
        <li>
          <Link className='landing-link' to='/267'>
            267 grandmothers
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default List;
