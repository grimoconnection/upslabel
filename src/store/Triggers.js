import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { infoStoreActions } from "../../store/infoStore";

const BARCODE_ENDPOINT = process.env.REACT_APP_BARCODE_BASE_URL;
const API_KEY = process.env.REACT_APP_BARCODE_API_KEY;

const info = useSelector((state) => state.info.barcode);
const dispatch = useDispatch();

export const maxicodeImage = () => {
  //Maxicode
  React.useEffect(() => {
    fetch(`${BARCODE_ENDPOINT}/?symbology=maxicode&text=${info.maxicode}`, {
      headers: {
        accept: "image/png",
        apikey: API_KEY,
      },
    })
      .then((response) => {
        if (response.status === 200) {
          return response.blob();
        }
      })
      .then((barcodeBlob) => {
        const response = URL.createObjectURL(barcodeBlob);
        console.log("MaxicodeURL Renewed");
        dispatch(infoStoreActions.setURL({ maxicodeURL: response }));
      });
  }, [info.maxicode]);
};

export const postalcodeImage = () => {
  //Postal Barcode
  

export const trackingImage = () => {
  //Tracking Barcode
  useEffect(() => {
    fetch(`${BARCODE_ENDPOINT}/?symbology=code39&text=${info.tracking}`, {
      headers: {
        accept: "image/png",
        apikey: API_KEY,
      },
    })
      .then((response) => {
        if (response.status === 200) {
          return response.blob();
        }
      })
      .then((barcodeBlob) => {
        const response = URL.createObjectURL(barcodeBlob);
        dispatch(infoStoreActions.setURL({ trackingBarcodeURL: response }));
      });
  }, [info.tracking]);
};
