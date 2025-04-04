import { Link } from "react-router-dom";
import { handleSignup } from "../../../../api/handleSignup";
import Footer from "../Footer/Footer";
import Form from "../Form/Form";
import Header from "../Header/Header";
import logo from "../../../../assets/images/Logo.png";
import "../AuthLeftSide.css";

export default function SignupLeftSide() {
  return (
    <div className="login-left-side-container">
      <div className="login-left-side-form">
        <div className="">
          <img src={logo} className="" />
          <Header title="Sign up" />
          <Form title="Log In" handleAuth={handleSignup} isSignup={true} />
        </div>

        <div className="create-account">
          <p>{`Already have an account?`}</p>
          <Link to={`/auth/login`} className="link-button">
            {"Login"}
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
