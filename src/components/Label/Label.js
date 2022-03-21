import React from "react";
import classes from "./Label.module.css";
import { useSelector } from "react-redux";
import Shipfrom from "./Shipfrom/Shipfrom";
import Shipto from "./Shipto/Shipto";
import Maxicode from "./Maxicode/Maxicode";
import Postalbarcode from "./Postalbarcode/Postalbarcode";
import Service from "./Service/Service";
import Tracking from "./Tracking/Tracking";
import Return from "./Return/Return";
import Refbarcode from "../Refbarcode/Refbarcode";

export const Label = React.forwardRef((props, ref) => {
  const refbarcode = useSelector((state) => state.info.barcode.reference);
  const province = useSelector((state) => state.address.to.state);
  const billing = useSelector((state) => state.billing);
  const edi = useSelector((state) => state.info.moreinfo);
  return (
    <div ref={ref} className={classes.container}>
      <div className={classes.label}>
        <div>
          <Shipfrom />
        </div>
        <div>
          <Shipto />
        </div>
        <div className={classes.barcode_container}>
          <div>
            <Maxicode />
          </div>
          <div className={classes.postalcode_container}>
            <div className={classes.postalcode}>
              <h5>{billing.billing.routingCode}</h5>
            </div>
            <div className={classes.postalbarcode_container}>
              <Postalbarcode />
            </div>
          </div>
        </div>
        <div className={classes.service}>
          <Service />
        </div>
        <div className={classes.tracking_container}>
          <Tracking />
        </div>
        <div className={classes.return}>
          <div>
            <Return />
          </div>
          <div className={classes.edi}>
            <h5>{edi.edi}</h5>
            <p>{edi.edidate}</p>
          </div>
        </div>
        <div className={classes.ref_container}>
          <div>
            <p>{refbarcode}</p>
            <div className={classes.refbarcode_container}>
              <Refbarcode />
            </div>
          </div>
          <div className={classes.province}>
            <h3>{province}</h3>
          </div>
        </div>
      </div>
    </div>
  );
});
