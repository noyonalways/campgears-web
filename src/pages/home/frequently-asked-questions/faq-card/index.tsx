import { useState } from "react";
import { HiChevronDown } from "react-icons/hi2";

interface IProps {
  question: string;
  answer: string;
}

const FaqCard: React.FC<IProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border rounded-md relative duration-200 overflow-hidden">
      <h3
        onClick={() => setIsOpen(!isOpen)}
        className={`font-semibold bg-secondary p-3 cursor-pointer duration-100 font-montserrat flex items-center ${
          isOpen ? "text-primary" : "text-black"
        }`}
      >
        <span className={`mr-2 duration-100 ${isOpen ? "rotate-180" : ""}`}>
          <HiChevronDown />
        </span>
        <span>{question}</span>
      </h3>
      <p
        className={`p-3 bg-white duration-200 font-roboto ${
          isOpen ? "static" : " top-[72px] absolute"
        }`}
      >
        {answer}
      </p>
    </div>
  );
};

export default FaqCard;
