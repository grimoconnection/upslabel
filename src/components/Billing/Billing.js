import React from "react";
import classes from "./Billing.module.css";
import Input from "../../UI/Input/Input";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { billingStoreActions } from "../../store/billingStore";

const Billing = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [state, setState] = React.useState({});

  const handleNavigate = () => {
    dispatch(billingStoreActions.setBilling(state));
    navigate("/print");
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
          placeholder='UPS Routing Code'
          name='routingCode'
          value={state.routingCode || ""}
          onChange={handleChange}
        />
      </div>
      <div className={classes.input_group}>
        <Input
          placeholder='UPS Service Title'
          name='serviceTitle'
          value={state.serviceTitle || ""}
          onChange={handleChange}
        />
      </div>
      <div className={classes.input_group}>
        <Input
          placeholder='Number of Packages'
          name='packages'
          value={state.packages || ""}
          onChange={handleChange}
        />
      </div>
      <div className={classes.input_group}>
        <Input
          placeholder='Billing Type'
          name='billingType'
          value={state.billingType || ""}
          onChange={handleChange}
        />
      </div>
      <div className={classes.input_group}>
        <Input
          placeholder='Description'
          name='description'
          value={state.description || ""}
          onChange={handleChange}
        />
      </div>
      <div className={classes.input_group}>
        <Input
          placeholder='Service'
          name='service'
          value={state.service || ""}
          onChange={handleChange}
        />
      </div>
      <div className={classes.input_group}>
        <Input
          placeholder='Purchase No'
          name='purchase'
          value={state.purchase || ""}
          onChange={handleChange}
        />
      </div>
      <div className={classes.input_group}>
        <Input
          placeholder='NV'
          name='nvdate'
          value={state.nvdate || ""}
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

export default Billing;
