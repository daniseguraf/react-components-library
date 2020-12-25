import React, { FC } from 'react';
import classNames from 'classnames';

export interface CardBodyProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * Padding options
   */
  padding?: 'md' | 'sm';
  /**
   * Optional CSS classes
   */
  className?: string;
}

const CardBody: FC<CardBodyProps> = ({
  children,
  padding,
  className,
  ...other
}) => {
  const styleList = classNames(
    'ds-card-body',
    { [`ds-card-body-padding-${padding}`]: padding },
    className
  );
  return (
    <div className={styleList} {...other}>
      {children}
    </div>
  );
};

CardBody.defaultProps = {
  padding: 'md',
};
export default CardBody;
