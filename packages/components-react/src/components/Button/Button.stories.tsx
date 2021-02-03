import React, { FC, useState, Fragment } from 'react';
import Button from './Button';
import { ElementsMarginBottom } from './../../docs/wrappers';

export default {
  component: Button,
  title: 'Components / Button',
};

export const Primary: FC = () => <Button kind="primary">Primary button</Button>;

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

export const All: FC = () => {
  return (
    <ElementsMarginBottom>
      <Button kind="primary">Primary button</Button>
      <Button kind="secondary">Secondary button</Button>
    </ElementsMarginBottom>
  );
};

export const BlockButton: FC = () => (
  <ElementsMarginBottom>
    <Button kind="primary" isBlock>
      Block button
    </Button>
    <Button kind="secondary" isBlock>
      Block button
    </Button>
  </ElementsMarginBottom>
);

export const Callbacks: FC = () => {
  const [event, setEvent] = useState(null);

  const handleEvent = (e: React.SyntheticEvent<HTMLButtonElement>) => {
    setEvent(e.type);
  };

  return (
    <Fragment>
      <Button
        kind="primary"
        onClick={handleEvent}
        onFocus={handleEvent}
        onBlur={handleEvent}
      >
        Primary button
      </Button>
      <br />
      <br />
      <pre>Evento: {event ? event : '--'}</pre>
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
