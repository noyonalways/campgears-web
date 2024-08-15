import { INewOrder, IOrderResponse } from "../../../types/order.type";
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
  }),
});

export const { useCreateOrderMutation } = orderApi;
