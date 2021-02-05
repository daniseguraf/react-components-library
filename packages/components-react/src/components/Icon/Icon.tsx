import React, { FC, Fragment } from 'react';

import parse from 'html-react-parser';
import feather from 'feather-icons';

export interface IconProps {
  name?: string;
  size?: 'lg' | 'md' | 'sm';
}

const Icon: FC<IconProps> = ({ name, size }) => {
  let iconSize;

  if (size === 'lg') {
    iconSize = { width: 32, height: 32, 'stroke-width': 2 };
  }
  if (size === 'md') {
    iconSize = { width: 24, height: 24, 'stroke-width': 1.5 };
  }
  if (size === 'sm') {
    iconSize = { width: 16, height: 16, 'stroke-width': 1 };
  }

  return (
    <Fragment>
      {parse(feather.icons[name ?? ''].toSvg(size && iconSize))}
    </Fragment>
  );
};

Icon.defaultProps = {
  name: 'arrow-right',
};

export default Icon;
