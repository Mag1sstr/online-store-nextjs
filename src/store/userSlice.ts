import { IUser } from "@/types/interfaces";
import { createSlice } from "@reduxjs/toolkit";
import { AppDispatch } from "./store";
import axios from "axios";

interface IUserSlice {
  user: IUser | null;
  token: string | null;
}
const initialState: IUserSlice = {
  user: null,
  token: null,
};

export const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
    setToken(state, action) {
      state.token = action.payload;
    },
  },
});

export function getUser(token: string | null) {
  return function (dispatch: AppDispatch) {
    // const { token } = useAppSelector((state) => state.user);
    if (token) {
      axios.defaults.headers.common["Authorization"] = "Bearer " + token;
      axios.get("https://api.escuelajs.co/api/v1/auth/profile").then((resp) => {
        dispatch(setUser(resp.data));
      });
    }
  };
}

export const { setUser, setToken } = userSlice.actions;

export default userSlice.reducer;
