import React, { FC } from 'react';
import Button from './Button';

export default {
  component: Button,
  title: 'Components / Button',
};

export const Primary: FC = () => {
  return (
    <div>
      <Button kind="primary">Primary button</Button>
    </div>
  );
};

export const Secondary: FC = () => (
  <Button kind="secondary">Secondary button</Button>
);

export const Disabled: FC = () => (
  <Button kind="primary" disabled>
    Disabled button
  </Button>
);

export const BlockButton: FC = () => (
  <div>
    <Button kind="primary" isBlock>
      Block button
    </Button>
    <Button kind="secondary" isBlock>
      Block button
    </Button>
  </div>
);

export const MoreProps: FC = () => {
  return (
    <Button className="some-class" id="some-id">
      Primary button
    </Button>
  );
};
