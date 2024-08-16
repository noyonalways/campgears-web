import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TProduct = {
  _id: string;
  addedDate: Date;
};

type TWishlistState = {
  items: TProduct[];
  totalItems: number;
};

const initialState: TWishlistState = {
  items: [],
  totalItems: 0,
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action: PayloadAction<{ _id: string }>) => {
      const existingItem = state.items.find(
        (item) => item._id === action.payload._id
      );
      if (!existingItem) {
        state.items.push({
          _id: action.payload._id,
          addedDate: new Date(),
        });
        state.totalItems++;
      }
    },
    removeFromWishlist: (state, action: PayloadAction<{ _id: string }>) => {
      const existingItem = state.items.find(
        (item) => item._id === action.payload._id
      );
      if (existingItem) {
        state.items = state.items.filter(
          (item) => item._id !== existingItem._id
        );
        state.totalItems--;
      }
    },
    clearWishlist: (state) => {
      state.items = [];
      state.totalItems = 0;
    },
  },
});

export const { addToWishlist, removeFromWishlist, clearWishlist } =
  wishlistSlice.actions;

export default wishlistSlice.reducer;
