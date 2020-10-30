import React, { FC } from 'react';
import { action } from '@storybook/addon-actions';
import Button from './Button';

export default {
  component: Button,
  title: 'Components / Button',
};

export const Primary: FC = () => {
  return (
    <div>
      <Button
        kind="primary"
        onClick={action('button-click')}
        onFocus={action('button-onFocus')}
        onBlur={action('button-onBlur')}
      >
        Primary button
      </Button>
      <Button kind="secondary">Secondary button</Button>
    </div>
  );
};

export const Secondary: FC = () => (
  <Button kind="secondary">Secondary button</Button>
);

export const Disabled: FC = () => (
  <Button
    kind="primary"
    onClick={action('button-click')}
    onFocus={action('button-onFocus')}
    onBlur={action('button-onBlur')}
    disabled
  >
    Button
  </Button>
);

export const MoreProps: FC = () => {
  return (
    <Button className="some-class" id="some-id">
      Button
    </Button>
  );
};
