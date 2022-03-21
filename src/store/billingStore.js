import { createSlice } from "@reduxjs/toolkit";

const initialState = { billing: [] };

const billingSlice = createSlice({
  name: "billing",
  initialState,
  reducers: {
    setBilling(state, action) {
      state.billing = action.payload;
    },
  },
});

const billingStore = billingSlice.reducer;

export const billingStoreActions = billingSlice.actions;

export default billingStore;
