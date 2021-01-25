import React, { Fragment, FC } from 'react';
import Heading from './Heading';

export default {
  component: Heading,
  title: 'Components / Heading',
};

export const Default: FC = () => (
  <Fragment>
    <Heading>Heading 1</Heading>
  </Fragment>
);
