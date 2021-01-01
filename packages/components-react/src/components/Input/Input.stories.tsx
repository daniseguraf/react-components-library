import React, { FC } from 'react';
import Input from './Input';

export default {
  component: Input,
  title: 'Components / Input',
};

export const Default: FC = () => <Input placeholder="Name" />;

export const Label: FC = () => <Input label="Nombre" />;
