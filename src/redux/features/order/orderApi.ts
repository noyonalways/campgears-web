import {
  INewOrder,
  IOrderResponse,
  IOrdersByEmailResponse,
  ISingleOrderResponse,
} from "../../../types";
import { baseApi } from "../../api/baseApi";

const orderApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createOrder: builder.mutation<IOrderResponse, INewOrder>({
      query: (payload) => {
        return {
          url: `/orders/`,
          method: "POST",
          body: payload,
        };
      },
    }),
    getOrdersByEmail: builder.query<IOrdersByEmailResponse, string>({
      query: (email) => {
        return {
          url: `/orders?userEmail=${email}`,
          method: "GET",
        };
      },
    }),
    getSingleOrder: builder.query<ISingleOrderResponse, string>({
      query: (orderId) => {
        return {
          url: `/orders/${orderId}`,
          method: "GET",
        };
      },
    }),
  }),
});

export const {
  useCreateOrderMutation,
  useGetOrdersByEmailQuery,
  useGetSingleOrderQuery,
} = orderApi;
