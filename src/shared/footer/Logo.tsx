import logo from "../../assets/images/logo.png";
const Logo = () => {
  return (
    <div className="space-y-3">
      <img className="w-48 inline-block" src={logo} alt="campgears-logo" />
      <p className="text-gray-500 text-base font-roboto">
        Campers Shop is your one stop destination for all camping essentials.
      </p>
    </div>
  );
};

export default Logo;
