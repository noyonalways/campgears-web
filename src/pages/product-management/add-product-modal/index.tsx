import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { HiOutlineCloudUpload, HiX } from "react-icons/hi";
import { toast } from "sonner";
import { useAddProductMutation } from "../../../redux/features/product/productApi";
import { TGalleryImage } from "../../../types";
import StatusDropdown from "../update-product-modal/status-dropdown";

interface IProps {}

export interface IFormInputs {
  name: string;
  description: string;
  price: number;
  stockQuantity: number;
  color: string;
  category: string;
  subCategory: string;
  brand: string;
  status: string;
  isFeatured: boolean;
  tags: string[];
  image: string;
  galleryImages: TGalleryImage[] | null;
}

type TImageUploadResult = {
  status: number;
  success: boolean;
  data: Record<string, string>;
};

const AddProductModal: React.FC<IProps> = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [imageUploadLoading, setImageUploadLoading] = useState(false);
  const [image, setImage] = useState<File | null>(null);
  const [galleryImagesUploadResult, setGalleryImagesUploadResult] = useState<
    TImageUploadResult[] | null
  >([]);
  const [addProduct, { isLoading, data: ResponseData, error, isSuccess }] =
    useAddProductMutation();

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
      stockQuantity: 0,
      color: "",
      category: "",
      brand: "",
      subCategory: "",
      status: "",
      isFeatured: false,
      tags: [""],
      image: "",
      galleryImages: null,
    },
  });

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleUploadImages = async (image: File) => {
    if (!image) {
      toast.error("No Image Selected", {
        id: "uploadGalleryImages",
        position: "top-right",
        className: "text-red-500",
      });
      return;
    }

    setImageUploadLoading(true);
    const form = new FormData();
    form.append("image", image);

    const url = `https://api.imgbb.com/1/upload?key=${
      import.meta.env.VITE_IMGBB_API_KEY
    }`;

    const config = {
      method: "POST",
      body: form,
    };

    try {
      const response = await fetch(url, config);
      if (!response.ok) {
        toast.error("Failed to upload image", {
          id: "uploadImage",
          position: "top-right",
          className: "text-red-500",
        });
      }

      const json = await response.json();
      if (json.success) {
        setGalleryImagesUploadResult((prev) => {
          if (prev === null) {
            return [json];
          }
          return [...prev, json];
        });
      }

      if (json.success) {
        toast.success("Image uploaded successfully", {
          id: "uploadImageSuccess",
          position: "top-right",
          className: "text-primary",
        });
      }
      setImageUploadLoading(false);
    } catch (error) {
      console.error("Error uploading image:", error);
      setImageUploadLoading(false);
    }
  };

  const onSubmit = async (data: IFormInputs) => {
    if (galleryImagesUploadResult?.length === 0) {
      toast.error("Please select at least one image or gallery image", {
        id: "uploadGalleryImages",
        position: "top-right",
        className: "text-red-500",
      });
      return;
    }

    data.image = galleryImagesUploadResult![0]?.data.url;
    if (galleryImagesUploadResult!.length > 1) {
      data.galleryImages = galleryImagesUploadResult!
        .slice(1)!
        .map((image) => ({ url: image.data.url, alt: image.data.title }));
    }
    data.galleryImages = [];

    console.log("Form Data:", data);
    // console.log("Errors:", errors);

    console.log("isSuccess:", isSuccess);
    console.log("Data:", ResponseData);
    console.log("Error:", error);

    data.tags = data.tags.toString().split(",");

    try {
      await addProduct(data);
      toast.success("Product added successfully", {
        id: "addProductSuccess",
        position: "top-right",
        className: "text-primary",
      });
      toggleModal();
    } catch (error) {
      console.error("Error adding product:", error);
      toast.error("Failed to add product", {
        id: "addProductError",
        position: "top-right",
        className: "text-red-500",
      });
    }
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

                  <label htmlFor="stockQuantity">Quantity</label>
                  <input
                    type="number"
                    id="stockQuantity"
                    {...register("stockQuantity", {
                      required: "Quantity is required",
                      valueAsNumber: true,
                    })}
                    className="border border-gray-300 rounded p-2"
                  />
                  {errors.stockQuantity && (
                    <span className="text-red-500">
                      {errors.stockQuantity.message}
                    </span>
                  )}

                  <label htmlFor="color">Color</label>
                  <input
                    type="text"
                    id="color"
                    {...register("color", {
                      required: "Color is required",
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
                </div>

                <div className="grid grid-cols-1 gap-4 flex-1">
                  <label htmlFor="category">Brand</label>
                  <input
                    type="text"
                    id="brand"
                    {...register("brand", {
                      required: "Brand is required",
                    })}
                    className="border border-gray-300 rounded p-2"
                  />
                  {errors.brand && (
                    <span className="text-red-500">{errors.brand.message}</span>
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
                    {...register("isFeatured")}
                    className="size-4 border border-gray-300 rounded p-2"
                  />

                  <label htmlFor="tags">Tags</label>
                  <input
                    type="text"
                    id="tags"
                    {...register("tags")}
                    className="border border-gray-300 rounded p-2"
                  />

                  <>
                    <label htmlFor="image">
                      Image{" "}
                      {imageUploadLoading && (
                        <span className="text-primary ml-4">Uploading...</span>
                      )}{" "}
                    </label>
                    <div className="flex justify-between space-x-2">
                      <input
                        type="file"
                        id="image"
                        className="border border-gray-300 rounded p-2 w-full"
                        onChange={(e) =>
                          setImage(e.target.files ? e.target.files[0] : null)
                        }
                      />
                      <button
                        onClick={() => handleUploadImages(image!)}
                        title="Upload Image"
                        type="button"
                        className="bg-primary text-white px-4 py-1 rounded border"
                      >
                        <HiOutlineCloudUpload />
                      </button>
                    </div>

                    {!image && (
                      <span className="text-red-500">Image is required</span>
                    )}

                    <label htmlFor="gallery-images">Gallery Images</label>
                    <div className="flex justify-between space-x-2">
                      <input
                        type="file"
                        id="image"
                        className="border border-gray-300 rounded p-2 w-full"
                        onChange={(e) =>
                          setImage(e.target.files ? e.target.files[0] : null)
                        }
                      />
                      <button
                        onClick={() => handleUploadImages(image!)}
                        title="Upload Image"
                        type="button"
                        className="bg-primary text-white px-4 py-1 rounded border"
                      >
                        <HiOutlineCloudUpload />
                      </button>
                    </div>
                    <div className="flex justify-between space-x-2">
                      <input
                        type="file"
                        id="image"
                        className="border border-gray-300 rounded p-2 w-full"
                        onChange={(e) =>
                          setImage(e.target.files ? e.target.files[0] : null)
                        }
                      />
                      <button
                        onClick={() => handleUploadImages(image!)}
                        title="Upload Image"
                        type="button"
                        className="bg-primary text-white px-4 py-1 rounded border"
                      >
                        <HiOutlineCloudUpload />
                      </button>
                    </div>
                  </>

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
