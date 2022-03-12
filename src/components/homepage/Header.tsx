import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <div className='header'>
      <div className='header__logo-block'>
        <a href='/'>
          <span className='header__logo-title'>Travelly</span>
        </a>
      </div>
      <div className='header__nav-block'>
        <nav className='header__main-menu'>
          <ul className='header__main-menu__ul'>
            <a href='/'>
              <li>О нас</li>
            </a>
            <a href='/'>
              <li>Новости</li>
            </a>
            <a href='/'>
              <li>Отзывы</li>
            </a>
            <a href='/'>
              <li>Места</li>
            </a>
            <FontAwesomeIcon icon={faSearch} className='search-icon' />
          </ul>
        </nav>
      </div>
      <div className='header__sign-btns-block'>
        <button type='submit' className='log-in__btn'>
          Log in
        </button>
        <button type='submit' className='sign-up__btn'>
          Sign up
        </button>
      </div>
    </div>
  );
};

export default Header;
