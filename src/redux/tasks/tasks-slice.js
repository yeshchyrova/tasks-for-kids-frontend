import { createSlice } from "@reduxjs/toolkit";
import { addTask, completeTask, getAllTasks } from "./tasks-operations";
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
        state.items.unshift(payload);
      })
      .addCase(addTask.rejected, handleError)

      .addCase(completeTask.pending, handlePending)
      .addCase(completeTask.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        const idx = state.items.findIndex((el) => {
          return el.id === payload.id;
        });
        state.items[idx] = payload;
      })
      .addCase(completeTask.rejected, handleError);
  },
});

export const tasksReducer = tasksSlice.reducer;
