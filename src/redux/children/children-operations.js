import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_HOST_URL } from "../constants";

axios.defaults.baseURL = BASE_HOST_URL;

export const getChildrenByFamilyId = createAsyncThunk(
  "children/getChildrenByFamilyId",
  async (familyId, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/${familyId}/children`);
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);
