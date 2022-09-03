import React from 'react';
import './Nav.scss';

const Nav = () => {
  return (
    <nav className='nav'>
      <h1>FikaSearch App</h1>

      <div className='nav-wrapper'>
        <p>Movie List</p>

        <div className='search'>
          <input type='text' placeholder='search' />
          <i class='fal fa-search'></i>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
