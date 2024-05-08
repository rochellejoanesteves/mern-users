import React, { useState, useEffect } from "react";
import { useRoutes, useNavigate } from "react-router-dom";
import CreatUser from "../src/pages/createUser";
import Home from "../src/pages/home";
import Members from "../src/pages/members";
import SignUp from "../src/pages/sign-up";
import UpdateUser from "../src/pages/updateUser";

const Router = () => {
  const [userData, setUserData] = useState([]);
  const navigate = useNavigate();
  const account = localStorage.getItem("USER_ACCOUNT");

  useEffect(() => {
    if (!!account) {
      navigate("/members-page");
    } else {
      navigate("/");
    }
  }, []);

  const routes = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/sign-up",
      element: <SignUp />,
    },
    {
      path: "/members-page",
      element: <Members />,
    },
    {
      path: "/create-user",
      element: <CreatUser />,
    },
    {
      path: "/update-user/:id",
      element: <UpdateUser />,
    },
  ]);
  return routes;
};

export default Router;
