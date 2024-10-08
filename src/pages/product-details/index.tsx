import { motion } from "framer-motion";
import { useState } from "react";
import {
  HiMinus,
  HiOutlineChevronRight,
  HiOutlineStar,
  HiPlus,
} from "react-icons/hi";
import { HiOutlineHeart } from "react-icons/hi2";
import { useParams } from "react-router-dom";
import { toast } from "sonner";
import ImageMagnifier from "../../components/image-magnifier";
import Loading from "../../components/loading";
import PageTitle from "../../components/page-title";
import { addToCart } from "../../redux/features/cart/cartSlice";
import { useGetProductQuery } from "../../redux/features/product/productApi";
import { useGetAllreviewQuery } from "../../redux/features/review/reviewApi";
import { addToWishlist } from "../../redux/features/wishlist/wishlistSlice";
import { useAppDispatch } from "../../redux/hook";
import AddReview from "./add-review";
import ReviewList from "./review-list";

interface IProps {}

// type TError = {
//   status: number;
//   data: {
//     success: boolean;
//     message: string;
//     errorMessages?: {
//       path: string;
//       message: string;
//     }[];
//     statusCode?: number;
//     stack?: string;
//   };
// };

const ProductDetails: React.FC<IProps> = () => {
  const params = useParams();
  const id = params?.slug?.split("_")[params?.slug?.split("_")?.length - 1];
  const { data, isLoading, error } = useGetProductQuery(id!, {
    refetchOnMountOrArgChange: true,
  });
  const { data: reviews } = useGetAllreviewQuery(id!);

  const totalRating =
    reviews?.data && reviews?.data.length > 0
      ? reviews?.data!.reduce((acc, cur) => acc + cur.rating, 0)
      : 0;
  const averageRating =
    reviews?.data && reviews?.data.length > 0
      ? totalRating / reviews?.data.length
      : 0;

  const {
    _id,
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

  // const customError = error as TError;

  const [quantity, setQuantity] = useState(1);
  const dispatch = useAppDispatch();

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increment = () => {
    setQuantity(quantity + 1);
  };

  const handleAddToCart = () => {
    dispatch(addToCart({ _id: _id!, quantity, price: price! }));
    toast.success("Product added to the cart", {
      id: "productAddToCartSuccess",
      position: "top-right",
      className: "text-primary",
      duration: 1000,
    });
  };

  if (error)
    return (
      <motion.section
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <div className="container">
          <div className="py-28 flex items-center justify-center">
            <div className="flex flex-col items-center space-y-4">
              <h1 className="text-xl font-semibold text-center">
                {"Failed to load data"}
              </h1>
              <button className="btn mx-auto">Reload</button>
            </div>
          </div>
        </div>
      </motion.section>
    );

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <PageTitle title={name!} />
      <section className="pb-20">
        <div className="container">
          {isLoading ? (
            <div className="flex items-center justify-center h-[60vh]">
              <Loading />
            </div>
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
                <div className="grid md:grid-cols-2 gap-2 lg:gap-6 lg:basis-2/3">
                  <ImageMagnifier
                    src={image!}
                    className="w-full rounded"
                    alt={name + "-image"}
                    height={100}
                    width={100}
                  />
                  {galleryImages &&
                    galleryImages?.map((img) => (
                      <ImageMagnifier
                        src={img.url}
                        className="w-full rounded"
                        alt={img.alt + "-image"}
                        height={100}
                        width={100}
                      />
                    ))}
                </div>
                <div className="basis-1/3">
                  <h3 className="text-sm uppercase font-semibold font-montserrat mb-3 bg-secondary px-3 rounded-md py-1 inline-block">
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
                      <div className="items-center flex justify-between">
                        <button
                          onClick={decrement}
                          className="bg-[#e7ecef] size-10 flex justify-center items-center rounded-sm active:scale-95 duration-100"
                        >
                          <HiMinus />
                        </button>
                        <span className="h-10 flex-1 flex flex-col justify-center items-center border-t border-b">
                          {quantity.toString().padStart(2, "0")}
                        </span>
                        <button
                          onClick={increment}
                          className="bg-[#e7ecef] size-10 flex justify-center items-center rounded-sm active:scale-95 duration-100"
                        >
                          <HiPlus />
                        </button>
                      </div>
                    </div>
                    <div className="flex items-center space-x-8">
                      <button
                        className="btn cursor-pointer disabled:bg-primary/40 disabled:cursor-not-allowed"
                        disabled={quantity > stockQuantity!}
                        onClick={handleAddToCart}
                      >
                        Add to Cart
                      </button>
                      <button
                        title="Add to Wishlist"
                        onClick={() => dispatch(addToWishlist({ _id: _id! }))}
                        className="group active:scale-90 duration-100"
                      >
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

          <>
            <div className="space-y-4 my-8 font-montserrat">
              <h2 className="text-lg font-medium">Reviews and Ratings</h2>
              <AddReview />
            </div>
            <ReviewList />
          </>
        </div>
      </section>
    </motion.div>
  );
};

export default ProductDetails;
