import React, { useState } from "react";
import PageTitle from "../../../components/page-title";
import { clearCart } from "../../../redux/features/cart/cartSlice";
import { useAppDispatch } from "../../../redux/hook";

interface IConfirmClearCartModalProps {}

const ConfirmClearCartModal: React.FC<IConfirmClearCartModalProps> = () => {
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const dispatch = useAppDispatch();

  const handleClearCart = () => {
    setShowConfirmModal(true);
  };

  const confirmClearCart = () => {
    dispatch(clearCart());
    setShowConfirmModal(false);
  };

  const cancelClearCart = () => {
    setShowConfirmModal(false);
  };

  return (
    <>
      {
        <button onClick={handleClearCart} className="btn-outline">
          Clear Shopping Cart
        </button>
      }

      {showConfirmModal && (
        <>
          <PageTitle title="Clear Shopping Cart - Campgears" />
          <div
            className={`fixed top-0 -left-3 lg:-left-4 w-full h-screen bg-black/95 transition-all duration-300 z-10 font-montserrat ${
              showConfirmModal ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="flex items-center justify-center min-h-screen px-4 text-center sm:px-0">
              <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left mb-4">
                    <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
                      Clear Shopping Cart
                    </h3>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        Are you sure you want to clear shopping cart?
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                  <button
                    type="button"
                    className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={confirmClearCart}
                  >
                    Confirm
                  </button>
                  <button
                    type="button"
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:mt-0 sm:w-auto sm:text-sm"
                    onClick={cancelClearCart}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ConfirmClearCartModal;
