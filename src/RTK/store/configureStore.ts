import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { dataRegionsReducer } from "../slices/dataRegionsSlice";
import { dataVacciniReducer } from "../slices/dataVacciniSlice";
import { dataItalyReducer } from "../slices/dataItalySlice";
import { openDetailsReducer } from "../slices/openDetailsSlice";
import { colorsRegionsReducer } from "../slices/colorsRegionsSlice";
import { dataGeojsonReducer } from "../slices/dataGeojsonSlice";

const reducer = combineReducers({
  dataRegions: dataRegionsReducer,
  dataVaccini: dataVacciniReducer,
  dataItaly: dataItalyReducer,
  openDetails: openDetailsReducer,
  colorsRegions: colorsRegionsReducer,
  dataGeojson: dataGeojsonReducer,
});

export const store = configureStore({
  reducer,
});
