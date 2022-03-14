import React, { CSSProperties } from 'react';

type ISignBtnProps = {
  className: string;
  value: string;
  width?: string;
  height?: string;
  margin?: string;
  padding?: string;
};

const SignBtn = (props: ISignBtnProps) => {
  let style = {
    width: props.width,
    margin: props.margin,
    padding: props.padding,
    height: props.height,
  } as CSSProperties;

  return (
    <button type='submit' className={props.className} style={style}>
      {props.value}
    </button>
  );
};

export default SignBtn;
