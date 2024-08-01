import { TGetAllReviewResponse } from "../../../types";
import { baseApi } from "../../api/baseApi";

const reviewApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    getAllreview: builder.query<TGetAllReviewResponse, any>({
      query: (queryInput) => {
        const { productId } = queryInput || {};
        return {
          url: `/products/${productId}/reviews`,
          method: "GET",
        };
      },
    }),
  }),
});

export const { useGetAllreviewQuery } = reviewApi;
