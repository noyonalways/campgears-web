import { Link } from "react-router-dom";

interface IProps {
  image: string;
  name: string;
  price: number;
}

const ProductCard: React.FC<IProps> = ({ image, name, price }) => {
  return (
    <div className="border rounded-lg group overflow-hidden flex flex-col font-montserrat h-full grow">
      <figure className="overflow-hidden">
        <img
          className="group-hover:scale-105 duration-200"
          src={image}
          alt="product-image"
        />
      </figure>
      <div className="p-4 flex flex-col flex-1 justify-between">
        <h2 className="text lg font-bold mb-3">{name}</h2>
        <div className="space-y-2 ">
          <p className="font-medium">$ {price}</p>
          <Link className="btn" to="/products/random-product">
            See Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
