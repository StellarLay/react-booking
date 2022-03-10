import React, { useState } from 'react';
import Login from './components/Login';
import Home from './components/homepage/Home';

function App() {
  const [isLogin, setIsLogin] = useState(false);

  const updateData = (value: boolean) => {
    setIsLogin(value);
  };

  if (isLogin) {
    return (
      <div className='App'>
        <Home />
      </div>
    );
  } else {
    return (
      <div className='App'>
        <Login getUserStatus={updateData} />
      </div>
    );
  }
}

export default App;
