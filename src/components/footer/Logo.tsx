import logo from "../../assets/images/campgears-logo.png";
const Logo = () => {
  return (
    <div className="space-y-3">
      <img className="w-48 inline-block" src={logo} alt="campgears-logo" />
      <p className="text-gray-500 font-sans text-base">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam
        accusamus a, suscipit quas vitae minus.
      </p>
    </div>
  );
};

export default Logo;
