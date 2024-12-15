import {
  BaseQueryFn,
  FetchArgs,
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";

const baseQuery = fetchBaseQuery({
  baseUrl: "",
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithRefreshToken: BaseQueryFn<FetchArgs> = async (
  args,
  api,
  extraOptions
) => {
  const result = await baseQuery(args, api, extraOptions);

  // if (result.error?.status === 401) {
  //   console.log("Sending refresh token....");

  //   const res = await fetch(`${""}/auth/refresh-token`, {
  //     credentials: "include",
  //     method: "POST",
  //   });

  //   const data = await res.json();
  //   if (data?.data?.accessToken) {
  //     const user = (api.getState() as RootState).auth.user;

  //     api.dispatch(setUser({ user, token: data?.data?.accessToken }));
  //     result = await baseQuery(args, api, extraOptions);
  //   } else {
  //     api.dispatch(logout());
  //   }
  // }

  return result;
};

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQueryWithRefreshToken,
  endpoints: () => ({}),
  tagTypes: [],
});
