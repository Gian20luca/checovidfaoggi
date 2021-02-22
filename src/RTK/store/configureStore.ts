import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { dataRegionsReducer } from "../slices/dataRegionsSlice";
import { dataVacciniReducer } from "../slices/dataVacciniSlice";
import { dataItalyReducer } from "../slices/dataItalySlice";

const reducer = combineReducers({
  dataRegions: dataRegionsReducer,
  dataVaccini: dataVacciniReducer,
  dataItaly: dataItalyReducer,
});

export const store = configureStore({
  reducer,
});
