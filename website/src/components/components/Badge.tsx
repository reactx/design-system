import React, { FC } from 'react';
import { generateClass } from '../../utils';

export type badgeProps = {
  id?: string,
  color?: "primary" | "success" | "danger" | "warning" | "info" | "dark" | "light" | "normal",
  radius?: "none" | "small" | "normal" | "curve" | "pill" | "rounded",
  shadow?: "none" | "small" | "medium" | "large",
  outline?: boolean,
  title?: string,
  className?: string,
  onClick?: () => void,
  children: React.ReactNode | string
};

const BadgeComponent = (props: badgeProps) => {
  return (
    <div id={props.id} title={props.title} className={generateClass(props, 'badge')}
      onClick={() => props.onClick && props.onClick()}>
      {props.children}
    </div>
  );
};

const Badge: FC<badgeProps> = React.forwardRef((props) => <BadgeComponent {...props} />);
Badge.defaultProps = {
  radius: "normal",
  color: "normal",
  shadow: "none",
};
export { Badge };
