import React, { FC } from 'react';
import classNames from 'classnames';

export interface SubtitleProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * HTML tags options
   */
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
  /**
   * Optional CSS classes
   */
  className?: string;
}

const Subtitle: FC<SubtitleProps> = ({ as, className, children, ...other }) => {
  const classNameList = classNames('ds-subtitle', className);

  return React.createElement(
    as ?? 'h2',
    { className: classNameList, ...other },
    children
  );
};

Subtitle.defaultProps = {
  as: 'h2',
};

export default Subtitle;
