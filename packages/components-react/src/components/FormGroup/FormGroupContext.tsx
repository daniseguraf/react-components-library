import React from 'react';

export interface contextType {
  controlId: string;
}

const FormGroupContext = React.createContext({} as contextType);

export default FormGroupContext;
