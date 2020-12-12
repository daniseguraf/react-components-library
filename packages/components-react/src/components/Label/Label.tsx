import React, { FC } from 'react';
import classNames from 'classnames';

export interface LabelProps extends React.HTMLAttributes<HTMLLabelElement> {
  /**
   * Asocia el label con otro elemento, usualmente inputs y textareas.
   */
  htmlFor?: string;
  /**
   * Clases CSS opcionales
   */
  className?: string;
}

const Label: FC<LabelProps> = ({ htmlFor, className, children, ...other }) => {
  const labelClasses = classNames('ds-form-label', className);

  return (
    <label htmlFor={htmlFor} className={labelClasses} {...other}>
      {children}
    </label>
  );
};

export default Label;
