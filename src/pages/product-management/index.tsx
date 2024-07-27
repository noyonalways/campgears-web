import Button from "../../components/ui/button";
import Card from "./card";

interface IProps {}

const ProductManagement: React.FC<IProps> = () => {
  return (
    <section className="font-montserrat py-10">
      <div className="container">
        <div className="mb-6">
          <Button>Add Product</Button>
        </div>
        <div className="font-semibold lg:flex items-center bg-secondary p-4 rounded hidden mb-4">
          <div className="flex items-center basis-[55%]">
            <span className="basis-[23%]">Image</span>
            <span className="flex-1">Name</span>
          </div>
          <div className="flex items-center flex-1 justify-between">
            <div className="flex items-center basis-[65%] justify-between">
              <span>Price</span>
              <span>Quantity</span>
              <span>Category</span>
            </div>
            <span>Actions</span>
          </div>
        </div>
        <div className="space-y-4">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </section>
  );
};

export default ProductManagement;
