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
    register: builder.mutation({
      query: (userInfo) => {
        return {
          url: "/auth/register",
          method: "POST",
          body: userInfo,
        };
      },
      transformErrorResponse: (response: TGenericErrorResponse) => {
        return response?.data;
      },
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation } = authApi;
