import React, { useState, useEffect } from 'react';
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faLocationDot,
  faStar,
  faArrowLeft,
  faArrowRight,
} from '@fortawesome/free-solid-svg-icons';
import Select from 'react-select/dist/declarations/src/Select';
import { SelectOptions } from '../../types/types';
import background from '../../img/loginBg.jpg';
import hotelOne from '../../img/hotel_1.jpg';
import hotelTwo from '../../img/hotel_2.jpg';
import hotelThree from '../../img/hotel_3.jpg';
import hotelFour from '../../img/hotel_4.jpg';
import hotelFive from '../../img/hotel_5.jpg';
import Map from './rightSidebar/Map';
import Price from './rightSidebar/Price';
import Rooms from './rightSidebar/Rooms';
import Facilities from './rightSidebar/Facilities';

interface IHotelsProps {
  id: number;
  name: string;
  price: string;
  location: string;
  rating: () => [];
  image: string;
}

const hotelsList: IHotelsProps[] = [
  {
    id: 1,
    name: 'Amaya Resort',
    price: '24600 руб. / ночь',
    location: 'Мальдивы',
    rating() {
      const ratingValue = 5;
      const ratingList: any = [];
      for (let i = 0; i < ratingValue; i++) {
        ratingList[i] = (
          <FontAwesomeIcon key={i} icon={faStar} className='rating-icon' />
        );
      }
      return ratingList;
    },
    image: background,
  },
  {
    id: 2,
    name: 'Arena Beach',
    price: '10300 руб. / ночь',
    location: 'Мальдивы',
    rating() {
      const ratingValue = 4;
      const ratingList: any = [];
      for (let i = 0; i < ratingValue; i++) {
        ratingList[i] = (
          <FontAwesomeIcon key={i} icon={faStar} className='rating-icon' />
        );
      }
      return ratingList;
    },
    image: hotelOne,
  },
  {
    id: 3,
    name: 'Avantara',
    price: '292000 руб. / ночь',
    location: 'Мальдивы',
    rating() {
      const ratingValue = 5;
      const ratingList: any = [];
      for (let i = 0; i < ratingValue; i++) {
        ratingList[i] = (
          <FontAwesomeIcon key={i} icon={faStar} className='rating-icon' />
        );
      }
      return ratingList;
    },
    image: hotelTwo,
  },
  {
    id: 4,
    name: 'LankanFushi',
    price: '242546 руб. / ночь',
    location: 'Турция',
    rating() {
      const ratingValue = 3;
      const ratingList: any = [];
      for (let i = 0; i < ratingValue; i++) {
        ratingList[i] = (
          <FontAwesomeIcon key={i} icon={faStar} className='rating-icon' />
        );
      }
      return ratingList;
    },
    image: hotelThree,
  },
  {
    id: 5,
    name: 'Royal Island Resort & Spa',
    price: '34800 руб. / ночь',
    location: 'Мальдивы',
    rating() {
      const ratingValue = 4;
      const ratingList: any = [];
      for (let i = 0; i < ratingValue; i++) {
        ratingList[i] = (
          <FontAwesomeIcon key={i} icon={faStar} className='rating-icon' />
        );
      }
      return ratingList;
    },
    image: hotelFour,
  },
  {
    id: 6,
    name: 'Endheri Sunset Dhangethi',
    price: '7000 руб. / ночь',
    location: 'Turkey',
    rating() {
      const ratingValue = 3;
      const ratingList: any = [];
      for (let i = 0; i < ratingValue; i++) {
        ratingList[i] = (
          <FontAwesomeIcon key={i} icon={faStar} className='rating-icon' />
        );
      }
      return ratingList;
    },
    image: hotelFive,
  },
  {
    id: 7,
    name: 'Amaya Resort',
    price: '24600 руб. / ночь',
    location: 'Мальдивы',
    rating() {
      const ratingValue = 5;
      const ratingList: any = [];
      for (let i = 0; i < ratingValue; i++) {
        ratingList[i] = (
          <FontAwesomeIcon key={i} icon={faStar} className='rating-icon' />
        );
      }
      return ratingList;
    },
    image: background,
  },
  {
    id: 8,
    name: 'Arena Beach',
    price: '10300 руб. / ночь',
    location: 'Мальдивы',
    rating() {
      const ratingValue = 4;
      const ratingList: any = [];
      for (let i = 0; i < ratingValue; i++) {
        ratingList[i] = (
          <FontAwesomeIcon key={i} icon={faStar} className='rating-icon' />
        );
      }
      return ratingList;
    },
    image: hotelOne,
  },
  {
    id: 9,
    name: 'Avantara',
    price: '292000 руб. / ночь',
    location: 'Мальдивы',
    rating() {
      const ratingValue = 5;
      const ratingList: any = [];
      for (let i = 0; i < ratingValue; i++) {
        ratingList[i] = (
          <FontAwesomeIcon key={i} icon={faStar} className='rating-icon' />
        );
      }
      return ratingList;
    },
    image: hotelTwo,
  },
];

