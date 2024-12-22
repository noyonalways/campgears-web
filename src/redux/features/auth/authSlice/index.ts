import { RootState } from "@/redux/store";
import { TLoggedInUser } from "@/types/user";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TInitialState = {
  user: null | TLoggedInUser;
};

const initialState: TInitialState = {
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<TLoggedInUser>) => {
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
