import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_HOST_URL } from "../constants";

axios.defaults.baseURL = BASE_HOST_URL;

export const getAllTasks = createAsyncThunk(
  "tasks/getAllTasks",
  async (childId, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`${childId}/tasks`);
      return data;
    } catch (e) {
      return rejectWithValue(e.status);
    }
  }
);

export const getTaskById = async (taskId) => {
  try {
    const { data } = await axios.get(`/tasks/${taskId}`);
    return data;
  } catch (e) {
    throw new Error(e.status);
  }
};

export const getSpentTimeByTaskType = async (childId) => {
  try {
    const { data } = await axios.get(
      `statistics/${childId}/spent-time-task-type`
    );
    return data;
  } catch (e) {
    throw new Error(e.status);
  }
};


export const getTasksByMood = async (childId, mood) => {
  try {
    const { data } = await axios.get(
      `statistics/${childId}/tasks-by-mood/${mood}`
    );
    return data;
  } catch (e) {
    throw new Error(e.status);
  }
};


export const getExpiredTasks = async (childId) => {
  try {
    const { data } = await axios.get(`statistics/${childId}/expired-tasks`);
    return data;
  } catch (e) {
    throw new Error(e.status);
  }
};

export const addTask = createAsyncThunk(
  "tasks/addTask",
  async (task, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("/tasks", task);
      return data;
    } catch (e) {
      return rejectWithValue(e.status);
    }
  }
);

export const completeTask = createAsyncThunk(
  "tasks/completeTask",
  async (task, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("/complete", task);
      return data;
    } catch (e) {
      return rejectWithValue(e.status);
    }
  }
);
