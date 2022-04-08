import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

const Rooms = () => {
  const [valueRooms, setValueRooms] = useState(1);
  const [valueBeds, setValueBeds] = useState(0);
  const [valueBaths, setValueBaths] = useState(0);

  const minusRoom = () => {
    if (valueRooms !== 0) {
      let value = valueRooms - 1;
      setValueRooms(value);
    }
  };

  const minusBed = () => {
    if (valueBeds !== 0) {
      let value = valueBeds - 1;
      setValueBeds(value);
    }
  };

  const minusBath = () => {
    if (valueBaths !== 0) {
      let value = valueBaths - 1;
      setValueBaths(value);
    }
  };

  const plusRoom = () => {
    let value = valueRooms + 1;
    setValueRooms(value);
  };

  const plusBed = () => {
    let value = valueBeds + 1;
    setValueBeds(value);
  };

  const plusBath = () => {
    let value = valueBaths + 1;
    setValueBaths(value);
  };

  return (
    <div className='rooms-block'>
      <span className='rooms-block__title'>Апартаменты и кровати</span>
      <div className='rooms-block__toggles'>
        <div className='rooms-block__toggles-room'>
          <span className='toggles-room__title'>Комнаты</span>
          <div className='toggles-room__toggles'>
            <FontAwesomeIcon
              icon={faMinus}
              className='toggles-minus'
              onClick={minusRoom}
            />
            <div className='toggles-value'>{valueRooms}</div>
            <FontAwesomeIcon
              icon={faPlus}
              className='toggles-minus'
              onClick={plusRoom}
            />
          </div>
        </div>
        <div className='beds-block__toggles-bed'>
          <span className='toggles-bed__title'>Кровати</span>
          <div className='toggles-bed__toggles'>
            <FontAwesomeIcon
              icon={faMinus}
              className='toggles-minus'
              onClick={minusBed}
            />
            <div className='toggles-value'>{valueBeds}</div>
            <FontAwesomeIcon
              icon={faPlus}
              className='toggles-minus'
              onClick={plusBed}
            />
          </div>
        </div>
        <div className='baths-block__toggles-bath'>
          <span className='toggles-bath__title'>Ванные</span>
          <div className='toggles-bath__toggles'>
            <FontAwesomeIcon
              icon={faMinus}
              className='toggles-minus'
              onClick={minusBath}
            />
            <div className='toggles-value'>{valueBaths}</div>
            <FontAwesomeIcon
              icon={faPlus}
              className='toggles-minus'
              onClick={plusBath}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rooms;
