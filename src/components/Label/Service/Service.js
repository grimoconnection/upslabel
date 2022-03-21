import React from "react";
import { useSelector } from "react-redux";
import classes from "./Service.module.css";

const Service = () => {
  const service = useSelector((state) => state.billing.billing);
  const tracking = useSelector((state) => state.info.barcode);
  const packages = useSelector((state) => state.info.moreinfo.packagesno);

  return (
    <>
      <div className={classes.service_wrapper}>
        <div>
          <h4>{service.serviceTitle}</h4>
          <p>TRACKING #: {tracking.tracking}</p>
        </div>
        <div>
          <h4>{packages}</h4>
        </div>
      </div>
    </>
  );
};

export default Service;
