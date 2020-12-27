import React, { FC } from 'react';
import classNames from 'classnames';

export interface NavbarProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * Fixed nabvar
   */
  isFixed?: boolean;
  /**
   * Background Color
   */
  backgroundColor?: string;
  /**
   * Optional CSS classes
   */
  className?: string;
}

const Navbar: FC<NavbarProps> = ({
  children,
  isFixed,
  backgroundColor,
  className,
  ...other
}) => {
  const stylelist = classNames(
    'ds-navbar',
    {
      'ds-navbar-fixed': isFixed,
    },
    className
  );

  return (
    <nav
      className={stylelist}
      style={{ backgroundColor: backgroundColor }}
      {...other}
    >
      {children}
    </nav>
  );
};

Navbar.defaultProps = {
  isFixed: false,
  backgroundColor: '#FFFFFF',
};

export default Navbar;
