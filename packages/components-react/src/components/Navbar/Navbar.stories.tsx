import React, { FC } from 'react';
import Navbar from './Navbar';

export default {
  component: Navbar,
  title: 'Components / Navbar',
};

export const Default: FC = () => (
  <div style={{ width: '400px' }}>
    <Navbar>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
      excepturi provident voluptatibus praesentium quod perferendis ullam
      aliquam atque, nulla consequatur at temporibus laudantium adipisci labore
      necessitatibus vitae, distinctio officia laborum.
    </Navbar>
  </div>
);
