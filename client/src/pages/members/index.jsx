import React from "react";
import { useNavigate } from "react-router-dom";
import ActionButton from "../../component/button";

const Members = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/create-user")
  };
  return (
    <div>
      <ActionButton title="Add" onClick={handleClick} />
    </div>
  );
};

export default Members;
