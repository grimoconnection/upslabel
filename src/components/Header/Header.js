import React from "react";
import classes from "./Header.module.css";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/");
    window.location.reload();
  };
  return (
    <div className={classes.header}>
      <div>
        <h1>Shipping Label</h1>
      </div>
      <div className={classes.button_container}>
        <Button className={classes.button} onClick={handleNavigate}>
          Reset
        </Button>
      </div>
    </div>
  );
};

export default Header;
