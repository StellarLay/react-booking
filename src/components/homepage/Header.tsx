import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import SignBtn from '../elements/SignBtn';
import { ILoginProps } from '../types/types';

const Header = (props: ILoginProps) => {
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
        <SignBtn
          className='sign__submit-btn__light'
          value='Войти'
          width='30%'
          margin='0 10px 0 0'
          getUserStatus={props.getUserStatus}
        />
        <SignBtn
          className='sign__submit-btn__dark'
          value='Регистрация'
          width='35%'
        />
      </div>
    </div>
  );
};

export default Header;
