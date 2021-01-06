import React, { FC } from 'react';
import Input from './Input';

export default {
  component: Input,
  title: 'Components / Input',
};

export const Standard: FC = () => (
  <div className="ds-form-group">
    <Input label="First Name" />
  </div>
);

export const NoLabel: FC = () => <Input />;
