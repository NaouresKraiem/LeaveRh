import LoginLeftSide from "../../components/LoginLeftSide/LoginLeftSide";
import LoginRightSide from "../../components/LoginRightSide/LoginRightSide";
import "../Auth.css";
const Login = () => {
  return (
    <div className="auth-bg-container">
      <LoginLeftSide />
      <LoginRightSide />
    </div>
  );
};

export default Login;
