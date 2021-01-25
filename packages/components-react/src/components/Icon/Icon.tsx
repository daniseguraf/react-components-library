import React, { FC, Fragment } from 'react';

import parse from 'html-react-parser';
import feather from 'feather-icons';

export interface IconProps {
  name?: string;
  size?: 'lg' | 'sm';
}

const Icon: FC<IconProps> = ({ name, size }) => {
  let iconSize;

  if (size === 'lg') {
    iconSize = { width: 32, height: 32 };
  }
  if (size === 'sm') {
    iconSize = { width: 16, height: 16 };
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
