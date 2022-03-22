import React from "react";
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
