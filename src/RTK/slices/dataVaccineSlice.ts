import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { FetchData } from "../../service/fetchData";

let service = FetchData.getInstance();

export const getDataVaccine: any = createAsyncThunk(
  "dataVaccine/getDataRegions",
  () => {
   return service.getDataVaccine();
  }
);

const dataVaccine = createSlice({
  name: "dataVaccine",
  initialState: {
    dataRegions: [],
  },
  reducers: {},
  extraReducers: {
    [getDataVaccine.fulfilled]: (state, action) => {
      state.dataRegions = action.payload;
    },
  },
});

export const dataVaccineReducer = dataVaccine.reducer;
