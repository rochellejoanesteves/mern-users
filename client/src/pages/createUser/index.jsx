import React from "react";
import { useNavigate } from "react-router-dom";
import UserForm from "../../component/userForm";
import useHttpPost from "../../hooks/useHttpPost";

const CreatUser = () => {
  const { postData, loading, error } = useHttpPost("/api/users/create");

  const navigate = useNavigate();

  const handleCreate = async (value) => {
    const data = await postData(value);
    if (!!data) {
      navigate("/members-page");
    }
  };
  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}

      <UserForm title="Create" onFinish={handleCreate} />
    </div>
  );
};

export default CreatUser;
