import { useState } from "react";
import {
  HiMinus,
  HiOutlineChevronRight,
  HiOutlineStar,
  HiPlus,
} from "react-icons/hi";
import { HiOutlineHeart } from "react-icons/hi2";
import { useParams } from "react-router-dom";
import Button from "../../components/ui/button";
import { useGetProductQuery } from "../../redux/features/product/productApi";
import { useGetAllreviewQuery } from "../../redux/features/review/reviewApi";

interface IProps {}

type TError = {
  status: number;
  data: {
    success: boolean;
    message: string;
    errorMessages?: {
      path: string;
      message: string;
    }[];
    statusCode?: number;
    stack?: string;
  };
};

const ProductDetails: React.FC<IProps> = () => {
  const params = useParams();
  const id = params?.slug?.split("_")[params?.slug?.split("_")?.length - 1];
  const { data, isLoading, error } = useGetProductQuery(id!);
  const { data: reviews } = useGetAllreviewQuery({ productId: id });
  const totalRating =
    reviews?.data && reviews?.data.length > 0
      ? reviews?.data!.reduce((acc, cur) => acc + cur.rating, 0)
      : 0;
  const averageRating =
    reviews?.data && reviews?.data.length > 0
      ? totalRating / reviews?.data.length
      : 0;

  const {
    brand,
    category,
    name,
    stockQuantity,
    price,
    status,
    color,
    description,
    subCategory,
    image,
    galleryImages,
  } = data?.data || {};

  const customError = error as TError;

  const [quantity, setQuantity] = useState(1);

  const decrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const increment = () => {
    setQuantity(quantity + 1);
  };

  if (error)
    return (
      <section>
        <div className="container">
          <div className="py-10 flex items-center justify-center">
            <div className="flex flex-col items-center space-y-2">
              <h1 className="text-xl font-semibold text-center">
                {customError.data.message}
              </h1>
              <button className="btn mx-auto">Reload</button>
            </div>
          </div>
        </div>
      </section>
    );

  return (
    <section className="pb-20">
      <div className="container">
        {isLoading ? (
          <div>Loading....</div>
        ) : (
          <>
            <div className="flex items-center space-x-2 py-3 my-4 font-montserrat text-[#717171]">
              <span>Products</span>
              <HiOutlineChevronRight />
              <span>{category}</span>
              <HiOutlineChevronRight />
              <span>{subCategory}</span>
            </div>
            <div className="flex flex-col space-y-6 lg:space-y-0 lg:flex-row lg:space-x-6">
              <div className="grid grid-cols-2 gap-2 lg:gap-6 lg:basis-2/3">
                <div>
                  <img
                    className="rounded w-full"
                    src={image}
                    alt={name + "-image"}
                  />
                </div>
                {galleryImages &&
                  galleryImages?.map((img) => (
                    <div>
                      <img className="rounded" src={img.url} alt={img.alt} />
                    </div>
                  ))}
              </div>
              <div className="basis-1/3">
                <h3 className="text-sm uppercase font-semibold font-montserrat mb-2 bg-secondary px-3 rounded-md py-1 inline-block">
                  {brand}
                </h3>
                <h1 className="text-3xl font-bold mb-3 font-montserrat">
                  {name}
                </h1>
                <div className="flex items-center space-x-5 mb-2 font-roboto">
                  <div className="text-sm space-x-2 flex items-center text-[#898989]">
                    <HiOutlineStar />
                    <span>{averageRating.toFixed(1)}</span>
                  </div>
                  <span>|</span>
                  <div>
                    <span className="text-[#167D7F] text-sm">
                      {reviews?.data && reviews?.data.length > 0
                        ? reviews?.data.length
                        : 0}{" "}
                      reviews
                    </span>
                  </div>
                </div>
                <div className="mb-4 space-y-1 font-montserrat">
                  <p className="font-semibold text-black">
                    {(status === "in-stock" && "In Stock") ||
                      (status === "out-of-stock" && "Out of Stock") ||
                      (status === "discontinued" && "Discontinued")}
                  </p>
                  <p className="text-black">Only {stockQuantity} left</p>
                </div>
                <p className="mb-4 font-roboto">{description}</p>
                <p className="mb-4 font-montserrat text-black">
                  <span className="font-semibold">Color:</span>{" "}
                  <span>{color}</span>
                </p>
                <h3 className="text-2xl font-bold mb-4 font-montserrat">
                  $ {price}
                </h3>
                <div className="flex items-end mb-4 font-montserrat justify-between">
                  <div className="space-y-2 basis-[35%]">
                    <span>Quantity</span>
                    <div className=" items-center flex justify-between">
                      <button
                        onClick={decrement}
                        className="bg-[#e7ecef] size-10 flex justify-center items-center rounded-sm active:scale-95 duration-100"
                      >
                        <HiMinus />
                      </button>
                      <span>{quantity.toString().padStart(2, "0")}</span>
                      <button
                        onClick={increment}
                        className="bg-[#e7ecef] size-10 flex justify-center items-center rounded-sm active:scale-95 duration-100"
                      >
                        <HiPlus />
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center space-x-8">
                    <Button>Add to Cart</Button>
                    <button className="group active:scale-90 duration-100">
                      <HiOutlineHeart
                        size={28}
                        className="group-hover:fill-pink-500 group-hover:text-pink-500"
                      />
                    </button>
                  </div>
                </div>
                <p className="font-montserrat text-black">
                  <span className="font-semibold">Category:</span>{" "}
                  <span>{subCategory}</span>
                </p>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default ProductDetails;
