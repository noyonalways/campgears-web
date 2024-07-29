import { useState } from "react";
import { HiX } from "react-icons/hi";
import StatusDropdown from "./status-dropdown";

const UpdateProductModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Button to open the modal */}
      <button
        onClick={toggleModal}
        className="px-4 py-1 rounded active:scale-95 duration-100 text-white bg-blue-500 hover:bg-blue-700 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 font-medium"
      >
        Update
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto bg-white lg:py-8">
          <div className="relative w-full max-w-4xl max-h-full">
            {/* Modal content */}
            <div className="bg-white">
              <div className="flex justify-between items-center p-4 lg:px-0 border-b">
                <h2 className="text-lg font-medium">Update a Product</h2>
                <button
                  onClick={toggleModal}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <HiX size={24} />
                </button>
              </div>

              <div>
                <div className="p-6 lg:px-0 lg:flex lg:justify-between lg:items-start lg:space-x-4">
                  <div className="grid grid-cols-1 gap-4 basis-1/2">
                    <label htmlFor="name">Product Name</label>
                    <input
                      type="text"
                      id="name"
                      className="border border-gray-300 rounded p-2"
                    />
                    <label htmlFor="description">Description</label>
                    <textarea
                      rows={4}
                      id="description"
                      className="border border-gray-300 rounded p-2 resize-none"
                    />
                    <label htmlFor="price">Price</label>
                    <input
                      type="text"
                      id="price"
                      className="border border-gray-300 rounded p-2"
                    />
                    <label htmlFor="quantity">Quantity</label>
                    <input
                      type="text"
                      id="quantity"
                      className="border border-gray-300 rounded p-2"
                    />
                    <label htmlFor="color">Color</label>
                    <input
                      type="text"
                      id="color"
                      className="border border-gray-300 rounded p-2"
                    />
                    <label htmlFor="category">Category</label>
                    <input
                      type="text"
                      id="category"
                      className="border border-gray-300 rounded p-2"
                    />
                    <label htmlFor="sub-category">Sub Category</label>
                    <input
                      type="text"
                      id="sub-category"
                      className="border border-gray-300 rounded p-2"
                    />
                  </div>
                  <div className="grid grid-cols-1 gap-4 flex-1">
                    <label htmlFor="status">Status</label>
                    <StatusDropdown />

                    <label htmlFor="image">Image</label>
                    <input
                      type="file"
                      id="image"
                      className="border border-gray-300 rounded p-2"
                    />
                    <label htmlFor="gallery-images">Gallery Images</label>
                    <input
                      type="file"
                      id="gallery-images"
                      className="border border-gray-300 rounded p-2"
                      multiple
                    />
                    <input
                      type="file"
                      id="gallery-images"
                      className="border border-gray-300 rounded p-2"
                      multiple
                    />
                    <input
                      type="file"
                      id="gallery-images"
                      className="border border-gray-300 rounded p-2"
                      multiple
                    />
                    <div className="flex justify-end mt-4">
                      <button className="bg-blue-500 hover:bg-blue-700 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 text-white font-medium py-2 px-4 rounded">
                        Update Product
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UpdateProductModal;
