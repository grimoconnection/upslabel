import React from "react";
import FromAddress from "./FromAddress/FromAddress";
import ToAddress from "./ToAddress/ToAddress";
import classes from "./Address.module.css";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const Address = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/moreinfo");
  };

  return (
    <form>
      <div className={classes.address_wrapper}>
        <div>
          <FromAddress />
        </div>
        <div>
          <ToAddress />
        </div>
      </div>
      <div className={classes.button_container}>
        <Button className={classes.button} onClick={handleNavigate}>
          Next
        </Button>
      </div>
    </form>
  );
};

export default Address;
