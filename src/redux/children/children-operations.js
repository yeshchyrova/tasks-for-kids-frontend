import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:8080";

export const getChildrenByFamilyId = createAsyncThunk(
  "children/getChildrenByFamilyId",
  async (familyId, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/${familyId}/children`);
      return data; // list of children
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);
