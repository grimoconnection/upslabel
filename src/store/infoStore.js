import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  moreinfo: [],
  barcode: [],
};

const infoSlice = createSlice({
  name: "info",
  initialState,
  reducers: {
    setMoreinfo(state, action) {
      state.moreinfo = action.payload;
    },
    setBarcode(state, action) {
      state.barcode = action.payload;
    },
  },
});

const infoStore = infoSlice.reducer;

export const infoStoreActions = infoSlice.actions;

export default infoStore;
