
import { Container, Row, Col } from "react-bootstrap";
import DisplayCategories from "./OrderDisplayCategories";
import OrderDisplayItems from "./OrderDisplayItems";
import OrderDisplayOverView from "./OrderDisplayOverView";

//Hardcoded tableNumber, but should get tableNumber from an onClick function earlier.
const Order = () => {
  return (
    <Container fluid>
      <Row md="auto">
        <h1>Table: 5 </h1>
      </Row>
      <Row md="auto">
      <p>Reserved at: <b>15:00</b> for <b>Brian Sandberg</b></p>
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
        <Col>
          <Row >
          <OrderDisplayOverView />
          </Row>
          <Row>
          <OrderDisplayOverView />
          </Row>

        </Col>
      </Row>
    </Container>
  );
};

export default Order;