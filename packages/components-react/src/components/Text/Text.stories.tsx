import React, { FC } from 'react';
import Text from './Text';

import { ElementsMarginBottom } from './../../docs/wrappers';

export default {
  component: Text,
  title: 'Components / Text',
};

export const Default: FC = () => <Text>Text 1</Text>;

export const Sizes: FC = () => (
  <ElementsMarginBottom>
    <Text size="lg">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia et
      asperiores vel numquam quos saepe odio accusamus quisquam magnam veniam?
      Optio iste sint sed labore modi animi, nulla enim numquam!
    </Text>
    <Text size="md">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio fuga id
      cupiditate odit laboriosam ad, nobis corporis! Modi aliquid suscipit omnis
      laudantium tempora, hic minima ex necessitatibus accusantium minus. Sequi?
    </Text>
  </ElementsMarginBottom>
);
