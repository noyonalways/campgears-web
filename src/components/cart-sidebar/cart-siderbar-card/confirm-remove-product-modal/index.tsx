import { useState } from "react";
import { HiOutlineTrash } from "react-icons/hi";
import PageTitle from "../../../../components/page-title";
import { removeFromCart } from "../../../../redux/features/cart/cartSlice";
import { useAppDispatch } from "../../../../redux/hook";

interface IProps {
  productId: string;
}

const ConfirmRemoveProductModal: React.FC<IProps> = ({ productId }) => {
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const dispatch = useAppDispatch();

  const handleRemoveProduct = () => {
    setShowConfirmModal(true);
  };

  const confirmRemoveProduct = () => {
    dispatch(removeFromCart(productId));
    setShowConfirmModal(false);
  };

  const cancelRemoveProduct = () => {
    setShowConfirmModal(false);
  };

  return (
    <>
      <button
        onClick={handleRemoveProduct}
        className="absolute lg:right-4 right-2 top-2 lg:top-4 text-[#717171] text-lg hover:bg-[#E7ECEF] p-2 rounded-full duration-100 active:scale-95 border"
      >
        <HiOutlineTrash />
      </button>
      {showConfirmModal && (
        <>
          <PageTitle title="Remove Product - Campgears" />
          <div
            className={`fixed top-0 lg:-left-0 w-full h-screen bg-black/95 transition-all duration-300 z-10 font-montserrat ${
              showConfirmModal ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="flex items-center justify-center min-h-screen px-4 text-center sm:px-0">
              <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left mb-4">
                    <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
                      Remove a Product
                    </h3>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        Are you sure you want to remove this product?
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                  <button
                    type="button"
                    className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={confirmRemoveProduct}
                  >
                    Confirm
                  </button>
                  <button
                    type="button"
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:mt-0 sm:w-auto sm:text-sm"
                    onClick={cancelRemoveProduct}
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

export default ConfirmRemoveProductModal;
