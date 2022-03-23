import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBars } from '@fortawesome/free-solid-svg-icons';
import SignBtn from '../elements/SignBtn';
import { ILoginProps } from '../types/types';

type menuProps = {
  open: string;
  close: string;
};

const menuBurgerClass: menuProps = {
  open: 'header__main-menu',
  close: 'header__main-menu header__main-menu__hidden',
};

const Header = (props: ILoginProps) => {
  const [isBurger, setIsBurger] = useState(false);

  const clickBurger = () => {
    isBurger === false ? setIsBurger(true) : setIsBurger(false);
  };

  return (
    <header className='header'>
      <FontAwesomeIcon
        icon={faBars}
        className='burger-icon'
        onClick={clickBurger}
      />
      <div className='header__logo-block'>
        <a href='/'>
          <span className='header__logo-title'>Travelly</span>
        </a>
      </div>
      <div className='header__nav-block'>
        <nav
          className={
            isBurger === true ? menuBurgerClass.open : menuBurgerClass.close
          }
        >
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
            <FontAwesomeIcon
              icon={faSearch}
              className='search-icon search-header-icon'
            />
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
    </header>
  );
};

export default Header;
