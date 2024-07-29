import {
  HiChevronDown,
  HiMiniMagnifyingGlass,
  HiOutlineAdjustmentsHorizontal,
  HiOutlineListBullet,
  HiOutlineSquares2X2,
} from "react-icons/hi2";
import tent from "../../assets/images/products/tent.png";
import ProductCard from "../../components/product-card";
import CategoryList from "./category-list";

interface IProps {}

interface ICategory {
  id: number | string;
  title: string;
  url: string;
}

const categories: ICategory[] = [
  { id: 1, title: "Men", url: "#" },
  { id: 2, title: "Women", url: "#" },
  { id: 3, title: "Kids", url: "#" },
  { id: 4, title: "Footwear", url: "#" },
  { id: 5, title: "Backpack", url: "#" },
  { id: 6, title: "Equipment", url: "#" },
  { id: 7, title: "Camping", url: "#" },
];

interface IProduct {
  id: string;
  image: string;
  title: string;
  price: number;
}

const products: IProduct[] = [
  {
    id: "product-1",
    image: tent,
    title: "Inflatable Camping Tent Air Seconds 4.1 F&B 4 Person 1 Bedroom.",
    price: 299.99,
  },
  {
    id: "product-2",
    image: tent,
    title: "CAMPING SLEEPING BAGARPENAZ 10°",
    price: 24.99,
  },
  {
    id: "product-3",
    image: tent,
    title: "Itiwit Inflatable Touring Kayak w/ Pump 2 person",
    price: 199.99,
  },
  {
    id: "product-4",
    image: tent,
    title: "SELF-INFLATABLE CAMPING MATTRESS ULTIM COMFORT 70 CM 1 PERSON",
    price: 89.99,
  },

  {
    id: "product-5",
    image: tent,
    title: "SELF-INFLATABLE CAMPING MATTRESS ULTIM COMFORT 70 CM 1 PERSON",
    price: 89.99,
  },
];

const Products: React.FC<IProps> = () => {
  return (
    <section className="font-montserrat py-10">
      <div className="container">
        <div className="flex justify-between items-start pt-10">
          <div className="bg-secondary p-4 basis-[17%] rounded sticky top-10 h-screen">
            <h2 className="text-xl font-bold mb-4">Categories</h2>
            <ul className="space-y-2">
              {categories.map((category) => (
                <CategoryList
                  title={category.title}
                  url={category.url}
                  key={category.id}
                />
              ))}
            </ul>
          </div>
          <div className="space-y-4 basis-[81.5%] -mt-10 ">
            <div className="sticky top-0 z-10">
              <div className="flex items-center space-x-6 justify-end pb-4 w-full bg-white">
                <span className="font-medium">View as</span>
                <div className="flex items-center space-x-4 text-[#898989]">
                  <button className="text-xl text-primary">
                    <HiOutlineSquares2X2 />
                  </button>
                  <button className="text-xl">
                    <HiOutlineListBullet />
                  </button>
                </div>
              </div>
              <div className="bg-secondary py-2 px-3 flex items-center justify-between rounded space-x-4">
                <div className="flex items-center flex-1 justify-between">
                  <h3 className="font-medium">08 Products Found</h3>
                  <form className="bg-white rounded-full pl-4 max-w-md w-full flex justify-between">
                    <input
                      className="py-2 bg-white w-full outline-none"
                      placeholder="Search Here..."
                      type="search"
                      name="search"
                      id="search"
                    />
                    <button
                      className="font-semibold px-4 rounded-r-full"
                      type="submit"
                    >
                      <HiMiniMagnifyingGlass />
                    </button>
                  </form>
                </div>
                <div className="space-x-4 flex">
                  <button className="text-black flex items-center bg-white px-4 py-1 space-x-3 rounded-sm">
                    <span>Sort By</span>
                    <HiChevronDown className="text-[#898989]" />
                  </button>
                  <button className="text-black flex items-center bg-white px-4 py-1 space-x-3 rounded-sm">
                    <HiOutlineAdjustmentsHorizontal className="text-[#898989]" />
                    <span>Filter</span>
                  </button>
                  <button className="text-black bg-white px-4 py-1 rounded-sm">
                    Clear Filter
                  </button>
                </div>
              </div>
            </div>
            <div className="grid lg:grid-cols-4 gap-4">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  title={product.title}
                  image={product.image}
                  price={product.price}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
