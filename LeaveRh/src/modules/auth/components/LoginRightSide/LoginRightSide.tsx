import starts from "../../../../assets/icons/Stars.png";
import avatars from "../../../../assets/images/avatars.png";
import "../AuthLeftSide.css";

export default function LoginRightSide() {
  return (
    <div className="login-container">
      <div className="login-background">
        <div className="login-content">
          <div className="login-header">
            <img src={starts} className="stars" alt="Stars" />
            <span className="login-title">
              Lorem Ipsum is simply dummy text
            </span>
            <p className="login-description">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>

          <img src={avatars} className="avatars" alt="Avatars" />
          <p className="join-text">Join 40,000+ users</p>
        </div>
      </div>
    </div>
  );
}
