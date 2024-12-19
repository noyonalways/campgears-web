import { TGenericErrorResponse } from "@/interface";
import { baseApi } from "@/redux/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (userInfo) => {
        return {
          url: "/auth/login",
          method: "POST",
          body: userInfo,
        };
      },
      transformErrorResponse: (response: TGenericErrorResponse) => {
        return response?.data;
      },
    }),

    // get me
    getMe: builder.query({
      query: () => {
        return {
          url: "/auth/me",
          method: "GET",
        };
      },
    }),
  }),
});

export const { useLoginMutation, useGetMeQuery } = authApi;
