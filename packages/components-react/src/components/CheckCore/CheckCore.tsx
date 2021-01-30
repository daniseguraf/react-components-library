import React, { useState } from 'react';

const CheckCore = ({ id, type, size, value, getState, children, ...other }) => {
  const [state, setState] = useState(false);
  console.log(state);

  const isControlledOutside = !!value;

  const handleChange = (e) => {
    // console.log(!e.target.value);

    setState(!!e.target.value);
  };

  return (
    <div>
      <input
        id={id}
        type={type}
        value={state}
        onClick={handleChange}
        // onChange={handleChange}
      />
      <label htmlFor="">{children}</label>
    </div>
  );
};

export default CheckCore;
