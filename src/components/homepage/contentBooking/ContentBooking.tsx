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
import { motion } from 'framer-motion';
import Select from 'react-select';

interface IHotelsProps {
  id: number;
  name: string;
  price: number;
  location: string;
  rating: () => [];
  image: string;
  DateAdded: Date;
}

const hotelsList: IHotelsProps[] = [
  {
    id: 1,
    name: 'Amaya Resort',
    price: 24600,
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
    DateAdded: new Date(2022, 3, 28),
  },
  {
    id: 2,
    name: 'Arena Beach',
    price: 10300,
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
    DateAdded: new Date(2022, 2, 25),
  },
  {
    id: 3,
    name: 'Avantara',
    price: 292000,
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
    DateAdded: new Date(2021, 3, 15),
  },
  {
    id: 4,
    name: 'LankanFushi',
    price: 242546,
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
    DateAdded: new Date(2021, 3, 15),
  },
  {
    id: 5,
    name: 'Royal Island Resort & Spa',
    price: 34800,
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
    DateAdded: new Date(2021, 2, 9),
  },
  {
    id: 6,
    name: 'Endheri Sunset Dhangethi',
    price: 7000,
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
    DateAdded: new Date(2021, 1, 5),
  },
  {
    id: 7,
    name: 'Amaya Resort',
    price: 64300,
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
    DateAdded: new Date(2022, 4, 3),
  },
  {
    id: 8,
    name: 'Arena Beach',
    price: 80300,
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
    DateAdded: new Date(2020, 6, 9),
  },
  {
    id: 9,
    name: 'Avantara',
    price: 192000,
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
    DateAdded: new Date(2022, 4, 1),
  },
];

const customStylesSelect = {
  option: (provided: any, state: any) => ({
    ...provided,
    padding: 12,
    color: state.isFocused ? 'rgba(255, 255, 255, 0.9)' : 'rgba(0, 0, 0, 0.7)',
    backgroundColor: state.isFocused ? 'rgba(10, 59, 89, 0.7)' : null,
  }),
  control: (base: any) => ({
    ...base,
    width: '100%',
    border: 0,
    boxShadow: 'none',
    cursor: 'pointer',
    color: 'rgba(255, 255, 255, 0.5)',
    background: 'none',
  }),
  singleValue: (provided: any) => ({
    ...provided,
    color: 'rgba(255, 255, 255, 0.8)',
  }),
  dropdownIndicator: (base: any) => ({
    ...base,
    color: 'rgba(255, 255, 255, 0.8)',
  }),
};

const ContentBooking = () => {
  const sortOptions: SelectOptions[] = [
    { id: 1, value: 'Новые', label: 'Новые' },
    { id: 2, value: 'Возрастание цены', label: 'Возрастание цены' },
    { id: 3, value: 'Убывание цены', label: 'Убывание цены' },
  ];

  // Состояния
  const [hotels, setHotels] = useState(hotelsList);
  const [nameHotelSearch, setNameHotelSearch] = useState('');
  const [selectSort, setSelectSort] = useState(sortOptions[0]);
  const [isFilter, setIsFilter] = useState(true);

  // Сортировка отелей
  let hotelsFilter = hotels.filter(
    (hotelname) => hotelname.name == nameHotelSearch
  );

  const sortEvent = (e: any) => {
    if (e.value === 'Новые') {
      hotelsFilter = hotels.sort((a, b) =>
        a.DateAdded > b.DateAdded ? 1 : -1
      );
    } else if (e.value === 'Возрастание цены') {
      hotelsFilter = hotels.sort((a, b) => (a.price > b.price ? 1 : -1));
    } else if (e.value === 'Убывание цены') {
      hotelsFilter = hotels.sort((a, b) => (a.price > b.price ? -1 : 1));
    }
    setSelectSort(e.value);
  };

  // Событие поля поиска
  const searchEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNameHotelSearch(e.target.value);
  };

  useEffect(() => {
    // Если мы вводим отель, но его нет, то выведем сообщение
    if (nameHotelSearch !== '' && hotelsFilter.length === 0) {
      setIsFilter(false);
    } else {
      setIsFilter(true);
    }
  });

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
              onChange={(e) => searchEvent(e)}
            />
          </div>

          <div className='left-content__sort-btn'>
            <span className='sort-btn__text'>Сортировка по:</span>
            <Select
              defaultValue={selectSort}
              options={sortOptions}
              onChange={(option) => sortEvent(option)}
              className='select-block'
              styles={customStylesSelect}
            />
          </div>
        </div>
        <motion.div layout className='apartments-block'>
          {isFilter ? (
            (nameHotelSearch !== '' ? hotelsFilter : hotels).map((item) => (
              <motion.div
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                exit={{ opacity: 0 }}
                layout
                key={item.id}
                className='apartments-block__item'
              >
                <div className='apartments-block__price-absolute'>
                  <span className='apartments-block__price-value'>
                    {item.price} руб. / ночь
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
              </motion.div>
            ))
          ) : (
            <div>
              <span className='search-error'>
                К сожалению, мы не смогли найти ваш отель:(
              </span>
            </div>
          )}
        </motion.div>
        {isFilter && (
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
            <div className='pagination__next'>
              <FontAwesomeIcon
                icon={faArrowRight}
                className='arrow-right-icon'
              />
            </div>
          </div>
        )}
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
