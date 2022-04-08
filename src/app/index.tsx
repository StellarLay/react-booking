import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home';
import Login from '../pages/auth';
import News from '../pages/news';
import About from '../pages/about';
import Reviews from '../pages/reviews';
import Places from '../pages/places';
import './styles/media.css';
import './index.css';

function App() {
  const [isLogin, setIsLogin] = useState(false);

  if (!isLogin) {
    return (
      <div className='homeApp'>
        <Routes>
          <Route path='/' element={<Home getUserStatus={setIsLogin} />} />
          <Route path='news' element={<News />} />
          <Route path='about' element={<About />} />
          <Route path='reviews' element={<Reviews />} />
          <Route path='places' element={<Places />} />
        </Routes>
      </div>
    );
  }

  return (
    <div className='loginApp'>
      <Route path='/' element={<Login getUserStatus={setIsLogin} />} />
    </div>
  );
}

export default App;
