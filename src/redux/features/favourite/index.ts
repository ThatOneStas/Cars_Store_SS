import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface cartState {
  fav_list: any[];
}

const initialState: cartState = {
  fav_list: [],
};

let test: any = Array([1, 2, 3, 4, 5]);

export const favourite = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    changeFavoriteList: (state, ItemID) => {
      const id = ItemID.payload;
      let favList = state.fav_list;
      const isFavorite = state.fav_list.indexOf(id);

      if (isFavorite >= 0) {
        favList.splice(isFavorite, 1);
      } else {
        favList.push(id);
      }

      state.fav_list = favList;
      localStorage.setItem("Test", JSON.stringify(favList));
    },
  },
});

// export reducer
export const { changeFavoriteList } = favourite.actions;
// export slice
export default favourite.reducer;
