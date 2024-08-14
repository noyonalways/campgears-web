import { useEffect } from "react";
import "./App.css";
import MainLayout from "./components/layouts/main-layout";
import { useAppSelector } from "./redux/hook";

function App() {
  const { items } = useAppSelector((store) => store.cart);
  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      if (items.length > 0) {
        event.preventDefault();
        event.returnValue =
          "You have items in your cart. Are you sure you want to leave?";
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [items]);

  return <MainLayout />;
}

export default App;
