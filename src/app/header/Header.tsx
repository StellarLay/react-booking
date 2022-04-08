import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBars } from '@fortawesome/free-solid-svg-icons';
import SignBtn from '../../shared/components/elements/SignBtn';
import { ILoginProps } from '../types';
import { Link } from 'react-router-dom';

type menuProps = {
  open: string;
  close: string;
};

type MenuListProps = {
  id: number;
  title: string;
  path: string;
};

const menuList: MenuListProps[] = [
  { id: 1, title: 'О нас', path: '/about' },
  { id: 2, title: 'Новости', path: '/news' },
  { id: 3, title: 'Отзывы', path: '/reviews' },
  { id: 4, title: 'Места', path: '/places' },
];

const menuBurgerClass: menuProps = {
  open: 'header__main-menu',
  close: 'header__main-menu header__main-menu__hidden',
};

const Header = (props: ILoginProps) => {
  const [isBurger, setIsBurger] = useState(false);

  const clickBurger = () => {
    setIsBurger(isBurger === false ? true : false);
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
            {menuList.map((item) => (
              <Link key={item.id} to={item.path}>
                <li>{item.title}</li>
              </Link>
            ))}
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
