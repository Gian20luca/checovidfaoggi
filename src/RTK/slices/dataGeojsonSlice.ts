import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { FetchData } from "../../service/fetchData";

let service = FetchData.getInstance();

export const getDataGeojson: any = createAsyncThunk(
  "dataGeojson/getDataGeojson",
  () => {
    return service.getDataGeojson();
  }
);

const dataGeojson = createSlice({
  name: "dataGeojson",
  initialState: {
    dataGeojson: [],
  },
  reducers: {},
  extraReducers: {
    [getDataGeojson.fulfilled]: (state, action) => {
      state.dataGeojson = action.payload;
    },
  },
});

export const dataGeojsonReducer = dataGeojson.reducer;
