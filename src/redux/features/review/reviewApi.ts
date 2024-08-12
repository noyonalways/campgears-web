import { IReview, TGetAllReviewResponse } from "../../../types";
import { baseApi } from "../../api/baseApi";

type TAddReview = {
  productId: string;
  payload: Partial<IReview>;
};

const reviewApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    getAllreview: builder.query<TGetAllReviewResponse, string>({
      query: (productId) => {
        return {
          url: `/products/${productId}/reviews`,
          method: "GET",
        };
      },
      providesTags: ["single-product"],
    }),
    addReview: builder.mutation<TGetAllReviewResponse, TAddReview>({
      query: ({ productId, payload }) => {
        return {
          url: `/products/${productId}/reviews`,
          method: "POST",
          body: payload,
        };
      },
      invalidatesTags: ["single-product"],
    }),
  }),
});

export const { useGetAllreviewQuery, useAddReviewMutation } = reviewApi;
