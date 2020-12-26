import React, { FC } from 'react';
import classNames from 'classnames';

export interface NavbarProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * Fixed nabvar
   */
  isFixed?: boolean;

  /**
   * Optional CSS classes
   */
  className?: string;
}

const Navbar: FC = ({ children, className, ...other }) => {
  const stylelist = classNames('ds-navbar', {}, className);
  return (
    <nav className={stylelist} {...other}>
      {children}
    </nav>
  );
};

export default Navbar;
