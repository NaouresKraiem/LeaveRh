import { Avatar } from "antd";

const CustomAvatar = ({
  src,
  onClick,
  className,
}: {
  className?: string;
  src: string;
  onClick?: () => void;
}) => {
  return (
    <Avatar
      src={src}
      alt="avatar"
      className={`${className ? className : ""} avatar-container `}
      onClick={onClick}
    />
  );
};

export default CustomAvatar;
