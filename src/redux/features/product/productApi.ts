import { TGetAllProductResponse, TGetProductResponse } from "../../../types";
import { baseApi } from "../../api/baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    getAllProduct: builder.query<TGetAllProductResponse, any>({
      query: (params) => {
        const queryString = new URLSearchParams(params).toString();
        return {
          url: `/products?${queryString}`,
          method: "GET",
        };
      },
      providesTags: ["product"],
    }),
    getProduct: builder.query<TGetProductResponse, string>({
      query: (productId) => ({
        url: `/products/${productId}`,
        method: "GET",
      }),
    }),
    deleteProduct: builder.mutation<TGetProductResponse, string>({
      query: (productId) => ({
        url: `/products/${productId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["product"],
    }),
  }),
});

export const {
  useGetAllProductQuery,
  useGetProductQuery,
  useDeleteProductMutation,
} = productApi;
