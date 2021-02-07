import React, { FC } from 'react';
import classNames from 'classnames';

export interface FormHelperTextProps {
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
   * Clases CSS opcionales que pueden ser agregadas
   */
  className?: string;
}

const FormHelperText: FC<FormHelperTextProps> = ({
  children,
  className,
  isValid,
  isInvalid,
  ...other
}) => {
  const classNameList = classNames(
    'ds-form-text',
    {
      'ds-form-text-valid-feedback': isValid,
      'ds-form-text-invalid-feedback': isInvalid,
    },
    className
  );

  return (
    <div className="ds-form-text-wrapper">
      <div className={classNameList} {...other}>
        {children}
      </div>
    </div>
  );
};

export default FormHelperText;
