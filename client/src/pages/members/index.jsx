import React from "react";
import { useNavigate } from "react-router-dom";
import ActionButton from "../../component/button";
import MemberTable from "../../component/memberTable";
import useHttpGet from "../../hooks/useHttpGet";

const Members = () => {
  const { data, loading, error } = useHttpGet("/api/users/getUsers");
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/create-user");
  };

  return (
    <div>
      <ActionButton title="Add" onClick={handleClick} />
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <MemberTable data={data} />
      )}
    </div>
  );
};

export default Members;
