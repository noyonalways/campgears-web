import { useState } from "react";

interface IProps {
  question: string;
  answer: string;
}

const FaqCard: React.FC<IProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border rounded-lg overflow-hidden">
      <h3
        onClick={() => setIsOpen(!isOpen)}
        className={`text-lg font-semibold bg-secondary p-3 cursor-pointer duration-100 ${
          isOpen ? "text-primary" : "text-black"
        }`}
      >
        <span className="mr-2">{"+"}</span>
        {question}
      </h3>
      <p
        className={`p-3 bg-white duration-200 ${
          isOpen ? "mb-0" : "-mb-24 sm:-mb-[72px] md:-mb-[72px] lg:-mb-[72px]"
        }`}
      >
        {answer}
      </p>
    </div>
  );
};

export default FaqCard;
