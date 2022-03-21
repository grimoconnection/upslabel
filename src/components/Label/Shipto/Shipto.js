import React from "react";
import classes from "./Shipto.module.css";
import { useSelector } from "react-redux";
const Shipto = () => {
  const address = useSelector((state) => state.address);

  return (
    <div className={classes.shipto_container}>
      <div className={classes.shipto_header}>SHIP TO:</div>
      <div className={classes.to_address}>
        <p>{address.to.name}</p>
        <p>{address.to.company}</p>
        <p>{address.to.phone}</p>
        <p>{address.to.street}</p>
        <h6>
          {address.to.city} {address.to.state} {address.to.zip}
        </h6>
        <h5>{address.to.country}</h5>
      </div>
    </div>
  );
};

export default Shipto;
