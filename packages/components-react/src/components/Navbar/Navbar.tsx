import React, { FC } from 'react';
import classNames from 'classnames';

export interface NavbarProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * Fixed nabvar
   */
  isFixed?: boolean;
  /**
   * Type of navbar
   */
  type?: 'dark' | 'light';
  /**
   * Optional CSS classes
   */
  className?: string;
}

const Navbar: FC<NavbarProps> = ({
  children,
  isFixed,
  type,
  className,
  ...other
}) => {
  const classNameList = classNames(
    'ds-navbar',
    {
      [`ds-navbar-${type}`]: type,
      'ds-navbar-fixed': isFixed,
    },
    className
  );

  return (
    <nav className={classNameList} {...other}>
      {children}
    </nav>
  );
};

Navbar.defaultProps = {
  isFixed: false,
  type: 'dark',
};

export default Navbar;
