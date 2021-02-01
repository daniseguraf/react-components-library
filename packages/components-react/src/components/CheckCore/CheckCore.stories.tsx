import React, { FC } from 'react';
import { Fragment } from 'react';
import { useState } from 'react';
import CheckCore from './CheckCore';

export default {
  component: CheckCore,
  title: 'Components / CheckCore',
};

export const Checkbox: FC = () => {
  const [state, setState] = useState('');

  const handleCheck = (value) => setState(value);

  return (
    <Fragment>
      <CheckCore type="checkbox" value="option-1" getValue={handleCheck}>
        Option 1
      </CheckCore>
    </Fragment>
  );
};

// export const CheckboxList: FC = () => {
//   const [state, setState] = useState([]);
//   console.log(state);

//   const handleCheck = (value) => {
//     setState((prevState) =>
//       [...prevState, value].reduce(
//         (u, i) => (u.includes(i) ? u : [...u, i]),
//         []
//       )
//     );
//   };

//   return (
//     <Fragment>
//       <CheckCore type="checkbox" value="option-1" getValue={handleCheck}>
//         Option 1
//       </CheckCore>
//       <CheckCore type="checkbox" value="option-2" getValue={handleCheck}>
//         Option 2
//       </CheckCore>
//       <CheckCore type="checkbox" value="option-3" getValue={handleCheck}>
//         Option 3
//       </CheckCore>
//       <CheckCore type="checkbox" value="option-4" getValue={handleCheck}>
//         Option 4
//       </CheckCore>
//     </Fragment>
//   );
// };
