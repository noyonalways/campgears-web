import { TProduct } from "../../../types";
import { baseApi } from "../../api/baseApi";

type TGetProductResponse = {
  success: boolean;
  statusCode: number;
  message: string;
  data: TProduct[];
};

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    getAllProduct: builder.query<TGetProductResponse, any>({
      query: () => {
        return {
          url: "/products",
          method: "GET",
        };
      },
    }),
  }),
});

export const { useGetAllProductQuery } = productApi;
