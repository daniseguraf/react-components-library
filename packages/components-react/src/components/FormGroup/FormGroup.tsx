import React, { FC } from 'react';
import classNames from 'classnames';

export interface FormGroupProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * Clases CSS opcionales
   */
  className?: string;
}

const FormGroup: FC<FormGroupProps> = ({ children, className, ...other }) => {
  const classNameList = classNames('ds-form-group', className);

  return (
    <div className={classNameList} {...other}>
      {children}
    </div>
  );
};

export default FormGroup;
