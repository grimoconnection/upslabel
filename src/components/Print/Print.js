import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import classes from "./Print.module.css";
import Button from "react-bootstrap/Button";
import { Label } from "../Label/Label";

const Print = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  return (
    <div className={classes.print_container}>
      <div className={classes.label_container}>
        <Label ref={componentRef} />
      </div>

      <div className={classes.button_container}>
        <Button onClick={handlePrint} className={classes.button}>
          Print this out!
        </Button>
      </div>
    </div>
  );
};

export default Print;
