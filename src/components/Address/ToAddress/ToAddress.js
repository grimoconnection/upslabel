import React from "react";
import classes from "./ToAddress.module.css";
import Input from "../../../UI/Input/Input";
import Countries from "../Countries/Countries";
import { useDispatch } from "react-redux";
import { addressStoreActions } from "../../../store/addressStore";

const ToAddress = () => {
  const dispatch = useDispatch();
  const [state, setState] = React.useState({});
  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value.toUpperCase(),
    });
  };

  const getCountry = (country) => {
    setState({ ...state, country: country });
  };

  React.useEffect(() => {
    dispatch(addressStoreActions.setTo(state));
  }, [state, dispatch]);

  return (
    <>
      <div className={classes.container}>
        <Input
          name='company'
          placeholder='Company Name'
          value={state.company || ""}
          onChange={handleChange}
        />
      </div>
      <div className={classes.container}>
        <Input
          name='name'
          placeholder='Name'
          value={state.name || ""}
          onChange={handleChange}
        />
      </div>
      <div className={classes.container}>
        <Input
          name='phone'
          placeholder='Phone No'
          value={state.number || undefined}
          onChange={handleChange}
        />
      </div>
      <div className={classes.container}>
        <Input
          name='unit'
          placeholder='Unit/Apt'
          value={state.unit || ""}
          onChange={handleChange}
        />
      </div>

      <div className={classes.container}>
        <Input
          placeholder='Street Address'
          name='street'
          value={state.street || ""}
          onChange={handleChange}
        />
      </div>
      <div className={classes.container}>
        <Input
          placeholder='City'
          name='city'
          value={state.city || ""}
          onChange={handleChange}
        />
      </div>
      <div className={classes.container}>
        <Input
          placeholder='State/Province'
          name='state'
          value={state.state || ""}
          onChange={handleChange}
        />
      </div>
      <div className={classes.container}>
        <Input
          placeholder='Zip/Postal Code'
          name='zip'
          value={state.zip || ""}
          onChange={handleChange}
        />
      </div>
      <div className={classes.container}>
        <Countries getCountry={getCountry} />
      </div>
    </>
  );
};

export default ToAddress;
