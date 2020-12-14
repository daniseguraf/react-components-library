import React, { FC } from 'react';
import Card from './Card';

export default {
  component: Card,
  title: 'Components / Card',
};

export const Default: FC = () => (
  <div style={{ width: '400px' }}>
    <Card>
      <Card.Body>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
        excepturi provident voluptatibus praesentium quod perferendis ullam
        aliquam atque, nulla consequatur at temporibus laudantium adipisci
        labore necessitatibus vitae, distinctio officia laborum!
      </Card.Body>
    </Card>
  </div>
);
