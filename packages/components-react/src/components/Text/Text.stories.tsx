import React, { Fragment, FC } from 'react';
import Text from './Text';

export default {
  component: Text,
  title: 'Components / Text',
};

export const Default: FC = () => <Text>Text 1</Text>;

export const Sizes: FC = () => (
  <Fragment>
    <Text size="lg">Text large</Text>
    <Text size="md">Text medium</Text>
  </Fragment>
);
