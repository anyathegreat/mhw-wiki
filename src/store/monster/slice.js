import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { monstersService } from "@/service/monstersService";
import { router } from "@/router";

export const getMonster = createAsyncThunk("monster/getMonster", async (id, { rejectWithValue }) => {
  try {
    const response = await monstersService.getMonster(id);
    return response.data;
  } catch (error) {
    router.navigate("/monsters/not-found", { replace: true });
    return rejectWithValue(error.message);
  }
});

const initialState = {
  item: {},
  loading: 0,
};

const monsterSlice = createSlice({
  name: "monster",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(getMonster.pending, (state) => {
        state.item = {};
        state.loading += 1;
      })
      .addCase(getMonster.fulfilled, (state, action) => {
        state.item = action.payload;
        state.loading -= 1;
      })
      .addCase(getMonster.rejected, (state) => {
        state.loading -= 1;
      });
  },
});

export default monsterSlice.reducer;
