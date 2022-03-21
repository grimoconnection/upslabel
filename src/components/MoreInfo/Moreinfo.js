import React from "react";
import Input from "../../UI/Input/Input";
import classes from "./Moreinfo.module.css";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { infoStoreActions } from "../../store/infoStore";

const Moreinfo = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [state, setState] = React.useState({});

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value.toUpperCase(),
    });
  };

  const handleNavigate = () => {
    dispatch(infoStoreActions.setMoreinfo(state));
    navigate("/barcodes");
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.input_group}>
        <Input
          placeholder='RETURN ?'
          name='return'
          value={state.return}
          onChange={handleChange}
        />
      </div>
      <div className={classes.input_group}>
        <Input
          placeholder='Weight - LBS'
          name='weight'
          value={state.weight}
          onChange={handleChange}
        />
      </div>
      <div className={classes.input_group}>
        <Input
          placeholder='Shipping Number'
          name='shipping'
          value={state.shipping}
          onChange={handleChange}
        />
      </div>
      <div className={classes.input_group}>
        <Input
          placeholder='Dimensional Weight - LBS'
          name='dweight'
          value={state.dweight || ""}
          onChange={handleChange}
        />
      </div>
      <div className={classes.input_group}>
        <Input
          placeholder='XOL Date Format - YY.MM.DD'
          name='date'
          value={state.date}
          onChange={handleChange}
        />
      </div>
      <div className={classes.input_group}>
        <Input
          placeholder='Number of Packages'
          name='packagesno'
          value={state.packagesno || ""}
          onChange={handleChange}
        />
      </div>
      <div className={classes.input_group}>
        <Input
          placeholder='EDI'
          name='edi'
          value={state.edi}
          onChange={handleChange}
        />
      </div>
      <div className={classes.input_group}>
        <Input
          placeholder='EDI Date'
          name='edidate'
          value={state.edidate}
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

export default Moreinfo;
