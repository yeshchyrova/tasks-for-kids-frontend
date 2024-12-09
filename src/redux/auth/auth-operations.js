import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:8080";

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = "";
  localStorage.clear();
  // localStorage.removeItem("persist:auth");
  // localStorage.removeItem("lastVisitedPath");
};

export const register = createAsyncThunk(
  "auth/register",
  async (credentials, { rejectWithValue }) => {
    try {
      const res = await axios.post("/register", credentials);
      setAuthHeader(res.headers["authorization"]);
      return { user: res.data, token: res.headers["authorization"] };
    } catch (e) {
      return rejectWithValue(e.status);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (credentials, { rejectWithValue }) => {
    try {
      const res = await axios.post("/login", credentials);
      setAuthHeader(res.headers["authorization"]);
      return { user: res.data, token: res.data.token };
    } catch (e) {
      return rejectWithValue(e.status);
    }
  }
);

export const logout = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      await axios.post("/api/logout");
      clearAuthHeader();
    } catch (e) {
      return rejectWithValue(e.status);
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
      return rejectWithValue(e.status);
    }
  }
);
