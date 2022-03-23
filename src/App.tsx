import React, { useState } from 'react';
import Home from './components/homepage/Home';
import Login from './components/Login';
import './components/css/media.css';

function App() {
  const [isLogin, setIsLogin] = useState(false);

  if (isLogin) {
    return (
      <div className='homeApp'>
        <Home getUserStatus={setIsLogin} />
      </div>
    );
  }

  return (
    <div className='loginApp'>
      <Login getUserStatus={setIsLogin} />
    </div>
  );
}

export default App;
