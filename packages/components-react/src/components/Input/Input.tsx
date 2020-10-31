import React, { FC, useState } from 'react';
import classnames from 'classnames';

const Input: FC = ({ type }) => {
  const [value, setValue] = useState('');

  const classList = classnames('ds-input');

  const handleValue = (e) => setValue(e.target.value);

  return (
    <input
      className={classList}
      type={type}
      value={value}
      onChange={handleValue}
    />
  );
};

Input.defaultProps = {
  type: 'text',
};

export default Input;
