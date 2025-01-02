import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_HOST_URL } from "../constants";

axios.defaults.baseURL = BASE_HOST_URL;

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = "";
  localStorage.clear();
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

export const addFamilyMember = async (data) => {
  try {
    await axios.post("/member", data);
  } catch (e) {
    throw new Error(e.status);
  }
}
