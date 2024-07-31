import "./App.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import BestSellingProducts from "./pages/home/best-selling-products";
import Categories from "./pages/home/categories";
import FeatureAdventureGroups from "./pages/home/featured-adventure-groups";
import FeaturedProducts from "./pages/home/featured-products";
import FrequentlyAskedQuestions from "./pages/home/frequently-asked-questions";
import HeroSection from "./pages/home/hero-section";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <BestSellingProducts />
        <Categories />
        <FeaturedProducts />
        <FeatureAdventureGroups />
        <FrequentlyAskedQuestions />
      </main>
      <Footer />
    </>
  );
}

export default App;
