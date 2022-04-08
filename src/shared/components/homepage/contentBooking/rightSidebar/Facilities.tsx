import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

interface IFacilitiesProps {
  id: number;
  name: string;
}

const facilitiesList: IFacilitiesProps[] = [
  { id: 1, name: 'Интернет' },
  { id: 2, name: 'Тренажерный зал' },
  { id: 3, name: 'Телевизор' },
  { id: 4, name: 'Кухня' },
  { id: 5, name: 'Завтрак' },
  { id: 6, name: 'Балкон' },
  { id: 7, name: 'Тапочки' },
];

const Facilities = () => {
  const [isAllFacilities, setIsAllFacilities] = useState(false);

  const facilityFilter = facilitiesList.filter((facility) => facility.id <= 4);

  const allFacilities = (e: any) => {
    if (e.target.innerText === 'Все удобства') {
      setIsAllFacilities(true);
    } else {
      setIsAllFacilities(false);
    }
  };

  return (
    <div className='facilities-block'>
      <span className='facilities-block__title'>Удобства</span>
      <motion.div layout className='facilities-block__items'>
        {(isAllFacilities ? facilitiesList : facilityFilter).map((item) => (
          <motion.div
            layout
            key={item.id}
            className='facilities-block__items__item'
          >
            <span className='items__item__title'>{item.name}</span>
            <input
              type='checkbox'
              id='internet-checkbox'
              name='internetCheck'
            />
          </motion.div>
        ))}
        <div className='facilities-block__items__item__all-facilities'>
          <span
            onClick={(e) => allFacilities(e)}
            className='items__item__title'
          >
            {isAllFacilities ? 'Скрыть' : 'Все удобства'}
          </span>
          <FontAwesomeIcon icon={faAngleRight} className='arrow-right' />
        </div>
      </motion.div>
    </div>
  );
};

export default Facilities;
