import React, { FC } from 'react';
import classnames from 'classnames';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Type of button
   */
  kind?: 'primary' | 'secondary';
  /**
   * Optional CSS classes
   */
  className?: string;
  /**
   * Enable block button
   */
  isBlock?: boolean;
  /**
   * Enable disabled button
   */
  disabled?: boolean;
  /**
   * Trigger a callback when the component is clicked
   */
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  /**
   * Trigger a callback when the component is holding down
   */
  onFocus?: (e: React.FocusEvent<HTMLButtonElement>) => void;
  /**
   * Trigger a callback when the user leaving the component
   */
  onBlur?: (e: React.FocusEvent<HTMLButtonElement>) => void;
}

const Button: FC<ButtonProps> = ({
  children,
  kind,
  className,
  isBlock,
  onClick,
  onFocus,
  onBlur,
  disabled,
  ...other
}) => {
  const classList = classnames(
    'ds-btn',
    {
      [`ds-btn-${kind}`]: kind,
      'ds-btn-block': isBlock,
    },
    className
  );
  return (
    <button
      className={classList}
      disabled={disabled}
      onClick={onClick}
      onFocus={onFocus}
      onBlur={onBlur}
      {...other}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  kind: 'primary',
  type: 'button',
  isBlock: false,
};

export default Button;
