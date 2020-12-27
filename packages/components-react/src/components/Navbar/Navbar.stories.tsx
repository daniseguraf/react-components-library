import React, { FC } from 'react';
import Navbar from './Navbar';

export default {
  component: Navbar,
  title: 'Components / Navbar',
};

export const Default: FC = () => (
  <div style={{ backgroundColor: '#949494', padding: '6px' }}>
    <Navbar>
      <div>Logo</div>
      <ul className="docs-ul">
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
      </ul>
      <div>Login</div>
    </Navbar>
  </div>
);

export const BackgroundColor: FC = () => (
  <div style={{ backgroundColor: '#949494', padding: '6px' }}>
    <Navbar backgroundColor="#dedbde">
      <div>Logo</div>
      <ul className="docs-ul">
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
      </ul>
    </Navbar>
  </div>
);
