import { createSlice } from "@reduxjs/toolkit";
import { getChildrenByFamilyId } from "./children-operations";
import {
  handleError,
  handleFulfilled,
  handlePending,
} from "../../helpers/handlers";

const childrenSlice = createSlice({
  name: "children",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getChildrenByFamilyId.pending, handlePending)
      .addCase(getChildrenByFamilyId.fulfilled, handleFulfilled)
      .addCase(getChildrenByFamilyId.rejected, handleError);
  },
});

export const childrenReducer = childrenSlice.reducer;
