import { motion } from "framer-motion";
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
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <PageTitle title="Home - Campgears Shop" />
      <HeroSection />
      <BestSellingProducts />
      <Categories />
      <FeaturedProducts />
      <FeatureAdventureGroups />
      <FrequentlyAskedQuestions />
    </motion.div>
  );
};

export default HomePage;
