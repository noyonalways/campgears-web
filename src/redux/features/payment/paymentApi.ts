import { baseApi } from "../../api/baseApi";

const paymentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    verifyPayment: builder.mutation<
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      any,
      { sessionId: string; transactionId: string }
    >({
      query: (payload) => {
        return {
          url: `/payment/confirmation?sessionId=${payload.sessionId}&transactionId=${payload.transactionId}`,
          method: "POST",
        };
      },
    }),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    deleteCancelPaymentOrder: builder.mutation<any, { transactionId: string }>({
      query: (payload) => ({
        url: `/payment/delete?transactionId=${payload.transactionId}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const { useVerifyPaymentMutation, useDeleteCancelPaymentOrderMutation } =
  paymentApi;
