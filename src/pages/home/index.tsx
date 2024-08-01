import BestSellingProducts from "./best-selling-products";
import Categories from "./categories";
import FeatureAdventureGroups from "./featured-adventure-groups";
import FeaturedProducts from "./featured-products";
import FrequentlyAskedQuestions from "./frequently-asked-questions";
import HeroSection from "./hero-section";

interface IProps {}

const HomePage: React.FC<IProps> = () => {
  return (
    <>
      <HeroSection />
      <BestSellingProducts />
      <Categories />
      <FeaturedProducts />
      <FeatureAdventureGroups />
      <FrequentlyAskedQuestions />
    </>
  );
};

export default HomePage;
