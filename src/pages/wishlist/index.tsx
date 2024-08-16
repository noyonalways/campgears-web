import { HiOutlineChevronRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import PageTitle from "../../components/page-title";
import { useGetAllProductQuery } from "../../redux/features/product/productApi";
import { useAppSelector } from "../../redux/hook";
import WishlistCard from "./wishlist-card";

interface IProps {}

const Wishlist: React.FC<IProps> = () => {
  const { items, totalItems } = useAppSelector((store) => store.wishlist);
  const { data } = useGetAllProductQuery(undefined);

  const wishlistProducts = data?.data
    .filter((product) => items.find((item) => item._id === product._id))
    .map((product) => {
      const cartItem = items.find((item) => item._id === product._id);
      return { ...product, addedDate: cartItem!.addedDate };
    });

  return (
    <>
      <PageTitle title="Wishlist - Campgears" />
      <section className="pb-20 font-montserrat">
        <div className="container">
          {totalItems === 0 ? (
            <div className="text-center py-20 space-y-3 flex flex-col items-center">
              <p>Your Wishlist is empty.</p>
              <Link to="/products" className="btn inline-block">
                See Products
              </Link>
            </div>
          ) : (
            <>
              <div className="flex items-center space-x-2 py-3 mb-4 font-montserrat text-[#717171]">
                <span>Home</span>
                <HiOutlineChevronRight />
                <span>Wishlist</span>
              </div>
              <div className="font-semibold lg:flex items-center border-b p-4 rounded hidden">
                <div className="flex items-center basis-[55%]">
                  <span className="basis-[23%]"></span>
                  <span className="flex-1 lg:ml-5">Name</span>
                </div>
                <div className="flex items-center flex-1 justify-between">
                  <div className="flex items-center basis-[65%] justify-between">
                    <span>Price</span>
                    <span>Quantity</span>
                    <span>Stock Status</span>
                  </div>
                  <span></span>
                </div>
              </div>
              <div className="space-y-4">
                {wishlistProducts?.map((item) => (
                  <WishlistCard
                    _id={item._id}
                    key={item._id}
                    name={item.name}
                    image={item.image}
                    price={item.price}
                    status={item.status}
                    stockQuantity={item.stockQuantity}
                    addedData={item.addedDate}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default Wishlist;
