import React, { FC } from 'react';
import Label from './Label';

export default {
  component: Label,
  title: 'Componentes / Label',
  parameters: {
    component: Label,
    componentSubtitle:
      'Funciona como encabezado para indicar el propósito del componente.',
  },
};

export const Default: FC = () => <Label htmlFor="some-component">Label</Label>;

export const AditionalProps: FC = () => (
  <Label htmlFor="some-component" className="some-class" id="some-id">
    Label
  </Label>
);
