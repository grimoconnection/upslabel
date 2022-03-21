import { configureStore } from "@reduxjs/toolkit";
import addressStore from "./addressStore";
import infoStore from "./infoStore";
import billingStore from "./billingStore";
import barcodeStore from "./barcodeStore";

const store = configureStore({
  reducer: {
    address: addressStore,
    info: infoStore,
    billing: billingStore,
    barcode: barcodeStore,
  },
});
export default store;
