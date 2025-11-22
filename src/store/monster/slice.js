import { monstersList } from "@/mockData";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getMonster = createAsyncThunk("monster/getMonster", async (id, { fulfillWithValue, rejectWithValue }) => {
  const response = await new Promise((resolve, reject) => {
    setTimeout(() => {
      const monster = monstersList.find((item) => Number(item.id) === Number(id));

      if (!monster) reject({ message: "Monster not found" });
      resolve(monster);
    }, 3000);
  })
    .then((value) => fulfillWithValue(value))
    .catch((error) => {
      return rejectWithValue(error.message);
    });

  return response;
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
