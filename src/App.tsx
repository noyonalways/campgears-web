import "./App.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import BestSellingProducts from "./pages/home/best-selling-products";
import Categories from "./pages/home/categories";
import FeatureAdventureGroups from "./pages/home/featured-adventure-groups";
import FeaturedProducts from "./pages/home/featured-products";
import FrequentlyAskedQuestions from "./pages/home/frequently-asked-questions";

function App() {
  return (
    <>
      <Navbar />
      <BestSellingProducts />
      <Categories />
      <FeaturedProducts />
      <FeatureAdventureGroups />
      <FrequentlyAskedQuestions />
      <Footer />
    </>
  );
}

export default App;
