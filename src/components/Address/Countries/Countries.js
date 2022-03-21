import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addressStoreActions } from "../../../store/addressStore";
import classes from "./Countries.module.css";

const Countries = ({ getCountry }) => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.address.countries);

  const COUNTRIES_ENDPOINT = process.env.REACT_APP_ALL_COUNTRIES_EP;

  const selectedCountry = (event) => {
    getCountry(event.target.value);
  };

  // List of Countries
  useEffect(() => {
    fetch(COUNTRIES_ENDPOINT)
      .then((response) => {
        if (response.status !== 200) {
          dispatch(
            addressStoreActions.selectCountry("Error Fetching Countries")
          );
        }
        return response.json();
      })
      .then((data) => {
        dispatch(
          addressStoreActions.getCountries(
            data.map((country) => country.name.common).sort()
          )
        );
      });
  }, [dispatch, COUNTRIES_ENDPOINT]);

  return (
    <>
      <select onChange={selectedCountry} className={classes.modified_input}>
        {countries.map((country, index) => (
          <option key={index}>{country.toUpperCase()}</option>
        ))}
      </select>
    </>
  );
};

export default Countries;
