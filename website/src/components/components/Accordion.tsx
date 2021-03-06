import React, { FC, useState } from 'react';
import { generateClass } from '../../utils';
import { Collapse } from './Collapse';

export type accordionProps = {
  radius?: "none" | "small" | "normal" | "curve",
  shadow?: "none" | "small" | "medium" | "large",
  color?: "primary" | "success" | "danger" | "warning" | "info" | "dark" | "light" | "normal",
  className?: string,
  default: string,
  items: Array<accordionItems>,
  id?: string,
};

export type accordionItems = {
  id: string;
  head: React.ReactChild;
  children: React.ReactChild;
};

const AccordionComponent = (props: accordionProps) => {
  const [active, setActive] = useState<string>(props.default);

  return (
    <div id={props.id} className={generateClass(props, 'accordion')}>
      {props.items.map((item: accordionItems) => (
        <Collapse
          key={item.id}
          id={item.id}
          head={item.head}
          accordionMode={true}
          open={item.id === active}
          color={props.color}
          onClick={(id) => {
            active === id ? setActive("") : setActive(id);
          }}
        >
          {item.children}
        </Collapse>
      ))}
    </div>
  );
};

const Accordion: FC<accordionProps> = React.forwardRef((props) => (<AccordionComponent {...props} />));
export { Accordion };

Accordion.defaultProps = {
  radius: "normal",
  color: "normal",
  shadow: "none",
};
