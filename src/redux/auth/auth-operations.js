import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:8080";

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = "";
};

export const register = createAsyncThunk(
  "auth/register",
  async (credentials, { rejectWithValue }) => {
    try {
      const res = await axios.post("/register", credentials);
      setAuthHeader(res.headers.Authorization);
      // setAuthHeader(res.data.token);
      console.log("Data after registration: ", res.data);
      console.log("Token from header (registration): ", res.headers.Authorization);
      return { user: res.data, token: res.headers.Authorization };
      // setAuthHeader(res.data.token);
      // return res.data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (credentials, { rejectWithValue }) => {
    try {
      const res = await axios.post("/login", credentials);
      setAuthHeader(res.headers.Authorization);
      // setAuthHeader(res.data.token);
      console.log("Data after login: ", res.data);
      console.log(
        "Token from header (login): ",
        res.headers.Authorization
      );
      return { user: res.data, token: res.headers.Authorization };
    } catch (e) {
      rejectWithValue(e.message);
    }
  }
);

export const logout = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      await axios.post("/logout");
      clearAuthHeader();
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const getCurrentUser = createAsyncThunk(
  "auth/refresh",
  async (_, { rejectWithValue, getState }) => {
    const state = getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) return rejectWithValue("Unable to fetch user");

    try {
      setAuthHeader(persistedToken);
      const res = await axios.get("/users/current");
      return res.data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);
