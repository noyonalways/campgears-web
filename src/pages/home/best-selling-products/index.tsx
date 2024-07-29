import { HiChevronRight } from "react-icons/hi2";
import { Swiper, SwiperSlide } from "swiper/react";
import airBag from "../../../assets/images/products/air-bed.png";
import boat from "../../../assets/images/products/boat.png";
import sleepingBag from "../../../assets/images/products/sleeping-bag.png";
import tent from "../../../assets/images/products/tent.png";

import SwiperCore from "swiper";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import ProductCard from "../../../components/product-card";
import SectionTitle from "../../../components/section-title";

SwiperCore.use([Navigation, Pagination, Autoplay]);
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
    image: tent,
    title: "Inflatable Camping Tent Air Seconds 4.1 F&B 4 Person 1 Bedroom.",
    price: 299.99,
  },
  {
    id: "product-2",
    image: sleepingBag,
    title: "CAMPING SLEEPING BAGARPENAZ 10°",
    price: 24.99,
  },
  {
    id: "product-3",
    image: boat,
    title: "Itiwit Inflatable Touring Kayak w/ Pump 2 person",
    price: 199.99,
  },
  {
    id: "product-4",
    image: airBag,
    title: "SELF-INFLATABLE CAMPING MATTRESS ULTIM COMFORT 70 CM 1 PERSON",
    price: 89.99,
  },
  {
    id: "product-5",
    image: airBag,
    title: "SELF-INFLATABLE CAMPING MATTRESS ULTIM COMFORT 70 CM 1 PERSON",
    price: 89.99,
  },
  {
    id: "product-6",
    image: airBag,
    title: "SELF-INFLATABLE CAMPING MATTRESS ULTIM COMFORT 70 CM 1 PERSON",
    price: 89.99,
  },
];

const BestSellingProducts: React.FC<IProps> = () => {
  return (
    <section className="pb-20">
      <div className="container">
        <SectionTitle
          title="Best Selling Products"
          description="Explore our top rated and recommended camping gear. Upgrade your adventure with the best products on the market."
        />
        <Swiper
          className="mb-4"
          modules={[Navigation, Pagination]}
          spaceBetween={24}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
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
                title={product.title}
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

export default BestSellingProducts;
