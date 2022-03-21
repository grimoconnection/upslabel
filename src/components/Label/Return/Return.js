import React from "react";
import classes from "./Return.module.css";
import { useSelector } from "react-redux";

const Return = () => {
  const billing = useSelector((state) => state.billing.billing);
  const barcode = useSelector((state) => state.info.barcode);
  const date = useSelector((state) => state.info.moreinfo);

  return (
    <div className={classes.billing_container}>
      {billing.billingType && <p>BILLING: {billing.billingType}</p>}
      {billing.description && <p>DESC: {billing.description}</p>}
      {billing.service && <p>{billing.service}</p>}
      {!barcode.referece && <p>REFERENCE NO: {barcode.reference}</p>}
      <p>PURCHASE NO: {billing.purchase}</p>
      <div className={classes.xol}>
        {billing.nvdate && (
          <>
            <p className={classes.nv}>XOL: {date.date}</p>{" "}
            <p className={classes.nv}>NV45: {billing.nvdate}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default Return;
