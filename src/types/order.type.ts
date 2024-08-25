interface IOrderItem {
  productId: string;
  name: string;
  price: number;
  quantity: number;
  totalPrice: number;
  image: string;
}

interface IDiscount {
  code: string;
  amount: number;
  description: string;
}

export type TOrderStatus = "pending" | "shipped" | "delivered" | "cancelled";
export type TPaymentMethod = "cash" | "stripe";
export type TPaymentStatus = "pending" | "paid" | "failed";

interface IOrderData {
  userFullName: string;
  userEmail: string;
  userPhone: string;
  transactionId: string;
  orderItems: IOrderItem[];
  shippingAddress: string;
  paymentMethod: TPaymentMethod;
  itemsPrice: number;
  tax: number;
  shippingCost: number;
  totalPrice: number;
  paymentStatus: TPaymentStatus;
  paidAt: Date;
  isDelivered: boolean;
  deliveredAt: Date;
  status: TOrderStatus;
  discount: IDiscount;
  totalPriceAfterDiscount?: number;
  _id: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface INewOrderItem {
  productId: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export interface INewOrder {
  orderItems: INewOrderItem[];
  shippingCost: number;
  tax: number;
  discount: {
    code: string;
  } | null;
  userFullName: string;
  userEmail: string;
  userPhone: string;
  shippingAddress: string;
  paymentMethod: string;
}

export interface IOrderResponse {
  success: boolean;
  statusCode: number;
  message: string;
  data: {
    transactionId: string;
    sessionId?: string;
    email: string;
  };
}

export interface ISingleOrderResponse {
  success: boolean;
  statusCode: number;
  message: string;
  data: IOrderData;
}

export interface IOrdersByEmailResponse {
  success: boolean;
  statusCode: number;
  message: string;
  data: IOrderData[];
}
