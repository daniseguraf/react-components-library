import React, { Fragment } from 'react';
import { addDecorator } from '@storybook/react';
import { withHTML } from '@whitespace/storybook-addon-html/react';
import '!style-loader!css-loader!sass-loader!@danielseguraf/css/build/css/index.css';

import './scss/index.scss';

export const parameters = {
  html: {
    prettier: {
      tabWidth: 4,
      useTabs: false,
      htmlWhitespaceSensitivity: 'strict',
    },
  },
};

export const decorators = [withHTML];

addDecorator((story) => <Fragment>{story()}</Fragment>);
