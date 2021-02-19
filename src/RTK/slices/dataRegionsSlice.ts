import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { FetchData } from "../../service/fetchData";

let service = FetchData.getInstance();

export const getDataRegions: any = createAsyncThunk(
  "dataRegions/getDataRegions",
  () => {
   return service.getDataRegions();
  }
);

const dataRegions = createSlice({
  name: "dataRegions",
  initialState: {
    dataRegions: [],
  },
  reducers: {},
  extraReducers: {
    [getDataRegions.fulfilled]: (state, action) => {
      state.dataRegions = action.payload;
    },
  },
});

export const dataRegionsReducer = dataRegions.reducer;
