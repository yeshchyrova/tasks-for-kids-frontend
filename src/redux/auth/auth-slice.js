import { createSlice } from "@reduxjs/toolkit";
import { getCurrentUser, login, logout, register } from "./auth-operations";
import { handleError, handlePending } from "../../helpers/handlers";

const initialState = {
  user: { name: null, login: null, role: null, id: null, familyId: null },
  token: null,
  isLoggedIn: false,
  isLoading: false,
  error: null,
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
      .addCase(login.pending, handlePending)
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(login.rejected, handleError)
      .addCase(logout.fulfilled, (state) => {
        state.user = {
          name: null,
          login: null,
          role: null,
          id: null,
          familyId: null,
          token: null,
        };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(getCurrentUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCurrentUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(getCurrentUser.rejected, (state) => {
        state.isLoading = false;
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
