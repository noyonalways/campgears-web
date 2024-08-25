import SectionTitle from "../../../components/section-title";
import { useGetAllFaqQuestionQuery } from "../../../redux/features/faq-question/faqQuestionApi";
import FaqCard from "./faq-card";
import FaqCardSkeleton from "./faq-card-skeleton";

interface IProps {}

const FrequentlyAskedQuestions: React.FC<IProps> = () => {
  const { data, isLoading, error } = useGetAllFaqQuestionQuery(undefined);
  let errorMessage = "";
  if (error) {
    errorMessage = "Failed to load frequently asked questions";
    if ("status" in error && error.status === 404) {
      errorMessage =
        (error?.data as { message: string })?.message || errorMessage;
    }
  }
  return (
    <section className="pb-20">
      <div className="container">
        <SectionTitle
          title="Frequently Asked Questions"
          description="Find answers to the most commonly asked questions about our products, shipping, returns, and more. If you have any other inquiries, please contact our customer service team."
        />
        {isLoading ? (
          <div className="w-full md:max-w-2xl mx-auto space-y-4">
            <FaqCardSkeleton />
            <FaqCardSkeleton />
            <FaqCardSkeleton />
          </div>
        ) : (
          <>
            {errorMessage ? (
              <div className="text-red-500 text-center font-montserrat py-24">
                {errorMessage}
              </div>
            ) : (
              <div className="w-full md:max-w-2xl mx-auto space-y-4">
                {data?.data?.map((faq) => (
                  <FaqCard
                    key={faq._id}
                    question={faq.question}
                    answer={faq.answer}
                  />
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default FrequentlyAskedQuestions;
