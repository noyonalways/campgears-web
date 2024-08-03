import { HiChevronRight } from "react-icons/hi2";
import { Swiper, SwiperSlide } from "swiper/react";

import { Link } from "react-router-dom";
import SwiperCore from "swiper";
import {
  Autoplay,
  Keyboard,
  Mousewheel,
  Navigation,
  Pagination,
} from "swiper/modules";
import ProductCard from "../../../components/product-card";
import SectionTitle from "../../../components/section-title";
import { useGetAllProductQuery } from "../../../redux/features/product/productApi";

SwiperCore.use([Navigation, Pagination, Autoplay]);
interface IProps {}

const BestSellingProducts: React.FC<IProps> = () => {
  const { data, isLoading } = useGetAllProductQuery(undefined);
  return (
    <section className="pb-20">
      <div className="container">
        {isLoading ? (
          <div>
            <div className="py-10 text-center">
              <p>Loading.....</p>
            </div>
          </div>
        ) : (
          <>
            <SectionTitle
              title="Best Selling Products"
              description="Explore our top rated and recommended camping gear. Upgrade your adventure with the best products on the market."
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
              {data?.data?.map((product) => (
                <SwiperSlide
                  className="mb-14 shadow-lg rounded-lg overflow-hidden"
                  key={product._id}
                >
                  <ProductCard
                    name={product.name}
                    image={product.image}
                    _id={product._id}
                    slug={product.slug}
                    price={product.price}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="text-end">
              <Link
                className="font-montserrat text-primary font-medium inline-flex items-center space-x-2"
                to="/products"
              >
                <span>View More</span>
                <HiChevronRight />
              </Link>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default BestSellingProducts;
