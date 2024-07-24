import backpack from "../../../assets/images/products/backpack-2.png";
import powerBank from "../../../assets/images/products/power-bank.png";
import socks from "../../../assets/images/products/socks.png";
import waterBottle from "../../../assets/images/products/water-bottles.png";
import ProductCard from "../../../components/product-card";
import SectionTitle from "../../../components/section-title";

interface IProps {}

interface IProduct {
  id: string;
  image: string;
  title: string;
  price: number;
}

const products: IProduct[] = [
  {
    id: "product-1",
    image: backpack,
    title: "Hiking Backpack NH Arpenaz 500 30 L Ice Compartment",
    price: 39.99,
  },
  {
    id: "product-2",
    image: waterBottle,
    title: "Stainless Steel Water Bottle with Screw Cap for Hiking 1.5 L Khaki",
    price: 13.99,
  },
  {
    id: "product-3",
    image: powerBank,
    title:
      "Rechargeable External Battery Power Bank 6Ah for 12V Max 15A Electric Pump",
    price: 69.99,
  },
  {
    id: "product-4",
    image: socks,
    title: "Hiking socks Hike 500 Mid Black x2 pairs",
    price: 10.99,
  },
];

const FeaturedProducts: React.FC<IProps> = () => {
  return (
    <section className="pb-20">
      <div className="container">
        <SectionTitle
          title="Featured Products"
          description="Check out our featured products, handpicked for their quality and performance. Click on any item to view detailed information and make your purchase."
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
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
    </section>
  );
};

export default FeaturedProducts;
