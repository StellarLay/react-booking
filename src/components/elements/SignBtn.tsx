import React, { CSSProperties } from 'react';
import Login from '../Login';
import { ILoginProps } from '../types/types';

type ISignBtnProps = {
  className: string;
  value: string;
  width?: string;
  height?: string;
  margin?: string;
  padding?: string;
};

const SignBtn = (props: ISignBtnProps & ILoginProps) => {
  let style = {
    width: props.width,
    margin: props.margin,
    padding: props.padding,
    height: props.height,
  } as CSSProperties;

  const submitBtn = (e: React.FormEvent<HTMLButtonElement>) => {
    if (props.value === 'Войти') {
      if (props.getUserStatus) {
        props.getUserStatus(false);
      }
    }
  };

  return (
    <button
      type='submit'
      className={props.className}
      style={style}
      onClick={(e) => submitBtn(e)}
    >
      {props.value}
    </button>
  );
};

export default SignBtn;
