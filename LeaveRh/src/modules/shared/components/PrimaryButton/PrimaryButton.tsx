import { IButton } from "../../types";
import "./PrimaryButton.css";
const PrimaryButton = ({ text, onClick }: IButton) => {
  return (
    <button
      onClick={onClick}
      type="submit"
      className="bg-color-primary text-white border py-2 w-full rounded-xl flex justify-center items-center text-sm hover:scale-105 duration-300"
    >
      {text}
    </button>
  );
};

export default PrimaryButton;
