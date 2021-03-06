import React, { FC } from 'react';
import { generateClass } from '../../utils';
import { Loading } from './Loading';

const LOADING_SIZE = {
  small: 'tiny',
  medium: 'small',
  large: 'medium',
  extra: 'large',
};

export type buttonProps = {
  id?: string,
  type: "button" | "reset" | "submit",
  size?: "small" | "medium" | "large" | "extra",
  color?: "primary" | "success" | "danger" | "warning" | "info" | "dark" | "light" | "normal",
  radius?: "none" | "small" | "normal" | "curve" | "pill" | "rounded",
  shadow?: "none" | "small" | "medium" | "large",
  title?: string,
  outline?: boolean,
  disabled?: boolean,
  loading?: boolean,
  className?: string,
  onClick: () => void,
  children: React.ReactNode | string
};

const ButtonComponent = (props: buttonProps) => {
  return (
    <button
      id={props.id}
      title={props.title}
      disabled={props.disabled}
      onClick={() => props.onClick()}
      className={generateClass(props, 'btn')}>
      {props.children}
      <Loading
        enabled={props.loading}
        color={props.color}
        size={LOADING_SIZE[props.size]}
      />
    </button>
  );
};

const Button: FC<buttonProps> = React.forwardRef((props) => <ButtonComponent {...props} />);
Button.defaultProps = {
  type: "button",
  color: "normal",
  radius: "normal",
  size: "medium",
  shadow: "none",
};
export { Button };
