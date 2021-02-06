import React, { FC } from 'react';
import classNames from 'classnames';

import FormGroupContext from './FormGroupContext';

export interface FormGroupProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * Id para pasar por context
   */
  controlId: string;
  /**
   * Clases CSS opcionales
   */
  className?: string;
}

const FormGroup: FC<FormGroupProps> = ({
  controlId,
  children,
  className,
  ...other
}) => {
  const classNameList = classNames('ds-form-group', className);

  return (
    <FormGroupContext.Provider value={{ controlId }}>
      <div className={classNameList} {...other}>
        {children}
      </div>
    </FormGroupContext.Provider>
  );
};

export default FormGroup;
