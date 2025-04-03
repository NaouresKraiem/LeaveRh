import { IHeader } from "../../../shared/types";

const Header = ({ title, subtitle }: IHeader) => {
  return (
    <header className="flex flex-col gap-6">
      <span className="text-4xl font-semibold text-header-title">{title}</span>
      <p className="text-base font-normal text-header-subtitle">{subtitle}</p>
    </header>
  );
};

export default Header;
