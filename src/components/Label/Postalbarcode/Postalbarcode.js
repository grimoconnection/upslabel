import React from "react";
import classes from "./Postalbarcode.module.css";
import { useSelector } from "react-redux";

const Postalbarcode = () => {
  const barcode = useSelector((state) => state.barcode);

  return (
    <>
      <img
        className={classes.postal_barcode}
        src={barcode.postalbarcodeURL}
        alt='postal barcode'
      />
    </>
  );
};

export default Postalbarcode;
