import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { monstersService } from "@/service/monstersService";

export const getMonsters = createAsyncThunk("monsters/getMonsters", async (_, { rejectWithValue }) => {
  try {
    const response = await monstersService.getAllMonsters();
    return response.data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

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
