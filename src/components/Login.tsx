import React, { useState, useEffect } from 'react';
import './css/common.css';
import './css/login.css';
import { ThreeDots } from 'react-loader-spinner';
// import { IUserProps } from '../types/types';

type IUserProps = {
  getUserStatus(isStatus: boolean): void;
};

const Login = (props: IUserProps) => {
  // Стейты
  const [isLogin, setIsLogin] = useState(false);
  const [isLoader, setIsLoader] = useState(false);

  // Обработчик формы
  const LoginSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    const target = e.target as typeof e.target & {
      email: { value: string };
      password: { value: string };
    };

    if (target.email.value !== '' && target.password.value !== '') {
      setIsLogin(true);
      setIsLoader(true);
    } else {
      setIsLogin(false);
      setIsLoader(false);
    }
  };

  // Мгновенная отработка стейта
  useEffect(() => {
    let timer = setTimeout(() => {
      setIsLoader(false);
      props.getUserStatus(isLogin);
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  });

  return (
    <div className='login-form'>
      <form className='login-form__left-bar' onSubmit={LoginSubmit}>
        <span className='login-form__title'>Travelly</span>
        <div className='login-form__inputs'>
          <div className='login-form__inputs-email-block'>
            <label htmlFor='login-form__inputs-email'>Email</label>
            <input
              id='login-form__inputs-email'
              name='email'
              type='email'
              placeholder='React@yandex.ru'
            />
          </div>
          <div className='login-form__inputs-password-block'>
            <label htmlFor='login-form__inputs-password'>Password</label>
            <input
              id='login-form__inputs-password'
              name='password'
              type='password'
              placeholder='• • • • • • • • • • • •'
            />
          </div>
          {!isLoader ? (
            <button type='submit' className='login-form__submit-btn'>
              Sign in
            </button>
          ) : (
            <div className='loader'>
              <ThreeDots
                ariaLabel='loading-indicator'
                color='black'
                width='30'
              />
            </div>
          )}
          <div className='login-form__remember-block'>
            <div className='login-form__remember-block__rememb'>
              <input type='checkbox' id='remember-checkbox' />
              <span className='remember-text'>Remember me</span>
            </div>
            <div className='login-form__remember-block__forgot'>
              <a href='/' className='forgot-link'>
                <span className='forgot-text'>Forgot password?</span>
              </a>
            </div>
          </div>
        </div>
      </form>
      <div className='login-form__preview'>
        <div className='login-form__preview-head'>
          <h1 className='login-form__preview-head__title'>
            Find your own hotel
          </h1>
          <p className='login-form__preview-head__text'>
            Исследуй самые необычные места по миру с помощью нашего сервиса
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
