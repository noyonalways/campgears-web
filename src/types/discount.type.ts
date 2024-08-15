type TDiscountType = "percentage" | "fixed";

export type TDiscount = {
  _id: string;
  code: string;
  discountValue: number;
  active: boolean;
  isDeleted: boolean;
  description: string;
  startDate: Date;
  endDate: Date;
  itemsTotalPrice: number;
  amount: number;
  type: TDiscountType;
};

export type TDiscountResponse = {
  success: boolean;
  statusCode: number;
  message: string;
  data: TDiscount;
};

export type TDiscountErrorResponse = {
  status: number;
  data: {
    success: boolean;
    message: string;
    statusCode: number;
    data?: TDiscount[];
  };
};
