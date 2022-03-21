import React from "react";
import classes from "./Shipfrom.module.css";
import { useSelector } from "react-redux";

const Shipfrom = () => {
  const address = useSelector((state) => state.address);
  const billing = useSelector((state) => state.billing);
  const info = useSelector((state) => state.info);
  return (
    <div className={classes.from_label}>
      <div>
        <p>{address.from.name}</p>
        <p>{address.from.company}</p>
        <p>{address.from.phone}</p>
        <p>{address.from.unit}</p>
        <p>{address.from.street}</p>
        <p>
          {address.from.city} {address.from.state} {address.from.zip}
        </p>
        <p>{address.from.country}</p>
      </div>
      <div className={classes.right_header}>
        <p>{info.moreinfo.weight} LBS</p>
      </div>
      <div className={classes.right_header}>
        <div className={classes.packages}>
          <p>{billing.billing.packages}</p>
        </div>
        <div className={classes.container}>
          <div>
            {info.moreinfo.return && (
              <p className={classes.rs}>{info.moreinfo.return}</p>
            )}
          </div>
          <div className={classes.ship_info_container}>
            {info.moreinfo.shipping && (
              <p className={classes.ship_info}>SHP#:{info.moreinfo.shipping}</p>
            )}
            {info.moreinfo.weight && (
              <p className={classes.ship_info}>
                SHP WT:{info.moreinfo.weight} LBS
              </p>
            )}
            {info.moreinfo.dweight && (
              <p className={classes.ship_info}>
                SHP DWT:{info.moreinfo.dweight} LBS
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shipfrom;
