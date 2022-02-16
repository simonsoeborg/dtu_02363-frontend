import { Container, ButtonGroup, Button, Row, Col } from "react-bootstrap";
import MenuCategoryButton from "./Partials/MenuCategoryButton";
import { cs } from "../Stores/CategoryStore";
import { is } from "../Stores/ItemStore";
import Loading from "./Partials/Loading";
import DisplayCategories from './Partials/OrderDisplayCategories';

//Hardcoded tableNumber, but should get tableNumber from an onClick function earlier.
const PlaceOrder = ({ tableNumber = "5" }, {reservationTime = "15:00"}) => {
  if (!cs.Categories) {
    return <Loading />;
  } else {
    return (
      <Container fluid>
        <Row>
          <Col md="auto">
            <h1>Table: {tableNumber} </h1>
          </Col>
          <Col md="auto">Reserved at: <b>{reservationTime}</b> to <b>Bo</b></Col>
        </Row>
        <Row>
          <DisplayCategories />
        </Row>
        <Row>

        <Col>
        <ButtonGroup aria-label="Menu items">
              {is.Items.map((item, index) => (
                <Button key={index} variant="secondary">
                  {item.categoryName}
                </Button>
              ))}
        </ButtonGroup>
        </Col>

        </Row>
      </Container>
    );
  }
};

export default PlaceOrder;
