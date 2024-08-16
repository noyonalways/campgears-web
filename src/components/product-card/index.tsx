import { Rating } from "@smastrom/react-rating";
import { Link } from "react-router-dom";
import { useGetAllreviewQuery } from "../../redux/features/review/reviewApi";

interface IProps {
  image: string;
  name: string;
  price: number;
  slug?: string;
  _id?: string;
  description: string;
  category: string;
}

const ProductCard: React.FC<IProps> = ({
  image,
  name,
  price,
  slug,
  _id,
  description,
  category,
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

  return (
    <div className="font-montserrat p-5 py-5 text-left transform duration-500 hover:-translate-y-2 hover:shadow-xl cursor-pointer rounded border  border-slate-200 lg:border-slate-100/70 group overflow-hidden">
      <img
        className="size-64 lg:size-52 :object-cover mx-auto group-hover:scale-105 duration-200 rounded"
        src={image}
        alt=""
      />
      <h4 className="block font-semibold mb-2 mt-6 text-primary">{category}</h4>
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
      <Link
        className="p-2 px-6 bg-primary/80 text-white rounded-md hover:bg-primary active:scale-95 inline-block"
        to={`/products/${slug! + "_" + _id}`}
      >
        See Details
      </Link>
    </div>
  );
};

export default ProductCard;
