import { monstersList } from "@/mockData";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getMonsters = createAsyncThunk(
  "monsters/getMonsters",
  async (_, { fulfillWithValue, rejectWithValue }) => {
    const response = await new Promise((resolve) =>
      setTimeout(() => {
        resolve(monstersList);
      }, 3000),
    );

    return fulfillWithValue(response);
  },
);

const initialState = {
  list: [],
  loading: 0,
};

const monstersSlice = createSlice({
  name: "monsters",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(getMonsters.pending, (state) => {
        state.loading += 1;
      })
      .addCase(getMonsters.fulfilled, (state, action) => {
        state.list = action.payload;
        state.loading -= 1;
      })
      .addCase(getMonsters.rejected, (state) => {
        state.loading -= 1;
      });
  },
});

export default monstersSlice.reducer;
