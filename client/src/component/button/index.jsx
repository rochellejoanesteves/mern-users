import React from "react";
import { Button } from "antd";

const ActionButton = ({title, onClick}) => {
  return (
    <Button type="primary" onClick={onClick}>
      {title}
    </Button>
  );
};

export default ActionButton;
