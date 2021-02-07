import React, { FC } from 'react';
import classNames from 'classnames';

import FormGroup from './../FormGroup';
import Label from './../Label';
import Input from './../Input';
import FormHelperText from './../FormHelperText/';

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
  HelperText: typeof FormHelperText;
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
Form.HelperText = FormHelperText;

export default Form;
