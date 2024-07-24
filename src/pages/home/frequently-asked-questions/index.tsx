import SectionTitle from "../../../components/section-title";
import FaqCard from "./faq-card";

interface IProps {}

interface IFAQ {
  id: number | string;
  question: string;
  answer: string;
}

const faqs: IFAQ[] = [
  {
    id: 1,
    question: "What types of products do you offer?",
    answer:
      "We offer a wide range of camping gear including tents, sleeping bags, backpacks, cooking equipment, and more.",
  },
  {
    id: 2,
    question: "How long does shipping take?",
    answer:
      "We offer a wide range of camping gear including tents, sleeping bags, backpacks, cooking equipment, and more.",
  },
  {
    id: 3,
    question: "Do you ship internationally?",
    answer:
      "We offer a wide range of camping gear including tents, sleeping bags, backpacks, cooking equipment, and more.",
  },
  {
    id: 4,
    question: "What is your return policy?",
    answer:
      "We offer a wide range of camping gear including tents, sleeping bags, backpacks, cooking equipment, and more.",
  },
  {
    id: 5,
    question: "Do you offer warranties on your products?",
    answer:
      "We offer a wide range of camping gear including tents, sleeping bags, backpacks, cooking equipment, and more.",
  },
];

const FrequentlyAskedQuestions: React.FC<IProps> = () => {
  return (
    <section className="pb-20">
      <div className="container">
        <SectionTitle
          title="Frequently Asked Questions"
          description="Find answers to the most commonly asked questions about our products, shipping, returns, and more. If you have any other inquiries, please contact our customer service team."
        />
        <div className="w-full md:max-w-2xl mx-auto space-y-4">
          {faqs.map((faq) => (
            <FaqCard key={faq.id} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FrequentlyAskedQuestions;
