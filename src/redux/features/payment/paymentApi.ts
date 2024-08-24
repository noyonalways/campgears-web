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
  }),
});

export const { useVerifyPaymentMutation } = paymentApi;
