import { TGetAllFaqQuestionResponse } from "../../../types";
import { baseApi } from "../../api/baseApi";

const faqQuestionApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllFaqQuestion: builder.query<
      TGetAllFaqQuestionResponse,
      string | undefined
    >({
      query: () => {
        return {
          url: `/faq-questions`,
          method: "GET",
        };
      },
    }),
  }),
});

export const { useGetAllFaqQuestionQuery } = faqQuestionApi;
