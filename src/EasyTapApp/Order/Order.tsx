
import { Container, Row, Col } from "react-bootstrap";
import DisplayCategories from "./OrderDisplayCategories";
import OrderDisplayItems from "./OrderDisplayItems";
import { useState } from "react";
import OrderDisplayOverView from "./OrderDisplayOverView";

//Hardcoded tableNumber, but should get tableNumber from an onClick function earlier.
const Order = () => {
  return (
    <Container fluid>
      <Row md="auto">
        <h1>Table: 5 </h1>
        Reserved at: <b>15:00</b> for <b>Brian Sandberg</b>
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

export default Order;