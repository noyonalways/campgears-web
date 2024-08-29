import { useEffect } from "react";
import "./App.css";
import CartSidebar from "./components/cart-sidebar";
import MainLayout from "./components/layouts/main-layout";
import { useAppSelector } from "./redux/hook";

function App() {
  const cartTotalItems = useAppSelector((store) => store.cart.totalItems);
  const wishlistTotalItems = useAppSelector(
    (store) => store.wishlist.totalItems
  );
  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      if (cartTotalItems > 0 || wishlistTotalItems > 0) {
        event.preventDefault();
        event.returnValue = `You have items in your ${
          cartTotalItems > 0 ? "cart" : "wishlist"
        }. Are you sure you want to leave?`;
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [cartTotalItems, wishlistTotalItems]);

  return (
    <>
      <MainLayout />
      <CartSidebar />
    </>
  );
}

export default App;
