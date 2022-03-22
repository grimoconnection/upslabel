import React from "react";
import classes from "./App.module.css";
import Print from "./components/Print/Print";
import Header from "./components/Header/Header";
import Address from "./components/Address/Address";
import Moreinfo from "./components/MoreInfo/Moreinfo";
import Barcodes from "./components/Barcodes/Barcodes";
import Billing from "./components/Billing/Billing";
import { Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  getMaxi,
  getPostal,
  getTracking,
  getReference,
} from "./store/barcodeThunk";
function App() {
  const dispatch = useDispatch();
  const code = useSelector((state) => state.info.barcode);

  React.useEffect(() => {
    dispatch(getMaxi(code.maxicode))
      .then(() => dispatch(getPostal(code.postalcode)))
      .then(() => dispatch(getTracking(code.tracking)))
      .then(() => dispatch(getReference(code.reference)));
  }, [code, dispatch]);
  return (
    <div className={classes.main}>
      <div className={classes.header_container}>
        <Header />
      </div>
      <div className={classes.address_container}>
        <Routes>
          <Route exact path='/' element={<Address />} />
          <Route exact path='/moreinfo' element={<Moreinfo />} />
          <Route exact path='/barcodes' element={<Barcodes />} />
          <Route exact path='/billing' element={<Billing />} />
          <Route exact path='/print' element={<Print />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
