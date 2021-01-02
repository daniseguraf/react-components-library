import React, { FC, Fragment, useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import Label from '../Label';

export interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
  /**
   * Label del input
   */
  label?: string;
  /**
   * Nombre del input (el `id` toma el mismo valor del name)
   */
  name?: string;
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
   * Mensaje de ayuda, error o éxito
   */
  helperText?: string;
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
      label,
      name,
      type,
      value,
      className,
      placeholder,
      ariaLabel,
      helperText,
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

    const inputClasses = classNames(
      'ds-input',
      {
        'ds-is-valid': isValid,
        'ds-is-invalid': isInvalid,
      },
      className
    );

    const feedbackClasses = classNames({
      'ds-valid-feedback': isValid,
      'ds-invalid-feedback': isInvalid,
    });

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

    const inputElement = (
      <input
        id={name}
        name={name}
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
        {...other}
      />
    );

    let helperId;

    if (isInvalid) {
      helperId = `${name}-invalid-feedback`;
    } else if (isValid) {
      helperId = `${name}-valid-feedback`;
    }

    return (
      <Fragment>
        {label && <Label htmlFor={name}>{label}</Label>}

        <div>
          {inputElement}

          <div className="ds-feedback-wrapper">
            {helperText && (
              <div className={feedbackClasses || 'ds-form-text'} id={helperId}>
                {helperText}
              </div>
            )}
          </div>
        </div>
      </Fragment>
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
