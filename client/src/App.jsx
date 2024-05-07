import { BrowserRouter, Routes, Route } from "react-router-dom";
import style from "./styles.module.scss";
import Home from "./pages/home";
import SignUp from "./pages/sign-up";

function App() {
  return (
    <div className={style.appConatiner}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
