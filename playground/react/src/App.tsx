import React from 'react';
import { Button, Card } from '@danielseguraf/react-components-library/build';

const App = () => (
  <div style={{ padding: '16px' }}>
    <h2>Button</h2>
    <Button>Botón Principal</Button>
    <Button kind="secondary">Botón Secundario</Button>
    <Button disabled>Botón Disabled</Button>

    <h2>Card</h2>
    <div style={{ width: '20rem' }}>
      <Card>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quidem error
        nam, nisi animi vitae amet dolores quaerat in laudantium iusto magni
        dicta modi at esse quisquam quam ipsum autem!
      </Card>
    </div>
    <br />
    <div style={{ width: '20rem' }}>
      <Card>
        <Card.Body>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quidem
          error nam, nisi animi vitae amet dolores quaerat in laudantium iusto
          magni dicta modi at esse quisquam quam ipsum autem!
        </Card.Body>
      </Card>
    </div>
  </div>
);

export default App;
