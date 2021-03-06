import React from 'react';
import { BreadCrumb, breadCrumbProps, itemsProps } from './BreadCrumb';

export default {
  title: 'Components/BreadCrumb',
  component: BreadCrumb,
  argTypes: {
    id: {
      control: 'text',
      table: {
        category: 'Attribute',
      },
    },
    items: {
      table: {
        category: 'Custom Attribute',
      },
    },
    className: {
      table: {
        category: 'Custom Attribute',
      },
    },
    icon: {
      table: {
        category: 'Custom Attribute',
      },
    },
    stepMode: {
      table: {
        category: 'Custom Attribute',
      },
    },
    itemIcon: {
      table: {
        category: 'Custom Attribute',
      },
    },
    color: {
      control: 'inline-radio',
      table: {
        category: 'Style',
      },
    },
    radius: {
      control: 'inline-radio',
      table: {
        category: 'Style',
      },
    },
    shadow: {
      control: 'inline-radio',
      table: {
        category: 'Style',
      },
    },
    size: {
      control: 'inline-radio',
      table: {
        category: 'Style',
      },
    },
    onClick: {
      table: {
        category: 'Action',
      },
    },
  },
};

export const Basic = (args: breadCrumbProps) => <BreadCrumb {...args} />;
Basic.args = {
  items: [
    { id: 1, title: 'item 1', icon: "Bullseye", data: 'value' },
    { id: 2, title: 'item 2', icon: "BullseyeTarget", data: 'value', active: true },
    { id: 3, title: 'item 3', icon: "BullseyeTargetEdit", data: 'value' },
  ],
  onClick: (item: itemsProps) => alert(item.id),
};
