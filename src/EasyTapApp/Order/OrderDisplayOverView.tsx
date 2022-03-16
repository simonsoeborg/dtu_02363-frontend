import {
  Container,
  Col,
  ListGroup,
  Row,
  ListGroupItem,
  Card,
} from "react-bootstrap";
import { Dispatch, SetStateAction } from "react";
import { is } from "../../Stores/ItemStore";
import Loading from "../../Partials/Loading";
import ItemModel from "../../Models/ItemModel";
import OrderModel from "../../Models/OrderModel";

interface IProps {
  currentOrder: ItemModel[];
}

const OrderDisplayOverView = (props: IProps) => {
  function getTotal(): number {
    var result: number = 0;
    props.currentOrder.map((item) => (result = result + item.price));
    return result;
  }

  if (!is.Items) {
    return <Loading />;
  } else {
    return (
      <Container>
        <Card>
          <Card.Header>
            <h2>Order Overview</h2>
          </Card.Header>
          <Card.Body>
            <ListGroup>
              {props.currentOrder.map((item, index) => (
                <ListGroupItem key={index}>
                  <Row>
                    <Col md="auto">1x</Col>
                    <Col md={8}>{item.itemName}</Col>
                    <Col md="auto">{item.price}</Col>
                  </Row>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Card.Body>
          <Card.Footer>Total : {getTotal()}</Card.Footer>
        </Card>
      </Container>
    );
  }
};

export default OrderDisplayOverView;
