import { createSlice } from "@reduxjs/toolkit";
import { getCurrentUser, login, logout, register } from "./auth-operations";

const initialState = {
  user: { name: null, login: null, role: null, id: null, familyId: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = {
          name: null,
          login: null,
          role: null,
          id: null,
          familyId: null,
          token: null
        };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(getCurrentUser.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(getCurrentUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(getCurrentUser.rejected, (state) => {
        state.isRefreshing = false;
        state.isLoggedIn = false;
        state.user = {
          name: null,
          login: null,
          role: null,
          id: null,
          familyId: null,
          token: null,
        };
        state.token = null;
      });
  },
});

export const authReducer = authSlice.reducer;
