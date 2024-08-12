import PageTitle from "../../components/page-title";
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
      <PageTitle title="Home - Campgears Shop" />
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
