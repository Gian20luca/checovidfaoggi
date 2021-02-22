import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { FetchData } from "../../service/fetchData";

let service = FetchData.getInstance();

export const getVaccini: any = createAsyncThunk(
  "dataVaccini/getVaccini",
  () => {
    return service.getVaccini();
  }
);

const dataVaccini = createSlice({
  name: "dataVaccini",
  initialState: {
    dataVaccini: [],
  },
  reducers: {},
  extraReducers: {
    [getVaccini.fulfilled]: (state, action) => {
      state.dataVaccini = action.payload;
    },
  },
});

export const dataVacciniReducer = dataVaccini.reducer;
