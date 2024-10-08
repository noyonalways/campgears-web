import { HiChevronRight } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { Keyboard, Mousewheel, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductCard from "../../../components/product-card";
import ProductCardSkeleton from "../../../components/product-card-skeleton";
import SectionTitle from "../../../components/section-title";
import { useGetAllProductQuery } from "../../../redux/features/product/productApi";

interface IProps {}

const FeaturedProducts: React.FC<IProps> = () => {
  const queryParams = {
    isFeatured: true,
  };

  const { data, isLoading, error } = useGetAllProductQuery(queryParams);

  let errorMessage = "";
  if (error) {
    errorMessage = "Failed to load products";
    if ("status" in error && error.status === 404) {
      errorMessage =
        (error?.data as { message: string })?.message || errorMessage;
    }
  }

  return (
    <section className="pb-20">
      <div className="container">
        <SectionTitle
          title="Featured Products"
          description="Check out our featured products, handpicked for their quality and performance. Click on any item to view detailed information and make your purchase."
        />
        {isLoading ? (
          <div className="grid lg:grid-cols-4 gap-6">
            <ProductCardSkeleton />
            <ProductCardSkeleton />
            <ProductCardSkeleton />
            <ProductCardSkeleton />
          </div>
        ) : (
          <>
            {errorMessage ? (
              <div className="text-red-500 text-center font-montserrat py-28">
                {errorMessage}
              </div>
            ) : (
              <Swiper
                className="mb-4"
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                grabCursor={true}
                autoplay={{ delay: 3000 }}
                spaceBetween={24}
                navigation
                loop
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
                      description={product.description}
                      category={product.category}
                      status={product.status}
                      stockQuantity={product.stockQuantity}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            )}

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

export default FeaturedProducts;
