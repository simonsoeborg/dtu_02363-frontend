import { Button } from "react-bootstrap";
import { Dispatch, SetStateAction, useState } from "react";
import "../../resources/Css/layout.css";

interface IProps {
  printbutton: boolean;
  setPrintOut: Dispatch<SetStateAction<boolean>>;
}

const PrintBillButton = (props: IProps) => {
  const handleOnKeyClick = (value: boolean) => {
    if (!value) {
      props.setPrintOut(value);
    }
  };

  return (
    <Button
      className="button-PrintBill"
      variant="outline-primary"
      onClick={() => handleOnKeyClick(true)}
    >
      Print Bill
    </Button>
  );
};

export default PrintBillButton;
