import React, { FC } from 'react';
import classNames from 'classnames';

export interface HeadingProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * HTML tags options
   */
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
  /**
   * Size options
   */
  size?: 'lg' | 'md' | 'sm' | 'xs';
  /**
   * Optional CSS classes
   */
  className?: string;
}

const Heading: FC<HeadingProps> = ({
  as,
  size,
  className,
  children,
  ...other
}) => {
  const classNameList = classNames(
    'ds-heading',
    {
      [`ds-heading-${size}`]: size,
    },
    className
  );

  return React.createElement(
    as ?? 'h1',
    { class: classNameList, ...other },
    children
  );
};

Heading.defaultProps = {
  as: 'h1',
  size: 'md',
};

export default Heading;
