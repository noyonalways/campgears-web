import { Rating } from "@smastrom/react-rating";
import { motion } from "framer-motion";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { addToCart } from "../../redux/features/cart/cartSlice";
import { useGetAllreviewQuery } from "../../redux/features/review/reviewApi";
import { useAppDispatch } from "../../redux/hook";

interface IProps {
  image: string;
  name: string;
  price: number;
  slug?: string;
  _id?: string;
  description: string;
  category: string;
  status: string;
  stockQuantity: number;
}

const ProductCard: React.FC<IProps> = ({
  image,
  name,
  price,
  slug,
  _id,
  description,
  category,
  status,
  stockQuantity,
}) => {
  const { data: reviews } = useGetAllreviewQuery(_id!);
  const totalRating =
    reviews?.data && reviews?.data.length > 0
      ? reviews?.data!.reduce((acc, cur) => acc + cur.rating, 0)
      : 0;
  const averageRating =
    reviews?.data && reviews?.data.length > 0
      ? totalRating / reviews?.data.length
      : 0;

  const dispatch = useAppDispatch();
  const handleAddToCart = () => {
    dispatch(addToCart({ _id: _id!, price, quantity: 1 }));
    toast.success("Product added to cart", {
      id: _id,
      position: "top-right",
      duration: 1000,
      className: "text-green-500",
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="font-montserrat p-5 py-5 text-left transform duration-500 hover:-translate-y-2 hover:shadow-xl cursor-pointer rounded border  border-slate-200 lg:border-slate-100/70 group overflow-hidden relative"
    >
      {stockQuantity < 1 && (
        <div className="absolute bg-gray-500 w-full text-center top-[20%] z-10 left-0 py-2 text-white">
          Out of Stock
        </div>
      )}
      <img
        className={`size-64 lg:size-52 :object-cover mx-auto group-hover:scale-105 duration-200 rounded ${
          stockQuantity < 1 && "opacity-50"
        }`}
        src={image}
        alt=""
      />
      <div className="flex items-center justify-between my-4">
        <h4 className="block font-semibold text-primary">{category}</h4>
        <span className="text-sm">
          {(status === "in-stock" && "In Stock") ||
            (status === "out-of-stock" && "Out of Stock") ||
            (status === "discontinued" && "Discontinued")}
        </span>
      </div>
      <h1 className="text-xl mb-3 h-26 lg:mb-5 lg:h-20 font-medium">
        {name.length > 40 ? name.substring(0, 40) + "..." : name}
      </h1>
      <div className="mb-5">
        <Rating
          className="max-w-24"
          readOnly
          orientation="horizontal"
          value={averageRating}
        />
      </div>
      <p className="mb-5 font-roboto">
        {description?.length > 30
          ? description?.substring(0, 30) + "..."
          : description}
      </p>
      <h2 className="font-semibold mb-5">$ {price}</h2>
      <div className="flex justify-between items-center">
        <Link
          className="p-2 px-4 text-sm bg-primary/80 text-white rounded-md hover:bg-primary active:scale-95 inline-block "
          to={`/products/${slug! + "_" + _id}`}
        >
          See Details
        </Link>
        <button
          disabled={
            stockQuantity < 1 ||
            status === "out-of-stock" ||
            status === "discontinued"
          }
          onClick={handleAddToCart}
          className="btn bg-primary/80 hover:bg-primary px-2 text-lg rounded disabled:opacity-20 disabled:cursor-not-allowed"
        >
          <HiOutlineShoppingCart />
        </button>
      </div>
    </motion.div>
  );
};

export default ProductCard;
