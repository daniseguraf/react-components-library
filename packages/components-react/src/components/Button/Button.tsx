import React, { FC } from 'react';
import classnames from 'classnames';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Tipo de botón
   */
  kind?: 'primary' | 'secondary';
  /**
   * Clases CSS opcionales que pueden ser agregadas
   */
  className?: string;
  /**
   * Habilita botones de tipo bloque
   */
  isBlock?: boolean;
  /**
   * Callback que se dispara al hacer click en el componente
   */
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  /**
   * Callback que se dispara al mantener apretado el componente
   */
  onFocus?: (e: React.FocusEvent<HTMLButtonElement>) => void;
  /**
   * Callback que se dispara al salir del componente
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
