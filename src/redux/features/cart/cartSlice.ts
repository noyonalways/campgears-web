import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TProduct = {
  _id: string;
  quantity: number;
  price: number;
};

interface ICartState {
  items: TProduct[];
  totalItems: number;
  subtotal: number;
  shippingCharge: number;
  totalPrice: number;
  totalPriceAfterDiscount?: number;
  appliedDiscountCode?: string;
  discountAmount: number;
  tax: number;
}

const initialState: ICartState = {
  items: [],
  totalItems: 0,
  subtotal: 0,
  shippingCharge: 0,
  totalPrice: 0,
  totalPriceAfterDiscount: 0,
  appliedDiscountCode: "",
  discountAmount: 0,
  tax: 0,
};

const calculateTotals = (state: ICartState) => {
  // Calculate subtotal by summing up each item's total (quantity * price)
  state.subtotal = state.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // You can set a fixed shipping charge or calculate it based on certain conditions
  state.shippingCharge = state.subtotal > 100 ? 0 : 10; // Example: free shipping for orders over $100

  // Calculate the total price as subtotal + shipping charge
  state.totalPrice = state.subtotal + state.shippingCharge;

  // calculate the total price price after discount
  if (state.discountAmount > 0) {
    state.totalPriceAfterDiscount = state.totalPrice - state.discountAmount;
  } else {
    state.totalPriceAfterDiscount = state.totalPrice;
  }
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (
      state,
      action: PayloadAction<{ _id: string; quantity: number; price: number }>
    ) => {
      const existingItem = state.items.find(
        (item) => item._id === action.payload._id
      );
      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.items.push({
          _id: action.payload._id,
          quantity: action.payload.quantity,
          price: action.payload.price,
        });
        state.totalItems++;
      }
      calculateTotals(state);
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item._id !== action.payload);
      state.totalItems--;
      calculateTotals(state);
    },
    updateQuantity: (
      state,
      action: PayloadAction<{ _id: string; newQuantity: number }>
    ) => {
      const existingItem = state.items.find(
        (item) => item._id === action.payload._id
      );
      if (existingItem) {
        existingItem.quantity = action.payload.newQuantity;
      }
      calculateTotals(state);
    },
    updateCart: (state, action: PayloadAction<TProduct[]>) => {
      state.items = action.payload;
      calculateTotals(state);
    },
    clearCart: (state) => {
      state.items = [];
      state.totalItems = 0;
      state.subtotal = 0;
      state.shippingCharge = 0;
      state.totalPrice = 0;
      state.totalPriceAfterDiscount = 0;
    },
    calculateTotalsAfterDiscount: (
      state,
      action: PayloadAction<{ discountAmount: number; discountCode: string }>
    ) => {
      state.totalPriceAfterDiscount =
        state.totalPrice - action.payload.discountAmount;
      state.appliedDiscountCode = action.payload.discountCode;
      state.discountAmount = action.payload.discountAmount;
    },
    removeDiscount: (state) => {
      state.totalPriceAfterDiscount = state.totalPrice;
      state.appliedDiscountCode = "";
      state.discountAmount = 0;
    },
  },
});

export const {
  addToCart,
  clearCart,
  updateQuantity,
  updateCart,
  removeFromCart,
  calculateTotalsAfterDiscount,
  removeDiscount,
} = cartSlice.actions;

export default cartSlice.reducer;
