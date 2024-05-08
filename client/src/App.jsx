import { BrowserRouter, Routes, Route } from "react-router-dom";
import style from "./styles.module.scss";
import Home from "./pages/home";
import SignUp from "./pages/sign-up";
import Members from "./pages/members";
import CreatUser from "./pages/createUser";
import UpdateUser from "./pages/updateUser";
import Router from "../routes";

function App() {
  return (
    <div className={style.appConatiner}>
      <BrowserRouter>
      <Router />
      
      </BrowserRouter>
    </div>
  );
}

export default App;
