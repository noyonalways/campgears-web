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
        <table className="table-auto w-full">
          <thead>
            <tr className="bg-secondary">
              <th className="p-4">Image</th>
              <th className="p-4">Name</th>
              <th className="p-4">Price</th>
              <th className="p-4">Quantity</th>
              <th className="p-4">Category</th>
              <th className="p-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            <Card />
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ProductManagement;
