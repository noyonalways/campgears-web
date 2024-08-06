import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { HiX } from "react-icons/hi";
import StatusDropdown from "../update-product-modal/status-dropdown";

interface IProps {}

interface IFormInputs {
  name: string;
  description: string;
  price: number;
  quantity: number;
  color: string;
  category: string;
  subCategory: string;
  status: string;
  featured: boolean;
  tags: string;
  image: FileList | null;
  galleryImages: FileList | null;
}

const AddProductModal: React.FC<IProps> = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IFormInputs>({
    defaultValues: {
      name: "",
      description: "",
      price: 0,
      quantity: 0,
      color: "",
      category: "",
      subCategory: "",
      status: "",
      featured: false,
      tags: "",
      image: null,
      galleryImages: null,
    },
  });

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const onSubmit = async (data: IFormInputs) => {
    console.log("Form Data:", data);
    console.log("Image File:", data.image);
    console.log("Gallery Images:", data.galleryImages);
    // Handle form submission logic here

    const response = await fetch(
      `https://api.imgbb.com/1/upload?key=${
        import.meta.env.VITE_IMGBB_API_KEY
      }`,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        body: data.image![0],
        method: "POST",
      }
    );

    console.log(response);
  };

  return (
    <div>
      <button
        className="btn focus:ring-2 focus:ring-offset-2 focus:ring-primary"
        onClick={toggleModal}
      >
        Add Product
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto bg-white lg:py-8">
          <div className="relative w-full max-w-4xl max-h-full">
            {/* Modal content */}
            <div className="bg-white">
              <div className="flex justify-between items-center p-4 lg:px-0 border-b">
                <h2 className="text-lg font-medium">Add a new Product</h2>
                <button
                  onClick={toggleModal}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <HiX size={24} />
                </button>
              </div>

              <form
                onSubmit={handleSubmit(onSubmit)}
                className="p-6 lg:px-0 lg:flex lg:justify-between lg:items-start lg:space-x-4"
              >
                <div className="grid grid-cols-1 gap-4 basis-1/2">
                  <label htmlFor="name">Product Name</label>
                  <input
                    type="text"
                    id="name"
                    {...register("name", {
                      required: "Product Name is required",
                    })}
                    className="border border-gray-300 rounded p-2"
                  />
                  {errors.name && (
                    <span className="text-red-500">{errors.name.message}</span>
                  )}

                  <label htmlFor="description">Description</label>
                  <textarea
                    rows={4}
                    id="description"
                    {...register("description", {
                      required: "Description is required",
                    })}
                    className="border border-gray-300 rounded p-2 resize-none"
                  />
                  {errors.description && (
                    <span className="text-red-500">
                      {errors.description.message}
                    </span>
                  )}

                  <label htmlFor="price">Price</label>
                  <input
                    type="number"
                    id="price"
                    {...register("price", {
                      required: "Price is required",
                      valueAsNumber: true,
                    })}
                    className="border border-gray-300 rounded p-2"
                  />
                  {errors.price && (
                    <span className="text-red-500">{errors.price.message}</span>
                  )}

                  <label htmlFor="quantity">Quantity</label>
                  <input
                    type="number"
                    id="quantity"
                    {...register("quantity", {
                      required: "Quantity is required",
                      valueAsNumber: true,
                    })}
                    className="border border-gray-300 rounded p-2"
                  />
                  {errors.quantity && (
                    <span className="text-red-500">
                      {errors.quantity.message}
                    </span>
                  )}

                  <label htmlFor="color">Color</label>
                  <input
                    type="text"
                    id="color"
                    {...register("color", {
                      required: "Price is required",
                    })}
                    className="border border-gray-300 rounded p-2"
                  />
                  {errors.color && (
                    <span className="text-red-500">{errors.color.message}</span>
                  )}

                  <label htmlFor="category">Category</label>
                  <input
                    type="text"
                    id="category"
                    {...register("category", {
                      required: "Category is required",
                    })}
                    className="border border-gray-300 rounded p-2"
                  />
                  {errors.category && (
                    <span className="text-red-500">
                      {errors.category.message}
                    </span>
                  )}
                </div>

                <div className="grid grid-cols-1 gap-4 flex-1">
                  <label htmlFor="sub-category">Sub Category</label>
                  <input
                    type="text"
                    id="sub-category"
                    {...register("subCategory", {
                      required: "Sub Category is required",
                    })}
                    className="border border-gray-300 rounded p-2"
                  />
                  {errors.subCategory && (
                    <span className="text-red-500">
                      {errors.subCategory.message}
                    </span>
                  )}

                  <label htmlFor="status">Status</label>
                  <Controller
                    name="status"
                    control={control}
                    rules={{ required: "Status is required" }}
                    render={({ field }) => (
                      <StatusDropdown
                        value={field.value}
                        onChange={field.onChange}
                        error={errors.status?.message}
                      />
                    )}
                  />
                  {errors.status && (
                    <span className="text-red-500">
                      {errors.status.message}
                    </span>
                  )}

                  <label htmlFor="featured">Featured</label>
                  <input
                    type="checkbox"
                    id="featured"
                    {...register("featured")}
                    className="size-4 border border-gray-300 rounded p-2"
                  />

                  <label htmlFor="tags">Tags</label>
                  <input
                    type="text"
                    id="tags"
                    {...register("tags")}
                    className="border border-gray-300 rounded p-2"
                  />

                  <label htmlFor="image">Image</label>
                  <input
                    type="file"
                    id="image"
                    {...register("image", { required: "Image is required" })}
                    className="border border-gray-300 rounded p-2"
                  />
                  {errors.image && (
                    <span className="text-red-500">{errors.image.message}</span>
                  )}

                  <label htmlFor="gallery-images">Gallery Images</label>
                  <input
                    type="file"
                    id="gallery-images"
                    {...register("galleryImages")}
                    className="border border-gray-300 rounded p-2"
                    multiple
                  />

                  <div className="flex justify-end mt-4">
                    <button
                      type="submit"
                      className="btn focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                    >
                      Add Product
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddProductModal;
