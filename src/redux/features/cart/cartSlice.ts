import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TProduct = {
  _id: string;
  quantity: number;
};

interface ICartState {
  items: TProduct[];
  totalItems: number;
  subtotal: number;
  shippingCharge: number;
  totalPrice: number;
  totalPriceAfterDiscount?: number;
}

const initialState: ICartState = {
  items: [],
  totalItems: 0,
  subtotal: 0,
  shippingCharge: 0,
  totalPrice: 0,
  totalPriceAfterDiscount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (
      state,
      action: PayloadAction<{ _id: string; quantity: number }>
    ) => {
      const existingItem = state.items.find(
        (item) => item?._id === action.payload._id
      );

      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.items.push({
          _id: action.payload._id,
          quantity: action.payload.quantity,
        });
        state.totalItems++;
      }
    },
    clearCart: (state) => {
      state.items = [];
      state.totalItems = 0;
      state.subtotal = 0;
      state.shippingCharge = 0;
      state.totalPrice = 0;
      state.totalPriceAfterDiscount = 0;
    },
  },
});

export const { addToCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
