import { BrowserRouter, Routes, Route } from "react-router-dom";
import style from "./styles.module.scss";
import Home from "./pages/home";
import SignUp from "./pages/sign-up";
import Members from "./pages/members";

function App() {
  return (
    <div className={style.appConatiner}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/members-page" element={<Members />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
