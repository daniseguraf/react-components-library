import React, { FC, useState } from 'react';
import Button from './../components/Button';

export default {
  component: Button,
  title: 'Themes / Button',
};

export const Primary: FC = () => {
  const [value, setValue] = useState('');
  const handlerSelect = (e) => setValue(e.target.value);

  return (
    <div className={value}>
      <select name="" id="" onChange={handlerSelect}>
        <option value="">Select a theme</option>
        <option value="theme-1">Theme 1</option>
        <option value="theme-2">Theme 2</option>
        <option value="theme-3">Theme 3</option>
      </select>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Button>Button</Button>
    </div>
  );
};
