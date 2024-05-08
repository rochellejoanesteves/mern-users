import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "../../component/loginForm";
import useHttpPost from "../../hooks/useHttpPost";

const SignUp = () => {
  const { postData, loading, error } = useHttpPost("/api/auth/signup");
  console.log(error);

  const navigate = useNavigate();

  const handleSignUp = async (values) => {
    try {
      const data = await postData(values);
      if (data !== undefined) {
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      <LoginForm
        title="Sign Up"
        linkTitle="Sign In"
        pathLocation="/"
        onFinish={handleSignUp}
      />
    </div>
  );
};

export default SignUp;
