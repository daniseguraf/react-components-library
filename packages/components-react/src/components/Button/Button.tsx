import React, { FC } from 'react';
import classnames from 'classnames';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  kind?: 'primary' | 'secondary';
}

const Button: FC<ButtonProps> = ({
  children,
  kind,
  className,
  onClick,
  ...other
}) => {
  const classList = classnames(
    'ds-btn',
    {
      [`ds-btn-${kind}`]: kind,
    },
    className
  );
  return (
    <button className={classList} onClick={onClick} {...other}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  kind: 'primary',
};

export default Button;
