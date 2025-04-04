
const Illustration = () => {
  return (
    <div className=" md:flex w-full h-full items-center justify-center bg-[url('/src/assets/images/background.png')]  bg-cover bg-no-repeat ">
      <div className="flex flex-col justify-start px-24  gap-8">
        <div className=" flex flex-col gap-6">
          <img
            src="src\assets\icons\Stars.png"
            className=" w-[80px] h-[80px]"
          />
          <span className="text-white text-6xl font-medium ">
            Lorem Ipsum is simply dummy text
          </span>
          <p className="text-gray-300 text-base">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>

        <img
          src="src\assets\icons\avatars.png"
          className="w-[152px] h-[40px]"
        />
        <p className=" text-white flex">Join 40,000+ users</p>
      </div>
    </div>
  );
};

export default Illustration;
