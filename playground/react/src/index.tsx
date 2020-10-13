import React from "react";
import ReactDOM from "react-dom";

import "@monorepo/scss/lib/Button.css";
import { Button } from "@monorepo/react";

ReactDOM.render(
  <Button label="Example button" />,
  document.querySelector("#root")
);
