import { RootState } from "@/redux/store";
import { TUser } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

type TInitialState = {
  user: null | TUser;
};

const initialState: TInitialState = {
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;

export const selectCurrentUser = (state: RootState) => state.auth.user;
