import React from 'react';
import '../css/common.css';
import '../css/homepage.css';
import Header from './Header';
import HeadBooking from './HeadBooking';

const HomePage = () => {
  return (
    <div className='homepage'>
      <Header />
      <HeadBooking />
    </div>
  );
};

export default HomePage;
