import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:8080";

export const getAllTasks = createAsyncThunk(
  "tasks/getAllTasks",
  async (childId, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`${childId}/tasks`);
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const getTaskById = async (taskId) => {
  try {
    const { data } = await axios.get(`/tasks/${taskId}`);
    return data;
  } catch (e) {
    throw new Error(e.message);
  }
}

// export const getTaskById = createAsyncThunk(
//   "tasks/getTaskById",
//   async (taskId, { rejectWithValue }) => {
//     try {
//       const { data } = await axios.get(`/tasks/${taskId}`);
//       return data;
//     } catch (e) {
//       return rejectWithValue(e.message);
//     }
//   }
// );
