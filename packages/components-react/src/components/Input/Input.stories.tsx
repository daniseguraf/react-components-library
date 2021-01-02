import React, { FC } from 'react';
import Input from './Input';

export default {
  component: Input,
  title: 'Components / Input',
};

export const Standard: FC = () => <Input label="First Name" />;

export const Label: FC = () => <Input />;
