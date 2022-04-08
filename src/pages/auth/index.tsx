import React, { useState, useEffect, useCallback } from 'react';
// import './css/common.css';
import './index.css';
import { ThreeDots } from 'react-loader-spinner';
import SignBtn from '../../shared/components/elements/SignBtn';
import { ILoginProps } from '../../app/types';

// User
const user = {
  email: 'stellarlay@yandex.ru',
  password: '12345',
};

const Login = (props: ILoginProps) => {
  const [isLoader, setIsLoader] = useState(false);
  const [rememberLogin, setRememberLogin] = useState('');

  // Обработчик формы
  const LoginSubmit = useCallback((e) => {
    e.preventDefault();

    const target = e.target as typeof e.target & {
      email: { value: string };
      password: { value: string };
      rememberCheck: { checked: boolean };
    };

    if (
      target.email.value === user.email &&
      target.password.value === user.password
    ) {
      if (target.rememberCheck.checked === true) {
        setRememberLogin(user.email);
      }

      if (props.getUserStatus) {
        props.getUserStatus(true);
      }

      setIsLoader(true);
    }
  }, []);

  // Мгновенная отработка стейта
  useEffect(() => {
    setTimeout(() => {
      setIsLoader(false);
    }, 3000);
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
              defaultValue={rememberLogin}
            />
          </div>
          <div className='login-form__inputs-password-block'>
            <label htmlFor='login-form__inputs-password'>Password</label>
            <input
              id='login-form__inputs-password'
              name='password'
              type='password'
              placeholder='• • • • • • • • • • • •'
              autoComplete='on'
            />
          </div>
          {!isLoader ? (
            <SignBtn className='sign__submit-btn__dark' value='Sign in' />
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
              <input
                type='checkbox'
                id='remember-checkbox'
                name='rememberCheck'
              />
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
            Найдите свой отель
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
