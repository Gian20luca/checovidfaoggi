import { createSlice } from "@reduxjs/toolkit";

const openTableProvincie = createSlice({
  name: "openTableProvincie",
  initialState: {
    openTableProvincie: false,
  },
  reducers: {
    getOpenTableProvincie: (state, action) => {
      state.openTableProvincie = action.payload;
    },
  },
});

export const { getOpenTableProvincie } = openTableProvincie.actions;
export const openTableProvincieReducer = openTableProvincie.reducer;
