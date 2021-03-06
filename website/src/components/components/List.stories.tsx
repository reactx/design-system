import React from 'react';
import { List, listProps, listItems } from './List';

export default {
  title: 'Components/List',
  component: List,
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
    onClick: {
      table: {
        category: 'Action',
      },
    },
  },
};

export const Basic = (args: listProps) => <List {...args} />;
Basic.args = {
  items: [
    { id: 1, data: 'item 1', props: {} },
    { id: 2, data: 'item 2', props: {} },
    { id: 3, data: 'item 3', props: {} },
  ],
  onClick: (item: listItems) => alert(item.id),
};
