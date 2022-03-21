import React from "react";
import { useSelector, useDispatch } from "react-redux";
import classes from "./Tracking.module.css";

const Tracking = () => {
  const trackingImg = useSelector((state) => state.barcode.trackingBarcodeURL);

  return (
    <>
      <img
        src={trackingImg}
        alt='Tracking'
        className={classes.tracking_image}
      />
    </>
  );
};

export default Tracking;
