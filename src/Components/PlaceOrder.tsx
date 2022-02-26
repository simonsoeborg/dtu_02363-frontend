import { Container, Row, Col } from "react-bootstrap";
import DisplayCategories from "./Partials/OrderDisplayCategories";
import OrderDisplayItems from "./Partials/OrderDisplayItems";
import { useState } from "react";
import OrderDisplayOverView from "./Partials/OrderDisplayOverView";

//Hardcoded tableNumber, but should get tableNumber from an onClick function earlier.
const PlaceOrder = () => {
  const [tableNumber, setTableNumber] = useState("5");
  const [reservationTime, setReservationTime] = useState("15:00");
  const [bookerName, setBookerName] = useState("Brian Sandberg");

  return (
    <Container>
      <Row md="auto">
        <h1>Table: {tableNumber} </h1>
        Reserved at: <b>{reservationTime}</b> for <b>{bookerName}</b>
      </Row>
      <Row>
        <Col md={8}>
          <Row>
            <DisplayCategories />
          </Row>
          <br></br>
          <Row>
            <OrderDisplayItems />
          </Row>
        </Col>
        <Col md={4}>
          <OrderDisplayOverView />
        </Col>
      </Row>
    </Container>
  );
};

export default PlaceOrder;
