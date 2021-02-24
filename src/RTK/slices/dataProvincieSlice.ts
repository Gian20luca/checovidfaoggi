import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { FetchData } from "../../service/fetchData";

let service = FetchData.getInstance();

export const getDataProvincie: any = createAsyncThunk(
  "dataProvincie/getDataProvincie",
  () => {
    return service.getDataProvincie();
  }
);

const dataProvincie = createSlice({
  name: "dataProvincie",
  initialState: {
    dataProvincie: [],
  },
  reducers: {},
  extraReducers: {
    [getDataProvincie.fulfilled]: (state, action) => {
      let result: any = [];
      result = action.payload;
      result.map((item: any) => {
        if (item.denominazione_regione === "P.A. Bolzano") {
          item.codice_regione = 21;
        }
      });
      state.dataProvincie = result;
    },
  },
});

export const dataProvincieReducer = dataProvincie.reducer;
