import React, { FC } from 'react';
import { useState } from 'react';
import CheckCore from './CheckCore';

export default {
  component: CheckCore,
  title: 'Components / CheckCore',
};

export const Checkbox: FC = () => {
  // const [state, setState] = useState('');

  // const handleChange = (value) => setState(value);
  return (
    <CheckCore type="checkbox" value="option-1">
      Option 1
    </CheckCore>
  );
};
