import React, { useState, useEffect, useMemo } from 'react';
import { Range, getTrackBackground } from 'react-range';

const STEP = 1;
const MIN = 1;
const MAX = 300000;

const Price = (props: any) => {
  const [values, setValues] = useState([1, 145000]);
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(0);

  const changeRange = (values: any) => {
    setValues(values);
    setMinValue(values[0]);
    setMaxValue(values[1]);
    props.minPrice(minValue);
    props.maxPrice(maxValue);
    props.resetFilter(false);
  };

  // Передаем пропс, которые активирует сброс фильтра цены
  const resetBtn = () => {
    props.resetFilter(true);
  };

  return (
    <div className='price-block'>
      <span className='price-block__title'>Цена</span>
      <div className='price-block__inputs'>
        <input
          type='number'
          min='1'
          placeholder='От'
          className='price-block__inputs-from'
          value={minValue}
          readOnly
        />
        <input
          type='number'
          min='1'
          placeholder='До'
          className='price-block__inputs-to'
          value={maxValue}
          readOnly
        />
      </div>
      <div
        className='price-block__range'
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}
      >
        <Range
          values={values}
          step={STEP}
          min={MIN}
          max={MAX}
          onChange={(values) => changeRange(values)}
          renderTrack={({ props, children }) => (
            <div
              onMouseDown={props.onMouseDown}
              onTouchStart={props.onTouchStart}
              style={{
                ...props.style,
                height: '140px',
                display: 'flex',
                width: '100%',
              }}
            >
              <div
                ref={props.ref}
                style={{
                  height: '5px',
                  width: '100%',
                  borderRadius: '4px',
                  background: getTrackBackground({
                    values,
                    colors: ['#ccc', 'rgba(0, 0, 0, 0.85)', '#ccc'],
                    min: MIN,
                    max: MAX,
                  }),
                  alignSelf: 'center',
                }}
              >
                {children}
              </div>
            </div>
          )}
          renderThumb={({ index, props, isDragged }) => (
            <div
              {...props}
              style={{
                ...props.style,
                height: '15px',
                width: '15px',
                borderRadius: '50%',
                backgroundColor: 'rgba(0, 0, 0, 0.85)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                boxShadow: '0px 2px 6px #AAA',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: '-28px',
                  color: 'rgba(0, 0, 0, 0.85)',
                  fontWeight: 'bold',
                  fontSize: '12px',
                  fontFamily: 'Arial,Helvetica Neue,Helvetica,sans-serif',
                  padding: '4px',
                  borderRadius: '4px',
                  backgroundColor: 'transparent',
                }}
              >
                {values[index].toFixed(1)}
              </div>
            </div>
          )}
        />
      </div>
      <button className='clear-btn' onClick={resetBtn}>
        Сбросить
      </button>
    </div>
  );
};

export default Price;
