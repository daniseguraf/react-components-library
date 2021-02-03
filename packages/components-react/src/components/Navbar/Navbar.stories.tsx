import React, { FC } from 'react';
import Navbar from './Navbar';

export default {
  component: Navbar,
  title: 'Components / Navbar',
};

export const Dark: FC = () => (
  <Navbar type="dark">
    <ul className="docs-ul docs-ul-light">
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
      <li>Item 4</li>
    </ul>
  </Navbar>
);

export const Light: FC = () => (
  <div style={{ backgroundColor: '#3423cd', padding: '5px' }}>
    <Navbar type="light">
      <div>Logo</div>
      <ul className="docs-ul docs-ul-dark">
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
      </ul>
    </Navbar>
  </div>
);
