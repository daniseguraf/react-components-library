import React, { FC, useContext } from 'react';
import classNames from 'classnames';

import FormGroupContext from './../FormGroup/FormGroupContext';

export interface LabelProps extends React.HTMLAttributes<HTMLLabelElement> {
  /**
   * Clases CSS opcionales
   */
  className?: string;
}

const Label: FC<LabelProps> = ({ className, children, ...other }) => {
  const { controlId } = useContext(FormGroupContext);

  const labelClasses = classNames('ds-form-label', className);

  return (
    <label htmlFor={controlId} className={labelClasses} {...other}>
      {children}
    </label>
  );
};

export default Label;
