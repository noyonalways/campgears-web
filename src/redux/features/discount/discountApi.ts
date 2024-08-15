import { TDiscountResponse } from "../../../types/discount.type";
import { baseApi } from "../../api/baseApi";

type TDiscountPayload = {
  code: string;
  itemsTotalPrice: number;
};

const discountApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    applyDiscountCode: builder.mutation<TDiscountResponse, TDiscountPayload>({
      query: (payload) => {
        return {
          url: `/discounts/${payload.code}`,
          method: "POST",
          body: { itemsTotalPrice: payload.itemsTotalPrice },
        };
      },
    }),
  }),
});

export const { useApplyDiscountCodeMutation } = discountApi;
