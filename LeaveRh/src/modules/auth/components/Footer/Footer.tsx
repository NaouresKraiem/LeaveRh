import mailIcon from "../../../../assets/icons/mail.png";
const Footer = () => {
  return (
    <footer className="flex w-full  items-center justify-between   p-5">
      <p className="text-sm text-[#667085] font-normal">© SoftyEducation</p>
      <div className="flex space-x-1 inline-flex items-center">
        <img src={mailIcon} className="w-[16px] h-[16px] " />
        <p className="text-sm text-[#667085] font-normal">
          help@SoftyEducation.com
        </p>
      </div>
    </footer>
  );
};

export default Footer;
