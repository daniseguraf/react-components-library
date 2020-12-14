import React, { FC } from 'react';
import classNames from 'classnames';
import CardBody from './../CardBody';

export interface CardProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * Optional CSS classes
   */
  className?: string;
}

type Card = {
  Body: typeof CardBody;
};

const Card: FC<CardProps> & Card = ({ children, className, ...other }) => {
  const classNameList = classNames('ds-card', className);

  return (
    <div className={classNameList} {...other}>
      {children}
    </div>
  );
};

Card.Body = CardBody;

export default Card;
