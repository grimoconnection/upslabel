import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  countries: [],
  country: "",
  from: [],
  to: [],
};

const addressSlice = createSlice({
  name: "address",
  initialState,
  reducers: {
    getCountries(state, action) {
      state.countries = action.payload;
    },
    selectCountry(state, action) {
      state.country = action.payload;
    },
    setFrom(state, action) {
      state.from = action.payload;
    },
    setTo(state, action) {
      state.to = action.payload;
    },
  },
});

const addressStore = addressSlice.reducer;

export const addressStoreActions = addressSlice.actions;

export default addressStore;
