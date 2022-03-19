import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Select from 'react-select/dist/declarations/src/Select';
import { SelectOptions } from '../../types/types';

const ContentBooking = () => {
  const sortOptions: SelectOptions[] = [
    { id: 1, value: 'Новые', label: 'Новые' },
    { id: 2, value: 'Возрастание', label: 'Возрастание' },
    { id: 3, value: 'Убывание', label: 'Убывание' },
  ];

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
      </div>
      <div className='right-sidebar'></div>
    </section>
  );
};

export default ContentBooking;
