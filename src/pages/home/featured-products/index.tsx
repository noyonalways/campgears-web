import { HiChevronRight } from "react-icons/hi2";
import { Keyboard, Mousewheel, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
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
    id: "product-11",
    image: backpack,
    title: "Hiking Backpack NH Arpenaz 500 30 L Ice Compartment",
    price: 39.99,
  },
  {
    id: "product-22",
    image: waterBottle,
    title: "Stainless Steel Water Bottle with Screw Cap for Hiking 1.5 L Khaki",
    price: 13.99,
  },
  {
    id: "product-33",
    image: powerBank,
    title:
      "Rechargeable External Battery Power Bank 6Ah for 12V Max 15A Electric Pump",
    price: 69.99,
  },
  {
    id: "product-44",
    image: socks,
    title: "Hiking socks Hike 500 Mid Black x2 pairs",
    price: 10.99,
  },
  {
    id: "product-33",
    image: powerBank,
    title:
      "Rechargeable External Battery Power Bank 6Ah for 12V Max 15A Electric Pump",
    price: 69.99,
  },
  {
    id: "product-66",
    image: waterBottle,
    title: "Stainless Steel Water Bottle with Screw Cap for Hiking 1.5 L Khaki",
    price: 13.99,
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
        <Swiper
          className="mb-4"
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          grabCursor={true}
          autoplay={{ delay: 2000 }}
          spaceBetween={24}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            // when window width is <= 640px
            640: {
              slidesPerView: 1,
            },
            // when window width is <= 768px
            768: {
              slidesPerView: 2,
            },
            // when window width is <= 1024px
            1024: {
              slidesPerView: 4,
            },
          }}
        >
          {products.map((product) => (
            <SwiperSlide
              className="mb-14 shadow-lg rounded-lg overflow-hidden"
              key={product.title}
            >
              <ProductCard
                name={product.title}
                image={product.image}
                price={product.price}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="text-end">
          <a
            className="font-montserrat text-primary font-medium inline-flex items-center space-x-2"
            href="#"
          >
            <span>View More</span>
            <HiChevronRight />
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
