import "./App.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import BestSellingProducts from "./pages/home/best-selling-products";
import Categories from "./pages/home/categories";
import FeatureAdventureGroups from "./pages/home/featured-adventure-groups";
function App() {
  return (
    <>
      <Navbar />
      <BestSellingProducts />
      <Categories />
      <FeatureAdventureGroups />
      <Footer />
    </>
  );
}

export default App;
