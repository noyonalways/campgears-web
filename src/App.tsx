import "./App.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Categories from "./pages/home/categories";
import FeatureAdventureGroups from "./pages/home/featured-adventure-groups";
function App() {
  return (
    <>
      <Navbar />
      <Categories />
      <FeatureAdventureGroups />
      <Footer />
    </>
  );
}

export default App;
