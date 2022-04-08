import React, { useState } from 'react';
import SignBtn from '../elements/SignBtn';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Select from 'react-select';
import { SelectOptions } from '../../../app/types';
import {
  faLocationDot,
  faUser,
  faCalendarWeek,
} from '@fortawesome/free-solid-svg-icons';
import { registerLocale, setDefaultLocale } from 'react-datepicker';
import ru from 'date-fns/locale/ru';
registerLocale('ru', ru);

const customStylesSelect = {
  option: (provided: any, state: any) => ({
    ...provided,
    padding: 12,
    width: '100%',
    color: state.isFocused ? 'rgba(255, 255, 255, 0.9)' : 'rgba(0, 0, 0, 0.7)',
    backgroundColor: state.isFocused ? 'rgba(10, 59, 89, 0.7)' : null,
  }),
  control: (base: any) => ({
    ...base,
    width: 195,
    border: 0,
    boxShadow: 'none',
    cursor: 'pointer',
  }),
};

const HeadBooking = () => {
  const locationOptions: SelectOptions[] = [
    { id: 1, value: 'Москва', label: 'Москва' },
    { id: 2, value: 'Санкт-Петербург', label: 'Санкт-Петербург' },
    { id: 3, value: 'Норильск', label: 'Норильск' },
    { id: 4, value: 'Сочи', label: 'Сочи' },
    { id: 5, value: 'Красноярск', label: 'Красноярск' },
  ];

  const roomOptions: SelectOptions[] = [
    {
      id: 1,
      value: 'для одного',
      label: 'для одного',
    },
    {
      id: 2,
      value: 'для двоих',
      label: 'для двоих',
    },
    { id: 3, value: 'Люкс', label: 'Люкс' },
  ];

  const [selectLocOption, setSelectLocOption] = useState(locationOptions[0]);
  const [selectRoomOption, setSelectRoomOption] = useState(roomOptions[0]);
  const [startDateIn, setStartDateIn] = useState(new Date());
  const [startDateOut, setStartDateOut] = useState(new Date());

  // Location&Room select events
  const locationEvent = (event: any) => {
    setSelectLocOption(event.value);
  };

  const roomEvent = (event: any) => {
    setSelectRoomOption(event.value);
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
            <Select
              defaultValue={selectLocOption}
              options={locationOptions}
              onChange={(option) => locationEvent(option)}
              className='select-block'
              styles={customStylesSelect}
            />
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
            <Select
              defaultValue={selectRoomOption}
              options={roomOptions}
              onChange={(option) => roomEvent(option)}
              className='select-block'
              styles={customStylesSelect}
            />
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
