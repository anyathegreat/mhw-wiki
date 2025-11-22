import { createSelector } from "@reduxjs/toolkit";

export const selectMonstersList = createSelector(
  (state) => state.monsters.list,
  (list) => {
    return list.toSorted((a, b) => {
      const item1 = a.name.toLowerCase();
      const item2 = b.name.toLowerCase();

      if (item1 > item2) return 1;
      if (item1 < item2) return -1;
      return 0;
    });
  },
);
