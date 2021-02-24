import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { FetchData } from "../../service/fetchData";

let service = FetchData.getInstance();
const _ = require("lodash");

//recupero data di ieri
var date = new Date();
var gg, mm, aaaa;
gg = (date.getDate() - 1 > 9 ? "" : "0") + (date.getDate() - 1);
mm = (date.getMonth() + 1 > 9 ? "" : "0") + (date.getMonth() + 1) + "-";
aaaa = date.getFullYear() + "-";
let totalDate = aaaa + mm + gg;

export const getColorsRegions: any = createAsyncThunk(
  "colorsRegions/getColorsRegions",
  () => {
    return service.getColorsRegions();
  }
);

const colorsRegions = createSlice({
  name: "colorsRegions",
  initialState: {
    colorsRegions: [],
  },
  reducers: {},
  extraReducers: {
    [getColorsRegions.fulfilled]: (state, action) => {
      let result: any = [];
      action.payload.map((item: any) => {
        if (item.data === totalDate) {
          result.push(item);
        }
      });
      result.map((item: any) => {
        item.denominazione_regione === "Piemonte"
          ? (item.id = 1)
          : item.denominazione_regione === "Valle d'Aosta"
          ? (item.id = 2)
          : item.denominazione_regione === "Lombardia"
          ? (item.id = 3)
          : item.denominazione_regione === "Provincia autonoma Trento"
          ? (item.id = 4)
          : item.denominazione_regione === "Veneto"
          ? (item.id = 5)
          : item.denominazione_regione === "Friuli Venezia Giulia"
          ? (item.id = 6)
          : item.denominazione_regione === "Liguria"
          ? (item.id = 7)
          : item.denominazione_regione === "Emilia-Romagna"
          ? (item.id = 8)
          : item.denominazione_regione === "Toscana"
          ? (item.id = 9)
          : item.denominazione_regione === "Umbria"
          ? (item.id = 10)
          : item.denominazione_regione === "Marche"
          ? (item.id = 11)
          : item.denominazione_regione === "Lazio"
          ? (item.id = 12)
          : item.denominazione_regione === "Abruzzo"
          ? (item.id = 13)
          : item.denominazione_regione === "Molise"
          ? (item.id = 14)
          : item.denominazione_regione === "Campania"
          ? (item.id = 15)
          : item.denominazione_regione === "Puglia"
          ? (item.id = 16)
          : item.denominazione_regione === "Basilicata"
          ? (item.id = 17)
          : item.denominazione_regione === "Calabria"
          ? (item.id = 18)
          : item.denominazione_regione === "Sicilia"
          ? (item.id = 19)
          : item.denominazione_regione === "Sardegna"
          ? (item.id = 20)
          : (item.id = 21);
      });
      result = _.orderBy(result, ["id"], ["asc"]);
      state.colorsRegions = result;
    },
  },
});

export const colorsRegionsReducer = colorsRegions.reducer;
