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
        <div>
          <Card />
        </div>
      </div>
    </section>
  );
};

export default ProductManagement;
