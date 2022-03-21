import React from "react";
import classes from "./Maxicode.module.css";
import { useSelector } from "react-redux";
import { barcodeStoreActions } from "../../../store/barcodeStore";

const Maxicode = () => {
  const barcode = useSelector((state) => state.barcode);

  return (
    <>
      <img
        className={classes.maxicode}
        src={barcode.maxicodeURL}
        alt='maxicode'
      />
    </>
  );
};

export default Maxicode;
