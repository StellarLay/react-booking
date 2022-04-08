import React from 'react';
// import '../../app/common.css';
import './index.css';
import '../../app/styles/content.css';
import Header from '../../app/header/Header';
import HeadBooking from '../../shared/components/homepage/HeadBooking';
import ContentBooking from '../../shared/components/homepage/contentBooking/ContentBooking';
import Footer from '../../app/footer';
import { ILoginProps } from '../../app/types';

const HomePage = (props: ILoginProps) => {
  return (
    <div className='homepage'>
      <Header getUserStatus={props.getUserStatus} />
      <HeadBooking />
      <ContentBooking />
      <Footer />
    </div>
  );
};

export default HomePage;
