import { motion } from "framer-motion";
import { useEffect } from "react";
import { BsXCircle } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";
import Loading from "../../components/loading";
import PageTitle from "../../components/page-title";
import { useDeleteCancelPaymentOrderMutation } from "../../redux/features/payment/paymentApi";

interface IProps {}

const OrderCancel: React.FC<IProps> = () => {
  const location = useLocation();
  const { search } = location;
  const params = new URLSearchParams(search);
  const transactionId = params.get("transactionId");
  const [deleteCancelPaymentOrder, { isLoading, isSuccess }] =
    useDeleteCancelPaymentOrderMutation();

  useEffect(() => {
    if (transactionId) {
      deleteCancelPaymentOrder({ transactionId });
    }
  }, [transactionId, deleteCancelPaymentOrder]);

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <PageTitle title="Order Cancel - Campgears" />
      <section className="py-32 font-montserrat">
        <div className="container text-center">
          {isLoading ? (
            <div className="flex justify-center items-center h-60">
              <Loading />
            </div>
          ) : (
            <>
              {isSuccess ? (
                <div className="flex flex-col items-center justify-center space-y-6">
                  <BsXCircle className="text-red-500 text-6xl inline-block mx-auto" />
                  <h1 className="text-xl lg:text-2xl font-bold">
                    Your Order Cancel
                  </h1>
                  <Link
                    to="/products"
                    className="text-xs md:text-base px-3 bg-primary py-2 rounded text-white active:scale-95 duration-100 hover:bg-transparent hover:text-primary border border-primary inline-block mx-auto"
                  >
                    Continue Shopping
                  </Link>
                </div>
              ) : (
                <div>
                  <h1 className="text-xl lg:text-2xl font-bold">
                    Something went wrong
                  </h1>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </motion.div>
  );
};

export default OrderCancel;
