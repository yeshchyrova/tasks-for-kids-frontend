import { createSlice } from "@reduxjs/toolkit";
import { getAllParents } from "./parents-operations";
import { handleError, handlePending } from "../../helpers/handlers";

// Властивість extraReducers використовується щоб оголосити редюсери для «зовнішніх» типів екшенів, тобто тих, які не згенеровані з властивості reducers. Оскільки ці редюсери обробляють «зовнішні» екшени, для них не буде створено генератори екшенів в slice.actions, в цьому немає необхідності.

const parentsSlice = createSlice({
  name: "parents",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllParents.pending, handlePending)
      .addCase(getAllParents.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(getAllParents.rejected, handleError);
  },
});

export const parentsReducer = parentsSlice.reducer;
