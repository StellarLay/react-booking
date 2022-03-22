import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

const Facilities = () => {
  return (
    <div className='facilities-block'>
      <span className='facilities-block__title'>Удобства</span>
      <div className='facilities-block__items'>
        <div className='facilities-block__items__item'>
          <span className='items__item__title'>Интернет</span>
          <input type='checkbox' id='internet-checkbox' name='internetCheck' />
        </div>
        <div className='facilities-block__items__item'>
          <span className='items__item__title'>Тренажерный зал</span>
          <input type='checkbox' id='gym-checkbox' name='gymCheck' />
        </div>
        <div className='facilities-block__items__item'>
          <span className='items__item__title'>Телевизор</span>
          <input type='checkbox' id='tv-checkbox' name='tvCheck' />
        </div>
        <div className='facilities-block__items__item'>
          <span className='items__item__title'>Кухня</span>
          <input type='checkbox' id='kitchen-checkbox' name='kitchentCheck' />
        </div>
        <div className='facilities-block__items__item__all-facilities'>
          <span className='items__item__title'>Все удобства</span>
          <FontAwesomeIcon icon={faAngleRight} className='arrow-right' />
        </div>
      </div>
    </div>
  );
};

export default Facilities;
