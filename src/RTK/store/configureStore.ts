import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { dataRegionsReducer } from "../slices/dataRegionsSlice";
import { dataVacciniReducer } from "../slices/dataVacciniSlice";
import { dataItalyReducer } from "../slices/dataItalySlice";
import { openDetailsReducer } from "../slices/openDetailsSlice";
import { colorsRegionsReducer } from "../slices/colorsRegionsSlice";
import { dataGeojsonReducer } from "../slices/dataGeojsonSlice";
import { dataProvincieReducer } from "../slices/dataProvincieSlice";
import { openTableProvincieReducer } from "../slices/openTableProvincie";

const reducer = combineReducers({
  dataRegions: dataRegionsReducer,
  dataVaccini: dataVacciniReducer,
  dataItaly: dataItalyReducer,
  openDetails: openDetailsReducer,
  colorsRegions: colorsRegionsReducer,
  dataGeojson: dataGeojsonReducer,
  dataProvincie: dataProvincieReducer,
  openTableProvincie: openTableProvincieReducer,
});

export const store = configureStore({
  reducer,
});
