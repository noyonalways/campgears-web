import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface IProps {
  _id: string;
  image: string;
  name: string;
  slug: string;
  price: number;
  quantity: number;
}

const CheckoutProductCard: React.FC<IProps> = ({
  _id,
  image,
  name,
  slug,
  price,
  quantity,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="flex space-x-2 bg-white rounded p-2"
    >
      <img className="size-24 rounded" src={image} alt={name + "-image"} />
      <div className="flex-1 space-y-1">
        <Link
          to={`/products/${slug! + "_" + _id}`}
          className="font-medium hover:text-primary"
        >
          {name.length > 20 ? name.substring(0, 20) + "..." : name}
        </Link>
        <div className="flex justify-between text-sm">
          <span>Quantity: {quantity}</span>
          <span>$ {price * quantity}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default CheckoutProductCard;
