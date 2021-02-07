import React, { FC, useEffect, useRef, useState, useContext } from 'react';
import classNames from 'classnames';

import FormGroupContext from './../FormGroup/FormGroupContext';

export interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
  /**
   * Opciones de input
   */
  type?: 'text' | 'password' | 'email';
  /**
   * Clases CSS opcionales que pueden ser agregadas
   */
  className?: string;
  /**
   * Valor del input
   */
  value?: string;
  /**
   * Placeholder
   */
  placeholder?: string;
  /**
   * Valor de la etiqueta ARIA
   */
  ariaLabel?: string;
  /**
   * `true` si el estado es de éxito
   */
  isValid?: boolean;
  /**
   * `true` si el estado es de error
   */
  isInvalid?: boolean;
  /**
   * `true` si se desea estado disabled
   */
  disabled?: boolean;
  /**
   * Estado `read-only`
   */
  readOnly?: boolean;
  /**
   * Expone el valor del input fuera del componente,
   * ver forma de uso en historia "Exposing Input Value"
   */
  getValue?: (inputValue: string) => void;
  /**
   * Callback que se dispara cuando el valor del input cambia
   */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  /**
   * Callback que se dispara al hacer click en el componente
   */
  onClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
  /**
   * Callback que se dispara al salir del componente
   */
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

const Input: FC<InputProps> = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      type,
      value,
      className,
      placeholder,
      ariaLabel,
      isValid,
      isInvalid,
      readOnly,
      onChange,
      onBlur,
      onClick,
      getValue,
      ...other
    },
    ref
  ) => {
    const INITIAL_VALUE = !!value?.trim() ? value : '';
    const [inputValue, setInputValue] = useState(INITIAL_VALUE);

    const { controlId } = useContext(FormGroupContext);

    const inputClasses = classNames(
      'ds-input',
      {
        'ds-is-valid': isValid,
        'ds-is-invalid': isInvalid,
      },
      className
    );

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const val = e.target.value;
      setInputValue(val);
    };

    const componentJustMounted = useRef(true);

    useEffect(() => {
      if (!componentJustMounted.current) {
        !!getValue && getValue(inputValue);
      }
      componentJustMounted.current = false;
    }, [inputValue]);

    useEffect(() => {
      if (!!INITIAL_VALUE) {
        !!getValue && getValue(inputValue);
      }
    }, []);

    return (
      <input
        id={controlId}
        name={controlId}
        type={type}
        value={inputValue}
        className={inputClasses}
        aria-label={ariaLabel}
        placeholder={placeholder}
        onChange={(e) => {
          handleChange(e);
          onChange && onChange(e);
        }}
        onClick={onClick}
        onBlur={onBlur}
        ref={ref}
        readOnly={readOnly}
        {...other}
      />
    );
  }
);

Input.defaultProps = {
  type: 'text',
  isValid: false,
  isInvalid: false,
  disabled: false,
  readOnly: false,
};

export default Input;
