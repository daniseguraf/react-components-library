import React, { FC } from 'react';
import classNames from 'classnames';

import FormGroup from './../FormGroup';
import Label from './../Label';
import Input from './../Input';

export interface FormProps extends React.HTMLAttributes<HTMLFormElement> {
  /**
   * Clases CSS opcionales
   */
  className?: string;
}

type Form = {
  Group: typeof FormGroup;
  Label: typeof Label;
  Input: typeof Input;
};

const Form: FC<FormProps> & Form = ({ children, className, ...other }) => {
  const classNameList = classNames('ds-form-group', className);

  return (
    <form className={classNameList} {...other}>
      {children}
    </form>
  );
};

Form.Group = FormGroup;
Form.Label = Label;
Form.Input = Input;

export default Form;
