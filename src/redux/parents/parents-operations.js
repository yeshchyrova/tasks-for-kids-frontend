import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:8080";

export const getAllParents = createAsyncThunk(
  "parents/getAllParents",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get("/parents");
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

// эта дичь формирует(возвращает) значение payload. первый аргумент - arg, второй - thunkAPI
// arg - значення, яке було передано операції під час виклику. Використовується, наприклад, для передачі ідентифікаторів об'єктів при видаленні, тексту нотаток при створенні, тощо.
// thunkAPI - об'єкт, який передається в асинхронний генератор екшену в redux-thunk. Містить властивості та методи доступу до стору, відправки екшенів, а також деякі додаткові.
// async (_, { rejectWithValue }) => {
//   try {
//     const { data } = await axios.get("/parents");
//     return data;
//   } catch (e) {
//     return rejectWithValue(e.message);
//   }
// };

// export const getAllParents = () => async (dispatch) => {
//   try {
//     dispatch(fetchingInProgress());
//     const response = await axios.get("/parents");
//     console.log(response.data)
//     dispatch(fetchingSuccess(response.data));
//   } catch (e) {
//     dispatch(fetchingError(e.message));
//   }
// };
