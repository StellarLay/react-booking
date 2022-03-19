import React from 'react';
import '../css/common.css';
import '../css/homepage.css';
import '../css/content.css';
import Header from './Header';
import HeadBooking from './HeadBooking';
import ContentBooking from './contentBooking/ContentBooking';
import { ILoginProps } from '../types/types';

const HomePage = (props: ILoginProps) => {
  return (
    <div className='homepage'>
      <Header getUserStatus={props.getUserStatus} />
      <HeadBooking />
      <ContentBooking />
    </div>
  );
};

export default HomePage;
