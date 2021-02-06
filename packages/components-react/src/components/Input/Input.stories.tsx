import React, { FC } from 'react';
import Input from './Input';

export default {
  component: Input,
  title: 'Components / Input',
};

export const Standard: FC = () => (
  <div className="ds-form-group">
    <Input label="Full name" placeholder="e.g. James Bod" />
  </div>
);

export const NoLabel: FC = () => <Input />;
