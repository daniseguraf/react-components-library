import React, { FC } from 'react';
import Form from './../Form';

export default {
  component: Form.Input,
  title: 'Components / Input',
};

export const Default: FC = () => (
  <Form.Group controlId="inputDefault">
    <Form.Label>Full name</Form.Label>
    <Form.Input type="text" placeholder="e.g. James Bod" />
  </Form.Group>
);
