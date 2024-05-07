import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from "./component/LoginForm";
import style from "./styles.module.scss";

function App() {
  return (
    <div className={style.appConatiner}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <LoginForm title="Sign In" linkTitle="Sign Up" pathLocation="sign-up" />
            }
          />
          <Route
            path="/sign-up"
            element={
              <LoginForm
                title="Sign Up"
                linkTitle="Sign In"
                pathLocation="/"
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
