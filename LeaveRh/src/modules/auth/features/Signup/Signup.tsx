import SignupLeftSide from "../../components/SignupLeftSide/SignupLeftSide";
import LoginRightSide from "../../components/LoginRightSide/LoginRightSide";
import "../Auth.css";
const Signup = () => {
  return (
    <div className="auth-bg-container">
      <SignupLeftSide />
      <LoginRightSide />
    </div>
  );
};

export default Signup;
