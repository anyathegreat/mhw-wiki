import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

import monstersSlice from "./monsters/slice";
import monsterSlice from "./monster/slice";

export const store = configureStore({
  reducer: {
    monster: monsterSlice,
    monsters: monstersSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
