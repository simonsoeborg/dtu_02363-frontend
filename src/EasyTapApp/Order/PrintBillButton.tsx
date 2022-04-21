import { Button } from "react-bootstrap";
import { Dispatch, SetStateAction, useState } from "react";
import { FaReceipt, } from "react-icons/fa"
import "../../resources/Css/OrderLayout.css";

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
      className="btn icon-btn azm-social button-PrintBill"
      variant="outline-primary"
      onClick={() => handleOnKeyClick(true)}
    >
      <i className="fa"><FaReceipt ></FaReceipt></i>
      Print Bill
    </Button>
  );
};

export default PrintBillButton;
