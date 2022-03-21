import React from "react";
import { barcodeStoreActions } from "../../store/barcodeStore";
import { useSelector } from "react-redux";
import classes from "./Refbarcode.module.css";

const Refbarcode = () => {
  const barcode = useSelector((state) => state.barcode);
  return (
    <>
      <img
        className={classes.reference}
        src={barcode.refBarcodeURL}
        alt='Reference'
      />
    </>
  );
};

export default Refbarcode;
