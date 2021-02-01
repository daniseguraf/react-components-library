import React, { useEffect, useRef, useState } from 'react';

const CheckCore = ({ id, type, size, value, getValue, children }) => {
  const [isCheck, setIsCheck] = useState(false);

  const handleClick = () => {
    setIsCheck(!isCheck);
  };

  const firstRendered = useRef(true);

  useEffect(() => {
    if (!firstRendered.current) {
      isCheck ? getValue(value) : getValue(null);
    }

    firstRendered.current = false;
  }, [isCheck]);

  return (
    <div>
      <input id={id} type={type} value={value} onClick={handleClick} />
      <label htmlFor="">{children}</label>
    </div>
  );
};

export default CheckCore;
