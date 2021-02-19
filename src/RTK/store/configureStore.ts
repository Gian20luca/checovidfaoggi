import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { dataRegionsReducer } from "../slices/dataRegionsSlice";

const reducer = combineReducers({
  dataRegions: dataRegionsReducer,
});

export const store = configureStore({
  reducer,
});
