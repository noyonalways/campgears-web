import { Link } from "react-router-dom";
import DeleteConfirmationModal from "../delete-product-modal";
import UpdateProductModal from "../update-product-modal";

interface IProps {
  image: string;
  name: string;
  price: number;
  quantity: number;
  category: string;
  productId: string;
  slug: string;
}

const ProductManagementCard: React.FC<IProps> = ({
  image,
  name,
  price,
  quantity,
  category,
  productId,
  slug,
}) => {
  return (
    <div className="px-2 pb-4 pt-2 lg:p-4 border flex flex-col space-y-4 lg:space-y-0 lg:flex-row lg:items-center justify-between rounded">
      <div className="flex lg:items-center space-x-2 lg:space-x-4 lg:mr-6 lg:basis-1/2">
        <figure className="max-w-24 md:max-w-32 lg:max-w-36 rounded overflow-hidden">
          <img src={image} alt="product-image" />
        </figure>
        <Link
          to={`/products/${slug! + "_" + productId}`}
          className="font-semibold lg:max-w-sm hover:text-primary"
        >
          {name}
        </Link>
      </div>
      <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 items-center flex-1 justify-between">
        <div className="flex w-full lg:w-auto px-2 items-center flex-1 justify-between lg:px-10">
          <div className="flex flex-col text-center lg:block">
            <span className="lg:hidden font-semibold mb-1">Price</span>
            <span>$ {price}</span>
          </div>
          <div className="flex flex-col text-center lg:block">
            <span className="lg:hidden font-semibold mb-1">Quantity</span>
            <span>{quantity}</span>
          </div>
          <div className="flex flex-col text-center lg:block">
            <span className="lg:hidden font-semibold mb-1">Category</span>
            <span>{category}</span>
          </div>
        </div>
        <div className=" flex flex-col items-center lg:space-y-0">
          <span className="lg:hidden font-semibold mb-2">Actions</span>
          <div className="flex space-x-4">
            <DeleteConfirmationModal productId={productId} />
            <UpdateProductModal productId={productId} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductManagementCard;
