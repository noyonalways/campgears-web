import PaymentMethods from "../../assets/images/payment-methods.png";
import ConnectWithUs from "./ConnectWithUs";
import CustomerService from "./CustomerService";
import Logo from "./Logo";
import QuickLinks from "./QuickLinks";

const Footer = () => {
  return (
    <footer className="mb-4 font-montserrat print:hidden">
      <div className="container">
        <div className="bg-secondary p-7 rounded-lg space-y-10">
          <div className="grid gap-y-4 md:grid-cols-2 lg:grid-cols-4 md:gap-6 lg:gap-x-6 lg:gap-y-0">
            <Logo />
            <QuickLinks />
            <ConnectWithUs />
            <CustomerService />
          </div>
          <div className="flex flex-col space-y-3 lg:space-y-0 lg:flex-row items-center lg:justify-between">
            <div className="space-x-6">
              <a className="text-xs text-slate-700 hover:underline" href="#">
                Terms & Conditions
              </a>
              <a className="text-xs text-slate-700 hover:underline" href="#">
                Cookie & Privacy Policy
              </a>
            </div>
            <div className="w-64">
              <img src={PaymentMethods} alt="payment-methods-logo-image" />
            </div>
          </div>
          <div className="flex flex-col space-y-3 lg:space-y-0 lg:flex-row items-center lg:justify-between">
            <p className="text-center lg:text-left">
              <span>&copy;</span> {new Date().getFullYear()}{" "}
              <a href="#" className="font-bold">
                CAMPGEARS
              </a>{" "}
              All rights reserved
            </p>
            <p className="text-xs">
              Made by{" "}
              <a
                className="font-medium"
                target="_blank"
                href="https://linkedin.com/in/noyonalways"
              >
                @noyonalways
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
