import { ICart } from "@/types/interfaces";
import { createSlice } from "@reduxjs/toolkit";

interface ILikeState {
  likes: ICart[];
}

const initialState: ILikeState = {
  likes: [],
};
export const likeSlice = createSlice({
  name: "likeSlice",
  initialState,
  reducers: {
    addLikeItem(state, action) {
      for (const item of state.likes) {
        if (item.id === action.payload.id) {
          return;
        }
      }
      state.likes.push(action.payload);
    },
    setLikes(state, action) {
      state.likes = action.payload;
    },
  },
});

export const { addLikeItem, setLikes } = likeSlice.actions;

export default likeSlice.reducer;
