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
  amountChosen: number;
  setAmount: Dispatch<SetStateAction<number>>;
}

const OrderDisplayOverView = (props: IProps) => {

  function getTotal(): number {
    var result: number = 0;
    props.currentOrderItems.map((item) => (result = result + item.price));
    return result;
  }
  
  function getQuantity(itemName: String) {
    const quantity = props.currentOrderItems.filter(item => item.itemName === itemName).length;
    return quantity;
  }

  function getQuantityPrice(item: ItemModel) {
    return item.price * getQuantity(item.itemName);
  }

  function displayOrderItems(item: ItemModel, index: number) {
    //if(getQuantity(item.itemName) <= 1){
      return(
      <ListGroupItem key={index}>
        <Row >
          <Col md="auto">{getQuantity(item.itemName)}</Col>
          <Col md={8}>{item.itemName}</Col>
          <Col md="auto">{getQuantityPrice(item)}</Col>
          <Col onClick={() =>  handleDeleteItem(item) }  ><TiDelete color="red"/></Col>
        </Row>
      </ListGroupItem>
      )
    //}
  }

  const handleDeleteItem = (item: ItemModel) => {
    props.setCurrentOrderItems(props.currentOrderItems.filter(orderitem => orderitem.id !== item.id));
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
            <ListGroup className="scrollable-menu">
              {props.currentOrderItems.map((item, index) => (
               displayOrderItems(item, index)
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
