import React from "react";
import { useNavigate } from "react-router-dom";
import UserForm from "../../component/userForm";
import useHttpPost from "../../hooks/useHttpPost";

const CreatUser = () => {
  const { postData, loading, error } = useHttpPost("/api/users/create");

  const navigate = useNavigate();

  sessionStorage.clear();

  const handleCreate = async (value) => {
    try {
      const data = await postData(value);
      if (data?._id) {
        navigate("/members-page");
      }
    } catch (error) {
      console.log(error);
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
