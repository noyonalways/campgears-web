import { HiChevronLeft } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import Loading from "../../components/loading";
import PageTitle from "../../components/page-title";
import { updateCart } from "../../redux/features/cart/cartSlice";
import { useGetAllProductQuery } from "../../redux/features/product/productApi";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import ApplyDiscountCode from "./apply-discount-code";
import CartCard from "./cart-card";
import ConfirmClearCartModal from "./confirm-clear-cart-modal";

interface IProps {}

const Cart: React.FC<IProps> = () => {
  const {
    items,
    subtotal,
    totalPrice,
    totalPriceAfterDiscount,
    shippingCharge,
  } = useAppSelector((store) => store.cart);
  const { data: products, isLoading } = useGetAllProductQuery(undefined);

  const dispatch = useAppDispatch();

  // TODO: Need to make for efficient -> Filter and add quantity from cart items to the cartProducts array
  const cartProducts = products?.data
    .filter((product) => items.find((item) => item._id === product._id))
    .map((product) => {
      const cartItem = items.find((item) => item._id === product._id);
      return { ...product, quantity: cartItem?.quantity || 1 };
    });

  const handleUpdateCart = () => {
    dispatch(updateCart(items));
    toast.success("Shopping cart updated successfully", {
      id: "updateCartSuccess",
      position: "top-right",
      className: "text-primary",
      duration: 3000,
    });
  };

  return (
    <>
      <PageTitle title="Cart - Campgears" />
      <section className="py-10 text-black">
        <div className="container font-montserrat">
          {items.length === 0 ? (
            <div className="text-center py-8 space-y-3 flex flex-col items-center">
              <p>Your shopping cart is empty.</p>

              <Link to="/products" className="btn inline-block">
                Shop Now
              </Link>
            </div>
          ) : (
            <>
              <>
                <div className="flex justify-between items-center mb-8">
                  <Link to={`/products`} className="hover:text-primary">
                    <HiChevronLeft size={28} />
                  </Link>
                  <h1 className="text-xl font-medium text-end">
                    Shopping Cart
                  </h1>
                </div>
                <div className="flex flex-col-reverse lg:flex-row lg:justify-between lg:items-start">
                  {isLoading ? (
                    <div className="flex items-center justify-center lg:basis-[72%] h-60">
                      <Loading />
                    </div>
                  ) : (
                    <div className="lg:basis-[72%]">
                      <div className="hidden lg:flex justify-between items-center mb-4 font-medium">
                        <span>Item</span>
                        <div className="flex space-x-16">
                          <span>Price</span>
                          <span>Quantity</span>
                          <span>Subtotal</span>
                        </div>
                      </div>
                      <div className="space-y-6 mb-6">
                        {cartProducts?.map((product) => (
                          <CartCard
                            key={product._id}
                            _id={product._id}
                            name={product.name}
                            image={product.image}
                            price={product.price}
                            slug={product.slug}
                            cartAddedQuantity={product.quantity}
                            stockQuantity={product.stockQuantity}
                          />
                        ))}
                      </div>
                      <div className="flex flex-col space-y-3 lg:space-y-0 lg:flex-row items-center justify-between">
                        <Link to="/products" className="btn-outline">
                          Continue Shopping
                        </Link>
                        <div className="flex items-center space-x-3 lg:space-x-4">
                          <ConfirmClearCartModal />
                          <button
                            onClick={handleUpdateCart}
                            className="btn-outline"
                          >
                            Update Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                  <div className="bg-[#E7ECEF] p-6 rounded space-y-6 lg:basis-[26%] flex flex-col mb-6 lg:mb-0">
                    <h3 className="text-lg font-semibold border-b border-b-[#DDD9D9] pb-1">
                      Summary
                    </h3>
                    <div className="flex justify-between items-center">
                      <span>Subtotal</span>
                      <span>$ {subtotal}</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-b-[#DDD9D9] pb-1">
                      <span>Shipping Charge</span>
                      <span>$ {shippingCharge}</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-b-[#DDD9D9] pb-1">
                      <span className="font-semibold">Total Price</span>
                      <span className="font-medium">$ {totalPrice}</span>
                    </div>
                    <>
                      <ApplyDiscountCode />
                    </>

                    <div className="flex justify-between items-center border-b border-b-[#DDD9D9] pb-1">
                      <span className="font-semibold">Final Price</span>
                      <span className="font-medium">
                        $ {totalPriceAfterDiscount}
                      </span>
                    </div>

                    <Link className="btn text-center" to="/checkout">
                      Proceed to Checkout
                    </Link>
                  </div>
                </div>
              </>
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default Cart;
