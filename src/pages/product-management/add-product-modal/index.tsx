import { motion } from "framer-motion";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { HiOutlineCloudUpload, HiX } from "react-icons/hi";
import { toast } from "sonner";
import Loading from "../../../components/loading";
import PageTitle from "../../../components/page-title";
import { useAddProductMutation } from "../../../redux/features/product/productApi";
import { IFormInputs } from "../../../types";
import StatusDropdown from "../status-dropdown";

interface IProps {}

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
  const [addProduct, { isLoading }] = useAddProductMutation();

  const {
    reset,
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
        duration: 1000,
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
          duration: 1000,
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
          duration: 1000,
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
      toast.error("Please upload a image first", {
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
    } else {
      data.galleryImages = [];
    }

    // console.log("Form Data:", data);
    // console.log("Errors:", errors);

    data.tags = data.tags.toString().split(",");
    console.log(data);

    try {
      const result = await addProduct(data).unwrap();

      toast.success(result.message, {
        id: "addProductSuccess",
        position: "top-right",
        className: "text-primary",
      });
      toggleModal();
      reset();
      setGalleryImagesUploadResult(null);
    } catch (error) {
      toast.error("Failed to add product", {
        id: "addProductError",
        position: "top-right",
        className: "text-red-500",
      });
    }
  };

  return (
    <>
      <div>
        <button
          className="btn focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          onClick={toggleModal}
        >
          Add Product
        </button>

        {/* Modal */}
        {isOpen && (
          <>
            <PageTitle title="Add Product - Campgears" />(
            <div className="fixed inset-0 z-50 flex justify-center overflow-x-hidden overflow-y-auto bg-white lg:py-8">
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

                  {isLoading ? (
                    <div className="flex items-center justify-center md:h-[60vh]">
                      <Loading />
                    </div>
                  ) : (
                    <form
                      onSubmit={handleSubmit(onSubmit)}
                      className="p-6 lg:px-0 lg:flex lg:justify-between lg:items-start lg:space-x-4"
                    >
                      <div className="grid grid-cols-1 gap-4 basis-1/2">
                        <motion.label
                          initial={{ opacity: 0, y: 40 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.2 }}
                          htmlFor="name"
                        >
                          Product Name
                        </motion.label>
                        <motion.input
                          initial={{ opacity: 0, y: 40 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.2 }}
                          type="text"
                          id="name"
                          {...register("name", {
                            required: "Product Name is required",
                          })}
                          className="border border-gray-300 rounded p-2"
                        />
                        {errors.name && (
                          <span className="text-red-500">
                            {errors.name.message}
                          </span>
                        )}

                        <motion.label
                          initial={{ opacity: 0, y: 40 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3 }}
                          htmlFor="description"
                        >
                          Description
                        </motion.label>
                        <motion.textarea
                          initial={{ opacity: 0, y: 40 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3 }}
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

                        <motion.label
                          initial={{ opacity: 0, y: 40 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4 }}
                          htmlFor="price"
                        >
                          Price
                        </motion.label>
                        <motion.input
                          initial={{ opacity: 0, y: 40 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4 }}
                          type="number"
                          id="price"
                          step="any"
                          {...register("price", {
                            required: "Price is required",
                            valueAsNumber: true,

                            min: { value: 1, message: "Minimum value is 1" },
                          })}
                          className="border border-gray-300 rounded p-2"
                        />
                        {errors.price && (
                          <span className="text-red-500">
                            {errors.price.message}
                          </span>
                        )}

                        <motion.label
                          initial={{ opacity: 0, y: 40 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5 }}
                          htmlFor="stockQuantity"
                        >
                          Stock Quantity
                        </motion.label>
                        <motion.input
                          initial={{ opacity: 0, y: 40 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5 }}
                          type="number"
                          id="stockQuantity"
                          {...register("stockQuantity", {
                            required: "Quantity is required",
                            valueAsNumber: true,
                            min: { value: 1, message: "Minimum value is 1" },
                          })}
                          className="border border-gray-300 rounded p-2"
                        />
                        {errors.stockQuantity && (
                          <span className="text-red-500">
                            {errors.stockQuantity.message}
                          </span>
                        )}

                        <motion.label
                          initial={{ opacity: 0, y: 40 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6 }}
                          htmlFor="color"
                        >
                          Color
                        </motion.label>
                        <motion.input
                          initial={{ opacity: 0, y: 40 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6 }}
                          type="text"
                          id="color"
                          {...register("color", {
                            required: "Color is required",
                          })}
                          className="border border-gray-300 rounded p-2"
                        />
                        {errors.color && (
                          <span className="text-red-500">
                            {errors.color.message}
                          </span>
                        )}

                        <motion.label
                          initial={{ opacity: 0, y: 40 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.7 }}
                          htmlFor="category"
                        >
                          Category
                        </motion.label>
                        <motion.input
                          initial={{ opacity: 0, y: 40 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.7 }}
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

                        <motion.label
                          initial={{ opacity: 0, y: 40 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.8 }}
                          htmlFor="sub-category"
                        >
                          Sub Category
                        </motion.label>
                        <motion.input
                          initial={{ opacity: 0, y: 40 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.8 }}
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
                        <motion.label
                          initial={{ opacity: 0, y: 40 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.2 }}
                          htmlFor="category"
                        >
                          Brand
                        </motion.label>
                        <motion.input
                          initial={{ opacity: 0, y: 40 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.2 }}
                          type="text"
                          id="brand"
                          {...register("brand", {
                            required: "Brand is required",
                          })}
                          className="border border-gray-300 rounded p-2"
                        />
                        {errors.brand && (
                          <span className="text-red-500">
                            {errors.brand.message}
                          </span>
                        )}

                        <motion.label
                          initial={{ opacity: 0, y: 40 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3 }}
                          htmlFor="status"
                        >
                          Status
                        </motion.label>
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

                        <motion.label
                          initial={{ opacity: 0, y: 40 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4 }}
                          htmlFor="featured"
                        >
                          Featured
                        </motion.label>
                        <motion.input
                          initial={{ opacity: 0, y: 40 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4 }}
                          type="checkbox"
                          id="featured"
                          {...register("isFeatured")}
                          className="size-4 border border-gray-300 rounded p-2"
                        />

                        <motion.label
                          initial={{ opacity: 0, y: 40 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5 }}
                          htmlFor="tags"
                        >
                          Tags
                        </motion.label>
                        <motion.input
                          initial={{ opacity: 0, y: 40 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5 }}
                          type="text"
                          id="tags"
                          {...register("tags")}
                          className="border border-gray-300 rounded p-2"
                        />

                        <>
                          <motion.label
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            htmlFor="image"
                          >
                            Image{" "}
                            {imageUploadLoading && (
                              <span className="text-primary ml-4">
                                Uploading...
                              </span>
                            )}{" "}
                          </motion.label>
                          <div className="flex justify-between space-x-2">
                            <motion.input
                              initial={{ opacity: 0, y: 40 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.6 }}
                              type="file"
                              id="image"
                              className="border border-gray-300 rounded p-2 w-full"
                              onChange={(e) =>
                                setImage(
                                  e.target.files ? e.target.files[0] : null
                                )
                              }
                            />
                            <motion.button
                              initial={{ opacity: 0, y: 40 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.6 }}
                              onClick={() => handleUploadImages(image!)}
                              title="Upload Image"
                              type="button"
                              className="bg-primary text-white px-4 py-1 rounded border"
                            >
                              <HiOutlineCloudUpload />
                            </motion.button>
                          </div>

                          {!image && (
                            <span className="text-red-500">
                              Image is required
                            </span>
                          )}

                          <motion.label
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                            htmlFor="gallery-images"
                          >
                            Gallery Images
                          </motion.label>
                          <div className="flex justify-between space-x-2">
                            <motion.input
                              initial={{ opacity: 0, y: 40 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.7 }}
                              type="file"
                              id="image"
                              className="border border-gray-300 rounded p-2 w-full"
                              onChange={(e) =>
                                setImage(
                                  e.target.files ? e.target.files[0] : null
                                )
                              }
                            />
                            <motion.button
                              initial={{ opacity: 0, y: 40 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.7 }}
                              onClick={() => handleUploadImages(image!)}
                              title="Upload Image"
                              type="button"
                              className="bg-primary text-white px-4 py-1 rounded border"
                            >
                              <HiOutlineCloudUpload />
                            </motion.button>
                          </div>
                          <div className="flex justify-between space-x-2">
                            <motion.input
                              initial={{ opacity: 0, y: 40 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.8 }}
                              type="file"
                              id="image"
                              className="border border-gray-300 rounded p-2 w-full"
                              onChange={(e) =>
                                setImage(
                                  e.target.files ? e.target.files[0] : null
                                )
                              }
                            />
                            <motion.button
                              initial={{ opacity: 0, y: 40 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.8 }}
                              onClick={() => handleUploadImages(image!)}
                              title="Upload Image"
                              type="button"
                              className="bg-primary text-white px-4 py-1 rounded border"
                            >
                              <HiOutlineCloudUpload />
                            </motion.button>
                          </div>
                        </>

                        <div className="flex justify-end mt-4">
                          <motion.button
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.9 }}
                            type="submit"
                            className="btn focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                          >
                            Add Product
                          </motion.button>
                        </div>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>
            )
          </>
        )}
      </div>
    </>
  );
};

export default AddProductModal;
