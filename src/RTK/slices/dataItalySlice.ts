import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { FetchData } from "../../service/fetchData";

let service = FetchData.getInstance();

export const getDataItaly: any = createAsyncThunk(
  "dataItaly/getDataItaly",
  () => {
    return service.getDataItaly();
  }
);

const dataItaly = createSlice({
  name: "dataItaly",
  initialState: {
    dataItaly: [],
  },
  reducers: {},
  extraReducers: {
    [getDataItaly.fulfilled]: (state, action) => {
      state.dataItaly = action.payload;
    },
  },
});

export const dataItalyReducer = dataItaly.reducer;
