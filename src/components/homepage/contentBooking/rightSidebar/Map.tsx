import React from 'react';
import mapLogo from '../../../img/map.png';

const Map = () => {
  return (
    <div className='map-block'>
      <span className='map-block__title'>Карта</span>
      <img src={mapLogo} className='map-block__img' />
    </div>
  );
};

export default Map;
