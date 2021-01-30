import React, { FC } from 'react';
import classNames from 'classnames';

export interface TextProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * Size options
   */
  size?: 'lg' | 'md';
  /**
   * Optional CSS classes
   */
  className?: string;
}

const Text: FC<TextProps> = ({ size, className, children, ...other }) => {
  const classNameList = classNames(
    'ds-text',
    {
      [`ds-text-${size}`]: size,
    },
    className
  );

  return React.createElement(
    'p',
    { className: classNameList, ...other },
    children
  );
};

Text.defaultProps = {
  size: 'md',
};

export default Text;
