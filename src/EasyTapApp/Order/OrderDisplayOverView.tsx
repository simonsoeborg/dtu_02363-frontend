import {
  Container,
  Col,
  ListGroup,
  Row,
  ListGroupItem,
  Card,
  Button
} from "react-bootstrap";
import { useState } from "react";
import { TiDelete } from 'react-icons/ti';
import { Dispatch, SetStateAction } from "react";
import { is } from "../../Stores/ItemStore";
import Loading from "../../Partials/Loading";
import ItemModel from "../../Models/ItemModel";
import OrderModel from "../../Models/OrderModel";

interface IProps {
  currentOrderItems: ItemModel[];
  setCurrentOrderItems: Dispatch<SetStateAction<ItemModel[]>>;
}

const OrderDisplayOverView = (props: IProps) => {

  function getTotal(): number {
    var result: number = 0;
    props.currentOrderItems.map((item) => (result = result + item.price));
    return result;
  }

  const handleDeleteItem = (item: ItemModel) => {
    props.setCurrentOrderItems(props.currentOrderItems.filter(orderitem => orderitem !== item));
  };

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
              {props.currentOrderItems.map((item, index) => (
                <ListGroupItem key={index}>
                  <Row >
                    <Col md="auto">1x</Col>
                    <Col md={8}>{item.itemName}</Col>
                    <Col md="auto">{item.price}</Col>
                    <Col onClick={() =>  handleDeleteItem(item) }  ><TiDelete color="red" /></Col>
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
