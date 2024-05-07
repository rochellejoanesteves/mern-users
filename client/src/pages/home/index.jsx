import { useNavigate } from "react-router-dom";
import LoginForm from "../../component/LoginForm";
import useHttpPost from "../../hooks/useHttpPost";

const Home = () => {
  const { postData, loading, error } = useHttpPost("/api/auth/signin");

  const navigate = useNavigate()

  const handleSignIn = async (values) => {
    const data = await postData(values);
    if (!!data) {
      navigate("/members-page")
    }
  };
  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      <LoginForm
        title="Sign In"
        linkTitle="Sign Up"
        pathLocation="sign-up"
        onFinish={handleSignIn}
      />
    </div>
  );
};

export default Home;
