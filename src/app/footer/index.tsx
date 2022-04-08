import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import {
  faInstagram,
  faTwitter,
  faVk,
} from '@fortawesome/free-brands-svg-icons';

const instaIcon = faInstagram as IconProp;
const twitterIcon = faTwitter as IconProp;
const vkIcon = faVk as IconProp;

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__col-1'>
        <span className='footer__col-1__logo'>Travelly</span>
        <span className='footer__col-1__copyright'>
          © 2022 Designed by Danil Kozlov. Developed by Vlad.
        </span>
        <div className='footer__col-1__social'>
          <FontAwesomeIcon icon={instaIcon} className='insta-icon' />
          <FontAwesomeIcon icon={twitterIcon} className='insta-icon' />
          <FontAwesomeIcon icon={vkIcon} className='insta-icon' />
        </div>
        <div className='footer__col-1__menu'>
          <ul>
            <a href='/'>
              <li>Политика конфиденциальности</li>
            </a>
            <a href='/'>
              <li>Политика cookie</li>
            </a>
            <a href='/'>
              <li>Условия использования</li>
            </a>
          </ul>
        </div>
      </div>
      <div className='footer__col-2'>
        <span className='footer__col-2__logo'>Контакты</span>
        <span className='footer__col-2__phone-1'>+79059993203</span>
        <span className='footer__col-2__phone-2'>+79029956415</span>
        <span className='footer__col-2__email'>stellarlay@yandex.ru</span>
      </div>
      <div className='footer__col-3'>
        <span className='footer__col-3__logo'>Меню</span>
        <div className='footer__col-3__menu'>
          <ul>
            <a href='/'>
              <li>Для туристов</li>
            </a>
            <a href='/'>
              <li>Для агенств</li>
            </a>
            <a href='/'>
              <li>Для бизнеса</li>
            </a>
          </ul>
          <ul>
            <a href='/'>
              <li>Акции</li>
            </a>
            <a href='/'>
              <li>Контакты</li>
            </a>
            <a href='/'>
              <li>О нас</li>
            </a>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
