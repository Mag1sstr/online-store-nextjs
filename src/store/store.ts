"use client";
import { shopApi } from "@/api/shopApi";
import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import { useDispatch, useSelector } from "react-redux";
import userSlice from "./userSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    user: userSlice,
    [shopApi.reducerPath]: shopApi.reducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware().concat(shopApi.middleware);
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
