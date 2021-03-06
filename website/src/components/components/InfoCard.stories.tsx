import React from 'react';
import { InfoCard, infoCardProps } from './InfoCard';

export default {
  title: 'Components/Info Card',
  component: InfoCard,
  argTypes: {
    id: {
      control: 'text',
      table: {
        category: 'Attribute',
      },
    },
    number: {
      table: {
        category: 'Custom Attribute',
      },
    },
    description: {
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
    outline: {
      table: {
        category: 'Style',
      },
    },
    inline: {
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

export const Basic = (args: infoCardProps) => <InfoCard {...args} />;
Basic.args = {
  number: '10',
  description: 'InfoCard Default Message',
  outline: true,
};
export const MultiCard = (args: infoCardProps) => (
  <div className="reactx-row">
    <InfoCard
      {...args}
      className="reactx-column col-auto reactx-m-1"
      color="primary"
      number="10"
      description="InfoCard Message"
    />
    <InfoCard
      {...args}
      className="reactx-column col-auto reactx-m-1"
      number="140"
      color="danger"
      description="InfoCard Message"
    />
    <InfoCard
      {...args}
      className="reactx-column col-auto reactx-m-1"
      number="27"
      color="success"
      description="InfoCard Message"
    />
  </div>
);
