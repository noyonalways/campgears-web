import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "./index.css";
// Import Swiper styles
import { RouterProvider } from "react-router-dom";
import { Toaster } from "sonner";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { store } from "./redux/store.ts";
import router from "./routes/index.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
    <Toaster />
  </React.StrictMode>
);
