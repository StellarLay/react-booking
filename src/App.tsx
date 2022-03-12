import React, { useState } from 'react';
import Home from './components/homepage/Home';
import Login from './components/Login';

function App() {
  const [isLogin, setIsLogin] = useState(false);

  const updateData = (value: boolean) => {
    setIsLogin(value);
  };

  if (isLogin) {
    return (
      <div className='homeApp'>
        <Home />
      </div>
    );
  } else {
    return (
      <div className='loginApp'>
        <Login getUserStatus={updateData} />
      </div>
    );
  }
}

export default App;
