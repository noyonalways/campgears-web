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

interface IOrderData {
  userFullName: string;
  userEmail: string;
  userPhone: string;
  orderItems: IOrderItem[];
  shippingAddress: string;
  paymentMethod: string;
  status: string;
  itemsPrice: number;
  deliveredAt: string | null;
  isDelivered: boolean;
  isPaid: boolean;
  paidAt: string | null;
  shippingCost: number;
  discount: IDiscount;
  tax: number;
  totalPrice: number;
  totalPriceAfterDiscount: number;
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
  data: IOrderData;
}

export interface IOrdersByEmailResponse {
  success: boolean;
  statusCode: number;
  message: string;
  data: IOrderData[];
}
