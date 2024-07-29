import tent from "../../../assets/images/products/tent.png";
import DeleteConfirmationModal from "../delete-product-modal";
import UpdateProductModal from "../update-product-modal";

interface IProps {}

const Card: React.FC<IProps> = () => {
  return (
    <div className="px-2 pb-4 pt-2 lg:p-4 border flex flex-col space-y-4 lg:space-y-0 lg:flex-row lg:items-center justify-between rounded">
      <div className="flex lg:items-center space-x-2 lg:space-x-4 lg:mr-6 lg:basis-1/2">
        <figure className="max-w-24 md:max-w-32 lg:max-w-36 rounded overflow-hidden">
          <img src={tent} alt="product-image" />
        </figure>
        <h2 className="md:text-lg  font-bold  lg:max-w-sm">
          Inflatable Camping Tent Air Seconds 4.1 F&B 4 Person 1 Bedroom
        </h2>
      </div>
      <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 items-center flex-1 justify-between">
        <div className="flex w-full lg:w-auto px-2 items-center flex-1 justify-between lg:px-10">
          <div className="flex flex-col text-center lg:block">
            <span className="lg:hidden font-semibold mb-1">Price</span>
            <span>$ 299.99</span>
          </div>
          <div className="flex flex-col text-center lg:block">
            <span className="lg:hidden font-semibold mb-1">Quantity</span>
            <span>99</span>
          </div>
          <div className="flex flex-col text-center lg:block">
            <span className="lg:hidden font-semibold mb-1">Category</span>
            <span>Tents</span>
          </div>
        </div>
        <div className=" flex flex-col items-center lg:space-y-0">
          <span className="lg:hidden font-semibold mb-2">Actions</span>
          <div className="flex space-x-4">
            <DeleteConfirmationModal />
            <UpdateProductModal />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
