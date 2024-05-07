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

  const handleSignOut = async () => {
    try {
      const res = await fetch("/api/auth/signout");
      const data = await res.json();
      if (!!data) {
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "10px",
        }}
      >
        <ActionButton title="Add" onClick={handleClick} />
        <ActionButton title="Sign Out" onClick={handleSignOut} />
      </div>
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
