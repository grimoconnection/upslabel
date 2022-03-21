import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  maxicodeURL: "",
  postalbarcodeURL: "",
  trackingBarcodeURL: "",
  refBarcodeURL: "",
};

const barcodeSlice = createSlice({
  name: "info",
  initialState,
  reducers: {
    setMaxicode(state, action) {
      state.maxicodeURL = action.payload;
    },
    setPostalcode(state, action) {
      state.postalbarcodeURL = action.payload;
    },
    setTrackingBarcode(state, action) {
      state.trackingBarcodeURL = action.payload;
    },
    setRefBarcode(state, action) {
      state.refBarcodeURL = action.payload;
    },
  },
});

const barcodeStore = barcodeSlice.reducer;

export const barcodeStoreActions = barcodeSlice.actions;

export default barcodeStore;
