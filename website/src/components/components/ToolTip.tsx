import React, { FC } from 'react';
import { generateClass } from '../../utils';

export type toolTipProps = {
  id?: string,
  radius?: "none" | "small" | "normal" | "curve" | "pill",
  shadow?: "none" | "small" | "medium" | "large",
  color?: "primary" | "success" | "danger" | "warning" | "info" | "dark" | "light" | "normal",
  size?: "small" | "medium" | "large" | "extra",
  className?: string,
  active?: boolean,
  children: React.ReactNode | string
  position: {
    top: string,
    left: string
  }
};

const ToolTipComponent = (props: toolTipProps) => {
  return (
    <div
      id={props.id}
      style={props.position}
      className={
        generateClass(props, 'tooltip') +
        (props.active ? ' reactx-tooltip-active' : ' reactx-tooltip-fade-out')
      }
    >
      {props.children}
    </div>
  );
};

const ToolTip: FC<toolTipProps> = React.forwardRef((props) => <ToolTipComponent {...props} />);
ToolTip.defaultProps = {
  id: 'tooltip-container',
  color: "normal",
  radius: "normal",
  size: "medium",
  shadow: "none",
};
export { ToolTip };
