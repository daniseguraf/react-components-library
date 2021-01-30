import React, { FC } from 'react';
import Heading from './Heading';

import { ElementsMarginBottom } from './../../docs/wrappers';

export default {
  component: Heading,
  title: 'Components / Heading',
};

export const Default: FC = () => <Heading>Heading 1</Heading>;

export const Sizes: FC = () => (
  <ElementsMarginBottom>
    <Heading as="h1" size="lg">
      Heading 1
    </Heading>
    <Heading as="h2" size="md">
      Heading 2
    </Heading>
    <Heading as="h3" size="sm">
      Heading 3
    </Heading>
    <Heading as="h4" size="xs">
      Heading 4
    </Heading>
  </ElementsMarginBottom>
);
