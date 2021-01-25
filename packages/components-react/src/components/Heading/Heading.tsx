import React, { Fragment } from 'react';
import classNames from 'classnames';

const Heading = ({ as, size, children }) => (
  <Fragment>
    <h1 className="heading heading-lg">{children}</h1>
    <h1 className="heading heading-md">{children}</h1>
    <h1 className="heading heading-sm">{children}</h1>
    <h1 className="heading heading-xs">{children}</h1>
  </Fragment>
);

export default Heading;
