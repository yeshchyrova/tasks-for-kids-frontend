import { createSlice } from "@reduxjs/toolkit";
import { addTask, getAllTasks } from "./tasks-operations";
import {
  handleError,
  handleFulfilled,
  handlePending,
} from "../../helpers/handlers";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllTasks.pending, handlePending)
      .addCase(getAllTasks.fulfilled, handleFulfilled)
      .addCase(getAllTasks.rejected, handleError)

      .addCase(addTask.pending, handlePending)
      .addCase(addTask.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.items.pop(payload);
      })
      .addCase(addTask.rejected, handleError);
  },
});

export const tasksReducer = tasksSlice.reducer;
