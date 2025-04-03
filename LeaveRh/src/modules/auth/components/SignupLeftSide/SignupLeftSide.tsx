import { Link } from "react-router-dom";
import { handleSignup } from "../../../../api/handleSignup";
import Footer from "../Footer/Footer";
import Form from "../Form/Form";
import "../AuthLeftSide.css";
import logo from "../../../../assets/images/Logo.png";
export default function SignupLeftSide() {
  return (
    <div className="login-left-side-container">
      <div className="login-left-side-form">
        <div className="">
          <img src={logo} className="" />
          <Form title="Sign Up" handleAuth={handleSignup} isSignup={true} />
        </div>

        <div className="flex gap-1 items-center justify-center mt-2">
          <p className="text-[#667085] text-sm font-normal">{`Don't have an account ?`}</p>
          <Link
            to={`/auth/login`}
            className="text-purple-700 hover:underline text-sm"
          >
            {"Login"}
          </Link>
        </div>
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
}
