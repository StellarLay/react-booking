import React, { useState } from 'react';
import SignBtn from '../elements/SignBtn';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {
  faLocationDot,
  faUser,
  faCalendarWeek,
} from '@fortawesome/free-solid-svg-icons';
import { registerLocale, setDefaultLocale } from 'react-datepicker';
import ru from 'date-fns/locale/ru';
registerLocale('ru', ru);

interface SelectOptions {
  id: number;
  value: string;
  label: string;
}

const HeadBooking = () => {
  const locationOptions: SelectOptions[] = [
    { id: 1, value: 'Москва', label: 'Москва' },
    { id: 2, value: 'Санкт-Петербург', label: 'Санкт-Петербург' },
    { id: 3, value: 'Норильск', label: 'Норильск' },
    { id: 4, value: 'Сочи', label: 'Сочи' },
    { id: 5, value: 'Красноярск', label: 'Красноярск' },
  ];

  const roomOptions: SelectOptions[] = [
    { id: 1, value: 'single room', label: 'single room' },
    { id: 2, value: 'duo room', label: 'duo room' },
    { id: 3, value: 'child room', label: 'child room' },
  ];

  const [selectLocOption, setSelectLocOption] = useState('');
  const [selectRoomOption, setSelectRoomOption] = useState('');
  const [startDateIn, setStartDateIn] = useState(new Date());
  const [startDateOut, setStartDateOut] = useState(new Date());

  // Location&Room select events
  const locationEvent = (event: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(event.target.value);
    setSelectLocOption(event.target.value);
  };

  const roomEvent = (event: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(event.target.value);
    setSelectRoomOption(event.target.value);
  };

  return (
    <section className='booking-block'>
      <div className='booking-block__head-text'>
        <h1 className='booking-block__title'>Самые лучшие отели всего мира</h1>
        <span className='booking-block__subtext'>
          Travelly.com — российский сервис путешествий № 1. Здесь каждый сможет
          найти свое райское место, поэтому скорее ищи свой отель!
        </span>
      </div>
      <div className='booking-block__form'>
        <div className='booking-block__form-location'>
          <span className='select-label form-location__text'>Расположение</span>
          <div className='form-location__select'>
            <FontAwesomeIcon icon={faLocationDot} className='location-icon' />
            <select
              name='location'
              value={selectLocOption}
              onChange={(e) => locationEvent(e)}
              className='select-block'
            >
              {locationOptions.map((option) => (
                <option key={option.id} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className='booking-block__form-checkIn'>
          <span className='select-label form-checkIn__text'>Заезд</span>
          <div className='form-location__select'>
            <FontAwesomeIcon icon={faCalendarWeek} className='checkIn-icon' />
            <DatePicker
              selected={startDateIn}
              onChange={(date: Date) => setStartDateIn(date)}
              dateFormat='d MMMM'
              locale='ru'
              className='date-picker__from'
            />
          </div>
        </div>
        <div className='booking-block__form-checkOut'>
          <span className='select-label form-checkOut__text'>Выезд</span>
          <div className='form-location__select'>
            <DatePicker
              selected={startDateOut}
              onChange={(date: Date) => setStartDateOut(date)}
              dateFormat='d MMMM'
              locale='ru'
              className='date-picker__to'
            />
          </div>
        </div>
        <div className='booking-block__form-abode'>
          <span className='select-label form-abode__text'>Номер</span>
          <div className='form-abode__select'>
            <FontAwesomeIcon icon={faUser} className='user-icon' />
            <select
              name='abode'
              value={selectRoomOption}
              onChange={(e) => roomEvent(e)}
              className='select-block'
            >
              {roomOptions.map((option) => (
                <option key={option.id} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className='search-btn__booking'>
          <SignBtn
            className='sign__submit-btn__dark'
            value='Поиск'
            width='100%'
            height='50px'
          />
        </div>
      </div>
    </section>
  );
};

export default HeadBooking;
