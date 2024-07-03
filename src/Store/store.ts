"use client";
import { configureStore } from "@reduxjs/toolkit";
import slice1 from "../features/Slice1/slice";
export const store = configureStore({
    reducer: slice1,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
