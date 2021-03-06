import React from 'react';
import { TimeLine, timeLineProps } from './TimeLine';

export default {
  title: 'Components/TimeLine',
  component: TimeLine,
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
  },
};

export const Basic = (args: timeLineProps) => <TimeLine {...args} />;
Basic.args = {
  items: [
    {
      title: 'TimeLine 1',
      description: 'TimeLine Default Message 1',
      date: '1399',
    },
    {
      title: 'TimeLine 2',
      description: 'TimeLine Default Message 2',
      date: '1398',
    },
  ],
};
