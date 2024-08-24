import React from "react";
import { HiChevronLeft } from "react-icons/hi2";
import { Link, useParams } from "react-router-dom";
import Loading from "../../components/loading";
import PageTitle from "../../components/page-title";
import { useGetSingleOrderQuery } from "../../redux/features/order/orderApi";
import OrderItem from "./order-item";

const OrderDetails: React.FC = () => {
  const { orderId } = useParams();
  const { data, isLoading } = useGetSingleOrderQuery(orderId!);

  const {
    _id,
    createdAt,
    orderItems,
    totalPrice,
    shippingCost,
    shippingAddress,
    paymentMethod,
    status,
    isDelivered,
    totalPriceAfterDiscount,
    discount,
    paymentStatus,
    paidAt,
    transactionId,
    userEmail,
  } = data?.data || {};

  return (
    <>
      <PageTitle
        title={`${
          orderItems?.map((item) => item.name).join(", ") || _id
        } Order - Campgears`}
      />
      <section className="font-montserrat pb-20">
        <div className="container print:w-full print:px-0">
          <div className="my-6 flex justify-between items-center print:justify-end">
            <Link
              className="hover:text-primary text-2xl text-black print:hidden"
              to={`/order-history/${userEmail}`}
            >
              <HiChevronLeft />
            </Link>
            <h1 className="text-xl font-semibold text-end">Order Details</h1>
          </div>

          {isLoading ? (
            <div className="flex justify-center h-56 items-center">
              <Loading />
            </div>
          ) : (
            <>
              <h1 className="text-2xl font-semibold mb-8 text-center">
                # {transactionId}
              </h1>
              <div className="bg-white border-gray-200 rounded">
                <div className="mb-4">
                  <span className="font-bold">Order Date:</span>{" "}
                  {new Date(createdAt!).toLocaleDateString()}
                </div>
                <div className="mb-4">
                  <span className="font-bold">Status:</span>{" "}
                  <span
                    className={`${
                      isDelivered ? "text-green-500" : "text-yellow-500"
                    }`}
                  >
                    {status}
                  </span>
                </div>

                {/* Items Ordered */}
                <div className="mb-6 w-full overflow-x-auto print:overflow-hidden">
                  <h2 className="font-bold text-lg mb-4">Items Ordered</h2>
                  <table className="bg-white border border-gray-200 table-auto w-full">
                    <thead>
                      <tr>
                        <th className="py-3 px-6 bg-gray-50 font-bold uppercase text-gray-600 border-b border-gray-200 text-xs text-left">
                          Product Name
                        </th>
                        <th className="py-3 px-6 bg-gray-50 font-bold uppercase text-gray-600 border-b border-gray-200 text-xs text-left">
                          Product ID
                        </th>
                        <th className="py-3 px-6 bg-gray-50 font-bold uppercase text-gray-600 border-b border-gray-200 text-xs text-left">
                          Price
                        </th>
                        <th className="py-3 px-6 bg-gray-50 font-bold uppercase text-gray-600 border-b border-gray-200 text-xs text-left">
                          Qty
                        </th>
                        <th className="py-3 px-6 bg-gray-50 font-bold uppercase text-gray-600 border-b border-gray-200 text-xs text-left">
                          Subtotal
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {orderItems?.map((item) => (
                        <OrderItem
                          key={item.productId}
                          name={item.name}
                          productId={item.productId}
                          price={item.price}
                          quantity={item.quantity}
                          totalPrice={item.totalPrice}
                        />
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Order Summary */}
                <div className="mb-8">
                  <h2 className="font-bold text-lg mb-4">Order Information</h2>
                  <div className="flex flex-col space-y-4 lg:space-y-0 md:flex-row lg:space-x-32">
                    <div>
                      <h3 className="font-semibold mb-2">Shipping Address</h3>
                      <p>{shippingAddress}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Payment Method</h3>
                      <p>
                        {(paymentMethod === "cash" && "Cash on Delivery") ||
                          (paymentMethod === "stripe" && "Stripe")}
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Payment Status</h3>
                      <p>
                        {(paymentStatus === "pending" && "Pending") ||
                          (paymentStatus === "paid" && "Paid") ||
                          (paymentStatus === "failed" && "Failed")}
                      </p>
                    </div>
                    {paidAt && (
                      <div>
                        <h3 className="font-semibold mb-2">Paid At</h3>
                        <p>{new Date(paidAt!).toLocaleString()}</p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Total Price */}
                <div className="flex justify-end">
                  <table>
                    <tbody>
                      <tr>
                        <td className="font-semibold py-1 lg:py-2 px-4">
                          Subtotal:
                        </td>
                        <td className="py-2 px-4">
                          ${totalPrice! - shippingCost!}
                        </td>
                      </tr>
                      <tr>
                        <td className="font-semibold py-1 lg:py-2 px-4">
                          Shipping:
                        </td>
                        <td className="py-2 px-4">
                          ${shippingCost?.toFixed(2)}
                        </td>
                      </tr>
                      <tr>
                        <td className="font-semibold py-1 lg:py-2 px-4">
                          Discount:
                        </td>
                        <td className="py-2 px-4">
                          ${discount?.amount.toFixed(2)}
                        </td>
                      </tr>
                      <tr>
                        <td className="font-semibold py-1 lg:py-2 px-4">
                          Total:
                        </td>
                        <td className="py-2 px-4">${totalPrice?.toFixed(2)}</td>
                      </tr>
                      <tr>
                        <td className="font-semibold py-2 px-4 text-lg">
                          Grand Total:
                        </td>
                        <td className="font-semibold py-2 px-4 text-lg">
                          ${totalPriceAfterDiscount?.toFixed(2)}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Print Order */}
                <div className="mt-6 flex justify-end print:hidden">
                  <button className="btn" onClick={() => window.print()}>
                    Print Order
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default OrderDetails;
