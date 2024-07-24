import "./App.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Categories from "./pages/home/categories";
function App() {
  return (
    <>
      <Navbar />
      <Categories />
      <Footer />
    </>
  );
}

export default App;
