import React, { useState } from "react";
import UserForm from "../../component/userForm";
import useHttpPost from "../../hooks/useHttpPost";
import { useNavigate, useParams } from "react-router-dom";

const UpdateUser = () => {
  const params = useParams();
  const navigate = useNavigate();

  const { postData, loading, error } = useHttpPost(
    `/api/users/update/${params.id}`
  );

  const handleUpdate = async (value) => {
    const data = await postData(value);
    if (data?._id) {
      navigate("/members-page");
    }
  };

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      <UserForm title="Update" onFinish={handleUpdate} />
    </div>
  );
};

export default UpdateUser;
