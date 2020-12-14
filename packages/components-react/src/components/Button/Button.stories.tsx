import React, { FC, useState, Fragment } from 'react';
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

export const PrimaryDisabled: FC = () => (
  <Button kind="primary" disabled>
    Primary disabled
  </Button>
);

export const SecondaryDisabled: FC = () => (
  <Button kind="secondary" disabled>
    Secondary disabled
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

export const Events: FC = () => {
  const [event, setEvent] = useState(null);

  const handleEvent = (e: React.SyntheticEvent<HTMLButtonElement>) => {
    setEvent(e.type);
  };

  return (
    <Fragment>
      <Button onClick={handleEvent} onFocus={handleEvent} onBlur={handleEvent}>
        Primary Button
      </Button>
      <br />
      <br />
      <pre>Event: {event ? event : '--'}</pre>
    </Fragment>
  );
};

export const MoreProps: FC = () => {
  return (
    <Button className="some-class" id="some-id">
      Primary button
    </Button>
  );
};
