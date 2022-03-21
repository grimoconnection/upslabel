import { barcodeStoreActions } from "../store/barcodeStore";
const BARCODE_ENDPOINT = process.env.REACT_APP_BARCODE_BASE_URL;
const API_KEY = process.env.REACT_APP_BARCODE_API_KEY;

export const getMaxi = (maxicode) => {
  return async (dispatch) => {
    const fetchMaxicode = async () => {
      const response = fetch(
        `${BARCODE_ENDPOINT}/?symbology=maxicode&text=${maxicode}`,
        {
          headers: {
            accept: "image/png",
            apikey: API_KEY,
          },
        }
      );

      const data = await response;
      return data.blob();
    };
    try {
      await fetchMaxicode(maxicode).then((barcodeBlob) => {
        const response = URL.createObjectURL(barcodeBlob);
        dispatch(barcodeStoreActions.setMaxicode(response));
      });
    } catch (err) {}
  };
};

export const getPostal = (postal) => {
  return async (dispatch) => {
    const fetchPostalcode = async () => {
      const response = fetch(
        `${BARCODE_ENDPOINT}/?symbology=code128&text=${postal}`,
        {
          headers: {
            accept: "image/png",
            apikey: API_KEY,
          },
        }
      );

      const data = await response;
      return data.blob();
    };
    try {
      await fetchPostalcode(postal).then((barcodeBlob) => {
        const response = URL.createObjectURL(barcodeBlob);
        dispatch(barcodeStoreActions.setPostalcode(response));
      });
    } catch (err) {}
  };
};

export const getTracking = (tracking) => {
  return async (dispatch) => {
    const fetchTrackingCode = async () => {
      const response = fetch(
        `${BARCODE_ENDPOINT}/?symbology=code128&text=${tracking}`,
        {
          headers: {
            accept: "image/png",
            apikey: API_KEY,
          },
        }
      );

      const data = await response;
      return data.blob();
    };
    try {
      await fetchTrackingCode(tracking).then((barcodeBlob) => {
        const response = URL.createObjectURL(barcodeBlob);
        dispatch(barcodeStoreActions.setTrackingBarcode(response));
      });
    } catch (err) {}
  };
};

export const getReference = (reference) => {
  return async (dispatch) => {
    const fetchReferenceCode = async () => {
      const response = fetch(
        `${BARCODE_ENDPOINT}/?symbology=code128&text=${reference}`,
        {
          headers: {
            accept: "image/png",
            apikey: API_KEY,
          },
        }
      );

      const data = await response;
      return data.blob();
    };
    try {
      await fetchReferenceCode(reference).then((barcodeBlob) => {
        const response = URL.createObjectURL(barcodeBlob);
        dispatch(barcodeStoreActions.setRefBarcode(response));
      });
    } catch (err) {}
  };
};
