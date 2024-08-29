import { Link } from "react-router-dom";
import { Keyboard, Mousewheel, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

interface IProps {}

const HeroSection: React.FC<IProps> = () => {
  return (
    <section className="pt-2 lg:pt-6 pb-20 font-montserrat">
      <div className="container">
        <div className="rounded overflow-hidden">
          <div className="flex flex-col lg:flex-row ">
            <div className="w-full lg:w-[60%]">
              <Swiper
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                autoplay={{ delay: 5000 }}
                navigation
                loop
              >
                <SwiperSlide>
                  <Link
                    to={`/products?category=Camping`}
                    className="bg-[#06bcf9]"
                  >
                    <img
                      src="https://i.ibb.co/mHG84n0/new-tents.png"
                      alt="tents-banner-image"
                    />
                  </Link>
                </SwiperSlide>
                <SwiperSlide>
                  <Link
                    to={`/products?category=Camping`}
                    className="bg-[#c9ee74]"
                  >
                    <img
                      src="https://i.ibb.co/5h9GYDX/slider-2.png"
                      alt="folding-table-banner-image"
                    />
                  </Link>
                </SwiperSlide>
                <SwiperSlide>
                  <Link
                    to={`/products?category=Camping`}
                    className="bg-[#ff8aa5]"
                  >
                    <img
                      src="https://i.ibb.co/HnMRpRW/alider-1.png"
                      alt="sleeping-bag-banner-image"
                    />
                  </Link>
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="flex-1">
              <div className="flex">
                <Link
                  to={`/products?category=Bottle`}
                  className="w-full bg-[#fcbe46]"
                >
                  <img
                    src="https://i.ibb.co/bHQbgdw/bottele-poster.png"
                    alt="water-bottle-banner-image"
                  />
                </Link>
                <Link
                  to={`/products?category=Backpack`}
                  className="w-full bg-[#59dde1]"
                >
                  <img
                    src="https://i.ibb.co/1n6581q/backpacks-banner.png"
                    alt="backpack-banner-image"
                  />
                </Link>
              </div>
              <Link
                to={`/products?category=Equipment`}
                className="w-full lg:h-48 block bg-[#f3eaf2]"
              >
                <img
                  className="h-full"
                  src="https://i.ibb.co/ChjdHBM/equipments-banner.png"
                  alt="camping-equipments-banner-image"
                />
              </Link>
            </div>
          </div>
          <div className="flex flex-col-reverse lg:flex-row">
            <Link
              to={`/products?category=Lamp`}
              className="w-full lg:w-[60%] bg-[#d3facb]"
            >
              <img
                src="https://i.ibb.co/VvvVpyK/lamp-banner.png"
                alt="lamp-banner-image"
              />
            </Link>
            <div className="flex flex-1">
              <Link
                to={`/products?category=Women`}
                className="bg-[#9c3c57] w-full"
              >
                <img
                  src="https://i.ibb.co/2hpjLcn/wemon-poster.jpg"
                  alt="women-jacket-banner-image"
                />
              </Link>

              <Link
                to={`/products?category=Men`}
                className="bg-[#b0c55a] w-full"
              >
                <img
                  src="https://i.ibb.co/Pwddt10/male-jackets-banner.png"
                  alt=""
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

// https://i.ibb.co/99w7mJ3/tents-poster.png
// https://i.ibb.co/2hpjLcn/wemon-poster.jpg
// https://i.ibb.co/bHQbgdw/bottele-poster.png
