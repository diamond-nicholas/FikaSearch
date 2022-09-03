import React from 'react';
import './FilterNav.scss';

const FilterNav = () => {
  return (
    <nav>
      <div className='nav-item'>
        <div className='nav-person'>
          <p>Maria Jimenez</p>
          <img src='personicon.png' alt='personicon' />
        </div>
        <i class='fal fa-bell'></i>
      </div>
    </nav>
  );
};

export default FilterNav;
