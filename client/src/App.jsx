import { BrowserRouter, Routes, Route } from "react-router-dom";
import style from "./styles.module.scss";
import Home from "./pages/home";
import SignUp from "./pages/sign-up";
import Members from "./pages/members";
import CreatUser from "./pages/createUser";

function App() {
  return (
    <div className={style.appConatiner}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/members-page" element={<Members />} />
          <Route path="/create-user" element={<CreatUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
