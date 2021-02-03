import React, { FC } from 'react';
import { Fragment } from 'react';
import { useState } from 'react';
import Check from './Check';

export default {
  component: Check,
  title: 'Components / Check',
};

export const Checkbox: FC = () => {
  const [state, setState] = useState({
    tacos: false,
    pizza: false,
    sushi: false,
    hamburger: false,
  });

  const handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.checked;

    const updatedFoods = Object.assign({}, state, { [key]: value });

    setState(updatedFoods);
  };

  const foodList = ['tacos', 'pizza', 'sushi', 'hamburger'].map((food, i) => (
    <Check
      key={i}
      id={`${food}`}
      name={food}
      type="checkbox"
      onChange={handleChange}
      value={food}
    >
      {food}
    </Check>
  ));

  return (
    <Fragment>
      {foodList}
      <div>
        <pre>state: {state ? JSON.stringify(state, null, ' ') : '--'}</pre>
      </div>
    </Fragment>
  );
};

export const Radio: FC = () => {
  const [state, setState] = useState({
    tacos: false,
    pizza: false,
    sushi: false,
    hamburger: false,
  });

  const [current, setCurrent] = useState('');

  const handleChange = (e) => {
    const key = e.target.id;
    const value = e.target.checked;

    setCurrent(e.target.value);

    const updatedFoods = Object.assign({}, state, { [key]: value });

    setState(() => updatedFoods);
  };

  const foodList = ['tacos', 'pizza', 'sushi', 'hamburger'].map((food, i) => (
    <Check
      key={i}
      id={food}
      name="foods"
      type="radio"
      onChange={handleChange}
      value={food}
      checked={current === food}
    >
      {food}
    </Check>
  ));

  return (
    <Fragment>
      {foodList}
      <div>
        <pre>state: {state ? JSON.stringify(state, null, ' ') : '--'}</pre>
      </div>
    </Fragment>
  );
};
