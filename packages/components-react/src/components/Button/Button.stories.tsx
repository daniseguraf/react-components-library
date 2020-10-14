import React, { FC } from "react";
import { action } from "@storybook/addon-actions";
import Button from "./Button";

export default {
  component: Button,
  title: "Components / Button",
};

export const Primary: FC = () => {
  return (
    <Button
      kind="primary"
      onClick={action("button-click")}
      onFocus={action("button-onFocus")}
      onBlur={action("button-onBlur")}
    >
      Button
    </Button>
  );
};

export const Ghost: FC = () => <Button kind="ghost">Button</Button>;

export const Disabled: FC = () => (
  <Button
    kind="primary"
    onClick={action("button-click")}
    onFocus={action("button-onFocus")}
    onBlur={action("button-onBlur")}
    disabled
  >
    Button
  </Button>
);

export const MoreProps: FC = () => {
  return (
    <Button kind="primary" className="some-class" id="some-id">
      Button
    </Button>
  );
};
