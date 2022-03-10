import React from 'react';
import logo from './img/loginBg.jpg';

interface UserProps {
    username: string;
}

const Login = ({username}: UserProps) => {
    return (
        <div className='login-form'>
            <h1>Приветствуем {username}</h1>
            <div className='login-form__inputs'></div>
            <div className='login-form__preview'>
                <div className='login-form__preview-head'>
                    <h1>Найти свой отель</h1>
                    <p>Исследуй самые необычные места по миру с помощью нашего сервиса</p>  
                </div>    
            </div>
        </div>
    );
}

export default Login;