import { TGetAllProductResponse, TGetProductResponse } from "../../../types";
import { baseApi } from "../../api/baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    getAllProduct: builder.query<TGetAllProductResponse, any>({
      query: () => {
        return {
          url: "/products",
          method: "GET",
        };
      },
    }),
    getProduct: builder.query<TGetProductResponse, string>({
      query: (productId) => ({
        url: `/products/${productId}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllProductQuery, useGetProductQuery } = productApi;
