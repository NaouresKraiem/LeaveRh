import { Link } from "react-router-dom";
import { handleLogin } from "../../../../api/handleLogin";
import Footer from "../Footer/Footer";
import Form from "../Form/Form";
import Header from "../Header/Header";
import logo from "../../../../assets/images/Logo.png";
import "../AuthLeftSide.css";

export default function LoginLeftSide() {
  return (
    <div className="login-left-side-container">
      <div className="login-left-side-form">
        <div className="">
          <img src={logo} className="" />
          <Header
            title="Log In"
            subtitle="Welcome Back ! Please enter your details."
          />
          <Form title="Log In" handleAuth={handleLogin} isSignup={false} />
        </div>

        <div className="create-account">
          <p>{`Don’t have an account?`}</p>
          <Link to={`/auth/signup`} className="link-button">
            {"Sign up"}
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
