import React from "react";
import { HiChevronLeft } from "react-icons/hi2";
import { Link, useParams } from "react-router-dom";
import Loading from "../../components/loading";
import PageTitle from "../../components/page-title";
import { useGetOrdersByEmailQuery } from "../../redux/features/order/orderApi";

const OrderHistory: React.FC = () => {
  const params = useParams();
  const { data: orders, isLoading } = useGetOrdersByEmailQuery(params.email!, {
    refetchOnMountOrArgChange: true,
  });

  return (
    <>
      <PageTitle title="Order History - Campgears" />
      <section className="pb-20 font-montserrat">
        <div className="container">
          {!params.email || orders?.data?.length === 0 ? (
            <div className="py-20 space-y-4 text-center">
              <h1>You have no orders</h1>
              <Link className="btn" to="/products">
                Shop Now
              </Link>
            </div>
          ) : (
            <>
              <div className="my-8 flex justify-between items-center">
                <Link
                  className="hover:text-primary text-xl text-black"
                  to={"/products"}
                >
                  <HiChevronLeft />
                </Link>
                <h1 className="text-xl font-semibold text-end">
                  Order History
                </h1>
              </div>
              {isLoading ? (
                <div className="flex items-center justify-center h-56">
                  <Loading />
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white border border-gray-200">
                    <thead>
                      <tr>
                        <th className="py-3 px-6 bg-gray-50 font-bold uppercase text-gray-600 border-b border-gray-200 text-xs text-left">
                          TXN ID
                        </th>
                        <th className="py-3 px-6 bg-gray-50 font-bold uppercase text-gray-600 border-b border-gray-200 text-xs text-left">
                          Date
                        </th>
                        <th className="py-3 px-6 bg-gray-50 font-bold uppercase text-gray-600 border-b border-gray-200 text-xs text-left">
                          Ship to
                        </th>
                        <th className="py-3 px-6 bg-gray-50 font-bold uppercase text-gray-600 border-b border-gray-200 text-xs text-left">
                          Items
                        </th>
                        <th className="py-3 px-6 bg-gray-50 font-bold uppercase text-gray-600 border-b border-gray-200 text-xs text-left">
                          Total Amount
                        </th>
                        <th className="py-3 px-6 bg-gray-50 font-bold uppercase text-gray-600 border-b border-gray-200 text-xs text-left">
                          Status
                        </th>
                        <th className="py-3 px-6 bg-gray-50 font-bold uppercase text-gray-600 border-b border-gray-200 text-xs text-left">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {orders?.data.map((order) => (
                        <tr
                          key={order._id}
                          className="border-b border-gray-200 hover:bg-gray-100"
                        >
                          <td className="py-4 px-6 text-sm">
                            {order.transactionId}
                          </td>
                          <td className="py-4 px-6 text-sm">
                            {new Date(order.createdAt).toLocaleDateString()}
                          </td>
                          <td className="py-4 px-6 text-sm">
                            {order.userFullName}
                          </td>
                          <td className="py-4 px-6 text-sm">
                            {order.orderItems
                              .map((item) => item.name)
                              .join(", ")}
                          </td>
                          <td className="py-4 px-6 text-sm">
                            ${order.totalPriceAfterDiscount?.toFixed(2)}
                          </td>
                          <td className="py-4 px-6 text-sm">{order.status}</td>
                          <td>
                            <Link
                              to={`/orders/${order._id}`}
                              className="text-blue-500 hover:underline"
                            >
                              View order
                            </Link>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default OrderHistory;