const ContentBooking = () => {
  const sortOptions: SelectOptions[] = [
    { id: 1, value: 'Новые', label: 'Новые' },
    { id: 2, value: 'Возрастание', label: 'Возрастание' },
    { id: 3, value: 'Убывание', label: 'Убывание' },
  ];

  const [hotels, setHotels] = useState(hotelsList);
  const [selectSort, setSelectSort] = useState('');
  const sortEvent = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectSort(e.target.value);
  };

  return (
    <section className='content-section'>
      <div className='left-content'>
        <div className='left-content__search-block'>
          <div className='left-content__search'>
            <FontAwesomeIcon icon={faSearch} className='search-icon' />
            <input
              type='search'
              className='search-input'
              placeholder='Найдите свой отель...'
            />
          </div>

          <div className='left-content__sort-btn'>
            <span className='sort-btn__text'>Sort by:</span>
            <select
              name='location'
              value={selectSort}
              onChange={(e) => sortEvent(e)}
              className='select-block'
            >
              {sortOptions.map((option) => (
                <option key={option.id} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className='apartments-block'>
          {hotels.map((item) => (
            <div key={item.id} className='apartments-block__item'>
              <div className='apartments-block__price-absolute'>
                <span className='apartments-block__price-value'>
                  {item.price}
                </span>
              </div>
              <div className='apartments-block__item-img'>
                <img src={item.image} alt='item' />
              </div>
              <div className='apartments-block__props'>
                <span className='apartments-block__props-title'>
                  {item.name}
                </span>
                <div className='apartments-block__props-location'>
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    className='location-icon'
                  />
                  <span className='apartments-block__props-location__text'>
                    {item.location}
                  </span>
                </div>
                <div className='apartments-block__props-rating'>
                  {item.rating()}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='pagination'>
          <div className='pagination__prev'>
            <FontAwesomeIcon icon={faArrowLeft} className='arrow-left-icon' />
          </div>
          <div className='pagination-page'>
            <span>1</span>
          </div>
          <div className='pagination-page'>
            <span>2</span>
          </div>
          <div className='pagination-page'>
            <span>3</span>
          </div>
          <div className='pagination-page'>
            <span>4</span>
          </div>
          <div className='pagination-page'>
            <span>5</span>
          </div>
          <div className='pagination-page'>
            <span>6</span>
          </div>
          <div className='pagination-page'>
            <span>7</span>
          </div>
          <div className='pagination-page'>
            <span>8</span>
          </div>
          <div className='pagination__next'>
            <FontAwesomeIcon icon={faArrowRight} className='arrow-right-icon' />
          </div>
        </div>
      </div>
      <div className='right-sidebar'>
        <Map />
        <Price />
        <Rooms />
        <Facilities />
      </div>
    </section>
  );
};

export default ContentBooking;
