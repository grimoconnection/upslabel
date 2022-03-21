import React from "react";
import classes from "./Barcodes.module.css";
import Input from "../../UI/Input/Input";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { infoStoreActions } from "../../store/infoStore";

const Barcodes = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [state, setState] = React.useState({});

  const handleNavigate = () => {
    dispatch(infoStoreActions.setBarcode(state));
    navigate("/billing");
  };

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value.toUpperCase(),
    });
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.input_group}>
        <Input
          placeholder='Maxicode'
          name='maxicode'
          value={state.maxicode || ""}
          onChange={handleChange}
        />
      </div>
      <div className={classes.input_group}>
        <Input
          placeholder='Postal Barcode'
          name='postalcode'
          value={state.postalcode || ""}
          onChange={handleChange}
        />
      </div>
      <div className={classes.input_group}>
        <Input
          placeholder='Tracking Number'
          name='tracking'
          value={state.tracking || ""}
          onChange={handleChange}
        />
      </div>
      <div className={classes.input_group}>
        <Input
          placeholder='Refrence Barcode'
          name='reference'
          value={state.reference || ""}
          onChange={handleChange}
        />
      </div>
      <div className={classes.button_container}>
        <Button className={classes.button} onClick={handleNavigate}>
          Next
        </Button>
      </div>
    </div>
  );
};

export default Barcodes;
